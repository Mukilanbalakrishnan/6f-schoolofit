import type { FAQItem } from '../types';

export const GLOBAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Learning Methodology',
    question: 'How are courses at 6F IT School structured?',
    answer:
      'Our programs are structured around practical lab work and project delivery. Rather than passive theory lectures, each session pairs technical concepts with guided hands-on exercises in real environments (AWS console, terminal, Kubernetes, IDE).',
  },
  {
    id: 'faq-2',
    category: 'Prerequisites',
    question: 'Do I need prior experience or an engineering degree to enrol?',
    answer:
      'Our programs start with foundational concepts and assume basic computer literacy and problem-solving aptitude. Advanced programs like Agentic AI or DevOps build upon fundamentals with guided hands-on exercises in real environments.',
  },
  {
    id: 'faq-3',
    category: 'Courses',
    question: 'Will I receive guidance from mentors during projects?',
    answer:
      'Yes. Mentors and trainers conduct live reviews, review pull requests, assist with troubleshooting during lab exercises, and offer architecture feedback throughout all capstone projects.',
  },
  {
    id: 'faq-4',
    category: 'Enquiries',
    question: 'How do I get detailed syllabus documents and schedule information?',
    answer:
      'Submit an enquiry using our 5-field form specifying your course of interest. Our admissions team will share the verified schedule, lab access details, and answer any specific questions you have.',
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'What hardware or software do I need to attend the courses?',
    answer:
      'You will need a reliable laptop or desktop computer (Windows, macOS, or Linux) with at least 8GB RAM (16GB recommended for local Docker/Kubernetes labs) and a stable internet connection. All cloud resources and lab guides are provided during class.',
  },
  {
    id: 'faq-6',
    category: 'Learning Methodology',
    question: 'What is the capstone project requirement for course completion?',
    answer:
      'Every course culminates in a substantial real-world capstone project that is reviewed for architectural soundness, code quality, security standards, and operational resilience. Students leave with a verified public GitHub repository and live deployment.',
  },
];
