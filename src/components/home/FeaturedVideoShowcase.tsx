import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEnquiry } from '../../context/EnquiryContext';

export const FeaturedVideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);
  const { openEnquiryModal } = useEnquiry();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(141); // ~2:21
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Autoplay with audio on entry, and automatically stop audio when leaving section
  useEffect(() => {
    const video = videoRef.current;
    const target = containerRef.current;
    if (!video || !target) return;

    let inView = false;

    // Helper to attempt unmuted audio playback
    const playWithAudio = () => {
      if (!inView || !video) return;
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch(() => {
            // If browser requires user interaction before unmuting, start muted and unmute on gesture
            video.muted = true;
            setIsMuted(true);
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          });
      }
    };

    // User gesture listener to automatically unmute if browser initially blocked unmuted autoplay
    const handleUserGesture = () => {
      if (inView && video && video.muted) {
        video.muted = false;
        setIsMuted(false);
      }
    };

    window.addEventListener('click', handleUserGesture, { passive: true });
    window.addEventListener('scroll', handleUserGesture, { passive: true });
    window.addEventListener('touchstart', handleUserGesture, { passive: true });
    window.addEventListener('pointerdown', handleUserGesture, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          inView = true;
          setIsHighlighted(true);
          // Play video with audio as soon as section is entered
          playWithAudio();
        } else {
          inView = false;
          setIsHighlighted(false);
          // Automatically turn off audio and pause video when leaving section
          video.pause();
          video.muted = true;
          setIsMuted(true);
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
      window.removeEventListener('click', handleUserGesture);
      window.removeEventListener('scroll', handleUserGesture);
      window.removeEventListener('touchstart', handleUserGesture);
      window.removeEventListener('pointerdown', handleUserGesture);
    };
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Time & progress update
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isNaN(video.duration)) return;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && !isNaN(video.duration)) {
      setDuration(video.duration);
    }
  };

  // Play / Pause toggle
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  // Mute / Unmute toggle
  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Fullscreen toggle
  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const target = playerWrapperRef.current;
    if (!target) return;

    if (!document.fullscreenElement) {
      target.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Scrub bar click
  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = e.currentTarget;
    if (!video || !bar) return;
    const rect = bar.getBoundingClientRect();
    const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = clickPos * video.duration;
    setProgress(clickPos * 100);
  };

  // Replay
  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true));
  };

  // Auto-hide controls on mouse move
  const handleMouseMove = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setControlsVisible(false);
    }, 2800);
  };

  // Format seconds -> M:SS
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section
      id="featured-video"
      ref={containerRef}
      className="relative bg-[#070B14] py-16 lg:py-24 overflow-hidden border-y border-slate-800/80 transition-colors duration-700 text-left"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 px-3.5 py-1 text-xs font-bold text-blue-400 mb-3 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Founder Keynote & Vision</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Who Is 6F School of IT Engineered For?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Pavan, Founder & CEO, breaks down our lab-first philosophy, curriculum journey, and the exact mindset needed to switch into high-impact cloud careers.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all cursor-pointer"
            >
              <span>Enquire for Next Cohort</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Video Theater Box with Dynamic Highlight Halo */}
        <div className="relative mx-auto max-w-5xl">
          {/* Highlight Aura Glow: Pulses brightly when in-view */}
          <div
            className={`absolute -inset-1 sm:-inset-2 rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 blur-xl transition-all duration-700 pointer-events-none ${
              isHighlighted ? 'opacity-80 scale-100' : 'opacity-20 scale-98'
            }`}
          />

          {/* Player Wrapper Container */}
          <div
            ref={playerWrapperRef}
            onMouseMove={handleMouseMove}
            className={`relative rounded-3xl bg-slate-950 overflow-hidden shadow-2xl transition-all duration-500 border ${
              isHighlighted
                ? 'border-cyan-400/60 shadow-[0_0_60px_-15px_rgba(56,189,248,0.35)]'
                : 'border-slate-800'
            }`}
          >
            {/* The Video Element */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center cursor-pointer select-none">
              <video
                ref={videoRef}
                src="/Advertisement.mp4"
                poster="/advertisement-poster.jpg"
                playsInline
                preload="metadata"
                muted={isMuted}
                loop
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
                className="w-full h-full object-contain bg-black"
              />

              {/* Top Banner Overlay inside Video */}
              <div
                className={`absolute top-0 left-0 right-0 p-2 sm:p-5 flex items-center justify-between gap-2 z-20 pointer-events-auto transition-opacity duration-300 ${
                  controlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Left Live Badge */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/75 backdrop-blur-md px-2.5 sm:px-3.5 py-1 text-[10px] sm:text-[11px] font-semibold text-white border border-white/10 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Pavan • Founder & CEO</span>
                  <span className="hidden sm:inline text-slate-400">|</span>
                  <span className="hidden sm:inline text-cyan-300 font-mono text-[10px]">1080p Full HD</span>
                </div>

                {/* Right Unmute Highlight Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold transition-all shadow-xl cursor-pointer ${
                    isMuted
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 ring-2 ring-cyan-300/50 animate-pulse'
                      : 'bg-black/75 hover:bg-black/90 text-slate-200 border border-white/10'
                  }`}
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>Unmute 🔊</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                      <span>Audio On</span>
                    </>
                  )}
                </button>
              </div>

              {/* Center Play Button Overlay (when paused) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-10 cursor-pointer"
                >
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-18 w-18 sm:h-22 sm:w-22 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-500/50 ring-4 ring-white/30 cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current ml-1 text-white" />
                  </motion.button>
                </div>
              )}

              {/* Bottom Custom Controls Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/95 via-black/75 to-transparent px-3 sm:px-6 pt-6 sm:pt-8 pb-2 sm:pb-3 transition-opacity duration-300 ${
                  controlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Scrub Progress Bar */}
                <div
                  onClick={handleScrub}
                  className="group/scrub relative h-2 w-full cursor-pointer rounded-full bg-white/20 mb-3 hover:h-2.5 transition-all"
                  role="slider"
                  aria-label="Video progress slider"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {/* Buffer / loaded bar */}
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm"
                    style={{ width: `${progress}%` }}
                  />
                  {/* Thumb indicator */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-md opacity-0 group-hover/scrub:opacity-100 transition-opacity"
                    style={{ left: `calc(${progress}% - 7px)` }}
                  />
                </div>

                {/* Controls Action Row */}
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    {/* Play/Pause */}
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 fill-current" />
                      ) : (
                        <Play className="h-4 w-4 fill-current" />
                      )}
                    </button>

                    {/* Replay button */}
                    <button
                      type="button"
                      onClick={handleReplay}
                      className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      title="Replay from start"
                      aria-label="Replay from start"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>

                    {/* Volume Mute Toggle */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-emerald-400" />
                      )}
                    </button>

                    {/* Time Counter */}
                    <span className="font-mono text-[11px] text-slate-300 select-none">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Highlight Status Pill */}
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-cyan-300 font-mono bg-cyan-950/60 border border-cyan-500/30 rounded-full px-2.5 py-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Autoplay On View
                    </span>

                    {/* Fullscreen Button */}
                    <button
                      type="button"
                      onClick={toggleFullscreen}
                      className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
                      aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                      title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    >
                      {isFullscreen ? (
                        <Minimize className="h-4 w-4" />
                      ) : (
                        <Maximize className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
