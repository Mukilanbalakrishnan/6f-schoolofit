import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEnquiry } from '../../context/EnquiryContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Courses', id: 'courses' },
  { name: 'Technologies', id: 'technologies' },
  { name: 'Student Success', id: 'student-success' },
  { name: 'Projects', id: 'projects' },
  { name: 'About Us', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { openEnquiryModal } = useEnquiry();
  const navigate = useNavigate();
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll helper
  const scrollToTarget = useCallback((id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70; // Header height + small spacing
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  }, []);

  // Handle nav item click
  const handleNavClick = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    scrollToTarget(id);
  };

  // Scrollspy: update active link based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const sec = document.getElementById(item.id);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle initial hash on page load / route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        scrollToTarget(id);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.pathname, scrollToTarget]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E9F0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo - Scrolls to Top */}
        <a
          href="#home"
          onClick={(e) => handleNavClick('home', e)}
          className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-md px-1 py-0.5 cursor-pointer"
          aria-label="6F IT School Homepage"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] text-white font-bold text-base shadow-xs">
            6F
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold tracking-tight text-[#151922] leading-none">
              6F IT School
            </span>
            <span className="text-[10px] font-semibold tracking-wide text-[#626B78] uppercase mt-0.5">
              Technology Academy
            </span>
          </div>
        </a>

        {/* Desktop Nav - In-page Smooth Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`relative rounded-lg px-3 py-1.5 text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer ${
                  isActive
                    ? 'text-[#2563EB] bg-[#2563EB]/10'
                    : 'text-[#626B78] hover:text-[#151922] hover:bg-[#F7F9FC]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-[#2563EB] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#1D4ED8] transition-all cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-[#626B78] hover:bg-[#F7F9FC] hover:text-[#151922] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            className="border-t border-[#E5E9F0] bg-white lg:hidden overflow-hidden shadow-xl"
          >
            <div className="p-5 space-y-3 text-left">
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(link.id, e)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#2563EB]/10 text-[#2563EB]'
                          : 'text-[#151922] hover:bg-[#F7F9FC]'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-[#E5E9F0]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiryModal();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1D4ED8] cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
