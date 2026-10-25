import React from 'react';
import { Loader2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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
  const { isLuxury, isFuturistic } = useTheme();

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2B477]/50 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold"
  };

  const getVariantStyles = () => {
    if (isLuxury) {
      switch (variant) {
        case 'primary':
          return "bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] font-semibold border border-[#9E7B4F] shadow-sm";
        case 'secondary':
          return "bg-[#F2ECE1] hover:bg-[#EAE2D3] text-[#1C1917] border border-[#9E7B4F]/30 shadow-xs";
        case 'outline':
          return "bg-transparent text-[#9E7B4F] hover:text-[#1C1917] border border-[#9E7B4F]/40 hover:bg-[#9E7B4F]/10 hover:border-[#9E7B4F]";
        case 'ghost':
          return "bg-transparent text-[#655E56] hover:text-[#1C1917] hover:bg-[#9E7B4F]/10";
        case 'danger':
          return "bg-red-500/10 text-red-600 hover:bg-red-500/20 border border-red-500/30";
        default:
          return "";
      }
    }

    if (isFuturistic) {
      switch (variant) {
        case 'primary':
          return "bg-gradient-to-r from-[#00F0FF] to-[#0284C7] hover:brightness-110 text-[#02040A] font-bold border border-[#38BDF8] shadow-[0_0_20px_rgba(0,240,255,0.4)]";
        case 'secondary':
          return "bg-[#060D1E] hover:bg-[#0B1528] text-[#00F0FF] border border-[#00F0FF]/50 shadow-[0_0_12px_rgba(0,240,255,0.2)]";
        case 'outline':
          return "bg-transparent text-[#00F0FF] hover:text-[#F0FDF4] border border-[#00F0FF]/50 hover:bg-[#00F0FF]/15 hover:border-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.15)]";
        case 'ghost':
          return "bg-transparent text-[#7DD3FC] hover:text-[#F0FDF4] hover:bg-[#00F0FF]/10";
        case 'danger':
          return "bg-red-500/15 text-red-400 hover:bg-red-500/25 border border-red-500/40";
        default:
          return "";
      }
    }

    // Original UI 1 Styles
    switch (variant) {
      case 'primary':
        return "bg-gradient-to-r from-[#B89458] via-[#C5A568] to-[#D2B477] hover:brightness-105 text-[#050505] font-semibold border border-[#D2B477]/60 shadow-md shadow-[#B89458]/20";
      case 'secondary':
        return "bg-[#171819] hover:bg-[#202225] text-[#F5F3EF] border border-white/10 hover:border-white/20 shadow-sm";
      case 'outline':
        return "bg-transparent text-[#D2B477] hover:text-[#F5F3EF] border border-[#B89458]/40 hover:bg-[#B89458]/10 hover:border-[#D2B477]";
      case 'ghost':
        return "bg-transparent text-[#A09B92] hover:text-[#F5F3EF] hover:bg-white/5";
      case 'danger':
        return "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${getVariantStyles()} ${className}`}
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
