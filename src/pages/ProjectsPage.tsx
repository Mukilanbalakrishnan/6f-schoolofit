import React, { useState } from 'react';
import { STUDENT_PROJECTS } from '../data/projectsData';
import { useEnquiry } from '../context/EnquiryContext';
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Filter,
  Layers,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openEnquiryModal } = useEnquiry();

  const categories = [
    'All',
    'Cloud Infrastructure',
    'DevOps & GitOps',
    'Agentic AI',
    'Full Stack Web',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? STUDENT_PROJECTS
      : STUDENT_PROJECTS.filter((p) => p.category === selectedCategory);

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
            <span>Student Workloads</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
            Student Capstone Projects
          </h1>
          <p className="mt-3 text-base text-[#626B78] leading-relaxed">
            Every 6F IT School program concludes with an audited production capstone proving real-world competence.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pb-6 overflow-x-auto border-b border-[#E5E9F0] mb-10">
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
                    : 'bg-[#F7F9FC] text-[#626B78] hover:bg-[#E5E9F0] hover:text-[#151922]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-7 sm:p-8 shadow-2xs hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-xs font-bold text-[#2563EB]">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified Capstone
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#151922]">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#626B78] leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 rounded-2xl border border-[#E5E9F0] bg-[#F7F9FC] p-4 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#151922] mb-1">
                    <Layers className="h-4 w-4 text-[#2563EB]" />
                    <span>Architecture Highlights:</span>
                  </div>
                  <p className="text-[#626B78] text-[11px] sm:text-xs leading-relaxed">
                    {project.architectureSummary}
                  </p>
                </div>

                <div className="mt-4 space-y-1.5">
                  {project.keyOutcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-[#151922]">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 pt-4 border-t border-[#E5E9F0]">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#F7F9FC] border border-[#E5E9F0] px-2.5 py-1 text-[10px] font-bold text-[#151922]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#151922] hover:text-[#2563EB] transition-colors"
                  >
                    <FolderGit2 className="h-4 w-4" />
                    <span>View Repository Spec</span>
                    <ExternalLink className="h-3 w-3 text-[#626B78]" />
                  </a>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => openEnquiryModal()}
                    className="rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all"
                  >
                    Enquire to Build
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-[#E5E9F0] bg-gradient-to-r from-[#F7F9FC] to-white p-8 sm:p-10 text-center shadow-sm"
        >
          <h3 className="text-xl font-bold text-[#151922]">
            Ready to build a production capstone project?
          </h3>
          <div className="mt-5 flex justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => openEnquiryModal()}
              className="rounded-xl bg-[#2563EB] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all"
            >
              Enquire for Lab Cohorts
            </motion.button>
            <Link
              to="/courses"
              className="rounded-xl border border-[#E5E9F0] bg-white px-6 py-2.5 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC] shadow-2xs transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
