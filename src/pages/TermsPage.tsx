import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TermsPage: React.FC = () => {
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
              <span className="font-bold block mb-0.5">Draft Terms Document — For Review Only:</span>
              These Terms and Conditions are published as a placeholder draft for demonstration purposes and are
              subject to formal institutional review prior to production enrollment.
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Institutional Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#151922]">
              Terms and Conditions
            </h1>
            <p className="text-xs text-[#626B78]">
              Effective Date: October 2026 | Document Status: Draft under Institutional Review
            </p>
          </div>

          <div className="max-w-none text-xs sm:text-sm text-[#626B78] space-y-6 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">1. Agreement to Terms</h2>
              <p>
                By accessing and using the 6F IT School website, you acknowledge that you have read, understood,
                and agreed to be bound by these draft Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">2. Educational Services & Curriculum</h2>
              <p>
                6F IT School provides practical technology training across cloud computing, DevOps engineering,
                agentic artificial intelligence, and software development.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">3. Integrity of Claims</h2>
              <p>
                6F IT School does not provide guaranteed job placements, invented minimum salary assurances, or
                unverified employment affiliations. All student outcomes depend directly upon individual learner effort,
                rigor in lab exercises, and capstone project performance.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#151922] mb-1.5">4. Intellectual Property</h2>
              <p>
                Curriculum structures, course descriptions, code samples, and instructional materials developed by 6F
                IT School are protected intellectual property. Students retain full ownership of individual capstone
                code authored during their training.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-[#E5E9F0] flex justify-between items-center text-xs text-[#626B78]">
            <Link to="/" className="text-[#2563EB] hover:underline font-bold">
              Return to Homepage
            </Link>
            <Link to="/privacy-policy" className="text-[#2563EB] hover:underline font-bold">
              View Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
