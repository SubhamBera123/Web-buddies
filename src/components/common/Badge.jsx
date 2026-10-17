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
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    slate: "bg-slate-800/80 text-slate-300 border border-slate-700/60",
    outline: "bg-transparent text-slate-400 border border-slate-700"
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};
