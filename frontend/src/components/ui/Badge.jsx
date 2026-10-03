import React from 'react';

export const Badge = ({ children, variant = 'blue', className = '' }) => {
  const variants = {
    blue: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
    gold: 'bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]',
    navy: 'bg-[#F1F5F9] text-[#0F172A] border-[#E2E8F0]',
    green: 'bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]',
    demo: 'bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5]',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
