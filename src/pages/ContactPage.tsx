import React from 'react';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';
import { Mail, Clock, HelpCircle, Sparkles } from 'lucide-react';
import { GLOBAL_FAQS } from '../data/faqsData';
import { motion } from 'motion/react';

export const ContactPage: React.FC = () => {
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
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#151922]">
            Contact 6F IT School
          </h1>
          <p className="mt-3 text-base text-[#626B78] leading-relaxed">
            Have questions regarding curriculum tracks, lab environments, or batch schedules? Send us an enquiry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl border border-[#E5E9F0] bg-white p-7 sm:p-9 shadow-lg shadow-blue-500/5"
          >
            <h2 className="text-xl font-bold text-[#151922] mb-1">Course Enquiry</h2>
            <p className="text-xs text-[#626B78] mb-6">
              Complete the required fields below to receive program outlines and lab access details.
            </p>
            <EnquiryForm />
          </motion.div>

          {/* Right: Contact & FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl border border-[#E5E9F0] bg-[#F7F9FC] p-7 shadow-2xs">
              <h3 className="text-base font-bold text-[#151922] mb-4">
                Admissions Desk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#626B78] block">Electronic Inquiries</span>
                    <strong className="text-[#151922]">admissions@6f-itschool.edu.in</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#626B78] block">Academic Office Hours</span>
                    <span className="text-[#151922] font-semibold">Mon – Sat: 9:00 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="rounded-3xl border border-[#E5E9F0] bg-white p-7 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#151922] mb-4 flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-[#2563EB]" />
                Frequently Inquired
              </h4>
              <ul className="space-y-3 text-xs text-[#626B78]">
                {GLOBAL_FAQS.slice(0, 3).map((faq) => (
                  <li key={faq.id} className="border-b border-[#E5E9F0] pb-3 last:border-b-0 last:pb-0">
                    <strong className="text-[#151922] block mb-1">{faq.question}</strong>
                    <span className="line-clamp-2 leading-relaxed">{faq.answer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
