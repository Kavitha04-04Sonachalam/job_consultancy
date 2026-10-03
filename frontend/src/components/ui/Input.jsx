import React from 'react';

export const Input = React.forwardRef(
  ({ label, error, helperText, type = 'text', className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1.5 text-sm font-semibold text-[#0F172A]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={`w-full px-4 py-3 text-sm text-[#0F172A] bg-white border rounded-xl outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:bg-[#F1F5F9] ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-[#CBD5E1]'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-xs text-[#64748B]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
