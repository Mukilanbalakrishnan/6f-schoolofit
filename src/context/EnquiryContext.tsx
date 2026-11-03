import React, { useState, type ReactNode } from 'react';
import { EnquiryContext } from './EnquiryContextDefinition';
export { useEnquiry } from './useEnquiry';
export type { EnquiryContextType } from './EnquiryContextDefinition';

export const EnquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Automatically open on site entry / visit as requested
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [preselectedCourse, setPreselectedCourse] = useState('');

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
