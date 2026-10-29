import React, { useState, useEffect, type ReactNode } from 'react';
import { EnquiryContext } from './EnquiryContextDefinition';
export { useEnquiry } from './useEnquiry';
export type { EnquiryContextType } from './EnquiryContextDefinition';

export const EnquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState('');

  // Auto popup on site entry or refresh as requested by user
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 900); // Pops up smoothly 900ms after initial render/refresh

    return () => clearTimeout(timer);
  }, []);

  const openEnquiryModal = (courseTitle?: string) => {
    if (courseTitle) {
      setPreselectedCourse(courseTitle);
    }
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <EnquiryContext.Provider
      value={{
        isModalOpen,
        preselectedCourse,
        openEnquiryModal,
        closeEnquiryModal,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};
