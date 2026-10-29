import React, { useState } from 'react';
import type { SyllabusModule } from '../../types';
import { ChevronDown, Check, Terminal, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SyllabusAccordionProps {
  modules: SyllabusModule[];
  courseTitle: string;
}

export const SyllabusAccordion: React.FC<SyllabusAccordionProps> = ({ modules }) => {
  const [openModuleIds, setOpenModuleIds] = useState<Set<string>>(
    new Set(modules.length > 0 ? [modules[0].id] : [])
  );

  const toggleModule = (id: string) => {
    setOpenModuleIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenModuleIds(new Set(modules.map((m) => m.id)));
  };

  const collapseAll = () => {
    setOpenModuleIds(new Set());
  };

  return (
    <div className="w-full space-y-3 text-left">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E9F0] pb-3">
        <div className="text-xs font-bold text-[#151922] uppercase tracking-wider">
          Curriculum Overview: <span className="text-[#2563EB]">{modules.length} Modules</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={expandAll}
            className="rounded-md px-2.5 py-1 text-xs font-semibold text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] transition-colors border border-[#E5E9F0]"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="rounded-md px-2.5 py-1 text-xs font-semibold text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] transition-colors border border-[#E5E9F0]"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion Modules */}
      <div className="space-y-2.5">
        {modules.map((mod) => {
          const isOpen = openModuleIds.has(mod.id);
          return (
            <div
              key={mod.id}
              className={`rounded-xl border transition-all ${
                isOpen
                  ? 'border-[#2563EB]/40 bg-white shadow-xs'
                  : 'border-[#E5E9F0] bg-white hover:border-[#CBD5E1]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleModule(mod.id)}
                aria-expanded={isOpen}
                aria-controls={`module-content-${mod.id}`}
                className="flex w-full items-center justify-between p-4 sm:p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 rounded-xl"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                      isOpen
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'bg-[#F7F9FC] text-[#626B78] border border-[#E5E9F0]'
                    }`}
                  >
                    {mod.moduleNumber < 10 ? `0${mod.moduleNumber}` : mod.moduleNumber}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#151922]">
                      {mod.title}
                    </h4>
                    {mod.durationEstimate && (
                      <span className="text-[11px] text-[#626B78]">
                        Timeline: {mod.durationEstimate}
                      </span>
                    )}
                  </div>
                </div>

                <ChevronDown
                  className={`h-4 w-4 text-[#626B78] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#2563EB]' : ''
                  }`}
                />
              </button>

              {/* Animated Module Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`module-content-${mod.id}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#E5E9F0] p-4 sm:p-5 bg-[#F7F9FC]/40 space-y-4">
                      {/* Topics */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-2 text-xs font-bold uppercase tracking-wider text-[#151922]">
                          <BookOpen className="h-3.5 w-3.5 text-[#2563EB]" />
                          <span>Topics Covered</span>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                          {mod.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-[#151922]">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#2563EB]" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practical Exercises */}
                      {mod.practicalExercises && mod.practicalExercises.length > 0 && (
                        <div className="rounded-lg border border-[#E5E9F0] bg-white p-3">
                          <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                            <Terminal className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Practical Lab Exercises</span>
                          </div>
                          <ul className="space-y-1">
                            {mod.practicalExercises.map((exercise, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-[#626B78]">
                                <span className="text-emerald-600 font-mono text-[10px] font-bold shrink-0">❯</span>
                                <span>{exercise}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Outcomes */}
                      {mod.learningOutcomes && mod.learningOutcomes.length > 0 && (
                        <div>
                          <div className="flex items-center gap-1.5 mb-1 text-xs font-bold uppercase tracking-wider text-[#151922]">
                            <Check className="h-3.5 w-3.5 text-[#2563EB]" />
                            <span>Core Competencies</span>
                          </div>
                          <div className="space-y-1">
                            {mod.learningOutcomes.map((outcome, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-[#151922]">
                                <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
                                <span>{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech stack */}
                      {mod.technologies && mod.technologies.length > 0 && (
                        <div className="pt-2 border-t border-[#E5E9F0] flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] font-semibold text-[#626B78] flex items-center gap-1">
                            <Layers className="h-3 w-3" /> Stack:
                          </span>
                          {mod.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-white border border-[#E5E9F0] px-2 py-0.5 text-[10px] font-semibold text-[#151922]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
