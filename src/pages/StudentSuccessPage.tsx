import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SUCCESS_STORIES, VIDEO_TESTIMONIALS } from '../data/storiesData';
import type { VideoTestimonial } from '../types';
import { useEnquiry } from '../context/EnquiryContext';
import { useScrollLock } from '../hooks/useScrollLock';
import { Play, X, FolderGit2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ModalVideoPlayer } from '../components/common/ModalVideoPlayer';

export const StudentSuccessPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const { openEnquiryModal } = useEnquiry();

  // Robust multi-browser background scroll lock when video modal is open
  useScrollLock(Boolean(activeVideo));

  return (
    <div className="w-full bg-white text-[#151922] py-12 lg:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Outcomes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
            Student Success Stories
          </h1>
          <p className="mt-3 text-base text-[#626B78] leading-relaxed">
            See how learners transition into cloud, DevOps, and software engineering through guided lab practice.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#151922] mb-6">
            Student Competency Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUCCESS_STORIES.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-3xl border border-[#E5E9F0] bg-white p-7 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E9F0] mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#151922] text-white font-bold text-sm shadow-2xs">
                        {story.studentInitials}
                      </div>
                      <div>
                        <span className="text-[10px] text-[#626B78] font-semibold block">Previous:</span>
                        <strong className="text-xs sm:text-sm text-[#151922]">{story.background}</strong>
                      </div>
                    </div>
                    <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-bold text-[#2563EB]">
                      {story.courseCompleted}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#151922] leading-snug">
                    {story.coreAchievement}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#626B78] leading-relaxed">
                    {story.summary}
                  </p>

                  <div className="mt-4 rounded-2xl border border-[#E5E9F0] bg-[#F7F9FC] p-3.5 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#151922] mb-1">
                      <FolderGit2 className="h-3.5 w-3.5 text-[#2563EB]" />
                      <span>Capstone Delivered:</span>
                    </div>
                    <span className="text-[#626B78] italic text-[11px] sm:text-xs">{story.projectCompleted}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#E5E9F0] flex flex-wrap gap-1">
                  {story.keySkillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#F7F9FC] border border-[#E5E9F0] px-2.5 py-1 text-[10px] font-bold text-[#151922]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="pt-8 border-t border-[#E5E9F0]">
          <h2 className="text-2xl font-bold text-[#151922] mb-6">
            Video Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEO_TESTIMONIALS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-[#E5E9F0] bg-white p-5 sm:p-6 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all flex flex-col justify-between text-left"
              >
                <div>
                  {/* Thumbnail box */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden cursor-pointer group/thumb shadow-xs mb-4 bg-slate-900"
                  >
                    {video.thumbnailUrl ? (
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.studentNameOrCode} review`}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#151922]" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

                    <div className="relative z-10 p-3 flex items-center justify-between text-white text-[11px] font-semibold">
                      <span className="rounded-md bg-black/60 px-2 py-0.5 backdrop-blur-md font-mono text-[10px] border border-white/10">
                        {video.duration}
                      </span>
                      {video.roleBadge && (
                        <span className="rounded-md bg-[#2563EB] px-2.5 py-0.5 text-[10px] font-bold shadow-xs">
                          {video.roleBadge}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideo(video);
                      }}
                      className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#2563EB] shadow-2xl transition-all duration-300 group-hover/thumb:scale-115 group-hover/thumb:bg-white group-hover/thumb:ring-4 group-hover/thumb:ring-blue-500/40 cursor-pointer z-10"
                      aria-label={`Play testimonial from ${video.studentNameOrCode}`}
                    >
                      <Play className="h-6 w-6 fill-current ml-0.5 text-[#2563EB]" />
                    </button>

                    <div className="relative z-10 p-3 mt-auto">
                      <div className="text-white text-xs font-bold truncate drop-shadow-sm">
                        {video.courseTitle}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-[#151922] tracking-tight">
                        {video.studentNameOrCode}
                      </h3>
                      {video.roleBadge && (
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-full px-2 py-0.5 shrink-0">
                          {video.roleBadge}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#626B78] block">{video.batchOrYear}</span>

                    <p className="text-xs text-[#626B78] italic line-clamp-3 leading-relaxed pt-1">
                      "{video.transcriptSnippet}"
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E9F0]">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-[#E5E9F0] bg-[#F7F9FC] py-2.5 text-xs font-bold text-[#151922] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all cursor-pointer shadow-2xs"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch Video Story</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto overscroll-contain"
              onWheel={(e) => {
                if (e.target === e.currentTarget) e.preventDefault();
              }}
              onTouchMove={(e) => {
                if (e.target === e.currentTarget) e.preventDefault();
              }}
            >
              <div className="fixed inset-0" onClick={() => setActiveVideo(null)} aria-hidden="true" />
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative z-10 w-full max-w-lg max-h-[92vh] flex flex-col rounded-3xl border border-slate-700/60 bg-[#0F172A] p-4 sm:p-6 shadow-2xl text-left overflow-y-auto text-white my-auto"
              >
                {/* Header */}
                <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-400">{activeVideo.courseTitle}</span>
                      {activeVideo.roleBadge && (
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5">
                          {activeVideo.roleBadge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{activeVideo.studentNameOrCode}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close video"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Real Video Player */}
                <div className="mt-4">
                  {activeVideo.videoUrl ? (
                    <ModalVideoPlayer
                      key={activeVideo.id}
                      videoUrl={activeVideo.videoUrl}
                      posterUrl={activeVideo.thumbnailUrl}
                      title={activeVideo.studentNameOrCode}
                    />
                  ) : (
                    <div className="aspect-video w-full rounded-2xl bg-black flex flex-col items-center justify-center p-6 text-center text-white">
                      <Play className="h-8 w-8 text-[#2563EB] mb-2 fill-current" />
                      <p className="text-xs font-bold">Video Player</p>
                      <span className="mt-2 text-[10px] font-mono text-zinc-400">Duration: {activeVideo.duration}</span>
                    </div>
                  )}
                </div>

                {/* Transcript Snippet */}
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-200">
                  <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider block mb-1">
                    Alumni Reflection:
                  </span>
                  <p className="italic text-slate-300 text-xs leading-relaxed">
                    "{activeVideo.transcriptSnippet}"
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between pt-1">
                  <span className="text-[11px] font-mono text-slate-400">
                    Duration: {activeVideo.duration}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-[#E5E9F0] bg-gradient-to-r from-[#F7F9FC] to-white p-8 text-center shadow-sm"
        >
          <h3 className="text-xl font-bold text-[#151922]">
            Ready to build verified portfolio projects?
          </h3>
          <div className="mt-5 flex justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => openEnquiryModal()}
              className="rounded-xl bg-[#2563EB] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all"
            >
              Enquire Now
            </motion.button>
            <Link
              to="/courses"
              className="rounded-xl border border-[#E5E9F0] bg-white px-6 py-2.5 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC] shadow-2xs transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
