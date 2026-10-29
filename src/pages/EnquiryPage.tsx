import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { motion } from 'motion/react';

export const EnquiryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course') || '';

  const matchedCourse = COURSES.find(
    (c) =>
      c.slug.toLowerCase() === courseParam.toLowerCase() ||
      c.title.toLowerCase() === courseParam.toLowerCase()
  );

  const initialCourseTitle = matchedCourse ? matchedCourse.title : courseParam;

  return (
    <div className="w-full bg-[#F7F9FC] py-12 lg:py-20 text-[#151922] text-left">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#626B78] hover:text-[#151922] mb-6 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Courses</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-[#E5E9F0] bg-white p-7 sm:p-10 shadow-lg shadow-blue-500/5"
        >
          <div className="border-b border-[#E5E9F0] pb-5 mb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-0.5 text-xs font-bold text-[#2563EB] mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Admissions Desk</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#151922]">
              Course Enquiry
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#626B78]">
              Fill out the 5 fields below to receive verified syllabus outlines and upcoming cohort schedules.
            </p>

            {initialCourseTitle && (
              <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-3.5 py-1 text-xs font-bold text-[#2563EB]">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Selected: {initialCourseTitle}</span>
              </div>
            )}
          </div>

          <EnquiryForm initialCourse={initialCourseTitle} />
        </motion.div>
      </div>
    </div>
  );
};
