import React, { useState } from 'react';
import { useEnquiry } from '../context/EnquiryContext';
import { COURSES } from '../data/coursesData';
import { STUDENT_PROJECTS } from '../data/projectsData';
import { SUCCESS_STORIES, VIDEO_TESTIMONIALS } from '../data/storiesData';
import { GLOBAL_FAQS } from '../data/faqsData';
import type { VideoTestimonial, Course, SuccessStory, StudentProject } from '../types';
import { CourseCard } from '../components/courses/CourseCard';
import { SyllabusModal } from '../components/courses/SyllabusModal';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { TechnologyCarousel } from '../components/technologies/TechnologyCarousel';
import { FlightPathJourney } from '../components/home/FlightPathJourney';
import { WhyChooseUsRoadmap } from '../components/home/WhyChooseUsRoadmap';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDetailModal } from '../components/projects/ProjectDetailModal';
import heroBg from '../assets/hero-bg.jpg';
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  X,
  Layers,
  FolderGit2,
  Sparkles,
  CheckCircle2,
  Cpu,
  Zap,
  Target,
  Compass,
  Mail,
  Clock,
  ChevronDown,
  HelpCircle,
  Award,
  Star,
  Cloud,
  GitMerge,
  Bot,
  MessageCircle,
  CheckCheck,
  ZoomIn,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const HomePage: React.FC = () => {
  const { openEnquiryModal } = useEnquiry();

  // Student projects filter state
  const projectCategories = [
    'All',
    'AI-Powered AWS DevOps',
    'AI-Powered Azure DevOps',
    'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
  ];
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('All');

  // Video modal state
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  // Active WhatsApp Screenshot Lightbox Modal
  const [activeScreenshot, setActiveScreenshot] = useState<SuccessStory | null>(null);

  // In-page Syllabus modal state
  const [selectedSyllabus, setSelectedSyllabus] = useState<Course | null>(null);

  // Active Project Detail Modal state
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);

  // FAQ open item state for Contact section
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Smooth scroll to in-page section
  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };


  const filteredProjects =
    selectedProjectCategory === 'All'
      ? STUDENT_PROJECTS
      : STUDENT_PROJECTS.filter((p) => p.category === selectedProjectCategory);

  return (
    <div className="w-full bg-white text-[#151922] overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION (#home) - Modern, Centered, Structured & Richly Animated
         ========================================================================= */}
      <section
        id="home"
        className="relative border-b border-[#E5E9F0] pt-14 pb-18 lg:pt-20 lg:pb-24 overflow-hidden text-center"
      >
        {/* Generated Ultra-Modern Cloud & AI Tech Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={heroBg}
            alt="6F IT School Cloud & AI Infrastructure Background"
            className="w-full h-full object-cover object-center opacity-85"
          />
          {/* Subtle gradient wash: allows glowing network paths to shine while blending smoothly into sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/15 to-white/90" />
        </div>

        {/* Subtle technical background grid mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />

        {/* Ambient floating animated gradient glow blobs */}
        <motion.div
          animate={{
            x: [-35, 35, -35],
            y: [-20, 20, -20],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 left-1/4 w-[480px] h-[320px] bg-gradient-to-br from-blue-300/30 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"
        />
        <motion.div
          animate={{
            x: [30, -30, 30],
            y: [20, -20, 20],
            scale: [1.15, 0.95, 1.15],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-20 w-[420px] h-[380px] bg-gradient-to-bl from-indigo-200/25 via-blue-200/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"
        />
        <motion.div
          animate={{
            scale: [0.95, 1.1, 0.95],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[650px] h-64 bg-gradient-to-r from-blue-100/40 via-teal-100/30 to-indigo-100/40 rounded-full blur-3xl pointer-events-none z-0"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Top Eyebrow Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-gradient-to-r from-[#2563EB]/8 via-blue-500/5 to-[#2563EB]/8 px-4 py-1.5 text-xs font-bold text-[#2563EB] mb-6 shadow-xs backdrop-blur-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
            </span>
            <span>6F IT School • Technology Academy</span>
            <span className="text-[#E5E9F0]">|</span>
            <span className="text-[#626B78] font-semibold flex items-center gap-1">
              2026 Practical Cohorts
              <Sparkles className="h-3 w-3 text-amber-500" />
            </span>
          </motion.div>

          {/* Master Headline with Gradient Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#151922] leading-[1.1]"
          >
            Learn Future-Ready Technologies.{' '}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#0284C7] bg-clip-text text-transparent">
              Build Real-World Skills.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg lg:text-xl text-[#626B78] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Explore AI-Powered AWS DevOps, Azure DevOps, and AIOps through structured guided labs, verified architectural code reviews, and production capstone deployments.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <button
                type="button"
                onClick={() => scrollTo('courses')}
                className="inline-flex items-center justify-center rounded-2xl bg-[#2563EB] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center justify-center rounded-2xl border border-[#E5E9F0] bg-white px-8 py-3.5 text-sm font-semibold text-[#151922] hover:bg-[#F7F9FC] hover:border-[#CBD5E1] shadow-2xs transition-all cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="ml-1.5 h-4 w-4 text-[#626B78]" />
              </button>
            </motion.div>
          </motion.div>

          {/* Trust strip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-xs text-[#626B78] font-medium"
          >
            Zero passive slide-decks • 100% hands-on cloud console & terminal execution
          </motion.p>

          {/* 3 Structured Flagship Tracks Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left"
          >
            {/* Track 1: AI-Powered AWS DevOps */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => {
                const c = COURSES.find((item) => item.slug === 'ai-powered-aws-devops');
                if (c) setSelectedSyllabus(c);
              }}
              className="group relative rounded-3xl border border-[#E5E9F0] bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB]/0 to-transparent group-hover:via-[#2563EB] transition-all duration-300" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] border border-blue-100 group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-2xs">
                  <Cloud className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold text-[#626B78] bg-[#F7F9FC] border border-[#E5E9F0] px-2 py-0.5 rounded-md">
                  Core Track
                </span>
              </div>
              <h3 className="text-base font-bold text-[#151922] group-hover:text-[#2563EB] transition-colors">
                AI-Powered AWS DevOps
              </h3>
              <p className="mt-1.5 text-xs text-[#626B78] leading-relaxed">
                AWS architecture, Amazon Q Developer, Kubernetes EKS, Terraform IaC, and automated GitHub Actions.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between text-[11px] font-bold text-[#2563EB]">
                <span>Inspect Syllabus Outline</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* Track 2: AI-Powered Azure DevOps */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => {
                const c = COURSES.find((item) => item.slug === 'ai-powered-azure-devops');
                if (c) setSelectedSyllabus(c);
              }}
              className="group relative rounded-3xl border border-[#E5E9F0] bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500 transition-all duration-300" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-2xs">
                  <GitMerge className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold text-[#626B78] bg-[#F7F9FC] border border-[#E5E9F0] px-2 py-0.5 rounded-md">
                  Core Track
                </span>
              </div>
              <h3 className="text-base font-bold text-[#151922] group-hover:text-emerald-600 transition-colors">
                AI-Powered Azure DevOps
              </h3>
              <p className="mt-1.5 text-xs text-[#626B78] leading-relaxed">
                Azure VNets & AKS, GitHub Copilot integration, multi-stage Azure Pipelines, and Terraform/Bicep IaC.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between text-[11px] font-bold text-emerald-600">
                <span>Inspect Syllabus Outline</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* Track 3: AI-Powered AIOps (Artificial Intelligence for IT Operations) */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => {
                const c = COURSES.find((item) => item.slug === 'ai-powered-aiops');
                if (c) setSelectedSyllabus(c);
              }}
              className="group relative rounded-3xl border border-[#E5E9F0] bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500 transition-all duration-300" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-2xs">
                  <Bot className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold text-[#626B78] bg-[#F7F9FC] border border-[#E5E9F0] px-2 py-0.5 rounded-md">
                  Core Track
                </span>
              </div>
              <h3 className="text-base font-bold text-[#151922] group-hover:text-indigo-600 transition-colors">
                AI-Powered AIOps (Artificial Intelligence for IT Operations)
              </h3>
              <p className="mt-1.5 text-xs text-[#626B78] leading-relaxed">
                OpenTelemetry pipelines, ML metric anomaly detection, LangGraph triage agents, and self-healing systems.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between text-[11px] font-bold text-indigo-600">
                <span>Inspect Syllabus Outline</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </motion.div>


        </div>
      </section>

      {/* =========================================================================
          2. COURSES SECTION (#courses)
         ========================================================================= */}
      <section id="courses" className="relative border-b border-[#E5E9F0] bg-[#F7F9FC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 text-left"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3 py-0.5 text-xs font-bold text-[#2563EB] mb-2">
                <Zap className="h-3.5 w-3.5" />
                <span>Featured Curriculum</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#151922]">
                Explore Our Technology Programs
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#626B78] max-w-xl">
                Structured, lab-driven learning paths engineered around current industry standards.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] bg-white border border-[#E5E9F0] px-4 py-2 rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <span>Request Curriculum Outline</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          {/* 3 Active Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <CourseCard
                  course={course}
                  onViewSyllabus={(c) => setSelectedSyllabus(c)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE 6F IT SCHOOL (#why-us)
         ========================================================================= */}
      <section id="why-us" className="relative border-b border-[#E5E9F0] bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-2xl mb-12"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3 py-0.5 text-xs font-bold text-[#2563EB] mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Educational Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#151922]">
              Why Choose 6F IT School?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#626B78] leading-relaxed">
              We teach authentic engineering workflows, cloud infrastructure, and software design.
            </p>
          </motion.div>

          {/* 6-Stage Engineering Progression Roadmap */}
          <WhyChooseUsRoadmap />
        </div>
      </section>

      {/* =========================================================================
          4. LEARNING JOURNEY (#journey) - Flight Path Roadmap Matching Reference
         ========================================================================= */}
      <section id="journey" className="relative border-b border-[#E5E9F0] bg-white py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-3xl mb-10"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-2.5">
              <Compass className="h-3.5 w-3.5" />
              <span>HOW WE TEACH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#151922]">
              A Structured Path from Learning to Application
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#626B78] leading-relaxed">
              We focus on developing both technical capability and the confidence to apply skills in practical scenarios.
            </p>
          </motion.div>

          {/* Interactive Curved Flight Path Roadmap with 6F Methodology */}
          <FlightPathJourney />
        </div>
      </section>

      {/* =========================================================================
          5. TECHNOLOGY SHOWCASE (#technologies) - Exact Carousel Matching Reference
         ========================================================================= */}
      <section id="technologies" className="relative border-b border-[#E5E9F0] bg-white py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-3">
              <Cpu className="h-3.5 w-3.5" />
              <span>Technology Stack Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
              Technologies Used in Our Programs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#626B78] leading-relaxed max-w-xl mx-auto">
              Master the exact industry-standard cloud platforms, container runtimes, and AI DevOps toolchains taught across our 3 flagship courses.
            </p>
          </motion.div>

          {/* Interactive Technology Carousel with 3D Reflection */}
          <TechnologyCarousel />
        </div>
      </section>

      {/* =========================================================================
          6. STUDENT PROJECTS SHOWCASE (#projects)
         ========================================================================= */}
      <section id="projects" className="relative border-b border-[#E5E9F0] bg-[#F7F9FC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 text-left"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3 py-0.5 text-xs font-bold text-[#2563EB] mb-2">
                <FolderGit2 className="h-3.5 w-3.5" />
                <span>Capstone Deliverables</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#151922]">
                Student Projects Showcase
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#626B78] max-w-xl">
                Every graduate builds verified, production-grade cloud architectures, GitOps pipelines, and multi-agent workflows.
              </p>
            </div>
          </motion.div>

          {/* Project Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                onClick={() => setSelectedProjectCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedProjectCategory === cat
                    ? 'bg-[#151922] text-white shadow-xs'
                    : 'bg-white text-[#626B78] hover:bg-[#E5E9F0]/80 hover:text-[#151922] border border-[#E5E9F0]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid - Streamlined, Attractive Cards with Quick Inspect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <ProjectCard
                  project={project}
                  onInspect={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. STUDENT SUCCESS & OUTCOMES (#student-success)
         ========================================================================= */}
      <section id="student-success" className="relative border-b border-[#E5E9F0] bg-white py-16 lg:py-24 overflow-hidden">
        {/* Ambient animated floating gradient glow blobs */}
        <motion.div
          animate={{
            x: [-25, 25, -25],
            y: [-15, 15, -15],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-16 -left-16 w-80 h-80 bg-blue-200/35 rounded-full blur-3xl pointer-events-none -z-10"
        />
        <motion.div
          animate={{
            x: [25, -25, 25],
            y: [15, -15, 15],
            scale: [1.15, 0.95, 1.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-16 -right-16 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10"
        />
        <motion.div
          animate={{
            scale: [0.95, 1.1, 0.95],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-60 bg-gradient-to-r from-blue-100/30 via-indigo-100/30 to-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Header matching reference design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Student Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
              Real Student Transformations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#626B78] leading-relaxed max-w-lg mx-auto">
              See how practicing learners completed guided cloud labs, deployed production capstones, and transitioned into engineering roles.
            </p>
          </motion.div>

          {/* 4 Compact Animated Blob Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 xl:gap-6 pt-10 pb-12">
            {SUCCESS_STORIES.slice(0, 4).map((story, idx) => {
              // Vibrant gradients for the 4 animated blobs
              const bgGradients = [
                'bg-gradient-to-br from-[#0284C7] to-[#0369A1] shadow-blue-500/25',
                'bg-gradient-to-br from-[#10B981] to-[#059669] shadow-emerald-500/25',
                'bg-gradient-to-br from-[#0D9488] to-[#0F766E] shadow-teal-500/25',
                'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] shadow-indigo-500/25',
              ];

              const bgClass = bgGradients[idx % bgGradients.length];

              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative flex flex-col items-center pt-8"
                >
                  {/* Animated Morphing Blob Background Shape */}
                  <motion.div
                    animate={{
                      rotate: idx % 2 === 0 ? [-6, 3, -6] : [6, -3, 6],
                      scale: [1, 1.03, 0.98, 1],
                      borderRadius: [
                        '28px 18px 32px 16px',
                        '18px 32px 16px 28px',
                        '32px 16px 28px 18px',
                        '28px 18px 32px 16px',
                      ],
                    }}
                    transition={{
                      duration: 5.5 + idx * 0.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`absolute inset-0 ${bgClass} shadow-lg opacity-95 transition-all pointer-events-none`}
                  />

                  {/* Front White Card - Dedicated WhatsApp Screenshot Showcase */}
                  <div className="relative z-10 w-full rounded-[24px] sm:rounded-[26px] bg-white p-4.5 sm:p-5 text-left shadow-xl shadow-slate-200/80 border border-slate-100 flex flex-col justify-between min-h-[420px] sm:min-h-[430px]">
                    <div>
                      {/* Top Header: WhatsApp Green Badge & Student Name */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 shadow-2xs">
                          <MessageCircle className="h-3 w-3 text-emerald-600 fill-emerald-600" />
                          <span>WhatsApp Chat</span>
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {story.chatTime?.split(',')[0] || 'Verified'}
                        </span>
                      </div>

                      <div className="mb-3">
                        <h3 className="text-base font-extrabold text-[#151922] tracking-tight">
                          {story.name}
                        </h3>
                        <p className="text-[11px] font-semibold text-emerald-700">
                          {story.placementOffer}
                        </p>
                      </div>

                      {/* WhatsApp Screenshot Container with Zoom on Click */}
                      <div
                        onClick={() => setActiveScreenshot(story)}
                        className="group/screenshot relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm cursor-pointer transition-all duration-200 hover:border-emerald-500 hover:shadow-md"
                      >
                        {story.whatsappScreenshotUrl ? (
                          <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                            <img
                              src={story.whatsappScreenshotUrl}
                              alt={`WhatsApp feedback from ${story.name}`}
                              className="h-full w-full object-cover group-hover/screenshot:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          /* Authentic WhatsApp Chat Screenshot Mockup */
                          <div className="relative w-full rounded-2xl overflow-hidden bg-[#ECE5DD] border border-slate-200/60 flex flex-col justify-between min-h-[210px] sm:min-h-[220px]">
                            {/* WhatsApp Chat App Bar */}
                            <div className="bg-[#075E54] px-3 py-2 text-white flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                                  {story.studentInitials}
                                </div>
                                <div>
                                  <span className="text-xs font-bold text-white block leading-tight">
                                    {story.name}
                                  </span>
                                  <span className="text-[9px] text-emerald-200 block leading-none">
                                    online
                                  </span>
                                </div>
                              </div>
                              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                            </div>

                            {/* WhatsApp Message Bubble Area */}
                            <div className="p-3 space-y-2 flex-1 flex flex-col justify-center">
                              {/* Date pill */}
                              <div className="text-center">
                                <span className="rounded-md bg-white/70 px-2 py-0.5 text-[9px] font-semibold text-slate-500 uppercase tracking-wide shadow-2xs">
                                  Today
                                </span>
                              </div>

                              {/* Student Incoming WhatsApp Bubble */}
                              <div className="relative max-w-[92%] ml-auto bg-[#D9FDD3] p-2.5 rounded-xl rounded-tr-xs shadow-2xs border border-emerald-100">
                                <p className="text-[11px] text-[#111B21] leading-relaxed font-normal">
                                  {story.chatSnippet}
                                </p>
                                <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-[#667781]">
                                  <span>{story.chatTime?.split(',')[1] || '11:42 AM'}</span>
                                  <CheckCheck className="h-3 w-3 text-[#53BDEB]" />
                                </div>
                              </div>
                            </div>

                            {/* Verification Footer Bar in Screenshot */}
                            <div className="bg-white/80 backdrop-blur-xs px-3 py-1.5 border-t border-slate-200/50 flex items-center justify-between text-[10px] text-slate-600 font-medium">
                              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                                <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                                Verified Offer
                              </span>
                              <span className="text-[9px] font-mono text-slate-400">
                                6F IT School
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Hover Overlay: Click to View Full Screenshot */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-2xs">
                          <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-lg">
                            <ZoomIn className="h-3.5 w-3.5 text-emerald-600" />
                            <span>View Full Screenshot</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Course Completed & Syllabus Link */}
                    <div className="mt-3 pt-3 border-t border-[#E5E9F0]/80 w-full flex flex-col items-center gap-1.5 text-center">
                      <span className="rounded-full bg-[#F7F9FC] border border-[#E5E9F0] px-2.5 py-0.5 text-[10px] font-bold text-[#151922] truncate max-w-full">
                        {story.courseCompleted}
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          const course = COURSES.find((c) => c.slug === story.courseSlug);
                          if (course) setSelectedSyllabus(course);
                        }}
                        className="text-[10px] sm:text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                      >
                        View Syllabus &rarr;
                      </button>
                    </div>

                    {/* Bottom Floating Golden Star Badge */}
                    <div className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-4 w-4 sm:h-4.5 sm:w-4.5 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* =========================================================================
              Alumni Video Spotlights (Integrated Direct Strip)
             ========================================================================= */}
          <div className="mt-14 pt-12 border-t border-[#E5E9F0]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-center max-w-xl mx-auto mb-10"
            >
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3 py-0.5 text-xs font-bold text-[#2563EB] mb-2">
                <Play className="h-3 w-3 fill-current" />
                <span>Alumni Video Spotlights</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#151922] tracking-tight">
                Hear Directly From Our Alumni
              </h3>
              <p className="text-xs sm:text-sm text-[#626B78] mt-1">
                Authentic reflections on lab intensity, mentor code reviews, and capstone evaluations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {VIDEO_TESTIMONIALS.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail box with play overlay */}
                    <div className="relative aspect-video rounded-2xl bg-gradient-to-tr from-[#151922] to-[#334155] p-4 flex flex-col justify-between overflow-hidden shadow-xs mb-4">
                      <div className="flex items-center justify-between text-white text-[11px] font-semibold">
                        <span className="rounded bg-black/40 px-2 py-0.5 backdrop-blur-xs font-mono">
                          {video.duration}
                        </span>
                        <span className="rounded bg-[#2563EB] px-2 py-0.5 text-[10px] font-bold">
                          Lab Spotlight
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className="self-center flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-lg hover:scale-110 transition-transform cursor-pointer"
                        aria-label={`Play testimonial from ${video.studentNameOrCode}`}
                      >
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </button>

                      <div className="text-white text-xs font-bold truncate">
                        {video.courseTitle}
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-[#151922]">
                      {video.studentNameOrCode}
                    </h4>
                    <span className="text-[11px] text-[#626B78] block mb-2">{video.batchOrYear}</span>

                    <p className="text-xs text-[#626B78] italic line-clamp-3 leading-relaxed">
                      "{video.transcriptSnippet}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E9F0]">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="w-full rounded-xl border border-[#E5E9F0] bg-[#F7F9FC] py-2 text-xs font-bold text-[#151922] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors cursor-pointer"
                    >
                      Watch Story Preview
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. ABOUT US SECTION (#about) - Exact Content Matching Specification
         ========================================================================= */}
      <section id="about" className="relative border-b border-[#E5E9F0] bg-[#F7F9FC] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Technology Education with a Career Focus</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
              About 6F School of IT
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#626B78] leading-relaxed">
              6F School of IT is a technology-focused training academy helping IT professionals strengthen their skills and prepare for the next stage of their careers.
            </p>
          </motion.div>

          {/* 3 Core Pillars: Mission, Vision, Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-7 shadow-2xs hover:border-[#2563EB]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-[#2563EB] mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                  Core Directive
                </span>
                <h3 className="text-xl font-extrabold text-[#151922] mt-2 mb-3">Our Mission</h3>
                <p className="text-xs sm:text-sm text-[#626B78] leading-relaxed">
                  To make quality technology education practical, accessible, and career-focused—building the skills, mindset, and confidence needed to succeed.
                </p>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: 0.08 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-7 shadow-2xs hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 mb-4">
                  <Compass className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                  Long-Term Horizon
                </span>
                <h3 className="text-xl font-extrabold text-[#151922] mt-2 mb-3">Our Vision</h3>
                <p className="text-xs sm:text-sm text-[#626B78] leading-relaxed">
                  To become a trusted learning partner for IT professionals throughout their careers, helping them adapt, grow, and succeed as technology evolves.
                </p>
              </div>
            </motion.div>

            {/* Our Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: 0.16 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-7 shadow-2xs hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 mb-4">
                  <Layers className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  Why We Exist
                </span>
                <h3 className="text-xl font-extrabold text-[#151922] mt-2 mb-3">Our Purpose</h3>
                <p className="text-xs sm:text-sm text-[#626B78] leading-relaxed">
                  Bridge the gap between theoretical knowledge and practical engineering skills through structured learning, hands-on labs, projects, and interview preparation.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Highlight Banner: Our Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#2563EB]/30 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 p-8 sm:p-10 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-md shadow-blue-500/20">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] mb-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Our Promise</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#151922] tracking-tight">
                    Make you employable for your entire career.
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 text-xs font-bold shadow-md shadow-blue-500/15 transition-all cursor-pointer shrink-0"
              >
                <span>Talk with an Advisor</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          9. CONTACT US & ENQUIRY (#contact)
         ========================================================================= */}
      <section id="contact" className="relative border-b border-[#E5E9F0] bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3 py-0.5 text-xs font-bold text-[#2563EB] mb-2">
              <Mail className="h-3.5 w-3.5" />
              <span>Admissions Desk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#151922]">
              Get in Touch & Enquire
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#626B78] leading-relaxed">
              Have questions regarding curriculum tracks, lab environments, or batch schedules? Send us an enquiry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7 rounded-3xl border border-[#E5E9F0] bg-white p-7 sm:p-9 shadow-lg shadow-blue-500/5"
            >
              <h3 className="text-xl font-bold text-[#151922] mb-1">Course Enquiry</h3>
              <p className="text-xs text-[#626B78] mb-6">
                Complete the fields below to receive program outlines, lab access details, and batch schedules.
              </p>
              <EnquiryForm />
            </motion.div>

            {/* Right: Admissions Details & FAQ Accordions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Admissions Info Card */}
              <div className="rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-7 shadow-2xs">
                <h4 className="text-base font-bold text-[#151922] mb-4">
                  Admissions Helpline
                </h4>
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151922]">Email Inquiries</strong>
                      <a href="mailto:admissions@6fitschool.com" className="text-[#2563EB] hover:underline text-xs">
                        admissions@6fitschool.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#151922]">Lab Hours & Response Time</strong>
                      <p className="text-xs text-[#626B78] leading-snug">
                        Mon – Sat: 9:00 AM – 7:00 PM IST<br />
                        Average enquiry response: within 2 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="rounded-3xl border border-[#E5E9F0] bg-white p-7 shadow-2xs">
                <h4 className="text-base font-bold text-[#151922] mb-4 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#2563EB]" />
                  <span>Frequently Asked Questions</span>
                </h4>
                <div className="space-y-3">
                  {GLOBAL_FAQS.slice(0, 4).map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-2xl border border-[#E5E9F0] bg-[#F7F9FC] overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-3.5 text-left text-xs font-bold text-[#151922] hover:text-[#2563EB] transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition-transform ${
                              isOpen ? 'rotate-180 text-[#2563EB]' : 'text-[#626B78]'
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 text-[11px] text-[#626B78] leading-relaxed border-t border-[#E5E9F0]/60 pt-2.5">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FINAL CALL TO ACTION
         ========================================================================= */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-[#E5E9F0] bg-gradient-to-b from-[#F7F9FC] to-white p-8 sm:p-14 lg:p-16 text-center shadow-lg shadow-blue-500/5 overflow-hidden"
          >
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Start Your Career Transition</span>
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#151922] tracking-tight">
              Your Next Career Chapter Starts Here.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#626B78] max-w-xl mx-auto leading-relaxed">
              Explore our technology programs and discover the practical learning path that fits your goals.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="button"
                  onClick={() => scrollTo('courses')}
                  className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#1D4ED8] transition-all cursor-pointer"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="button"
                  onClick={() => openEnquiryModal()}
                  className="inline-flex items-center justify-center rounded-xl border border-[#E5E9F0] bg-white px-7 py-3.5 text-sm font-semibold text-[#151922] hover:bg-[#F7F9FC] shadow-2xs transition-colors cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="ml-1.5 h-4 w-4 text-[#626B78]" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          IN-PAGE MODALS (Syllabus Modal & Video Modal)
         ========================================================================= */}
      {/* Syllabus Modal */}
      <SyllabusModal
        course={selectedSyllabus}
        isOpen={!!selectedSyllabus}
        onClose={() => setSelectedSyllabus(null)}
      />

      {/* Video Preview Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <div className="fixed inset-0" onClick={() => setActiveVideo(null)} aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative z-10 w-full max-w-lg rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xl text-left"
            >
              <div className="flex items-start justify-between pb-3 border-b border-[#E5E9F0]">
                <div>
                  <span className="text-xs font-bold text-[#2563EB]">{activeVideo.courseTitle}</span>
                  <h3 className="text-base font-bold text-[#151922]">{activeVideo.studentNameOrCode}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="rounded-lg p-1.5 text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 aspect-video rounded-2xl bg-[#151922] flex flex-col items-center justify-center p-6 text-center text-white">
                <Play className="h-8 w-8 text-[#2563EB] mb-2 fill-current" />
                <p className="text-xs font-bold">Video Player (Preview Mode)</p>
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
                  className="rounded-xl border border-[#E5E9F0] bg-white px-4 py-2 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC] cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WhatsApp Screenshot Lightbox Modal */}
      <AnimatePresence>
        {activeScreenshot && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          >
            <div className="fixed inset-0" onClick={() => setActiveScreenshot(null)} aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative z-10 w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-left"
            >
              {/* WhatsApp App Bar */}
              <div className="flex items-center justify-between bg-[#075E54] px-5 py-3.5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm">
                    {activeScreenshot.studentInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {activeScreenshot.name}
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                    </h4>
                    <span className="text-[11px] text-emerald-100/90 block">
                      {activeScreenshot.placementOffer || activeScreenshot.targetRole}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveScreenshot(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Viewport / Screenshot in Lightbox */}
              <div className="p-5 sm:p-6 bg-[#EFEAE2] min-h-[340px] flex flex-col justify-between">
                {activeScreenshot.whatsappScreenshotUrl ? (
                  <img
                    src={activeScreenshot.whatsappScreenshotUrl}
                    alt={`WhatsApp Feedback from ${activeScreenshot.name}`}
                    className="w-full h-auto rounded-2xl shadow-md border border-slate-300"
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <span className="rounded-lg bg-white/80 backdrop-blur-xs px-3 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider shadow-2xs">
                        Verified WhatsApp Placement Message
                      </span>
                    </div>

                    {/* Chat Bubble */}
                    <div className="relative max-w-sm ml-auto bg-[#D9FDD3] p-4 rounded-2xl rounded-tr-xs shadow-sm border border-emerald-200/50">
                      <p className="text-sm text-[#111B21] leading-relaxed font-normal">
                        {activeScreenshot.chatSnippet}
                      </p>
                      <div className="mt-2 flex items-center justify-end gap-1.5 text-[11px] text-[#667781]">
                        <span>{activeScreenshot.chatTime}</span>
                        <CheckCheck className="h-4 w-4 text-[#53BDEB]" />
                      </div>
                    </div>

                    {/* Course & Outcome Tag */}
                    <div className="rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-2xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block">
                          Program Completed
                        </span>
                        <span className="text-xs font-bold text-[#151922]">
                          {activeScreenshot.courseCompleted}
                        </span>
                      </div>
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                        {activeScreenshot.placementOffer}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Verified student feedback • 6F IT School
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const course = COURSES.find((c) => c.slug === activeScreenshot.courseSlug);
                    setActiveScreenshot(null);
                    if (course) setSelectedSyllabus(course);
                  }}
                  className="rounded-xl bg-[#2563EB] text-white px-4 py-2 text-xs font-bold hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                >
                  View Course Syllabus &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Architecture & Specs Lightbox Pop-up Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
