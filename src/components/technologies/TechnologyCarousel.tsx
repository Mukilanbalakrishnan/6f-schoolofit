import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import officialIcons from '../../data/officialIcons.json';

export interface TechItem {
  id: string;
  name: string;
  category: string;
  course: 'AI-Powered AWS DevOps' | 'AI-Powered Azure DevOps' | 'AI-Powered AIOps (Artificial Intelligence for IT Operations)' | 'All';
  courseBadge: string;
  description: string;
  color: string;
  svgPath?: string;
  customSvg?: React.ReactNode;
}

export const TECHNOLOGY_ITEMS: TechItem[] = [
  // 1. AWS & DevOps Core
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud Infrastructure',
    course: 'AI-Powered AWS DevOps',
    courseBadge: 'AWS DevOps',
    description: 'Amazon Web Services: VPCs, EC2 Auto Scaling, S3, RDS, Lambda, and IAM governance.',
    color: officialIcons.aws.color,
    svgPath: officialIcons.aws.path,
  },
  {
    id: 'amazon-q',
    name: 'Amazon Q',
    category: 'Generative AI',
    course: 'AI-Powered AWS DevOps',
    courseBadge: 'AWS DevOps',
    description: 'Generative AI assistant for AWS cloud architecture, IaC generation, and security audits.',
    color: '#FF9900',
    customSvg: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="qGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2CBF" />
            <stop offset="50%" stopColor="#FF9900" />
            <stop offset="100%" stopColor="#00C5FF" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#qGrad)" />
        <path
          d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12c2.8 0 5.37-.96 7.4-2.58l3.18 3.18 2.82-2.82-3.08-3.08C35.26 28.84 36 26.51 36 24c0-6.627-5.373-12-12-12zm0 4.5c4.142 0 7.5 3.358 7.5 7.5 0 1.83-.655 3.51-1.75 4.82l-3.32-3.32a2.25 2.25 0 0 0-3.18 3.18l3.32 3.32c-1.31 1.095-2.99 1.75-4.82 1.75-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Containerization',
    course: 'AI-Powered AWS DevOps',
    courseBadge: 'All Tracks',
    description: 'Standardized container packaging, multi-stage builds, and immutable runtimes.',
    color: officialIcons.docker.color,
    svgPath: officialIcons.docker.path,
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Container Orchestration',
    course: 'AI-Powered AWS DevOps',
    courseBadge: 'AWS & Azure',
    description: 'Automated container rollout, self-healing, Horizontal Pod Autoscaling (HPA), and Helm.',
    color: officialIcons.kubernetes.color,
    svgPath: officialIcons.kubernetes.path,
  },
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'Infrastructure as Code',
    course: 'AI-Powered AWS DevOps',
    courseBadge: 'AWS & Azure',
    description: 'Declarative multi-cloud provisioning with HCL, state management, and reusable modules.',
    color: officialIcons.terraform.color,
    svgPath: officialIcons.terraform.path,
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'CI/CD Automation',
    course: 'AI-Powered AWS DevOps',
    courseBadge: 'AWS DevOps',
    description: 'Automated workflows, Docker image publishing, testing gates, and AWS OIDC deployment.',
    color: officialIcons['github-actions'].color,
    svgPath: officialIcons['github-actions'].path,
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'Operating System',
    course: 'AI-Powered AWS DevOps',
    courseBadge: 'All Tracks',
    description: 'Foundational operating system: Bash automation, systemd services, and networking.',
    color: '#EAA200',
    svgPath: officialIcons.linux.path,
  },

  // 2. Azure DevOps Core
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'Enterprise Cloud',
    course: 'AI-Powered Azure DevOps',
    courseBadge: 'Azure DevOps',
    description: 'Enterprise cloud platform: Azure VNets, VMSS, Azure SQL, and Entra ID governance.',
    color: officialIcons.azure.color,
    svgPath: officialIcons.azure.path,
  },
  {
    id: 'azure-devops',
    name: 'Azure DevOps',
    category: 'CI/CD Pipelines',
    course: 'AI-Powered Azure DevOps',
    courseBadge: 'Azure DevOps',
    description: 'Enterprise multi-stage YAML pipelines, Azure Repos, and automated release gates.',
    color: officialIcons['azure-devops'].color,
    svgPath: officialIcons['azure-devops'].path,
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'AI Pair Programmer',
    course: 'AI-Powered Azure DevOps',
    courseBadge: 'Azure DevOps',
    description: 'AI code completion, pipeline YAML generation, shell scripting, and test suites.',
    color: '#6E40C9',
    svgPath: officialIcons['github-copilot'].path,
  },
  {
    id: 'helm',
    name: 'Helm',
    category: 'Package Manager',
    course: 'AI-Powered Azure DevOps',
    courseBadge: 'DevOps',
    description: 'The Kubernetes package manager for templating and rolling releases.',
    color: officialIcons.helm.color,
    svgPath: officialIcons.helm.path,
  },
  {
    id: 'git',
    name: 'Git Version Control',
    category: 'Source Control',
    course: 'AI-Powered Azure DevOps',
    courseBadge: 'All Tracks',
    description: 'Distributed version control, branching strategies, and GitOps workflows.',
    color: officialIcons.git.color,
    svgPath: officialIcons.git.path,
  },

  // 3. AIOps Core
  {
    id: 'opentelemetry',
    name: 'OpenTelemetry',
    category: 'Observability & Tracing',
    course: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    courseBadge: 'AIOps',
    description: 'Unified telemetry standard for distributed traces, metrics, and logs.',
    color: officialIcons.opentelemetry.color,
    svgPath: officialIcons.opentelemetry.path,
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    category: 'Time-Series Telemetry',
    course: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    courseBadge: 'AIOps',
    description: 'Scraping metrics, PromQL queries, alerting rules, and SRE golden signals monitoring.',
    color: officialIcons.prometheus.color,
    svgPath: officialIcons.prometheus.path,
  },
  {
    id: 'grafana',
    name: 'Grafana',
    category: 'Data Visualization',
    course: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    courseBadge: 'AIOps',
    description: 'Real-time dashboards, SLA tracking, anomaly visualization, and alert correlation.',
    color: officialIcons.grafana.color,
    svgPath: officialIcons.grafana.path,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'AI & Automation',
    course: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    courseBadge: 'AIOps',
    description: 'Python scripting for ML anomaly models, LangGraph agents, and remediation bots.',
    color: officialIcons.python.color,
    svgPath: officialIcons.python.path,
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    category: 'Multi-Agent Systems',
    course: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    courseBadge: 'AIOps',
    description: 'Cyclic state machines and autonomous agents for telemetry triage and root-cause analysis.',
    color: '#10B981',
    customSvg: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#0F172A" />
        <circle cx="16" cy="18" r="4.5" fill="#10B981" />
        <circle cx="32" cy="18" r="4.5" fill="#00C5FF" />
        <circle cx="24" cy="33" r="4.5" fill="#8B5CF6" />
        <path
          d="M19 19.5l9 11M29 19.5l-9 11M18.5 18h11"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'opensearch',
    name: 'OpenSearch',
    category: 'Log Analytics',
    course: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    courseBadge: 'AIOps',
    description: 'Scalable log search, distributed indexing, and anomaly detection dashboards.',
    color: officialIcons.opensearch.color,
    svgPath: officialIcons.opensearch.path,
  },
];

export const TechnologyCarousel: React.FC = () => {
  const [activeCourseFilter, setActiveCourseFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Filter items by course
  const filteredItems =
    activeCourseFilter === 'All'
      ? TECHNOLOGY_ITEMS
      : TECHNOLOGY_ITEMS.filter(
          (item) => item.course === activeCourseFilter || item.courseBadge === 'All Tracks'
        );

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / 4));

  // Scroll smoothly by page offset
  const scrollToPage = useCallback((pageIndex: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const targetPage = Math.max(0, Math.min(pageIndex, totalPages - 1));
    const cardWidth = container.querySelector<HTMLElement>('.tech-card')?.offsetWidth || 160;
    const gap = 20;
    const scrollAmount = targetPage * ((cardWidth + gap) * 4);

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
    setCurrentPage(targetPage);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    const prev = currentPage > 0 ? currentPage - 1 : totalPages - 1;
    scrollToPage(prev);
  }, [currentPage, totalPages, scrollToPage]);

  const handleNext = useCallback(() => {
    const next = currentPage < totalPages - 1 ? currentPage + 1 : 0;
    scrollToPage(next);
  }, [currentPage, totalPages, scrollToPage]);

  // Update current page on user manual scroll
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector<HTMLElement>('.tech-card')?.offsetWidth || 160;
    const gap = 20;
    const step = (cardWidth + gap) * 4;
    const calculatedPage = Math.round(container.scrollLeft / step);
    if (calculatedPage !== currentPage && calculatedPage < totalPages) {
      setCurrentPage(calculatedPage);
    }
  };

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const renderIcon = (tech: TechItem, sizeClass = 'w-10 h-10 sm:w-12 sm:h-12') => {
    if (tech.customSvg) {
      return tech.customSvg;
    }
    if (tech.svgPath) {
      return (
        <svg
          className={sizeClass}
          viewBox="0 0 24 24"
          fill={tech.color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={tech.svgPath} />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="w-full relative py-6">
      {/* Course Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-4 px-4">
        {[
          { label: 'All Technologies', val: 'All' },
          { label: 'AI-Powered AWS DevOps', val: 'AI-Powered AWS DevOps' },
          { label: 'AI-Powered Azure DevOps', val: 'AI-Powered Azure DevOps' },
          { label: 'AI-Powered AIOps', val: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)' },
        ].map((tab) => (
          <button
            key={tab.val}
            type="button"
            onClick={() => {
              setActiveCourseFilter(tab.val);
              setCurrentPage(0);
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs ${
              activeCourseFilter === tab.val
                ? 'bg-[#151922] text-white shadow-sm'
                : 'bg-white text-[#626B78] border border-[#E5E9F0] hover:bg-[#F7F9FC] hover:text-[#151922]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Carousel Viewport with Side Navigation Buttons */}
      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Technologies"
          className="absolute -left-2 sm:left-2 top-16 sm:top-18 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md border border-[#E5E9F0] text-emerald-800 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Technologies"
          className="absolute -right-2 sm:right-2 top-16 sm:top-18 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md border border-[#E5E9F0] text-emerald-800 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Scrollable Container with Cards and Reflection */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-2 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((tech) => (
            <div key={tech.id} className="tech-card shrink-0 flex flex-col items-center group">
              {/* Top Authentic Card (Rounded Square with Logo & Technology Name) */}
              <div
                className="relative flex flex-col items-center justify-between w-32 h-34 sm:w-38 sm:h-40 md:w-42 md:h-42 rounded-[24px] sm:rounded-[28px] bg-white border border-amber-200/60 shadow-md shadow-slate-200/70 p-3 sm:p-4 hover:border-[#2563EB]/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                title={`${tech.name} - ${tech.description}`}
              >
                {/* Tech Logo (Upright, Official Vector) */}
                <div className="flex-1 flex items-center justify-center w-full group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(tech)}
                </div>

                {/* Technology Name Displayed Prominently */}
                <div className="w-full text-center mt-1.5 pt-1 border-t border-slate-100/80">
                  <h4 className="text-xs sm:text-sm font-bold text-[#151922] leading-tight truncate px-0.5 group-hover:text-[#2563EB] transition-colors">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-[#626B78] block truncate mt-0.5">
                    {tech.courseBadge}
                  </span>
                </div>
              </div>

              {/* 3D Glass Floor Reflection (Pure CSS matching reference design exactly) */}
              <div
                aria-hidden="true"
                className="w-32 sm:w-38 md:w-42 h-14 sm:h-16 md:h-18 rounded-b-[24px] sm:rounded-b-[28px] overflow-hidden pointer-events-none select-none opacity-25 group-hover:opacity-35 transition-opacity"
                style={{
                  transform: 'scaleY(-1)',
                  maskImage: 'linear-gradient(to top, transparent 25%, rgba(0,0,0,0.85) 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 25%, rgba(0,0,0,0.85) 100%)',
                }}
              >
                <div className="flex flex-col items-center justify-between w-full h-full bg-white border border-amber-200/40 p-3 sm:p-4 blur-[0.4px]">
                  <div className="flex-1 flex items-center justify-center w-full">
                    {renderIcon(tech, 'w-8 h-8 sm:w-10 sm:h-10')}
                  </div>
                  <div className="w-full text-center">
                    <span className="text-[11px] font-bold text-[#151922] truncate block">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots (Matching reference design pill & circle indicator) */}
        <div className="flex items-center justify-center gap-2 mt-4 pt-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToPage(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                currentPage === idx
                  ? 'w-7 h-2 bg-emerald-800 rounded-full'
                  : 'w-2 h-2 bg-emerald-800/30 hover:bg-emerald-800/60 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Selected Tech Detail Drawer / Prompt for Labs */}
      <div className="mt-8 text-center">
        <p className="text-xs text-[#626B78]">
          Covered with 100% hands-on terminal & cloud console labs across our 3 accredited programs.
        </p>
      </div>
    </div>
  );
};
