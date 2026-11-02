import React from 'react';
import { motion } from 'motion/react';

export type SketchVariant =
  | 'courses'
  | 'why-us'
  | 'technologies'
  | 'projects'
  | 'student-success'
  | 'about-contact';

interface SectionMarginSketchesProps {
  variant?: SketchVariant;
}

export const SectionMarginSketches: React.FC<SectionMarginSketchesProps> = ({
  variant = 'courses',
}) => {
  return (
    <>
      {/* =========================================================================
          LEFT MARGIN: SIMPLE TECHNOLOGY & CLOUD INFRASTRUCTURE SKETCHES
         ========================================================================= */}
      <div className="absolute left-3 xl:left-6 2xl:left-12 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:flex flex-col items-center gap-12 z-0">
        {variant === 'courses' && (
          <>
            {/* Simple Cloud with Circuit Trace */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-blue-500/30 hover:text-blue-500/50 transition-colors"
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 32h24a8 8 0 0 0 2-15.7A10 10 0 0 0 20 12a10 10 0 0 0-8.5 4.8A7 7 0 0 0 12 32z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 32v8m-5 0h10" strokeLinecap="round" />
                <circle cx="24" cy="40" r="1.5" fill="currentColor" />
                <circle cx="14" cy="24" r="1" fill="currentColor" />
                <circle cx="34" cy="22" r="1" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Code Brackets in Diamond */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-slate-400/35 hover:text-blue-500/50 transition-colors"
            >
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="8" y="8" width="32" height="32" rx="8" strokeDasharray="3 3" />
                <path d="M19 18l-5 6 5 6M29 18l5 6-5 6M26 16l-4 16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'why-us' && (
          <>
            {/* Simple Git Branch Doodle */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-emerald-500/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="16" cy="14" r="4" />
                <circle cx="16" cy="34" r="4" />
                <circle cx="34" cy="20" r="4" />
                <path d="M16 18v12M16 26q8 0 14-4" strokeLinecap="round" />
                <circle cx="23" cy="26" r="1" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Server Rack Blade */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-slate-400/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="10" y="12" width="28" height="7" rx="2" />
                <rect x="10" y="21" width="28" height="7" rx="2" />
                <rect x="10" y="30" width="28" height="7" rx="2" />
                <circle cx="33" cy="15.5" r="1" fill="currentColor" />
                <circle cx="33" cy="24.5" r="1" fill="currentColor" />
                <circle cx="33" cy="33.5" r="1" fill="currentColor" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'technologies' && (
          <>
            {/* Simple CPU Chip Outline */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-blue-500/35"
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="14" y="14" width="20" height="20" rx="3" />
                <circle cx="24" cy="24" r="3" />
                <path d="M18 10v4M24 10v4M30 10v4M18 34v4M24 34v4M30 34v4M10 18h4M10 24h4M10 30h4M34 18h4M34 24h4M34 30h4" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Simple Terminal Prompt */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-slate-400/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="8" y="12" width="32" height="24" rx="4" />
                <path d="M15 20l4 4-4 4M23 28h8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'projects' && (
          <>
            {/* Simple Isometric Docker Cube */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-indigo-500/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M24 8l14 8v16l-14 8-14-8V16l14-8z" />
                <path d="M24 8v32M10 16l14 8 14-8" />
              </svg>
            </motion.div>

            {/* Simple Database Cylinder */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-slate-400/35"
            >
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <ellipse cx="24" cy="14" rx="14" ry="5" />
                <path d="M10 14v10c0 2.8 6.3 5 14 5s14-2.2 14-5V14" />
                <path d="M10 24v10c0 2.8 6.3 5 14 5s14-2.2 14-5V24" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'student-success' && (
          <>
            {/* Simple Verified Cloud Shield */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-blue-500/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M24 10l12 5v9c0 8-5 13-12 15-7-2-12-7-12-15v-9l12-5z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 24l4 4 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Simple DevOps Infinity Loop */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-emerald-500/35"
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M16 18a6 6 0 1 0 0 12c5 0 8-12 16-12a6 6 0 1 1 0 12c-8 0-11-12-16-12z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="24" r="1.5" fill="currentColor" />
                <circle cx="32" cy="24" r="1.5" fill="currentColor" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'about-contact' && (
          <>
            {/* Simple Global Network Grid */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-blue-500/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="24" cy="24" r="15" />
                <ellipse cx="24" cy="24" rx="7" ry="15" />
                <line x1="9" y1="24" x2="39" y2="24" />
                <circle cx="24" cy="18" r="1.5" fill="currentColor" />
                <circle cx="31" cy="24" r="1.5" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Circuit Board Trace */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-slate-400/35"
            >
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="16" r="3" />
                <circle cx="36" cy="32" r="3" />
                <path d="M15 16h10l7 16h4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="25" cy="16" r="1" fill="currentColor" />
              </svg>
            </motion.div>
          </>
        )}
      </div>

      {/* =========================================================================
          RIGHT MARGIN: SIMPLE ARTIFICIAL INTELLIGENCE & AIOPS SKETCHES
         ========================================================================= */}
      <div className="absolute right-3 xl:right-6 2xl:right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:flex flex-col items-center gap-12 z-0">
        {variant === 'courses' && (
          <>
            {/* Simple Neural Net Synapse Triad */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-purple-500/35 hover:text-purple-500/50 transition-colors"
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="14" cy="16" r="3.5" />
                <circle cx="14" cy="32" r="3.5" />
                <circle cx="34" cy="24" r="4" />
                <path d="M17.5 16l13 6.5M17.5 32l13-6.5" strokeLinecap="round" />
                <circle cx="24" cy="19.5" r="1" fill="currentColor" />
                <circle cx="24" cy="28.5" r="1" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple AI 4-Point Sparkle Cluster */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-indigo-400/35 hover:text-purple-500/50 transition-colors"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                {/* Main 4-point star */}
                <path d="M24 10q0 10 10 10q-10 0-10 10q0-10-10-10q10 0 10-10z" fill="currentColor" fillOpacity="0.12" />
                {/* Secondary mini star */}
                <path d="M36 28q0 4 4 4q-4 0-4 4q0-4-4-4q4 0 4-4z" fill="currentColor" fillOpacity="0.2" />
                {/* Tertiary tiny dot */}
                <circle cx="14" cy="32" r="1.5" fill="currentColor" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'why-us' && (
          <>
            {/* Simple AI Brain with Circuit Nodes */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-purple-500/35"
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M24 12c-4 0-7 2.5-7 6 0 1.5.5 3 1.5 4-2 1-3.5 3-3.5 5.5 0 3.5 3 6.5 7 6.5" strokeLinecap="round" />
                <path d="M24 12c4 0 7 2.5 7 6 0 1.5-.5 3-1.5 4 2 1 3.5 3 3.5 5.5 0 3.5-3 6.5-7 6.5" strokeLinecap="round" />
                <line x1="24" y1="12" x2="24" y2="34" strokeLinecap="round" strokeDasharray="2 2" />
                <circle cx="20" cy="22" r="1.2" fill="currentColor" />
                <circle cx="28" cy="22" r="1.2" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Workflow Automation Loop */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-indigo-400/35"
            >
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M24 12a12 12 0 1 1-9 4" strokeLinecap="round" />
                <path d="M15 10v6h6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="3" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'technologies' && (
          <>
            {/* Simple Atom / Electron Orbital Rings */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-purple-500/35"
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="24" cy="24" r="2.5" fill="currentColor" />
                <ellipse cx="24" cy="24" rx="15" ry="6" transform="rotate(30 24 24)" />
                <ellipse cx="24" cy="24" rx="15" ry="6" transform="rotate(-30 24 24)" />
                <circle cx="34" cy="18" r="1" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Vector Graph Triad */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-indigo-400/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <line x1="14" y1="34" x2="34" y2="34" strokeLinecap="round" />
                <line x1="14" y1="34" x2="14" y2="14" strokeLinecap="round" />
                <path d="M14 34l8-14 8 6 6-12" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="22" cy="20" r="1.5" fill="currentColor" />
                <circle cx="30" cy="26" r="1.5" fill="currentColor" />
                <circle cx="36" cy="14" r="1.5" fill="currentColor" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'projects' && (
          <>
            {/* Simple AI Agent Decision Eye */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-purple-500/35"
            >
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M10 24s6-10 14-10 14 10 14 10-6 10-14 10-14-10-14-10z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="4" />
                <circle cx="24" cy="24" r="1.5" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Pulse Waveform */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-indigo-400/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M8 24h8l4-10 6 20 5-14 3 6h6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="26" cy="34" r="1" fill="currentColor" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'student-success' && (
          <>
            {/* Simple Growth / Metric Rocket Spark */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-purple-500/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 36l12-12m0 0l6-6 4 4-6 6m-4-4l-8 8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 14h6v6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="36" cy="14" r="1" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Neural Constellation */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-indigo-400/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="24" cy="14" r="2.5" />
                <circle cx="14" cy="26" r="2.5" />
                <circle cx="34" cy="26" r="2.5" />
                <circle cx="18" cy="36" r="2.5" />
                <circle cx="30" cy="36" r="2.5" />
                <path d="M24 14l-10 12m10-12l10 12m-10-12v22M14 26l4 10m16-10l-4 10" strokeLinecap="round" strokeDasharray="2 2" />
              </svg>
            </motion.div>
          </>
        )}

        {variant === 'about-contact' && (
          <>
            {/* Simple AI Core / Octagon */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-purple-500/35"
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <polygon points="17,11 31,11 37,17 37,31 31,37 17,37 11,31 11,17" />
                <circle cx="24" cy="24" r="3" />
                <circle cx="24" cy="24" r="1" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Simple Data Spark */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-indigo-400/35"
            >
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M24 12v24M12 24h24" strokeLinecap="round" />
                <circle cx="24" cy="24" r="6" strokeDasharray="3 2" />
              </svg>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

