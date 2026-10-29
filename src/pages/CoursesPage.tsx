import React, { useState, useMemo } from 'react';
import { COURSES } from '../data/coursesData';
import { CourseCard } from '../components/courses/CourseCard';
import { useEnquiry } from '../context/EnquiryContext';
import { Search, Filter, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openEnquiryModal } = useEnquiry();

  const categories = ['All', 'AWS DevOps', 'Azure DevOps', 'AIOps'];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        course.title.toLowerCase().includes(query) ||
        course.summary.toLowerCase().includes(query) ||
        course.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full bg-white text-[#151922] py-12 lg:py-16 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-3.5 py-1 text-xs font-bold text-[#2563EB] mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Curriculum Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
            Technology Programs
          </h1>
          <p className="mt-3 text-base text-[#626B78] leading-relaxed">
            Practical, lab-driven programs designed to build verified engineering skills.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-4 sm:p-5 mb-10 shadow-2xs"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#626B78]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs by technology or keywords (e.g. AWS, Docker, Python)..."
                className="w-full rounded-2xl border border-[#E5E9F0] bg-white pl-10 pr-4 py-2.5 text-xs text-[#151922] placeholder-[#626B78]/60 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all shadow-2xs"
              />
            </div>

            {(searchQuery || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="rounded-xl border border-[#E5E9F0] bg-white px-4 py-2 text-xs font-bold text-[#626B78] hover:text-[#151922] shadow-2xs transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 pt-3 border-t border-[#E5E9F0] flex items-center gap-2 overflow-x-auto">
            <Filter className="h-3.5 w-3.5 text-[#626B78] shrink-0" />
            <div className="flex items-center gap-1.5 flex-nowrap">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#151922] text-white shadow-xs'
                      : 'bg-white text-[#626B78] border border-[#E5E9F0] hover:bg-[#E5E9F0]/60 hover:text-[#151922]'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Grid with Staggered Fade Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-[#E5E9F0] bg-gradient-to-r from-[#F7F9FC] to-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm"
        >
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#151922]">
              Need guidance on which curriculum suits your background?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#626B78]">
              Connect with our technical mentors for a personalized recommendation.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => openEnquiryModal()}
            className="rounded-xl bg-[#2563EB] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all shrink-0"
          >
            Request Advice
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
