import React from 'react';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm ${
        hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#CBD5E1]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
