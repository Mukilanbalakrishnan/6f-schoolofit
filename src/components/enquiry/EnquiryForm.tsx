import React, { useState, useEffect } from 'react';
import type { EnquiryFormData, FormErrors } from '../../types';
import { COURSES } from '../../data/coursesData';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  MapPin,
  Briefcase,
  User,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  MessageSquare,
} from 'lucide-react';

interface EnquiryFormProps {
  initialCourse?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const AGE_CATEGORIES = [
  'Under 25',
  '25 to 30',
  '31 to 40',
  '40 above',
];

export const STATUS_OPTIONS = [
  'Full-time IT employee',
  'Part-time employee',
  'Currently seeking employment',
  'Freelancer or consultant',
  'Other',
];

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialCourse = '',
  onSuccess,
  compact = false,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
    ageCategory: '',
    currentStatus: '',
    otherStatusDetails: '',
    courseInterestedIn: initialCourse,
    message: '',
  });

  const [submittedSummary, setSubmittedSummary] = useState<EnquiryFormData | null>(null);
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
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Minimum 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    const phoneClean = formData.phoneNumber.replace(/[\s\-().]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (phoneClean.length < 10 || phoneClean.length > 15 || !/^\+?\d+$/.test(phoneClean)) {
      newErrors.phoneNumber = 'Valid 10-digit phone number required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location / City is required';
    } else if (formData.location.trim().length < 2) {
      newErrors.location = 'Please enter your city/location';
    }

    if (!formData.courseInterestedIn) {
      newErrors.courseInterestedIn = 'Please select a program';
    }

    if (!formData.ageCategory) {
      newErrors.ageCategory = 'Please select your age category';
    }

    if (!formData.currentStatus) {
      newErrors.currentStatus = 'Please select your current professional status';
    } else if (formData.currentStatus === 'Other' && !formData.otherStatusDetails?.trim()) {
      newErrors.otherStatusDetails = 'Please specify your status';
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

  const handleAgeSelect = (age: string) => {
    setFormData((prev) => ({ ...prev, ageCategory: age }));
    if (errors.ageCategory) {
      setErrors((prev) => ({ ...prev, ageCategory: undefined }));
    }
  };

  const handleStatusSelect = (status: string) => {
    setFormData((prev) => ({ ...prev, currentStatus: status }));
    if (errors.currentStatus) {
      setErrors((prev) => ({ ...prev, currentStatus: undefined }));
    }
    if (status !== 'Other' && errors.otherStatusDetails) {
      setErrors((prev) => ({ ...prev, otherStatusDetails: undefined }));
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
      setSubmittedSummary({ ...formData });
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
        ageCategory: '',
        currentStatus: '',
        otherStatusDetails: '',
        courseInterestedIn: initialCourse || '',
        message: '',
      });
      setErrors({});

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 3000);
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
          className="rounded-2xl border border-emerald-200 bg-emerald-50/90 p-5 sm:p-6 text-left animate-in fade-in duration-200 shadow-xs"
        >
          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600 mt-0.5" />
            <div className="flex-1 space-y-3">
              <div>
                <h4 className="text-base font-bold text-emerald-950">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="mt-1 text-xs text-emerald-800 leading-relaxed">
                  Thank you,{' '}
                  <span className="font-semibold text-emerald-950">
                    {submittedSummary?.fullName || 'Learner'}
                  </span>
                  . Our admissions and engineering mentors have received your enquiry. We will share
                  the full curriculum syllabus, upcoming cohort dates, and lab access details shortly.
                </p>
              </div>

              {/* Submitted Details Summary Card */}
              {submittedSummary && (
                <div className="rounded-xl border border-emerald-200/80 bg-white/90 p-3.5 text-xs text-slate-700 space-y-2">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 pb-1 border-b border-emerald-100">
                    Submitted Profile Details
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-500 block">Program:</span>
                      <span className="font-bold text-slate-900">
                        {submittedSummary.courseInterestedIn}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Location / City:</span>
                      <span className="font-bold text-slate-900">
                        {submittedSummary.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Age Category:</span>
                      <span className="font-bold text-slate-900">
                        {submittedSummary.ageCategory}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Professional Status:</span>
                      <span className="font-bold text-slate-900">
                        {submittedSummary.currentStatus === 'Other'
                          ? submittedSummary.otherStatusDetails || 'Other'
                          : submittedSummary.currentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 underline underline-offset-4 hover:text-emerald-950 cursor-pointer"
              >
                <span>Submit another enquiry</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {submitStatus === 'error' && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800"
            >
              <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
              <span>An error occurred while submitting. Please try again.</span>
            </div>
          )}

          {/* Section 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="fullName" className="flex items-center gap-1.5 text-xs font-semibold text-[#151922] mb-1">
                <User className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Full Name</span>
                <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-semibold text-[#151922] mb-1">
                <Mail className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Email Address</span>
                <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@example.com"
                className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.email ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Section 2: Phone Number & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="phoneNumber" className="flex items-center gap-1.5 text-xs font-semibold text-[#151922] mb-1">
                <Phone className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Phone Number</span>
                <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.phoneNumber ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-[11px] text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="flex items-center gap-1.5 text-xs font-semibold text-[#151922] mb-1">
                <MapPin className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Location / City</span>
                <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Chennai, Bengaluru, Remote..."
                className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                  errors.location ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
                }`}
              />
              {errors.location && <p className="mt-1 text-[11px] text-red-600">{errors.location}</p>}
            </div>
          </div>

          {/* Section 3: Course Interested In */}
          <div>
            <label htmlFor="courseInterestedIn" className="flex items-center gap-1.5 text-xs font-semibold text-[#151922] mb-1">
              <BookOpen className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Program Interested In</span>
              <span className="text-[#2563EB]">*</span>
            </label>
            <select
              id="courseInterestedIn"
              name="courseInterestedIn"
              value={formData.courseInterestedIn}
              onChange={handleChange}
              className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#151922] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                errors.courseInterestedIn ? 'border-red-500' : 'border-[#E5E9F0] focus:border-[#2563EB]'
              }`}
            >
              <option value="">Select a flagship program</option>
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

          {/* Section 4: Age Category */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#151922]">
                <Calendar className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Age Category</span>
                <span className="text-[#2563EB]">*</span>
              </label>
              {formData.ageCategory && (
                <span className="text-[10px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md">
                  Selected: {formData.ageCategory}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {AGE_CATEGORIES.map((category) => {
                const isSelected = formData.ageCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleAgeSelect(category)}
                    className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-3 text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB] shadow-xs'
                        : 'border-[#E5E9F0] bg-white text-[#626B78] hover:border-slate-300 hover:text-[#151922] hover:bg-[#F7F9FC]'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-colors ${
                        isSelected ? 'bg-[#2563EB]' : 'bg-slate-300'
                      }`}
                    />
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
            {errors.ageCategory && (
              <p className="mt-1 text-[11px] text-red-600">{errors.ageCategory}</p>
            )}
          </div>

          {/* Section 5: Current Professional Status (Exact matching specification & screenshot) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#151922]">
                <Briefcase className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>What is your current professional status?</span>
                <span className="text-[#2563EB]">*</span>
              </label>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {STATUS_OPTIONS.map((status) => {
                  const isSelected = formData.currentStatus === status;
                  return (
                    <label
                      key={status}
                      onClick={() => handleStatusSelect(status)}
                      className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-xs cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#2563EB] bg-blue-50/60 text-[#151922] shadow-2xs font-semibold'
                          : 'border-[#E5E9F0] bg-white text-[#626B78] hover:border-slate-300 hover:bg-[#F7F9FC]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="currentStatus"
                        value={status}
                        checked={isSelected}
                        onChange={() => handleStatusSelect(status)}
                        className="h-4 w-4 text-[#2563EB] focus:ring-[#2563EB] border-slate-300 cursor-pointer"
                      />
                      <span className="text-xs leading-tight">{status}</span>
                    </label>
                  );
                })}
              </div>

              {/* Conditional Other Text Input */}
              {formData.currentStatus === 'Other' && (
                <div className="pt-1.5">
                  <input
                    type="text"
                    name="otherStatusDetails"
                    value={formData.otherStatusDetails || ''}
                    onChange={handleChange}
                    placeholder="Other: Please describe your current status..."
                    className={`w-full rounded-xl border bg-white px-3.5 py-2 text-xs text-[#151922] placeholder-[#626B78]/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all ${
                      errors.otherStatusDetails
                        ? 'border-red-500'
                        : 'border-[#E5E9F0] focus:border-[#2563EB]'
                    }`}
                  />
                  {errors.otherStatusDetails && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.otherStatusDetails}</p>
                  )}
                </div>
              )}
            </div>

            {errors.currentStatus && (
              <p className="mt-1 text-[11px] text-red-600">{errors.currentStatus}</p>
            )}
          </div>

          {/* Section 6: Message (Optional Query/Goals) */}
          <div>
            <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-semibold text-[#151922] mb-1">
              <MessageSquare className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Questions or Learning Goals (Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={compact ? 2 : 2.5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your learning goals, target job roles, or any specific questions..."
              className="w-full rounded-xl border border-[#E5E9F0] bg-white px-3.5 py-2 text-xs text-[#151922] placeholder-[#626B78]/50 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/15 hover:bg-[#1D4ED8] transition-all disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Course Enquiry</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
            <span className="mt-2 block text-center text-[10px] text-[#626B78]">
              Free syllabus download & batch schedule details sent upon enquiry.
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
