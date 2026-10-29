import React, { useState, useEffect } from 'react';
import type { EnquiryFormData, FormErrors } from '../../types';
import { COURSES } from '../../data/coursesData';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

interface EnquiryFormProps {
  initialCourse?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialCourse = '',
  onSuccess,
  compact = false,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    courseInterestedIn: initialCourse,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, courseInterestedIn: initialCourse }));
    }
  }, [initialCourse]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Min 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email';
    }

    const phoneClean = formData.phoneNumber.replace(/[\s\-().]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (phoneClean.length < 10 || phoneClean.length > 15 || !/^\+?\d+$/.test(phoneClean)) {
      newErrors.phoneNumber = 'Valid 10-digit number required';
    }

    if (!formData.courseInterestedIn) {
      newErrors.courseInterestedIn = 'Please select a course';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Brief message required (min 5 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 750));
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        courseInterestedIn: initialCourse || '',
        message: '',
      });
      setErrors({});

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full text-left">
      {submitStatus === 'success' ? (
        <div
          role="alert"
          className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-5 text-left animate-in fade-in duration-200"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-emerald-900">Enquiry Received!</h4>
              <p className="mt-1 text-xs text-emerald-800 leading-relaxed">
                Thank you for your enquiry. Your details have been received in this frontend demo. Our academic team
                will share syllabus schedules with you.
              </p>
              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="mt-3 text-xs font-semibold text-emerald-900 underline underline-offset-4 hover:text-emerald-950"
              >
                Send another enquiry
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
          {submitStatus === 'error' && (
            <div role="alert" className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-800">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
              <span>Simulation error occurred. Please try submitting again.</span>
            </div>
          )}

          {/* Fields 1 & 2: Name and Email */}
          <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#151922] mb-1">
                Full Name <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Rahul Sharma"
                className={`w-full rounded-lg border bg-white px-3 py-2 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#151922] mb-1">
                Email Address <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className={`w-full rounded-lg border bg-white px-3 py-2 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.email ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Fields 3 & 4: Phone and Course */}
          <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
            <div>
              <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#151922] mb-1">
                Phone Number <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full rounded-lg border bg-white px-3 py-2 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.phoneNumber ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              />
              {errors.phoneNumber && <p className="mt-1 text-[11px] text-red-600">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="courseInterestedIn" className="block text-xs font-semibold text-[#151922] mb-1">
                Course Interested In <span className="text-[#2563EB]">*</span>
              </label>
              <select
                id="courseInterestedIn"
                name="courseInterestedIn"
                value={formData.courseInterestedIn}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-xs text-[#151922] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.courseInterestedIn ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              >
                <option value="">Select a course</option>
                {COURSES.map((course) => (
                  <option key={course.id} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
              {errors.courseInterestedIn && (
                <p className="mt-1 text-[11px] text-red-600">{errors.courseInterestedIn}</p>
              )}
            </div>
          </div>

          {/* Field 5: Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#151922] mb-1">
              Message <span className="text-[#2563EB]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={compact ? 2 : 3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us which skills you want to learn or ask any questions..."
              className={`w-full rounded-lg border bg-white px-3 py-2 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                errors.message ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
              }`}
            />
            {errors.message && <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>}
          </div>

          {/* Submit button */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#2563EB] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1D4ED8] transition-all disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <Send className="h-3 w-3" />
                </>
              )}
            </button>
            <span className="mt-1.5 block text-center text-[10px] text-[#626B78]">
              Frontend demo mode. Free syllabus download details sent on request.
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
