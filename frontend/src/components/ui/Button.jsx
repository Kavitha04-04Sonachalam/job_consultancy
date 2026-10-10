import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus:ring-[#2563EB] shadow-md hover:shadow-lg',
    secondary: 'bg-[#0F172A] text-white hover:bg-[#1E293B] focus:ring-[#0F172A]',
    gold: 'bg-[#F59E0B] text-[#0F172A] hover:bg-[#D97706] hover:text-white focus:ring-[#F59E0B] shadow-md',
    outline: 'border border-[#CBD5E1] bg-white text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#2563EB] focus:ring-[#2563EB]',
    ghost: 'text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20bd5a] focus:ring-[#25D366] shadow-sm',
    instagram: 'bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-95 focus:ring-[#DD2A7B] shadow-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
};

export default Button;
