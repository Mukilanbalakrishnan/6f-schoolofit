import { createContext } from 'react';

export interface EnquiryContextType {
  isModalOpen: boolean;
  preselectedCourse: string;
  openEnquiryModal: (courseTitle?: string) => void;
  closeEnquiryModal: () => void;
}

export const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

