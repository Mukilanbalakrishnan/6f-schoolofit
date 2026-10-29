import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TECHNOLOGIES } from '../data/technologiesData';
import { COURSES } from '../data/coursesData';
import { useEnquiry } from '../context/EnquiryContext';
import {
  Cloud,
  Box,
  Layers,
  Cpu,
  Terminal,
  GitMerge,
  Activity,
  Code2,
  Bot,
  Users,
  Database,
  Layout,
  FileCode,
  Server,
  GitBranch,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TechnologiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { openEnquiryModal } = useEnquiry();

  const categories = [
    'All',
    'Cloud',
    'DevOps',
    'Programming',
    'Frontend',
    'Backend',
    'Databases',
    'Artificial Intelligence',
    'Automation',
    'Monitoring',
  ];

  const getTechIcon = (key: string) => {
    switch (key) {
      case 'Cloud':
        return Cloud;
      case 'Box':
        return Box;
      case 'Layers':
        return Layers;
      case 'Cpu':
        return Cpu;
      case 'Terminal':
        return Terminal;
      case 'GitMerge':
        return GitMerge;
      case 'Activity':
        return Activity;
      case 'Code2':
        return Code2;
      case 'Bot':
        return Bot;
      case 'Users':
        return Users;
      case 'Database':
        return Database;
      case 'Layout':
        return Layout;
      case 'FileCode':
        return FileCode;
      case 'Server':
        return Server;
      case 'GitBranch':
        return GitBranch;
      default:
        return Cpu;
    }
  };

  const filteredTechnologies = useMemo(() => {
    return TECHNOLOGIES.filter((tech) => {
      const matchesCat =
        selectedCategory === 'All' || tech.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        query === '' ||
        tech.name.toLowerCase().includes(query) ||
        tech.description.toLowerCase().includes(query) ||
        tech.highlights.some((h) => h.toLowerCase().includes(query));
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

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
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tools & Ecosystem</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
            Technology Stack
          </h1>
          <p className="mt-3 text-base text-[#626B78] leading-relaxed">
            Every tool in our curriculum is chosen for its direct relevance to production engineering workloads.
          </p>
        </motion.div>

        {/* Filter bar */}
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
                placeholder="Search tools (e.g. AWS, Docker, Kubernetes, LangGraph)..."
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
                Reset
              </button>
            )}
          </div>

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

        {/* Results grid with animated transitions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredTechnologies.map((tech) => {
              const Icon = getTechIcon(tech.iconKey);
              return (
                <motion.div
                  layout
                  key={tech.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7F9FC] border border-[#E5E9F0] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-2xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-md">
                        {tech.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#151922] group-hover:text-[#2563EB] transition-colors">{tech.name}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#626B78] line-clamp-2 leading-relaxed">
                      {tech.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {tech.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-[#F7F9FC] border border-[#E5E9F0] px-2 py-0.5 text-[10px] font-bold text-[#626B78]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#E5E9F0] flex items-center justify-between">
                    <span className="text-xs text-[#626B78] font-medium">Taught in:</span>
                    <div className="flex flex-wrap gap-1">
                      {tech.relatedCourseSlugs.map((cSlug) => {
                        const matchedCourse = COURSES.find((c) => c.slug === cSlug);
                        return matchedCourse ? (
                          <Link
                            key={cSlug}
                            to={`/courses/${cSlug}`}
                            className="inline-flex items-center gap-1 rounded-md bg-[#F7F9FC] border border-[#E5E9F0] px-2 py-0.5 text-[10px] font-bold text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors"
                          >
                            <span>{matchedCourse.title.split(' ')[0]}</span>
                            <ArrowRight className="h-2.5 w-2.5" />
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-[#E5E9F0] bg-gradient-to-r from-[#F7F9FC] to-white p-8 text-center shadow-sm"
        >
          <h3 className="text-lg font-bold text-[#151922]">
            Want to master these technologies in our hands-on labs?
          </h3>
          <div className="mt-5 flex justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => openEnquiryModal()}
              className="rounded-xl bg-[#2563EB] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all"
            >
              Enquire Now
            </motion.button>
            <Link
              to="/courses"
              className="rounded-xl border border-[#E5E9F0] bg-white px-6 py-2.5 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC] shadow-2xs transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
