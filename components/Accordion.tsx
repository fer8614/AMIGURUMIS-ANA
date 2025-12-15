import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick, icon }) => {
  return (
    <div className="border border-brand-100 rounded-xl overflow-hidden bg-white mb-3 shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-brand-50/50 transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-brand-500">{icon}</span>}
          <span className="font-heading font-semibold text-gray-800">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="text-brand-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 border-t border-brand-50 bg-brand-50/30 text-gray-600 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};