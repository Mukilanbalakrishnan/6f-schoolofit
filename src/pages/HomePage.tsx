import React, { useState } from 'react';
import { useEnquiry } from '../context/EnquiryContext';
import { useScrollLock } from '../hooks/useScrollLock';
import { COURSES } from '../data/coursesData';
import { STUDENT_PROJECTS } from '../data/projectsData';
import { VIDEO_TESTIMONIALS, ALL_WHATSAPP_REVIEWS } from '../data/storiesData';
import { GLOBAL_FAQS } from '../data/faqsData';
import type { VideoTestimonial, Course, StudentProject } from '../types';
import { CourseCard } from '../components/courses/CourseCard';
import { SyllabusModal } from '../components/courses/SyllabusModal';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { TechnologyCarousel } from '../components/technologies/TechnologyCarousel';
import { FlightPathJourney } from '../components/home/FlightPathJourney';
import { WhyChooseUsRoadmap } from '../components/home/WhyChooseUsRoadmap';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDetailModal } from '../components/projects/ProjectDetailModal';
import { ModalVideoPlayer } from '../components/common/ModalVideoPlayer';
import { SectionMarginSketches } from '../components/common/SectionMarginSketches';
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
  Cloud,
  GitMerge,
  Bot,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
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

  // Mobile video carousel state (single sliding effect on mobile)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoTouchStartXRef = React.useRef<number | null>(null);

  const handleVideoTouchStart = (e: React.TouchEvent) => {
    setIsVideoPaused(true);
    videoTouchStartXRef.current = e.touches[0].clientX;
  };

  const handleVideoTouchEnd = (e: React.TouchEvent) => {
    setIsVideoPaused(false);
    if (videoTouchStartXRef.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = videoTouchStartXRef.current - touchEndX;
      if (diff > 40) {
        setCurrentVideoIndex((prev) => (prev < VIDEO_TESTIMONIALS.length - 1 ? prev + 1 : 0));
      } else if (diff < -40) {
        setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : VIDEO_TESTIMONIALS.length - 1));
      }
      videoTouchStartXRef.current = null;
    }
  };

  // Auto-slide mobile videos every 4.5s (pauses on interaction or modal open)
  React.useEffect(() => {
    if (isVideoPaused || activeVideo) return;
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev < VIDEO_TESTIMONIALS.length - 1 ? prev + 1 : 0));
    }, 4500);
    return () => clearInterval(interval);
  }, [isVideoPaused, activeVideo]);

    // Carousel state for student WhatsApp review cards
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const touchStartXRef = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartXRef.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartXRef.current - touchEndX;
      if (diff > 40) {
        setCurrentIndex((prev) => prev + 1);
      } else if (diff < -40) {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalReviews - 1));
      }
      touchStartXRef.current = null;
    }
  };

  // Active WhatsApp Screenshot Lightbox Modal
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);
  const activeScreenshot = activeScreenshotIndex !== null ? ALL_WHATSAPP_REVIEWS[activeScreenshotIndex] : null;

  // Robust multi-browser background scroll lock when popups (video modal or screenshot lightbox) are open
  useScrollLock(Boolean(activeVideo || activeScreenshotIndex !== null));

  // Responsive visible cards count
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide every 2 seconds
  React.useEffect(() => {
    if (isPaused || activeScreenshotIndex !== null) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, activeScreenshotIndex]);

  // Seamless infinite loop handling
  const totalReviews = ALL_WHATSAPP_REVIEWS.length;
  React.useEffect(() => {
    if (currentIndex >= totalReviews) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, totalReviews]);

  // Keyboard navigation for screenshot lightbox
  React.useEffect(() => {
    if (activeScreenshotIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveScreenshotIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveScreenshotIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : totalReviews - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveScreenshotIndex((prev) => (prev !== null && prev < totalReviews - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScreenshotIndex, totalReviews]);



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

  const renderVideoCard = (video: VideoTestimonial, isMobileSlide = false) => (
    <div
      onMouseEnter={() => {
        // Pre-fetch video data on hover so it plays instantly when clicked
        if (video.videoUrl && typeof document !== 'undefined') {
          const id = `prefetch-${video.id}`;
          if (!document.getElementById(id)) {
            const link = document.createElement('link');
            link.id = id;
            link.rel = 'prefetch';
            link.href = video.videoUrl;
            document.head.appendChild(link);
          }
        }
      }}
      className={`group rounded-3xl border border-[#E5E9F0] bg-white p-5 sm:p-6 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all flex flex-col justify-between text-left h-full ${
        isMobileSlide ? 'w-full max-w-sm mx-auto' : ''
      }`}
    >
      <div>
        {/* Thumbnail box with real photo & play overlay */}
        <div
          onClick={() => setActiveVideo(video)}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xs mb-4 group/thumb cursor-pointer bg-slate-900"
        >
          {video.thumbnailUrl ? (
            <img
              src={video.thumbnailUrl}
              alt={`${video.studentNameOrCode} video review`}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-tr from-[#151922] to-[#334155]" />
          )}

          {/* Scrim gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

          {/* Top Badges */}
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

          {/* Center Play Button */}
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

          {/* Bottom Course Label inside card */}
          <div className="relative z-10 p-3 mt-auto">
            <div className="text-white text-xs font-bold truncate drop-shadow-sm">
              {video.courseTitle}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-base font-bold text-[#151922] tracking-tight">
              {video.studentNameOrCode}
            </h4>
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
          <span>Watch Alumni Video</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white text-[#151922] overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION (#home) - Modern, Centered, Structured & Richly Animated
         ========================================================================= */}
      <section
        id="home"
        className="relative border-b border-[#E5E9F0] pt-14 pb-18 lg:pt-20 lg:pb-24 overflow-hidden text-center"
      >
        {/* Background Video with Black Color Transparent Screen Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-video-poster.jpg"
            className="w-full h-full object-cover object-center opacity-70"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Black color transparent screen overlay for crisp text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>


        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Master Headline with Gradient Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]"
          >
            Learn Future-Ready Technologies.{' '}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(37,99,235,0.5)]">
              Build Real-World Skills.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed max-w-2xl mx-auto font-medium font-hero-sub drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 flex flex-col items-center gap-1.5"
          >
            <p className="text-xs text-slate-200 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              Chennai’s Premier Practical Academy • Zero passive slide-decks • 100% hands-on cloud console & terminal execution
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cyan-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <span>🏆 Ranked #1 Best IT Training Institute & DevOps Academy in Chennai</span>
            </span>
          </motion.div>

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
                <span className="text-[10px] font-mono font-semibold text-[#2563EB] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                  THADAM 75 • 3 Phases
                </span>
              </div>
              <h3 className="text-base font-bold text-[#151922] group-hover:text-[#2563EB] transition-colors">
                THADAM 75: AI-Powered AWS DevOps
              </h3>
              <p className="mt-1.5 text-xs text-[#626B78] leading-relaxed">
                75-Day journey: Linux, AWS, Terraform, Docker, Kubernetes EKS, GitOps, DevSecOps, AIOps & Bedrock AI Agents.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between text-[11px] font-bold text-[#2563EB]">
                <span>Inspect 75-Day Syllabus</span>
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
                <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  THADAM 75 • 3 Phases
                </span>
              </div>
              <h3 className="text-base font-bold text-[#151922] group-hover:text-emerald-600 transition-colors">
                THADAM 75: AI-Powered Azure DevOps
              </h3>
              <p className="mt-1.5 text-xs text-[#626B78] leading-relaxed">
                75-Day journey: Linux, Python, Azure, Terraform, Docker, AKS, GitOps, DevSecOps, AIOps & Azure AI Agents.
              </p>
              <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center justify-between text-[11px] font-bold text-emerald-600">
                <span>Inspect 75-Day Syllabus</span>
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
      <section id="courses" className="relative border-b border-[#E5E9F0] bg-[#F7F9FC] py-16 lg:py-24 overflow-hidden">
        {/* Simple Technology & AI Margin Sketches */}
        <SectionMarginSketches variant="courses" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          3. WHY CHOOSE 6F SCHOOL OF IT (#why-us)
         ========================================================================= */}
      <section id="why-us" className="relative border-b border-[#E5E9F0] bg-white py-16 lg:py-24 overflow-hidden">
        <SectionMarginSketches variant="why-us" />
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
              Why Choose 6F School of IT?
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
        <SectionMarginSketches variant="why-us" />
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
        <SectionMarginSketches variant="technologies" />
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
      <section id="projects" className="relative border-b border-[#E5E9F0] bg-[#F7F9FC] py-16 lg:py-24 overflow-hidden">
        <SectionMarginSketches variant="projects" />
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
        <SectionMarginSketches variant="student-success" />
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
          {/* Centered / Clean Header without status pill */}
          <div className="max-w-2xl text-left mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Student Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
              Real Student Transformations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#626B78] leading-relaxed">
              Authentic WhatsApp chats and signed offer letters from practicing 6F learners placed in top tech companies.
            </p>
          </div>

          {/* =========================================================================
              Auto-Sliding Carousel with Side Arrows (Slides every 2s)
             ========================================================================= */}
          <div className="relative w-full group/carousel">
            {/* Left Navigation Arrow (Positioned on the Left Side of Cards) */}
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalReviews - 1))}
              className="absolute left-1 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-slate-700 hover:text-[#2563EB] hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              aria-label="Previous slide"
              title="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Right Navigation Arrow (Positioned on the Right Side of Cards) */}
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="absolute right-1 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-slate-700 hover:text-[#2563EB] hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              aria-label="Next slide"
              title="Next reviews"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Carousel Viewport Container */}
            <div
              className="w-full overflow-hidden pt-4 pb-12 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
              }}
            >
              {[...ALL_WHATSAPP_REVIEWS, ...ALL_WHATSAPP_REVIEWS].map((rev, idx) => {
                const bgGradients = [
                  'bg-gradient-to-br from-[#0284C7] to-[#0369A1] shadow-blue-500/25',
                  'bg-gradient-to-br from-[#10B981] to-[#059669] shadow-emerald-500/25',
                  'bg-gradient-to-br from-[#0D9488] to-[#0F766E] shadow-teal-500/25',
                  'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] shadow-indigo-500/25',
                ];
                const bgClass = bgGradients[idx % bgGradients.length];

                return (
                  <div
                    key={`${rev.id}-${idx}`}
                    style={{ width: `${100 / visibleCards}%` }}
                    className="shrink-0 px-2 sm:px-3"
                  >
                    <motion.div
                      whileHover={{ y: -8, transition: { duration: 0.25 } }}
                      className="group relative flex flex-col items-center pt-6"
                    >
                      {/* Animated Morphing Blob Background Shape */}
                      <div
                        className={`absolute inset-0 ${bgClass} shadow-lg opacity-95 transition-all pointer-events-none`}
                        style={{
                          borderRadius:
                            idx % 2 === 0
                              ? '28px 18px 32px 16px'
                              : '18px 32px 16px 28px',
                          transform: idx % 2 === 0 ? 'rotate(-2.5deg)' : 'rotate(2.5deg)',
                        }}
                      />

                      {/* Front White Card - Clean WhatsApp Screenshot Only */}
                      <div
                        onClick={() => setActiveScreenshotIndex(idx % totalReviews)}
                        className="relative z-10 w-full rounded-[24px] sm:rounded-[26px] bg-white p-2.5 sm:p-3 text-left shadow-xl shadow-slate-200/80 border border-slate-100 cursor-pointer overflow-hidden group/screenshot"
                      >
                        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-slate-950">
                          <img
                            src={rev.image}
                            alt={rev.name}
                            className="h-full w-full object-cover object-top group-hover/screenshot:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />

                          {/* Hover Zoom Overlay */}
                          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-2xs">
                            <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-lg">
                              <ZoomIn className="h-3.5 w-3.5 text-emerald-600" />
                              <span>View Full Chat</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          </div>

          {/* Quick Click Hint */}
          <div className="text-center -mt-4 mb-8">
            <span className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 inline-flex items-center gap-1.5">
              <ZoomIn className="h-3.5 w-3.5 text-blue-600" />
              <span>Click on any screenshot to view the full resolution chat & verified offer letter</span>
            </span>
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

            {/* Mobile View: Single Sliding Carousel with Side Arrows (< 768px) */}
            <div className="md:hidden relative w-full group/video-carousel">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : VIDEO_TESTIMONIALS.length - 1))
                }
                className="absolute left-1 top-1/3 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-slate-700 hover:text-[#2563EB] active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                aria-label="Previous video"
                title="Previous video"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentVideoIndex((prev) => (prev < VIDEO_TESTIMONIALS.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-1 top-1/3 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-slate-700 hover:text-[#2563EB] active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                aria-label="Next video"
                title="Next video"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Sliding Track Viewport with Touch Gestures */}
              <div
                className="w-full overflow-hidden px-1 pt-1 pb-3 cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsVideoPaused(true)}
                onMouseLeave={() => setIsVideoPaused(false)}
                onTouchStart={handleVideoTouchStart}
                onTouchEnd={handleVideoTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentVideoIndex * 100}%)` }}
                >
                  {VIDEO_TESTIMONIALS.map((video) => (
                    <div key={video.id} className="w-full shrink-0 px-2">
                      {renderVideoCard(video, true)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots & Slide Counter */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {VIDEO_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentVideoIndex === idx
                        ? 'w-7 h-2 bg-[#2563EB]'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to video slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="text-center mt-2">
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5">
                  {currentVideoIndex + 1} of {VIDEO_TESTIMONIALS.length}
                </span>
              </div>
            </div>

            {/* Desktop & Tablet View: 2/3 Column Grid (>= 768px) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {VIDEO_TESTIMONIALS.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {renderVideoCard(video, false)}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. ABOUT US SECTION (#about) - Exact Content Matching Specification
         ========================================================================= */}
      <section id="about" className="relative border-b border-[#E5E9F0] bg-[#F7F9FC] py-16 lg:py-24 overflow-hidden">
        <SectionMarginSketches variant="about-contact" />
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
              About 6F School of IT — Chennai's Premier Practical Academy
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#626B78] leading-relaxed">
              Headquartered in Chennai, 6F School of IT is recognized as the best IT training institute for hands-on, job-ready engineering. We replace slide presentations with real AWS and Azure cloud consoles, terminal automation, Kubernetes clusters, and LangGraph AI agents.
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
      <section id="contact" className="relative border-b border-[#E5E9F0] bg-white py-16 lg:py-24 overflow-hidden">
        <SectionMarginSketches variant="about-contact" />
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

              {/* Alumni Quote / Reflection */}
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

      {/* WhatsApp Screenshot Lightbox Modal */}
      <AnimatePresence>
        {activeScreenshot && activeScreenshotIndex !== null && (
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
            <div className="fixed inset-0" onClick={() => setActiveScreenshotIndex(null)} aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative z-10 w-full max-w-xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-left"
            >
              {/* WhatsApp App Bar */}
              <div className="flex items-center justify-between bg-[#075E54] px-4 sm:px-5 py-3 text-white shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm">
                    {activeScreenshot.name.split(' ').map((n) => n[0]).join('.')}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
                      <span>{activeScreenshot.name}</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300 shrink-0" />
                    </h4>
                    <span className="text-[11px] text-emerald-100/90 block truncate">
                      {activeScreenshot.packageOrHike} • {activeScreenshot.company}
                    </span>
                  </div>
                </div>

                {/* Navigation and Close */}
                <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                  <div className="hidden sm:flex items-center bg-black/20 rounded-full px-2.5 py-1 text-[11px] font-mono text-emerald-100">
                    {activeScreenshotIndex + 1} / {ALL_WHATSAPP_REVIEWS.length}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveScreenshotIndex(
                        activeScreenshotIndex > 0 ? activeScreenshotIndex - 1 : ALL_WHATSAPP_REVIEWS.length - 1
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Previous screenshot"
                    title="Previous"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveScreenshotIndex(
                        activeScreenshotIndex < ALL_WHATSAPP_REVIEWS.length - 1 ? activeScreenshotIndex + 1 : 0
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Next screenshot"
                    title="Next"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveScreenshotIndex(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-1"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Chat Viewport / Screenshot in Lightbox */}
              <div className="p-3 sm:p-5 bg-slate-100/80 overflow-y-auto flex-1 flex flex-col items-center">
                <div className="relative w-full flex justify-center">
                  <img
                    src={activeScreenshot.image}
                    alt={`WhatsApp Feedback from ${activeScreenshot.name}`}
                    className="max-h-[66vh] w-auto max-w-full rounded-2xl shadow-xl border border-slate-300/80 object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 flex items-center justify-between shrink-0">
                <div className="text-left">
                  <span className="text-[11px] font-bold text-slate-800 block">
                    {activeScreenshot.packageOrHike}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    Verified WhatsApp Offer • 6F School of IT
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const course = COURSES.find((c) => c.slug === activeScreenshot.courseSlug);
                    setActiveScreenshotIndex(null);
                    if (course) setSelectedSyllabus(course);
                  }}
                  className="rounded-xl bg-[#2563EB] text-white px-3.5 py-1.5 text-xs font-bold hover:bg-[#1D4ED8] transition-colors cursor-pointer"
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
