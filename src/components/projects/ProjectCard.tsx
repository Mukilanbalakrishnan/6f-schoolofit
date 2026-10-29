import React from 'react';
import type { StudentProject } from '../../types';
import { Cloud, GitMerge, Bot, ArrowRight, Layers, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  project: StudentProject;
  onInspect: (project: StudentProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  const getTrackIcon = () => {
    if (project.category.includes('AWS')) return <Cloud className="h-5 w-5 text-[#2563EB]" />;
    if (project.category.includes('Azure')) return <GitMerge className="h-5 w-5 text-sky-600" />;
    return <Bot className="h-5 w-5 text-indigo-600" />;
  };

  const getTrackAccent = () => {
    if (project.category.includes('AWS')) return 'from-blue-500/10 to-indigo-500/5 text-[#2563EB] border-blue-200';
    if (project.category.includes('Azure')) return 'from-sky-500/10 to-blue-500/5 text-sky-600 border-sky-200';
    return 'from-indigo-500/10 to-violet-500/5 text-indigo-600 border-indigo-200';
  };

  const primaryTech = project.technologies.slice(0, 4);
  const remainingCount = project.technologies.length - primaryTech.length;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => onInspect(project)}
      className="group relative cursor-pointer rounded-3xl border border-[#E5E9F0] bg-white p-6 sm:p-7 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-left flex flex-col justify-between overflow-hidden h-full"
    >
      {/* Top hover accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB]/0 to-transparent group-hover:via-[#2563EB] transition-all duration-300" />

      <div>
        {/* Card Header: Icon & Track Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7F9FC] border border-[#E5E9F0] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all duration-200 shadow-2xs">
              {getTrackIcon()}
            </div>
            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${getTrackAccent()}`}>
              {project.category}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span>Verified</span>
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#151922] leading-snug group-hover:text-[#2563EB] transition-colors">
          {project.title}
        </h3>

        {/* Reduced, Crisp Description */}
        <p className="mt-2 text-xs sm:text-sm text-[#626B78] line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Curated Technology Pills (Max 4 + Counter) */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {primaryTech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded-md border border-[#E5E9F0] bg-[#F7F9FC] px-2 py-0.5 text-[10px] font-semibold text-[#151922]"
            >
              <Layers className="h-2.5 w-2.5 text-[#2563EB]" />
              <span>{tech}</span>
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-bold text-slate-500">
              +{remainingCount} more
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-6 pt-4 border-t border-[#E5E9F0] flex items-center justify-between">
        <span className="text-[11px] font-mono font-medium text-[#626B78] flex items-center gap-1">
          <Cpu className="h-3 w-3 text-[#2563EB]" />
          <span>Full Architecture Spec</span>
        </span>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors">
          <span>Inspect Details</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  );
};
