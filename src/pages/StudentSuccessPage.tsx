import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SUCCESS_STORIES, VIDEO_TESTIMONIALS } from '../data/storiesData';
import type { VideoTestimonial } from '../types';
import { useEnquiry } from '../context/EnquiryContext';
import { Play, X, FolderGit2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const StudentSuccessPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const { openEnquiryModal } = useEnquiry();

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_TESTIMONIALS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-[#E5E9F0] bg-white p-5 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-video w-full rounded-2xl bg-[#151922] flex items-center justify-center cursor-pointer group hover:ring-2 hover:ring-[#2563EB]/40 transition-all overflow-hidden"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-md group-hover:scale-115 transition-transform">
                      <Play className="h-4 w-4 fill-[#2563EB] ml-0.5" />
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 rounded-full bg-black/80 px-2 py-0.5 text-[10px] font-mono text-white">
                      {video.duration}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">
                      {video.courseTitle}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-[#151922]">
                      {video.studentNameOrCode}
                    </h3>
                    <p className="mt-2 text-xs text-[#626B78] italic line-clamp-2 leading-relaxed">
                      {video.transcriptSnippet}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between text-xs text-[#626B78]">
                  <span>{video.batchOrYear}</span>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="font-bold text-[#2563EB] hover:underline"
                  >
                    Watch Preview
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative w-full max-w-lg rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xl text-left"
              >
                <div className="flex items-start justify-between pb-3 border-b border-[#E5E9F0]">
                  <div>
                    <span className="text-xs font-bold text-[#2563EB]">{activeVideo.courseTitle}</span>
                    <h3 className="text-base font-bold text-[#151922]">{activeVideo.studentNameOrCode}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="rounded-lg p-1.5 text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 aspect-video rounded-2xl bg-[#151922] flex flex-col items-center justify-center p-6 text-center text-white">
                  <Play className="h-8 w-8 text-[#2563EB] mb-2" />
                  <p className="text-xs font-bold">Video Player (Preview Simulation)</p>
                  <span className="mt-2 text-[10px] font-mono text-zinc-400">Duration: {activeVideo.duration}</span>
                </div>

                <div className="mt-4 rounded-xl border border-[#E5E9F0] bg-[#F7F9FC] p-3 text-xs text-[#151922]">
                  <span className="font-bold block mb-1">Transcript Snippet:</span>
                  <p className="italic text-[#626B78] text-[11px] leading-relaxed">{activeVideo.transcriptSnippet}</p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="rounded-xl border border-[#E5E9F0] bg-white px-4 py-2 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC]"
                  >
                    Close Preview
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
