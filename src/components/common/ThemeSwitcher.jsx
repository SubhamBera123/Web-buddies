import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, Crown, Cpu, RefreshCw, Palette } from 'lucide-react';

export const ThemeSwitcher = ({ compact = false, className = '' }) => {
  const { theme, cycleTheme, currentThemeMeta, themes, isTransitioning } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAnimating(true);
    cycleTheme();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'luxury':
        return Crown;
      case 'futuristic':
        return Cpu;
      default:
        return Sparkles;
    }
  };

  const ActiveIcon = getThemeIcon();

  // Color tokens tailored to theme for the switcher itself
  const getThemeStyles = () => {
    switch (theme) {
      case 'luxury':
        return {
          pillBg: 'bg-[#F0ECE4]/95 hover:bg-[#EAE4D9]',
          border: 'border-[#9E7B4F]/40 hover:border-[#9E7B4F]/70',
          text: 'text-[#1A1816]',
          labelText: 'text-[#6B655D]',
          tagBg: 'bg-[#FFFFFF] text-[#9E7B4F] border border-[#9E7B4F]/30 shadow-xs',
          activeDot: 'bg-[#9E7B4F] shadow-[0_0_8px_rgba(158,123,79,0.6)]',
          inactiveDot: 'bg-[#6B655D]/25',
          iconColor: 'text-[#9E7B4F]'
        };
      case 'futuristic':
        return {
          pillBg: 'bg-[#060D1D]/90 hover:bg-[#0B1528]',
          border: 'border-[#00F0FF]/40 hover:border-[#00F0FF]/80 shadow-[0_0_15px_rgba(0,240,255,0.15)]',
          text: 'text-[#F0FDF4]',
          labelText: 'text-[#7DD3FC]',
          tagBg: 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 font-mono shadow-[0_0_8px_rgba(0,240,255,0.25)]',
          activeDot: 'bg-[#00F0FF] shadow-[0_0_8px_rgba(0,240,255,0.9)]',
          inactiveDot: 'bg-slate-700',
          iconColor: 'text-[#00F0FF]'
        };
      default: // Original
        return {
          pillBg: 'bg-[#171819] hover:bg-[#202225]',
          border: 'border-white/10 hover:border-[rgba(184,148,88,0.40)]',
          text: 'text-[#F5F3EF]',
          labelText: 'text-[#A09B92]',
          tagBg: 'bg-[#111214] text-[#D2B477] border border-[rgba(184,148,88,0.30)]',
          activeDot: 'bg-[#D2B477] shadow-[0_0_6px_rgba(210,180,119,0.7)]',
          inactiveDot: 'bg-white/20',
          iconColor: 'text-[#D2B477]'
        };
    }
  };

  const styles = getThemeStyles();

  if (compact) {
    return (
      <button
        onClick={handleClick}
        type="button"
        aria-label={`Current UI: ${currentThemeMeta.tag}. Click to switch UI`}
        title={`Current UI: ${currentThemeMeta.tag} (${currentThemeMeta.subtitle}). Click to cycle UI`}
        className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 select-none border ${styles.pillBg} ${styles.border} ${className} active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D2B477]/50`}
      >
        <span className={`transition-transform duration-300 ${isAnimating ? 'rotate-180 scale-110' : ''}`}>
          <ActiveIcon className={`w-3.5 h-3.5 ${styles.iconColor}`} />
        </span>
        <span className={`text-[11px] font-bold tracking-tight ${styles.text}`}>
          UI: {currentThemeMeta.num}
        </span>
        {/* 3 mini step dots */}
        <div className="flex items-center gap-1 pl-0.5">
          {themes.map((t) => (
            <span
              key={t.id}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                t.id === theme ? `${styles.activeDot} scale-125` : styles.inactiveDot
              }`}
            />
          ))}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label={`Switch Website UI Theme. Currently: ${currentThemeMeta.tag}. Click to advance to next theme.`}
      title={`Click to cycle UI: ${currentThemeMeta.name} → Next Theme`}
      className={`relative inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 select-none border backdrop-blur-md ${styles.pillBg} ${styles.border} ${className} active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D2B477]/50 group`}
    >
      {/* Icon with subtle switch animation */}
      <div className={`p-1 rounded-full transition-all duration-300 ${styles.tagBg}`}>
        <ActiveIcon
          className={`w-3.5 h-3.5 ${styles.iconColor} transition-transform duration-500 ${
            isAnimating ? 'rotate-180 scale-125' : 'group-hover:rotate-12'
          }`}
        />
      </div>

      {/* Label & Active Theme Indicator */}
      <div className="flex items-center gap-2 text-left">
        <span className={`text-[11px] font-semibold tracking-wide uppercase font-mono ${styles.labelText} group-hover:text-current transition-colors`}>
          Change UI
        </span>
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md transition-all duration-300 ${styles.tagBg}`}>
          {currentThemeMeta.tag}
        </span>
      </div>

      {/* 3 Step Visual Progression Indicator */}
      <div className="flex items-center gap-1 pl-1 pr-0.5" title={`Step ${currentThemeMeta.num} of 3`}>
        {themes.map((t, idx) => {
          const isActive = t.id === theme;
          return (
            <span
              key={t.id}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? `w-3 h-1.5 ${styles.activeDot}`
                  : `w-1.5 h-1.5 ${styles.inactiveDot}`
              }`}
            />
          );
        })}
      </div>
    </button>
  );
};
