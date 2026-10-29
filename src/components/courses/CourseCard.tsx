import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../../types';
import { useEnquiry } from '../../context/EnquiryContext';
import { Cloud, GitMerge, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
  onViewSyllabus?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onViewSyllabus }) => {
  const { openEnquiryModal } = useEnquiry();

  const renderIcon = () => {
    switch (course.category) {
      case 'Cloud':
      case 'AWS DevOps':
        return <Cloud className="h-5 w-5 text-[#2563EB]" />;
      case 'DevOps':
      case 'Azure DevOps':
        return <GitMerge className="h-5 w-5 text-[#2563EB]" />;
      case 'AI & Automation':
      case 'AIOps':
        return <Bot className="h-5 w-5 text-[#2563EB]" />;
      default:
        return <Cloud className="h-5 w-5 text-[#2563EB]" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between rounded-3xl border border-[#E5E9F0] bg-white p-6 sm:p-7 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-left overflow-hidden h-full"
    >
      {/* Top subtle blue accent bar that glows on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB]/0 to-transparent group-hover:via-[#2563EB] transition-all duration-300" />

      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5E9F0] bg-[#F7F9FC] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all duration-200 shadow-2xs">
            {renderIcon()}
          </div>
          <span className="rounded-full bg-[#F7F9FC] border border-[#E5E9F0] px-3 py-1 text-[11px] font-bold text-[#626B78] group-hover:border-[#2563EB]/20 group-hover:text-[#2563EB] transition-colors">
            {course.deliveryMode}
          </span>
        </div>

        {/* Title and Summary */}
        <h3 className="text-lg sm:text-xl font-bold text-[#151922] leading-snug group-hover:text-[#2563EB] transition-colors">
          <Link to={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#626B78] line-clamp-2 leading-relaxed">
          {course.summary}
        </p>

        {/* Core Learning Outcome */}
        {course.learningOutcomes && course.learningOutcomes.length > 0 && (
          <div className="mt-4 rounded-xl border border-[#E5E9F0] bg-[#F7F9FC]/70 p-3 group-hover:bg-white group-hover:border-[#E5E9F0] transition-colors">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#151922] mb-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>Core Outcome:</span>
            </div>
            <p className="text-xs text-[#626B78] line-clamp-2 leading-relaxed">
              {course.learningOutcomes[0]}
            </p>
          </div>
        )}

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[#F7F9FC] border border-[#E5E9F0] px-2 py-0.5 text-[10px] font-bold text-[#151922] group-hover:border-[#CBD5E1] transition-colors"
            >
              {tech}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span className="rounded-md bg-[#F7F9FC] border border-[#E5E9F0] px-2 py-0.5 text-[10px] font-semibold text-[#626B78]">
              +{course.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-6 pt-4 border-t border-[#E5E9F0] flex items-center justify-between gap-2">
        {onViewSyllabus ? (
          <button
            type="button"
            onClick={() => onViewSyllabus(course)}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer"
          >
            <span>View Syllabus</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
          >
            <span>View Syllabus</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => openEnquiryModal(course.title)}
          className="rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-xs hover:shadow-sm transition-all"
        >
          Enquire
        </motion.button>
      </div>
    </motion.div>
  );
};
