import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const Badge = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
  icon: Icon
}) => {
  const { isLuxury, isFuturistic } = useTheme();

  const baseStyles = "inline-flex items-center font-medium rounded-full select-none transition-colors duration-200";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
    lg: "text-sm px-3.5 py-1.5 gap-2"
  };

  const getVariantStyles = () => {
    if (isLuxury) {
      switch (variant) {
        case 'blue':
        case 'gold':
        case 'indigo':
        case 'amber':
          return "bg-[#FAF8F5] text-[#9E7B4F] border border-[#9E7B4F]/35 shadow-xs font-serif";
        case 'emerald':
          return "bg-emerald-50 text-emerald-800 border border-emerald-300";
        case 'purple':
        case 'slate':
        case 'outline':
          return "bg-[#FFFFFF] text-[#655E56] border border-[#9E7B4F]/20 font-sans";
        default:
          return "bg-[#FAF8F5] text-[#9E7B4F] border border-[#9E7B4F]/30";
      }
    }

    if (isFuturistic) {
      switch (variant) {
        case 'blue':
        case 'gold':
        case 'indigo':
        case 'amber':
          return "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 font-mono shadow-[0_0_8px_rgba(0,240,255,0.2)]";
        case 'emerald':
          return "bg-emerald-950/40 text-emerald-400 border border-emerald-500/40 font-mono";
        case 'purple':
          return "bg-[#8B5CF6]/20 text-[#A78BFA] border border-[#8B5CF6]/40 font-mono";
        case 'slate':
        case 'outline':
          return "bg-[#060D1E] text-[#7DD3FC] border border-[#00F0FF]/25 font-mono";
        default:
          return "bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 font-mono";
      }
    }

    // Original UI 1
    const originalStyles = {
      blue: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/35 shadow-sm",
      gold: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/40 shadow-sm",
      indigo: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/30",
      emerald: "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30",
      amber: "bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/35",
      purple: "bg-[#171819] text-[#F5F3EF] border border-white/10",
      slate: "bg-[#171819] text-[#A09B92] border border-white/10",
      outline: "bg-transparent text-[#A09B92] border border-white/10"
    };
    return originalStyles[variant] || originalStyles.blue;
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${getVariantStyles()} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};
