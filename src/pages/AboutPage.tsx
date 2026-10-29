import React from 'react';
import { Link } from 'react-router-dom';
import { useEnquiry } from '../context/EnquiryContext';
import {
  Target,
  Compass,
  Layers,
  Terminal,
  Users,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

export const AboutPage: React.FC = () => {
  const { openEnquiryModal } = useEnquiry();

  return (
    <div className="w-full bg-white text-[#151922] py-12 lg:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
            About 6F IT School
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#626B78] leading-relaxed">
            6F IT School is a technology training institution focused on AWS, DevOps, Agentic AI, and Full Stack
            Development. We bridge the gap between classroom theory and industry production standards.
          </p>
        </motion.div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-8 shadow-2xs hover:border-[#2563EB]/40 transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#E5E9F0] text-[#2563EB] mb-4 shadow-2xs">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[#151922]">Our Mission</h2>
            <p className="mt-3 text-sm text-[#626B78] leading-relaxed">
              Equip aspiring engineers with hands-on, verifiable technical skills through guided cloud labs,
              code review discipline, and audited capstone projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-8 shadow-2xs hover:border-[#2563EB]/40 transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#E5E9F0] text-[#2563EB] mb-4 shadow-2xs">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[#151922]">Our Vision</h2>
            <p className="mt-3 text-sm text-[#626B78] leading-relaxed">
              Be the premier technology training academy recognized for practical curriculum rigor, production-grade
              workloads, and genuine student competence.
            </p>
          </motion.div>
        </div>

        {/* Core Methodology */}
        <div className="border-t border-[#E5E9F0] pt-14 mb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Methodology
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922]">
              The 6F Practical Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xs hover:border-[#2563EB]/40 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F9FC] text-[#2563EB] mb-4">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#151922]">1. Lab-First Practice</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#626B78] leading-relaxed">
                Concepts are immediately applied in authentic terminal and cloud console environments.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xs hover:border-[#2563EB]/40 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F9FC] text-[#2563EB] mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#151922]">2. System Design</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#626B78] leading-relaxed">
                Emphasis on security boundaries, resilience, automated delivery, and scalability tradeoffs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xs hover:border-[#2563EB]/40 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F9FC] text-[#2563EB] mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#151922]">3. Mentor Reviews</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#626B78] leading-relaxed">
                Live code walkthroughs and architectural critique on every student capstone deliverable.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Trainer Standards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-8 sm:p-10 mb-16 shadow-2xs"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Faculty Standards
          </span>
          <h2 className="mt-1 text-2xl font-bold text-[#151922] mb-4">
            Trainer & Mentor Excellence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#151922]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Active industry engineers with production experience</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Dedicated hands-on lab assistance & live debugging</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Peer code reviews and architecture critiques</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Technical interview and portfolio guidance</span>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <div className="text-center max-w-xl mx-auto py-8">
          <h3 className="text-2xl font-bold text-[#151922]">
            Ready to train with 6F IT School?
          </h3>
          <div className="mt-6 flex justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => openEnquiryModal()}
              className="rounded-xl bg-[#2563EB] px-6 py-3 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all"
            >
              Enquire Now
            </motion.button>
            <Link
              to="/courses"
              className="rounded-xl border border-[#E5E9F0] bg-white px-6 py-3 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC] shadow-2xs transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
