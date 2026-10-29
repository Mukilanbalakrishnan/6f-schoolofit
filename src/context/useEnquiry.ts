import { useContext } from 'react';
import { EnquiryContext } from './EnquiryContextDefinition';

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
