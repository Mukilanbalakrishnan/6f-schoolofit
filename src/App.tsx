import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EnquiryProvider } from './context/EnquiryContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EnquiryModal } from './components/enquiry/EnquiryModal';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Loader2 } from 'lucide-react';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const CoursesPage = lazy(() => import('./pages/CoursesPage').then((m) => ({ default: m.CoursesPage })));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage').then((m) => ({ default: m.CourseDetailPage })));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage').then((m) => ({ default: m.TechnologiesPage })));
const StudentSuccessPage = lazy(() => import('./pages/StudentSuccessPage').then((m) => ({ default: m.StudentSuccessPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const EnquiryPage = lazy(() => import('./pages/EnquiryPage').then((m) => ({ default: m.EnquiryPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function PageFallback() {
  return (
    <div className="flex h-64 w-full items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-[#2563EB]" />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <EnquiryProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-white text-[#151922] antialiased selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
          {/* Sticky Header */}
          <Navbar />

          {/* Main Content Viewport */}
          <main className="flex-1">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:slug" element={<CourseDetailPage />} />
                <Route path="/technologies" element={<TechnologiesPage />} />
                <Route path="/student-success" element={<StudentSuccessPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/enquire" element={<EnquiryPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />

          {/* Global Accessible Enquiry Modal with Auto-Popup on Load/Refresh */}
          <EnquiryModal />
        </div>
      </EnquiryProvider>
    </BrowserRouter>
  );
}

export default App;
