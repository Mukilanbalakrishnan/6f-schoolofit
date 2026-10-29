import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full bg-white py-12 lg:py-16 text-[#151922] text-left">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Compliance Notice Banner */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-10 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <span className="font-bold block mb-0.5">Draft Legal Document — For Review Only:</span>
              This Privacy Policy draft is a placeholder document developed for frontend demonstration purposes.
              It does not constitute formal legal counsel and must undergo institutional review prior to production deployment.
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Governance & Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#151922]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#626B78]">
              Effective Date: October 2026 | Document Status: Draft under Institutional Review
            </p>
          </div>

          <div className="max-w-none text-xs sm:text-sm text-[#626B78] space-y-6 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">1. Overview</h2>
              <p>
                6F IT School ("we", "our", or "the Institution") values the privacy of its prospective students,
                enrolled learners, and visitors. This Privacy Policy describes how information is collected, used,
                and managed through our public website.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">2. Information We Collect</h2>
              <p>
                When you submit an enquiry through our five-field form, we collect the following prospective learner details:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-[#151922]">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Telephone / Mobile Number</li>
                <li>Course of Interest</li>
                <li>Enquiry Message / Learning Objectives</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">3. How Information Is Used</h2>
              <p>
                Information collected through our enquiry flow is intended solely to provide academic program details,
                share syllabus specifications, and notify prospective learners of upcoming cohort dates.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">4. Frontend Demonstration Limitation</h2>
              <p>
                In the current frontend implementation phase of this website, no data entered into the enquiry form is
                persisted into a permanent database or transmitted across external network services. All validation and
                submission acknowledgments occur exclusively within client-side browser memory.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-[#E5E9F0] flex justify-between items-center text-xs text-[#626B78]">
            <Link to="/" className="text-[#2563EB] hover:underline font-bold">
              Return to Homepage
            </Link>
            <Link to="/terms" className="text-[#2563EB] hover:underline font-bold">
              View Terms and Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
