import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useEnquiry } from '../../context/EnquiryContext';
import { useScrollLock } from '../../hooks/useScrollLock';
import { EnquiryForm } from './EnquiryForm';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EnquiryModal: React.FC = () => {
  const { isModalOpen, preselectedCourse, closeEnquiryModal } = useEnquiry();
  const location = useLocation();

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

  // Robust multi-browser background scroll lock
  useScrollLock(isModalOpen && location.pathname !== '/enquiry');

  // Don't show modal popup if user is directly on the dedicated /enquiry page
  if (location.pathname === '/enquiry') {
    return null;
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain"
          onWheel={(e) => {
            // Prevent wheel events outside the modal card from leaking
            if (e.target === e.currentTarget) e.preventDefault();
          }}
          onTouchMove={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
          onClick={(e) => {
            // Clicking anywhere outside the modal card closes and reveals content
            if (e.target === e.currentTarget) {
              closeEnquiryModal();
            }
          }}
        >
          {/* Animated Backdrop: Deep veil to focus attention on the enquiry form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            onClick={closeEnquiryModal}
            aria-hidden="true"
          />

          {/* Modal Container: Generous max-w-4xl width with elegant rounded styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 360 }}
            className="relative w-full max-w-4xl rounded-3xl border border-[#E5E9F0] bg-white p-5 sm:p-7 lg:p-8 shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E9F0]">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB]/10 px-2.5 py-0.5 text-xs font-semibold text-[#2563EB] mb-1.5">
                  <Sparkles className="h-3 w-3" />
                  <span>Get Program Details & Syllabus</span>
                </div>
                <h3 id="enquiry-modal-title" className="text-xl sm:text-2xl font-bold text-[#151922]">
                  Enquire at 6F School of IT
                </h3>
                <p className="mt-0.5 text-xs text-[#626B78]">
                  Speak with our mentors about lab access, batch schedules, and curriculum details.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 ml-4">
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-[#E5E9F0] px-3.5 py-2 text-xs font-bold text-[#626B78] hover:text-[#151922] hover:bg-[#F7F9FC] transition-colors cursor-pointer"
                  title="Explore actual website content"
                >
                  <span>Continue to Website</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="rounded-xl p-2 text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
                  aria-label="Close modal and continue to website"
                  title="Close modal and view website"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="mt-4 sm:mt-5">
              <EnquiryForm
                initialCourse={preselectedCourse}
                onSuccess={closeEnquiryModal}
                onCancel={closeEnquiryModal}
                compact={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
