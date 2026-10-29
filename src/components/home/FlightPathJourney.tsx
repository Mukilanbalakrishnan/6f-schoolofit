import React, { useState } from 'react';
import { Target, BookOpen, Wrench, Zap, ShieldAlert, Plane } from 'lucide-react';
import { motion } from 'motion/react';

interface StepData {
  number: string;
  title: string;
  desc: string;
  tagline: string;
  icon: React.FC<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
}

const STEPS: StepData[] = [
  {
    number: '01',
    title: 'FOCUS',
    desc: 'Set clear learning goals and define the career direction.',
    tagline: 'Learning Goals',
    icon: Target,
    accentColor: '#2563EB',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-[#2563EB]',
    borderColor: 'border-blue-200',
  },
  {
    number: '02',
    title: 'FOUNDATION',
    desc: 'Build strong fundamentals before moving to advanced tools.',
    tagline: 'Core Systems',
    icon: BookOpen,
    accentColor: '#0284C7',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-600',
    borderColor: 'border-sky-200',
  },
  {
    number: '03',
    title: 'FORGE',
    desc: 'Practise through guided labs, configuration, and projects.',
    tagline: 'Hands-on Labs',
    icon: Wrench,
    accentColor: '#D97706',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-600',
    borderColor: 'border-amber-200',
  },
  {
    number: '04',
    title: 'FUEL',
    desc: 'Improve through repeated practice, feedback, and continuous learning.',
    tagline: 'Feedback Loop',
    icon: Zap,
    accentColor: '#C026D3',
    badgeBg: 'bg-fuchsia-50',
    badgeText: 'text-fuchsia-600',
    borderColor: 'border-fuchsia-200',
  },
  {
    number: '05',
    title: 'FORCE',
    desc: 'Strengthen troubleshooting, problem-solving, and interview readiness.',
    tagline: 'Troubleshooting & SRE',
    icon: ShieldAlert,
    accentColor: '#059669',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-600',
    borderColor: 'border-emerald-200',
  },
  {
    number: '06',
    title: 'FLY',
    desc: 'Apply skills toward career growth and long-term adaptability.',
    tagline: 'Career Adaptability',
    icon: Plane,
    accentColor: '#EF4444',
    badgeBg: 'bg-red-50',
    badgeText: 'text-red-600',
    borderColor: 'border-red-200',
  },
];

export const FlightPathJourney: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full relative py-6">
      {/* =========================================================================
          1. DESKTOP VIEW: Continuous Curved Flight Path (Matching User Reference)
         ========================================================================= */}
      <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto min-h-[610px]">
        {/* Full SVG Canvas with Exact Flight Path */}
        <svg
          viewBox="0 0 1200 600"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Subtle glow filter for the path */}
            <filter id="path-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connectors from cards to the flight path */}
          {/* Card 1 connector: from card top (120, 445) to Pin ground (110, 410) */}
          <line
            x1="120"
            y1="445"
            x2="110"
            y2="412"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity={hoveredIdx === 0 ? 1 : 0.55}
          />
          {/* Card 2 connector: from card bottom (275, 200) to path slope (290, 310) */}
          <line
            x1="275"
            y1="200"
            x2="290"
            y2="310"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity={hoveredIdx === 1 ? 1 : 0.55}
          />
          {/* Card 3 connector: from card bottom (500, 165) to Crest 1 (500, 250) */}
          <line
            x1="500"
            y1="165"
            x2="500"
            y2="248"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity={hoveredIdx === 2 ? 1 : 0.55}
          />
          {/* Card 4 connector: from card top (650, 455) to Hexagon bottom (650, 440) */}
          <line
            x1="650"
            y1="455"
            x2="650"
            y2="440"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity={hoveredIdx === 3 ? 1 : 0.55}
          />
          {/* Card 5 connector: from card bottom (875, 145) to Crest 2 (780, 200) */}
          <line
            x1="875"
            y1="145"
            x2="780"
            y2="200"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity={hoveredIdx === 4 ? 1 : 0.55}
          />
          {/* Card 6 connector: from card top (1080, 295) to Destination Pin (1080, 190) */}
          <line
            x1="1080"
            y1="295"
            x2="1080"
            y2="190"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity={hoveredIdx === 5 ? 1 : 0.55}
          />

          {/* 1. Subtle soft blue ambient glow behind primary flight path */}
          <path
            d="M 110,400 C 220,400 340,250 500,250 C 570,250 610,420 650,420 C 690,420 730,200 780,200 C 830,200 870,310 910,310 C 960,310 1020,180 1080,180"
            stroke="#BAE6FD"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.35"
          />

          {/* 2. Primary Dashed Blue Flight Path (Matching reference image) */}
          <path
            d="M 110,400 C 220,400 340,250 500,250 C 570,250 610,420 650,420 C 690,420 730,200 780,200 C 830,200 870,310 910,310 C 960,310 1020,180 1080,180"
            stroke="#0284C7"
            strokeWidth="3.5"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />

          {/* 3. Start Location Pin at (110, 400) */}
          <g>
            {/* Ground ring */}
            <ellipse cx="110" cy="406" rx="15" ry="5" stroke="#EF4444" strokeWidth="2.5" fill="none" />
            {/* Pin head */}
            <path
              d="M 110,403 C 104,395 96,385 96,373 C 96,365 102,359 110,359 C 118,359 124,365 124,373 C 124,385 116,395 110,403 Z"
              stroke="#EF4444"
              strokeWidth="2.5"
              fill="#FFFFFF"
            />
            <circle cx="110" cy="373" r="4.5" fill="#EF4444" />
          </g>

          {/* 4. Red Airplane in the final approach to Destination Pin (Matching user request) */}
          <g transform="translate(1028, 206) rotate(-42) scale(1.2)">
            <path
              d="M 0,-18 L 3,-6 L 18,3 L 18,6 L 3,3 L 3,14 L 8,18 L 8,20 L 0,18 L -8,20 L -8,18 L -3,14 L -3,3 L -18,6 L -18,3 L -3,-6 Z"
              fill="#EF4444"
              className="drop-shadow-sm"
            />
          </g>

          {/* 5. Waypoint in Valley: Translucent Triangle Shadow + Magenta Hexagon at (650, 420) */}
          <g>
            {/* Soft translucent triangle in the valley behind hexagon */}
            <polygon
              points="620,440 650,380 675,440"
              fill="#F1F5F9"
              opacity="0.8"
            />
            {/* Regular Magenta Hexagon (Flat top & bottom, pointy left & right) */}
            <polygon
              points="636,400 664,400 673,420 664,440 636,440 627,420"
              fill="#C026D3"
              className="drop-shadow-md"
            />
          </g>

          {/* 6. Destination Location Pin at (1080, 180) */}
          <g>
            {/* Ground ring */}
            <ellipse cx="1080" cy="186" rx="15" ry="5" stroke="#EF4444" strokeWidth="2.5" fill="none" />
            {/* Pin head */}
            <path
              d="M 1080,183 C 1074,175 1066,165 1066,153 C 1066,145 1072,139 1080,139 C 1088,139 1094,145 1094,153 C 1094,165 1086,175 1080,183 Z"
              stroke="#EF4444"
              strokeWidth="2.5"
              fill="#FFFFFF"
            />
            <circle cx="1080" cy="153" r="4.5" fill="#EF4444" />
          </g>
        </svg>

        {/* =========================================================================
            6 Distinct Step Cards - Zero Overlap with the Path & Unobstructed Elements
           ========================================================================= */}
        <div className="relative z-10 w-full h-[600px] pointer-events-none">
          {/* STEP 1: FOCUS (Bottom-Left - Anchored below the Start Pin) */}
          <div
            className="absolute left-[15px] top-[445px] w-[215px] pointer-events-auto"
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-white p-4.5 shadow-sm transition-all text-left ${
                hoveredIdx === 0
                  ? 'border-[#2563EB] shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/20'
                  : 'border-[#E5E9F0]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#2563EB]">
                  01
                </span>
                <span className="text-[10px] font-mono font-bold text-[#2563EB] bg-blue-50/80 border border-blue-200/60 px-1.5 py-0.5 rounded">
                  {STEPS[0].tagline}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151922] tracking-wide uppercase text-blue-600">
                {STEPS[0].title}
              </h3>
              <p className="mt-1 text-[11px] text-[#626B78] leading-relaxed">
                {STEPS[0].desc}
              </p>
            </motion.div>
          </div>

          {/* STEP 2: FOUNDATION (Top Mid-Left - Floating above the Climb & Airplane) */}
          <div
            className="absolute left-[175px] top-[70px] w-[210px] pointer-events-auto"
            onMouseEnter={() => setHoveredIdx(1)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-white p-4.5 shadow-sm transition-all text-left ${
                hoveredIdx === 1
                  ? 'border-sky-500 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/20'
                  : 'border-[#E5E9F0]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-600">
                  02
                </span>
                <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50/80 border border-sky-200/60 px-1.5 py-0.5 rounded">
                  {STEPS[1].tagline}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151922] tracking-wide uppercase text-sky-600">
                {STEPS[1].title}
              </h3>
              <p className="mt-1 text-[11px] text-[#626B78] leading-relaxed">
                {STEPS[1].desc}
              </p>
            </motion.div>
          </div>

          {/* STEP 3: FORGE (Top Center - Above Crest 1) */}
          <div
            className="absolute left-[400px] top-[40px] w-[210px] pointer-events-auto"
            onMouseEnter={() => setHoveredIdx(2)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-white p-4.5 shadow-sm transition-all text-left ${
                hoveredIdx === 2
                  ? 'border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/20'
                  : 'border-[#E5E9F0]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-600">
                  03
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50/80 border border-amber-200/60 px-1.5 py-0.5 rounded">
                  {STEPS[2].tagline}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151922] tracking-wide uppercase text-amber-600">
                {STEPS[2].title}
              </h3>
              <p className="mt-1 text-[11px] text-[#626B78] leading-relaxed">
                {STEPS[2].desc}
              </p>
            </motion.div>
          </div>

          {/* STEP 4: FUEL (Bottom Center - Anchored below the Magenta Hexagon) */}
          <div
            className="absolute left-[545px] top-[455px] w-[215px] pointer-events-auto"
            onMouseEnter={() => setHoveredIdx(3)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-white p-4.5 shadow-sm transition-all text-left ${
                hoveredIdx === 3
                  ? 'border-fuchsia-500 shadow-lg shadow-fuchsia-500/10 ring-1 ring-fuchsia-500/20'
                  : 'border-[#E5E9F0]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-fuchsia-50 border border-fuchsia-200 text-xs font-mono font-bold text-fuchsia-600">
                  04
                </span>
                <span className="text-[10px] font-mono font-bold text-fuchsia-700 bg-fuchsia-50/80 border border-fuchsia-200/60 px-1.5 py-0.5 rounded">
                  {STEPS[3].tagline}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151922] tracking-wide uppercase text-fuchsia-600">
                {STEPS[3].title}
              </h3>
              <p className="mt-1 text-[11px] text-[#626B78] leading-relaxed">
                {STEPS[3].desc}
              </p>
            </motion.div>
          </div>

          {/* STEP 5: FORCE (Top Right - Above Crest 2) */}
          <div
            className="absolute left-[775px] top-[20px] w-[210px] pointer-events-auto"
            onMouseEnter={() => setHoveredIdx(4)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-white p-4.5 shadow-sm transition-all text-left ${
                hoveredIdx === 4
                  ? 'border-emerald-500 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/20'
                  : 'border-[#E5E9F0]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-600">
                  05
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50/80 border border-emerald-200/60 px-1.5 py-0.5 rounded">
                  {STEPS[4].tagline}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151922] tracking-wide uppercase text-emerald-600">
                {STEPS[4].title}
              </h3>
              <p className="mt-1 text-[11px] text-[#626B78] leading-relaxed">
                {STEPS[4].desc}
              </p>
            </motion.div>
          </div>

          {/* STEP 6: FLY (Bottom Right - Anchored below Destination Pin) */}
          <div
            className="absolute left-[970px] top-[295px] w-[215px] pointer-events-auto"
            onMouseEnter={() => setHoveredIdx(5)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-white p-4.5 shadow-sm transition-all text-left ${
                hoveredIdx === 5
                  ? 'border-red-500 shadow-lg shadow-red-500/10 ring-1 ring-red-500/20'
                  : 'border-[#E5E9F0]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-600">
                  06
                </span>
                <span className="text-[10px] font-mono font-bold text-red-700 bg-red-50/80 border border-red-200/60 px-1.5 py-0.5 rounded flex items-center gap-1">
                  Destination
                  <Plane className="h-3 w-3 text-red-500" />
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151922] tracking-wide uppercase text-red-600">
                {STEPS[5].title}
              </h3>
              <p className="mt-1 text-[11px] text-[#626B78] leading-relaxed">
                {STEPS[5].desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. MOBILE & TABLET VIEW: Connected Vertical Flight Timeline (< 1024px)
         ========================================================================= */}
      <div className="lg:hidden relative space-y-4 text-left max-w-xl mx-auto px-4">
        {/* Left vertical dashed path connecting milestones */}
        <div className="absolute top-6 bottom-6 left-9 w-0.5 border-l-2 border-dashed border-[#0284C7] -z-0" />

        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isFirst = idx === 0;
          const isLast = idx === STEPS.length - 1;
          const isHexagon = idx === 3;

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="relative z-10 flex items-start gap-4 rounded-2xl border border-[#E5E9F0] bg-white p-4 shadow-2xs"
            >
              {/* Step indicator node styling matching the flight map */}
              <div
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-xs shadow-xs ${
                  isFirst
                    ? 'bg-white border-2 border-red-500 text-red-500'
                    : isHexagon
                    ? 'bg-fuchsia-600 text-white'
                    : isLast
                    ? 'bg-red-500 text-white'
                    : 'bg-white border-2 border-[#2563EB] text-[#2563EB]'
                }`}
              >
                {isFirst ? (
                  <span>01</span>
                ) : isLast ? (
                  <Plane className="h-4 w-4 text-white" />
                ) : isHexagon ? (
                  <span>04</span>
                ) : (
                  <Icon className="h-4 w-4" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-extrabold text-[#151922] tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <span className={`text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded border ${step.badgeBg} ${step.badgeText} ${step.borderColor}`}>
                    Step {step.number}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#626B78] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
