import React, { useEffect } from 'react';
import { useEnquiry } from '../../context/EnquiryContext';
import { EnquiryForm } from './EnquiryForm';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EnquiryModal: React.FC = () => {
  const { isModalOpen, preselectedCourse, closeEnquiryModal } = useEnquiry();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeEnquiryModal]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Animated Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#151922]/50 backdrop-blur-sm"
            onClick={closeEnquiryModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg rounded-2xl border border-[#E5E9F0] bg-white p-6 sm:p-7 shadow-2xl z-10 my-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E9F0]">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-2.5 py-0.5 text-xs font-semibold text-[#2563EB] mb-1.5">
                  <Sparkles className="h-3 w-3" />
                  <span>Get Program Details & Syllabus</span>
                </div>
                <h3 id="enquiry-modal-title" className="text-xl font-bold text-[#151922]">
                  Enquire at 6F IT School
                </h3>
                <p className="mt-0.5 text-xs text-[#626B78]">
                  Speak with our mentors about lab access, batch schedules, and curriculum details.
                </p>
              </div>

              <button
                type="button"
                onClick={closeEnquiryModal}
                className="rounded-lg p-1.5 text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <div className="mt-5">
              <EnquiryForm
                initialCourse={preselectedCourse}
                onSuccess={closeEnquiryModal}
                compact={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
