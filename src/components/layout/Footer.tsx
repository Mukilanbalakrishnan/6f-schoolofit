import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { COURSES } from '../../data/coursesData';
import { ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const Footer: React.FC = () => {
  const { openEnquiryModal } = useEnquiry();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="border-t border-[#E5E9F0] bg-[#F7F9FC] text-[#151922] text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <a
              href="#home"
              onClick={(e) => handleScrollTo('home', e)}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] text-white font-bold text-base">
                6F
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-[#151922]">
                  6F IT School
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#626B78] uppercase">
                  Technology Academy
                </span>
              </div>
            </a>
            <p className="text-xs text-[#626B78] leading-relaxed max-w-sm">
              Hands-on, project-based technology training in AI-Powered AWS DevOps, Azure DevOps, and AIOps.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#151922] mb-3">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-[#626B78]">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    onClick={(e) => handleScrollTo('courses', e)}
                    className="hover:text-[#2563EB] transition-colors cursor-pointer"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#151922] mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-[#626B78]">
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleScrollTo('courses', e)}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  onClick={(e) => handleScrollTo('technologies', e)}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Technology Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleScrollTo('projects', e)}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Student Projects
                </a>
              </li>
              <li>
                <a
                  href="#student-success"
                  onClick={(e) => handleScrollTo('student-success', e)}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo('about', e)}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo('contact', e)}
                  className="hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Enquiry */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#151922] mb-3">
              Policies & Help
            </h4>
            <ul className="space-y-2 text-xs text-[#626B78]">
              <li>
                <button
                  type="button"
                  onClick={() => openEnquiryModal()}
                  className="hover:text-[#2563EB] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquiry Desk</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#2563EB] transition-colors flex items-center gap-1"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-[#626B78]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#2563EB] transition-colors flex items-center gap-1"
                >
                  <FileText className="h-3.5 w-3.5 text-[#626B78]" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[#E5E9F0] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#626B78]">
          <p>© {new Date().getFullYear()} 6F IT School. All rights reserved.</p>
          <p className="text-[#626B78]/80 font-mono">
            Practical Engineering Academy | Single Page Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
