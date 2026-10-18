import React from 'react';

export const Badge = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
  icon: Icon
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full select-none";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
    lg: "text-sm px-3.5 py-1.5 gap-2"
  };

  const variantStyles = {
    blue: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/35 shadow-sm",
    gold: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/40 shadow-sm",
    indigo: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/30",
    emerald: "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30",
    amber: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/35",
    purple: "bg-[#171819] text-[#F5F3EF] border border-white/10",
    slate: "bg-[#171819] text-[#A09B92] border border-white/10",
    outline: "bg-transparent text-[#A09B92] border border-white/10"
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};
