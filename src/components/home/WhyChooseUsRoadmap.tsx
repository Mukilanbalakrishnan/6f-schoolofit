import React, { useState } from 'react';
import {
  Terminal,
  Layers,
  FolderGit2,
  Users,
  Briefcase,
  Shield,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

interface MilestoneItem {
  number: string;
  stageName: string;
  title: string;
  desc: string;
  tagline: string;
  icon: React.FC<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  featurePill: string;
  topOffset: number; // in pixels within the 1350px canvas
  nodeY: number;
}

const ROADMAP_STEPS: MilestoneItem[] = [
  {
    number: '01',
    stageName: 'STAGE 01 • HANDS-ON FOUNDATION',
    title: 'Lab-First Practice',
    desc: 'No passive slide decks. Every concept is directly executed in authentic CLI, cloud, and container runtimes.',
    tagline: 'CLI & Cloud Consoles',
    icon: Terminal,
    accentColor: '#2563EB',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-[#2563EB]',
    badgeBorder: 'border-blue-200',
    featurePill: 'Zero Slides • 100% Terminal',
    topOffset: 45,
    nodeY: 140,
  },
  {
    number: '02',
    stageName: 'STAGE 02 • ENTERPRISE TOOLING',
    title: 'Modern Toolchains',
    desc: 'Master the actual toolchains powering top tech companies: AWS, Docker, Kubernetes, Terraform, LangGraph, TypeScript, and React.',
    tagline: 'Production Stacks',
    icon: Layers,
    accentColor: '#0284C7',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-600',
    badgeBorder: 'border-sky-200',
    featurePill: 'AWS • K8s • Terraform • AI',
    topOffset: 275,
    nodeY: 370,
  },
  {
    number: '03',
    stageName: 'STAGE 03 • PRODUCTION EXECUTION',
    title: 'Production Capstones',
    desc: 'Build and deploy verified systems: automated GitOps pipelines, RAG agents, and cloud backends.',
    tagline: 'Verifiable Systems',
    icon: FolderGit2,
    accentColor: '#059669',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-600',
    badgeBorder: 'border-emerald-200',
    featurePill: 'Automated GitOps Pipelines',
    topOffset: 505,
    nodeY: 600,
  },
  {
    number: '04',
    stageName: 'STAGE 04 • SENIOR CRITIQUE',
    title: 'Active Mentorship',
    desc: 'Direct code reviews, architectural feedback, and live troubleshooting from practicing engineers.',
    tagline: 'Senior Code Reviews',
    icon: Users,
    accentColor: '#6366F1',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-600',
    badgeBorder: 'border-indigo-200',
    featurePill: 'Direct PR & Arch Reviews',
    topOffset: 735,
    nodeY: 830,
  },
  {
    number: '05',
    stageName: 'STAGE 05 • CAREER ASSETS',
    title: 'Portfolio & System Design',
    desc: 'Translate practical lab work into verified public GitHub portfolios and articulate system tradeoffs in interviews.',
    tagline: 'Interview Tradeoffs',
    icon: Briefcase,
    accentColor: '#D97706',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-600',
    badgeBorder: 'border-amber-200',
    featurePill: 'Verified GitHub & Tradeoffs',
    topOffset: 965,
    nodeY: 1060,
  },
  {
    number: '06',
    stageName: 'STAGE 06 • LIFELONG PARTNER',
    title: 'Continuous Support',
    desc: 'Interactive lab debugging support, community code collaboration, and ongoing review sessions.',
    tagline: 'Alumni Network',
    icon: Shield,
    accentColor: '#0891B2',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-600',
    badgeBorder: 'border-cyan-200',
    featurePill: 'Lifelong Debugging & Network',
    topOffset: 1180,
    nodeY: 1270,
  },
];

export const WhyChooseUsRoadmap: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full relative py-6">
      {/* =========================================================================
          1. DESKTOP VIEW: Continuous Vertical Serpentine Roadmap (Matching Image)
         ========================================================================= */}
      <div className="hidden lg:block relative w-full max-w-5xl mx-auto min-h-[1420px]">
        {/* Full-height SVG Serpentine Vector Canvas */}
        <svg
          viewBox="0 0 1000 1380"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ambient soft glow filter */}
            <filter id="road-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            {/* Linear gradients for the road */}
            <linearGradient id="road-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="25%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="75%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
          </defs>

          {/* Connectors from peaks to milestone cards */}
          {/* Card 1: Left connector from Peak (385, 140) to Card (370, 140) */}
          <line
            x1="385"
            y1="140"
            x2="350"
            y2="140"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={hoveredIdx === 0 ? 1 : 0.6}
          />
          {/* Card 2: Right connector from Peak (615, 370) to Card (650, 370) */}
          <line
            x1="615"
            y1="370"
            x2="650"
            y2="370"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={hoveredIdx === 1 ? 1 : 0.6}
          />
          {/* Card 3: Left connector from Peak (385, 600) to Card (350, 600) */}
          <line
            x1="385"
            y1="600"
            x2="350"
            y2="600"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={hoveredIdx === 2 ? 1 : 0.6}
          />
          {/* Card 4: Right connector from Peak (615, 830) to Card (650, 830) */}
          <line
            x1="615"
            y1="830"
            x2="650"
            y2="830"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={hoveredIdx === 3 ? 1 : 0.6}
          />
          {/* Card 5: Left connector from Peak (385, 1060) to Card (350, 1060) */}
          <line
            x1="385"
            y1="1060"
            x2="350"
            y2="1060"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={hoveredIdx === 4 ? 1 : 0.6}
          />
          {/* Card 6: Right connector from Peak (615, 1270) to Card (650, 1270) */}
          <line
            x1="615"
            y1="1270"
            x2="650"
            y2="1270"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={hoveredIdx === 5 ? 1 : 0.6}
          />

          {/* 1. Ambient Glow Path */}
          <path
            d="M 500,30 C 500,70 385,80 385,140 C 385,230 615,280 615,370 C 615,460 385,510 385,600 C 385,690 615,740 615,830 C 615,920 385,970 385,1060 C 385,1150 615,1180 615,1270 C 615,1315 500,1320 500,1355"
            stroke="#93C5FD"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* 2. Primary Solid/Dashed Serpentine Path (Matching Winding Reference) */}
          <path
            d="M 500,30 C 500,70 385,80 385,140 C 385,230 615,280 615,370 C 615,460 385,510 385,600 C 385,690 615,740 615,830 C 615,920 385,970 385,1060 C 385,1150 615,1180 615,1270 C 615,1315 500,1320 500,1355"
            stroke="url(#road-gradient)"
            strokeWidth="4"
            strokeDasharray="9 9"
            strokeLinecap="round"
          />

          {/* 3. Start Origin Beacon (Top Center) */}
          <g transform="translate(500, 30)">
            <circle cx="0" cy="0" r="14" fill="#2563EB" />
            <circle cx="0" cy="0" r="7" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3" fill="#2563EB" />
          </g>

          {/* 4. The 6 Milestone Junction Nodes on the Serpentine Bends */}
          {ROADMAP_STEPS.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const px = isLeft ? 385 : 615;
            const py = step.nodeY;
            const isHovered = hoveredIdx === idx;

            return (
              <g key={step.number} transform={`translate(${px}, ${py})`}>
                {/* Outer halo */}
                <circle
                  cx="0"
                  cy="0"
                  r={isHovered ? 26 : 22}
                  fill="#FFFFFF"
                  stroke={step.accentColor}
                  strokeWidth="3"
                  className="transition-all duration-300 drop-shadow-md"
                />
                {/* Inner colored circle */}
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  fill={isHovered ? step.accentColor : '#F8FAFC'}
                  stroke={step.accentColor}
                  strokeWidth="1.5"
                />
                {/* Number text */}
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fill={isHovered ? '#FFFFFF' : step.accentColor}
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {step.number}
                </text>
              </g>
            );
          })}

          {/* 5. End Finish Destination Beacon (Bottom Center) */}
          <g transform="translate(500, 1355)">
            <circle cx="0" cy="0" r="16" fill="#0891B2" />
            <circle cx="0" cy="0" r="8" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="4" fill="#0891B2" />
          </g>
        </svg>

        {/* =========================================================================
            6 Distinct Alternating Milestone Cards Along the Serpentine Highway
           ========================================================================= */}
        <div className="relative z-10 w-full h-[1420px] pointer-events-none">
          {ROADMAP_STEPS.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const Icon = step.icon;
            const isHovered = hoveredIdx === idx;
            const isFinal = idx === ROADMAP_STEPS.length - 1;

            return (
              <div
                key={step.number}
                style={{
                  top: `${step.topOffset}px`,
                  left: isLeft ? '0%' : 'auto',
                  right: !isLeft ? '0%' : 'auto',
                  width: '365px',
                }}
                className="absolute pointer-events-auto"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 text-left ${
                    isHovered
                      ? 'border-[#2563EB] shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/20'
                      : 'border-[#E5E9F0] hover:border-[#2563EB]/40'
                  }`}
                >
                  {/* Card Header with Icon, Tag & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 ${
                          isHovered
                            ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-blue-500/20 scale-105'
                            : 'bg-[#F7F9FC] border-[#E5E9F0] text-[#2563EB]'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#626B78] block">
                          {step.stageName}
                        </span>
                        <span className="text-xs font-bold text-[#151922]">
                          {step.tagline}
                        </span>
                      </div>
                    </div>

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#2563EB]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#151922] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#626B78] leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Capability Tag Pill */}
                  <div className="mt-4 pt-3.5 border-t border-[#E5E9F0] flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md border ${step.badgeBg} ${step.badgeText} ${step.badgeBorder}`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{step.featurePill}</span>
                    </span>

                    <span className="text-xs font-bold text-[#626B78] flex items-center gap-1">
                      <span>{isFinal ? 'Destination' : 'Next Step'}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#2563EB]" />
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          2. MOBILE & TABLET VIEW: Connected Vertical Timeline (< 1024px)
         ========================================================================= */}
      <div className="lg:hidden relative space-y-4 text-left max-w-xl mx-auto px-3">
        {/* Left vertical dashed path connecting milestones */}
        <div className="absolute top-6 bottom-6 left-8 w-0.5 border-l-2 border-dashed border-[#2563EB]/40 -z-0" />

        {ROADMAP_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isFirst = idx === 0;
          const isLast = idx === ROADMAP_STEPS.length - 1;

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="relative z-10 flex items-start gap-4 rounded-2xl border border-[#E5E9F0] bg-white p-4.5 shadow-2xs"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-bold text-xs shadow-xs ${
                  isLast
                    ? 'bg-cyan-600 text-white'
                    : isFirst
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-white border-2 border-[#2563EB] text-[#2563EB]'
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#2563EB]">
                    Stage {step.number}
                  </span>
                  <span className="text-[#E5E9F0]">•</span>
                  <h4 className="text-sm font-extrabold text-[#151922]">{step.title}</h4>
                </div>
                <p className="mt-1 text-xs text-[#626B78] leading-relaxed">{step.desc}</p>
                <div className="mt-2.5">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${step.badgeBg} ${step.badgeText} ${step.badgeBorder}`}
                  >
                    {step.featurePill}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
