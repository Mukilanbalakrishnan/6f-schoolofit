import React, { useRef, useState, useEffect } from 'react';
import { Loader2, VolumeX, AlertCircle } from 'lucide-react';

interface ModalVideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
}

export const ModalVideoPlayer: React.FC<ModalVideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isBuffering, setIsBuffering] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsBuffering(true);
    setPlaybackError(false);

    // Immediate playback trigger with intelligent autoplay policy fallback
    const startPlayback = async () => {
      try {
        video.currentTime = 0;
        await video.play();
        setIsBuffering(false);
        setIsMuted(video.muted);
      } catch (err) {
        // If unmuted autoplay is blocked by browser policy, start playing muted immediately
        // so the video never gets stuck on a frozen poster or spinner
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
          setIsBuffering(false);
        } catch {
          setIsBuffering(false);
        }
      }
    };

    // Start playback immediately on mount
    const rafId = requestAnimationFrame(() => {
      startPlayback();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (video) {
        video.pause();
      }
    };
  }, [videoUrl]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVolumeChange = () => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
    }
  };

  return (
    <div className="relative w-full bg-black rounded-2xl overflow-hidden flex items-center justify-center shadow-inner min-h-[320px] max-h-[62vh] group">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        controls
        playsInline
        preload="auto"
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onCanPlay={() => setIsBuffering(false)}
        onTimeUpdate={() => {
          if (isBuffering) setIsBuffering(false);
        }}
        onVolumeChange={handleVolumeChange}
        onError={() => {
          setPlaybackError(true);
          setIsBuffering(false);
        }}
        className="w-full max-h-[60vh] object-contain rounded-2xl mx-auto"
        aria-label={`Video player for ${title}`}
      />

      {/* Immediate buffering indicator */}
      {isBuffering && !playbackError && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center pointer-events-none transition-opacity z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB]/90 text-white shadow-xl animate-pulse">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
          <span className="mt-2.5 text-xs font-semibold text-white/90 drop-shadow">
            Starting instant stream...
          </span>
        </div>
      )}

      {/* Unmute prompt banner if browser muted autoplay */}
      {isMuted && !isBuffering && !playbackError && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute top-3 right-3 z-20 flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-blue-600 border border-white/30 px-3.5 py-1.5 text-xs font-bold text-white shadow-2xl backdrop-blur-md transition-all cursor-pointer animate-bounce hover:animate-none"
        >
          <VolumeX className="h-3.5 w-3.5 text-amber-300" />
          <span>Tap to Unmute 🔊</span>
        </button>
      )}

      {/* Playback error fallback */}
      {playbackError && (
        <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center text-white z-10">
          <AlertCircle className="h-8 w-8 text-amber-400 mb-2" />
          <p className="text-sm font-bold">Unable to stream video</p>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
          >
            Open in new tab
          </a>
        </div>
      )}
    </div>
  );
};
