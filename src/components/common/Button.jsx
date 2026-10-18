import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#B89458] via-[#C5A568] to-[#D2B477] hover:brightness-105 text-[#050505] font-semibold border border-[#D2B477]/60 shadow-md shadow-[#B89458]/20",
    secondary: "bg-[#171819] hover:bg-[#202225] text-[#F5F3EF] border border-white/10 hover:border-white/20 shadow-sm",
    outline: "bg-transparent text-[#D2B477] hover:text-[#F5F3EF] border border-[#B89458]/40 hover:bg-[#B89458]/10 hover:border-[#D2B477]",
    ghost: "bg-transparent text-[#A09B92] hover:text-[#F5F3EF] hover:bg-white/5",
    danger: "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30"
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
        </>
      )}
    </button>
  );
};
