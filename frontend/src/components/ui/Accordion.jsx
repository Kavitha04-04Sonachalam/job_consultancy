import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-[#E2E8F0] rounded-2xl bg-white overflow-hidden transition-all duration-200 shadow-xs hover:border-[#2563EB]/40"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="flex items-center justify-between w-full p-5 text-left font-semibold text-[#0F172A] focus:outline-none"
            >
              <span className="text-base sm:text-lg pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#F1F5F9] pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
