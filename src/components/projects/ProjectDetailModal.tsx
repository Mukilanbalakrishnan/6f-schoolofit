import React from 'react';
import type { StudentProject } from '../../types';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Cloud,
  GitMerge,
  Bot,
  ArrowRight,
  ShieldCheck,
  FolderGit2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEnquiry } from '../../context/EnquiryContext';

interface ProjectDetailModalProps {
  project: StudentProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const { openEnquiryModal } = useEnquiry();

  if (!project) return null;

  const getTrackIcon = () => {
    if (project.category.includes('AWS')) return <Cloud className="h-5 w-5 text-[#2563EB]" />;
    if (project.category.includes('Azure')) return <GitMerge className="h-5 w-5 text-sky-600" />;
    return <Bot className="h-5 w-5 text-indigo-600" />;
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm overflow-y-auto"
      >
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 360 }}
          className="relative z-10 w-full max-w-2xl rounded-3xl border border-[#E5E9F0] bg-white shadow-2xl overflow-hidden text-left my-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-7 border-b border-[#E5E9F0] bg-[#F7F9FC]">
            <div className="flex items-start gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#E5E9F0] shadow-2xs">
                {getTrackIcon()}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#2563EB]">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Production Grade Capstone</span>
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#151922] leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E5E9F0] text-[#626B78] hover:text-[#151922] hover:bg-[#E5E9F0]/60 transition-colors cursor-pointer ml-3"
              aria-label="Close project modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7 space-y-6 max-h-[calc(85vh-180px)] overflow-y-auto">
            {/* Overview Paragraph */}
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#2563EB] tracking-wider block mb-1">
                Project Overview
              </span>
              <p className="text-xs sm:text-sm text-[#626B78] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Blueprint Summary */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-900 text-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2.5">
                <Cpu className="h-4 w-4 text-sky-400" />
                <h4 className="text-xs font-mono font-bold uppercase text-sky-400 tracking-wider">
                  Architecture & Pipeline Execution
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {project.architectureSummary}
              </p>
            </div>

            {/* Key Verified Outcomes */}
            {project.keyOutcomes && project.keyOutcomes.length > 0 && (
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#151922] tracking-wider block mb-2.5">
                  Verified Engineering Deliverables
                </span>
                <ul className="space-y-2">
                  {project.keyOutcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#626B78] bg-[#F7F9FC] border border-[#E5E9F0] p-3 rounded-xl"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Toolchain Stack */}
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#151922] tracking-wider block mb-2.5">
                Technology Toolchain Implemented
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E9F0] bg-white px-3 py-1 text-xs font-bold text-[#151922] shadow-2xs"
                  >
                    <Layers className="h-3 w-3 text-[#2563EB]" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 sm:p-6 bg-[#F7F9FC] border-t border-[#E5E9F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-xs text-[#626B78] font-medium flex items-center gap-1.5">
              <FolderGit2 className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Available in course repository</span>
            </span>

            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E9F0] bg-white px-4 py-2 text-xs font-bold text-[#151922] hover:bg-[#E5E9F0]/60 transition-colors shadow-2xs"
                >
                  <span>Repository</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#626B78]" />
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openEnquiryModal();
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2 text-xs font-bold transition-all shadow-md shadow-blue-500/15 cursor-pointer"
              >
                <span>Enquire This Track</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
