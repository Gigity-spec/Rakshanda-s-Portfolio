import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@/components/ui/dialog';

interface AccessibilityStatementProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityStatement = ({ isOpen, onClose }: AccessibilityStatementProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-soria text-2xl text-[#A3886b]">Accessibility Statement</h2>
              <button 
                onClick={onClose}
                className="text-[#25092e] hover:text-[#A3886b] transition-colors p-2"
                aria-label="Close accessibility statement"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="prose max-w-none text-[#25092e]">
              <p>
                I am committed to ensuring digital accessibility for people with disabilities. 
                I am continually improving the user experience for everyone and applying the 
                relevant accessibility standards.
              </p>
              
              <h3 className="text-[#A3886b] text-xl mt-6 mb-3">Conformance status</h3>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers 
                and developers to improve accessibility for people with disabilities. It defines 
                three levels of conformance: Level A, Level AA, and Level AAA. This website is 
                partially conformant with WCAG 2.1 level AA. Partially conformant means that some 
                parts of the content do not fully conform to the accessibility standard.
              </p>
              
              <h3 className="text-[#A3886b] text-xl mt-6 mb-3">Accessibility Features</h3>
              <p>This website includes the following accessibility features:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Semantic HTML5 markup for better screen reader support</li>
                <li>ARIA attributes where appropriate to enhance accessibility</li>
                <li>Keyboard navigation for all interactive elements</li>
                <li>Focus trap for modal dialogs and navigation menus</li>
                <li>Adequate color contrast for text readability</li>
                <li>Responsive design that works on various screen sizes</li>
                <li>Text alternatives for non-text content</li>
                <li>Clear focus indicators for keyboard navigation</li>
              </ul>
              
              <h3 className="text-[#A3886b] text-xl mt-6 mb-3">Feedback</h3>
              <p>
                I welcome your feedback on the accessibility of this website. Please let me know if 
                you encounter accessibility barriers:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Phone: [Phone number]</li>
                <li>E-mail: contact@rakshinda.com</li>
              </ul>
              
              <h3 className="text-[#A3886b] text-xl mt-6 mb-3">Date</h3>
              <p>
                This statement was created on April 4, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AccessibilityStatement;