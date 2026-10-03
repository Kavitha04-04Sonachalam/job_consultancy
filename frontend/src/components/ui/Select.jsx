import React from 'react';

export const Select = React.forwardRef(
  ({ label, options = [], error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1.5 text-sm font-semibold text-[#0F172A]">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`w-full px-4 py-3 text-sm text-[#0F172A] bg-white border rounded-xl outline-none transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:bg-[#F1F5F9] cursor-pointer ${
            error ? 'border-red-500 focus:border-red-500' : 'border-[#CBD5E1]'
          } ${className}`}
          {...props}
        >
          {options.map((opt, i) => (
            <option key={i} value={typeof opt === 'object' ? opt.value : opt}>
              {typeof opt === 'object' ? opt.label : opt}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
