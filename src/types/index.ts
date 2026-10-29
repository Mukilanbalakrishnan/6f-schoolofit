export interface SyllabusModule {
  id: string;
  moduleNumber: number;
  title: string;
  durationEstimate?: string;
  topics: string[];
  practicalExercises: string[];
  learningOutcomes: string[];
  relatedLabOrProject?: string;
  technologies: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: 'Cloud' | 'DevOps' | 'AI & Automation' | 'AWS DevOps' | 'Azure DevOps' | 'AIOps' | string;
  headline: string;
  summary: string;
  description: string;
  level: 'Beginner to Intermediate' | 'Intermediate to Advanced' | 'All Levels';
  deliveryMode: 'Practical Guided Lab' | 'Hybrid Classroom & Lab' | 'Hands-on Bootcamp';
  prerequisites: string[];
  whoShouldEnrol: string[];
  technologies: string[];
  learningOutcomes: string[];
  practicalExercises: string[];
  realWorldProjects: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  syllabus: SyllabusModule[];
  toolsAndPlatforms: string[];
  trainerGuidanceNote: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  isProvisionalCurriculum?: boolean;
  provisionalNotice?: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  category:
    | 'Cloud'
    | 'DevOps'
    | 'Programming'
    | 'Frontend'
    | 'Backend'
    | 'Databases'
    | 'Artificial Intelligence'
    | 'Automation'
    | 'Monitoring'
    | 'Deployment';
  description: string;
  proficiencyLevel: 'Core Curriculum' | 'Specialised Lab' | 'Industry Standard';
  relatedCourseSlugs: string[];
  iconKey: string;
  highlights: string[];
}

export interface StudentProject {
  id: string;
  title: string;
  category:
    | 'AI-Powered AWS DevOps'
    | 'AI-Powered Azure DevOps'
    | 'AI-Powered AIOps (Artificial Intelligence for IT Operations)'
    | 'Cloud Infrastructure'
    | 'DevOps & GitOps'
    | 'Agentic AI'
    | 'Full Stack Web';
  description: string;
  technologies: string[];
  architectureSummary: string;
  keyOutcomes: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
}

export interface SuccessStory {
  id: string;
  name?: string;
  studentInitials: string;
  avatarUrl?: string;
  whatsappScreenshotUrl?: string;
  chatSnippet?: string;
  chatTime?: string;
  placementOffer?: string;
  background: string;
  targetRole?: string;
  courseCompleted: string;
  courseSlug?: string;
  accentColor?: 'blue' | 'green' | 'teal' | 'purple' | 'rose' | 'amber';
  coreAchievement: string;
  summary: string;
  projectCompleted: string;
  keySkillsGained: string[];
  capstoneSpecs?: string[];
  isProvisionalPlaceholder: boolean;
}

export interface VideoTestimonial {
  id: string;
  studentNameOrCode: string;
  courseTitle: string;
  batchOrYear: string;
  duration: string;
  thumbnailUrl: string;
  transcriptSnippet: string;
  videoPlaceholderUrl?: string;
  isPlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Courses' | 'Prerequisites' | 'Learning Methodology' | 'Enquiries';
  question: string;
  answer: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  ageCategory: string;
  currentStatus: string;
  otherStatusDetails?: string;
  courseInterestedIn: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  location?: string;
  ageCategory?: string;
  currentStatus?: string;
  otherStatusDetails?: string;
  courseInterestedIn?: string;
  message?: string;
}

