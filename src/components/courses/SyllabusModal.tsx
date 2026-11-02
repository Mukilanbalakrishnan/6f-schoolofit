import React, { useEffect } from 'react';
import type { Course } from '../../types';
import { SyllabusAccordion } from './SyllabusAccordion';
import { useEnquiry } from '../../context/EnquiryContext';
import { X, Clock, Layers, CheckCircle2, ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SyllabusModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  isOpen,
  onClose,
}) => {
  const { openEnquiryModal } = useEnquiry();

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="syllabus-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto"
        >
          {/* Backdrop Click */}
          <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border border-[#E5E9F0] bg-white shadow-2xl text-left overflow-hidden my-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#E5E9F0] p-5 sm:p-6 bg-gradient-to-b from-[#F7F9FC] to-white">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="rounded-full bg-[#2563EB]/10 px-3 py-0.5 text-xs font-bold text-[#2563EB]">
                    {course.category}
                  </span>
                  <span className="rounded-full bg-slate-100 border border-[#E5E9F0] px-3 py-0.5 text-xs font-semibold text-[#626B78]">
                    {course.deliveryMode}
                  </span>
                </div>
                <h3
                  id="syllabus-modal-title"
                  className="text-xl sm:text-2xl font-extrabold text-[#151922] tracking-tight"
                >
                  {course.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#626B78] max-w-xl">
                  {course.description}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close syllabus dialog"
                className="rounded-xl border border-[#E5E9F0] p-2 text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] transition-colors shrink-0 ml-3"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 border-b border-[#E5E9F0] bg-[#F7F9FC]/60 px-5 sm:px-6 py-3 text-xs">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[#626B78]">Duration: <strong className="text-[#151922]">{course.trainingDays ? `${course.trainingDays} Days` : `${course.syllabus.length} Modules`}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[#626B78]">Modules: <strong className="text-[#151922]">{course.syllabus.length} Modules</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-[#626B78]">Projects: <strong className="text-[#151922]">{course.projectCount || `${course.realWorldProjects.length} Projects`}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[#626B78]">Level: <strong className="text-[#151922]">{course.level}</strong></span>
              </div>
            </div>

            {/* Scrollable Body with Syllabus Accordion */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* THADAM 75 Curriculum Journey & Learning Model Strip */}
              {course.trainingDays && (
                <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-emerald-50/50 p-4 text-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/60 pb-2">
                    <span className="font-bold text-[#151922] flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-[#2563EB]" />
                      <span>{course.programType || 'Professional Certificate Program'} • {course.preparedBy ? `Prepared by ${course.preparedBy}` : '6F School of IT'}</span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      {course.trainingDays} Days • {course.corePhases || 3} Core Phases
                    </span>
                  </div>

                  {course.curriculumJourney && (
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1.5">
                        Curriculum Journey:
                      </span>
                      <div className="flex flex-wrap items-center gap-1 text-[11px] font-bold text-blue-900">
                        {course.curriculumJourney.map((step, sIdx, arr) => (
                          <React.Fragment key={step}>
                            <span className="bg-white/80 border border-blue-200/70 px-2 py-0.5 rounded-md shadow-2xs">
                              {step}
                            </span>
                            {sIdx < arr.length - 1 && (
                              <span className="text-slate-400 font-normal">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.learningModel && (
                    <div className="text-[11px] text-slate-600">
                      <strong className="text-slate-800">Learning Model:</strong> {course.learningModel}
                    </div>
                  )}
                </div>
              )}
              {/* Learning Outcomes */}
              <div className="rounded-2xl border border-[#E5E9F0] bg-[#F7F9FC] p-4 text-xs">
                <span className="font-bold text-[#151922] block mb-2">Key Competency Goals:</span>
                <ul className="space-y-1.5">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#626B78]">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Covered */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#151922] block mb-2.5">
                  Technologies Mastered in this Track:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {course.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#E5E9F0] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#151922]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Syllabus Accordion */}
              <div>
                <SyllabusAccordion
                  modules={course.syllabus}
                  courseTitle={course.title}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E9F0] bg-white p-4 sm:p-5">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-[#E5E9F0] bg-white px-4 py-2.5 text-xs font-semibold text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] transition-colors"
              >
                Close Syllabus
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  openEnquiryModal(course.title);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#2563EB] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1D4ED8] transition-all"
              >
                <span>Enquire for {course.title}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
