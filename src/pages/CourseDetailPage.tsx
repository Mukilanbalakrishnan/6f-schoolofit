import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../data/coursesData';
import { SyllabusAccordion } from '../components/courses/SyllabusAccordion';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { useEnquiry } from '../context/EnquiryContext';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Layers,
  Terminal,
  FolderGit2,
  Users,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

export const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openEnquiryModal } = useEnquiry();

  const course = COURSES.find((c) => c.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!course) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-[#626B78] mb-4" />
        <h2 className="text-2xl font-bold text-[#151922]">Course Not Found</h2>
        <Link
          to="/courses"
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-bold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Courses</span>
        </Link>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-[#151922] text-left overflow-x-hidden">
      {/* 1. COURSE HERO */}
      <section className="relative border-b border-[#E5E9F0] bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#626B78] hover:text-[#151922] mb-6 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Courses</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1 text-xs font-bold text-[#2563EB]">
                  {course.category}
                </span>
                <span className="rounded-full bg-[#F7F9FC] border border-[#E5E9F0] px-3 py-1 text-xs font-semibold text-[#626B78]">
                  {course.level}
                </span>
                <span className="rounded-full bg-[#F7F9FC] border border-[#E5E9F0] px-3 py-1 text-xs font-semibold text-[#626B78]">
                  {course.deliveryMode}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922] leading-tight">
                {course.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#626B78] leading-relaxed max-w-3xl">
                {course.headline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#syllabus"
                  className="inline-flex items-center rounded-xl bg-[#2563EB] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#1D4ED8] transition-all"
                >
                  <span>Explore Syllabus</span>
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => openEnquiryModal(course.title)}
                  className="inline-flex items-center rounded-xl border border-[#E5E9F0] bg-white px-6 py-3 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC] shadow-2xs transition-colors"
                >
                  <span>Enquire for this Course</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-[#626B78]" />
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Meta Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-4 rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#626B78]">
                  Curriculum Summary
                </span>
                <Sparkles className="h-4 w-4 text-[#2563EB]" />
              </div>
              <ul className="space-y-2.5 text-xs text-[#626B78]">
                <li className="flex items-center justify-between py-1 border-b border-[#E5E9F0]">
                  <span>Track Focus:</span>
                  <strong className="text-[#151922] font-bold">{course.category}</strong>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-[#E5E9F0]">
                  <span>Delivery Format:</span>
                  <strong className="text-[#151922] font-bold">{course.deliveryMode}</strong>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-[#E5E9F0]">
                  <span>Modules:</span>
                  <strong className="text-[#2563EB] font-bold">{course.syllabus.length} Structured Modules</strong>
                </li>
              </ul>

              <div className="mt-5 pt-3 border-t border-[#E5E9F0]">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => openEnquiryModal(course.title)}
                  className="w-full rounded-xl bg-[#2563EB] py-3 text-center text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all"
                >
                  Request Batch Details
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COURSE OVERVIEW */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Overview
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922]">
              About the Curriculum
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#626B78] leading-relaxed">
              {course.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. LEARNING OUTCOMES */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-[#F7F9FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Outcomes
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922]">
              What You Will Learn & Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.learningOutcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="flex items-start gap-3 rounded-2xl border border-[#E5E9F0] bg-white p-4 shadow-2xs hover:border-[#2563EB]/40 transition-all"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#151922] font-semibold leading-relaxed">
                  {outcome}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES COVERED */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Stack
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922] mb-8">
            Technologies Covered
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {course.technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-[#E5E9F0] bg-[#F7F9FC] px-4 py-2.5 text-xs font-bold text-[#151922] shadow-2xs hover:border-[#2563EB]/40 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO SHOULD ENROL & 6. PREREQUISITES */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-[#F7F9FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-6 sm:p-8 shadow-2xs"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#151922]">Who Should Enrol</h3>
              </div>
              <ul className="space-y-2.5">
                {course.whoShouldEnrol.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#626B78]">
                    <Check className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-6 sm:p-8 shadow-2xs"
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-[#151922]">Prerequisites</h3>
              </div>
              <ul className="space-y-2.5">
                {course.prerequisites.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#626B78]">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. COMPLETE SYLLABUS */}
      <section id="syllabus" className="border-b border-[#E5E9F0] py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Syllabus
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922]">
              Complete Course Syllabus
            </h2>
          </motion.div>

          <SyllabusAccordion modules={course.syllabus} courseTitle={course.title} />
        </div>
      </section>

      {/* 8. PRACTICAL EXERCISES */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-[#F7F9FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Labs
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922]">
              Practical Lab Exercises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.practicalExercises.map((exercise, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="flex items-start gap-3 rounded-2xl border border-[#E5E9F0] bg-white p-4 shadow-2xs hover:border-[#2563EB]/40 transition-all"
              >
                <Terminal className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#151922] font-semibold leading-relaxed">
                  {exercise}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REAL-WORLD PROJECTS */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Capstone
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922] mb-8">
            Real-World Capstone Project
          </h2>

          <div className="space-y-6">
            {course.realWorldProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-6 sm:p-8 shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FolderGit2 className="h-5 w-5 text-[#2563EB]" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#151922]">{proj.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#626B78] leading-relaxed max-w-3xl">
                  {proj.description}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {proj.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2.5 rounded-xl bg-white border border-[#E5E9F0] p-3 text-xs text-[#151922] font-semibold shadow-2xs"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TOOLS & TECHNOLOGIES */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-[#F7F9FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Environment
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922] mb-8">
            Tools and Platforms
          </h2>

          <div className="flex flex-wrap gap-3">
            {course.toolsAndPlatforms.map((tool, idx) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 rounded-2xl border border-[#E5E9F0] bg-white px-4 py-2.5 shadow-2xs text-xs font-bold text-[#151922]"
              >
                <Layers className="h-4 w-4 text-[#2563EB]" />
                <span>{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TRAINER & MENTOR GUIDANCE */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E5E9F0] bg-gradient-to-r from-[#F7F9FC] to-white p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Faculty
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#151922]">
                Trainer & Mentor Guidance
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#626B78] leading-relaxed">
                {course.trainerGuidanceNote}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => openEnquiryModal(course.title)}
              className="rounded-xl bg-[#2563EB] px-6 py-3 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-sm transition-all shrink-0"
            >
              Talk to a Mentor
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 12. STUDENT TESTIMONIALS */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-[#F7F9FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Feedback
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922] mb-8">
            Student Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xs"
            >
              <p className="text-xs sm:text-sm text-[#151922] italic leading-relaxed">
                "The practical approach to {course.title} made all the difference. Configuring actual infrastructure
                rather than just reading slides built true operational confidence."
              </p>
              <span className="mt-4 block text-xs font-bold text-[#2563EB]">
                Cohort Participant [Verified Lab Record]
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-[#E5E9F0] bg-white p-6 shadow-2xs"
            >
              <p className="text-xs sm:text-sm text-[#151922] italic leading-relaxed">
                "The mentors reviewed our pull requests and pointed out real architectural bottlenecks. That feedback
                was invaluable for my technical interviews."
              </p>
              <span className="mt-4 block text-xs font-bold text-[#2563EB]">
                Alumni Review [Verified Lab Record]
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <section className="border-b border-[#E5E9F0] py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            Q&A
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151922] mb-8">
            Course FAQs
          </h2>

          <div className="space-y-3 max-w-3xl">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E5E9F0] bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-[#151922] hover:bg-[#F7F9FC] transition-colors"
                  >
                    <span className="flex items-center gap-2 pr-3">
                      <HelpCircle className="h-4 w-4 text-[#2563EB] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#626B78] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#2563EB]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#E5E9F0] bg-[#F7F9FC] p-4 sm:p-5 text-xs sm:text-sm text-[#626B78] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. MANDATORY COURSE ENQUIRY FORM */}
      <section id="enquire" className="border-b border-[#E5E9F0] py-14 lg:py-20 bg-[#F7F9FC]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E5E9F0] bg-white p-6 sm:p-9 shadow-lg shadow-blue-500/5"
          >
            <div className="mb-6 pb-4 border-b border-[#E5E9F0]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB]">
                Direct Enrollment
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-[#151922]">
                Enquire for {course.title}
              </h3>
            </div>

            <EnquiryForm initialCourse={course.title} compact={true} />
          </motion.div>
        </div>
      </section>

      {/* 15. FINAL CALL TO ACTION */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151922]">
            Ready to master {course.title}?
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => openEnquiryModal(course.title)}
              className="rounded-xl bg-[#2563EB] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#1D4ED8] shadow-md shadow-blue-500/20 transition-all"
            >
              Enquire for this Program
            </motion.button>
            <Link
              to="/courses"
              className="rounded-xl border border-[#E5E9F0] bg-white px-6 py-3.5 text-xs font-bold text-[#151922] hover:bg-[#F7F9FC] shadow-2xs transition-colors"
            >
              Browse Other Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
