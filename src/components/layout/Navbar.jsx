import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Shield, Layers, Crown, Cpu, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { ThemeSwitcher } from '../common/ThemeSwitcher';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, currentThemeMeta, isLuxury, isFuturistic } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  // Theme-aware navbar container styling
  const getHeaderStyles = () => {
    if (isLuxury) {
      return scrolled
        ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#9E7B4F]/25 shadow-sm py-3'
        : 'bg-transparent py-5';
    }
    if (isFuturistic) {
      return scrolled
        ? 'bg-[#02040A]/92 backdrop-blur-md border-b border-[#00F0FF]/35 shadow-[0_4px_25px_rgba(0,240,255,0.18)] py-3'
        : 'bg-transparent py-5';
    }
    // Original
    return scrolled
      ? 'bg-[#111214]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
      : 'bg-transparent py-5';
  };

  // Nav pills container style
  const getNavContainerStyles = () => {
    if (isLuxury) {
      return 'bg-[#F2ECE1]/90 backdrop-blur-md border border-[#9E7B4F]/25 shadow-xs';
    }
    if (isFuturistic) {
      return 'bg-[#060D1E]/90 backdrop-blur-md border border-[#00F0FF]/35 shadow-[0_0_15px_rgba(0,240,255,0.1)]';
    }
    return 'bg-[#111214]/80 backdrop-blur-md border border-white/10';
  };

  // Individual link style
  const getNavLinkStyles = (isActive) => {
    if (isLuxury) {
      return isActive
        ? 'bg-[#FFFFFF] text-[#9E7B4F] border border-[#9E7B4F]/40 font-semibold shadow-xs'
        : 'text-[#655E56] hover:text-[#1C1917] hover:bg-[#FFFFFF]/70';
    }
    if (isFuturistic) {
      return isActive
        ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/60 font-mono font-semibold shadow-[0_0_10px_rgba(0,240,255,0.3)]'
        : 'text-[#7DD3FC] hover:text-[#F0FDF4] hover:bg-[#00F0FF]/10 font-mono';
    }
    return isActive
      ? 'bg-[#171819] text-[#D2B477] border border-[rgba(184,148,88,0.40)] font-semibold shadow-sm shadow-[#B89458]/10'
      : 'text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#171819]';
  };

  // Brand Logo styling per theme
  const renderBrandLogo = () => {
    if (isLuxury) {
      return (
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#9E7B4F] to-[#C5A880] flex items-center justify-center text-[#FAF8F5] shadow-md shadow-[#9E7B4F]/20 group-hover:scale-105 transition-transform">
            <Crown className="w-5 h-5 text-[#FAF8F5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-[#1C1917] font-serif">NexusCraft</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B4F]"></span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-[#9E7B4F] block -mt-1 font-sans font-semibold">
              Editorial Atelier
            </span>
          </div>
        </Link>
      );
    }

    if (isFuturistic) {
      return (
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#060D1E] border border-[#00F0FF]/50 flex items-center justify-center text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:border-[#00F0FF] transition-all">
            <Cpu className="w-5 h-5 text-[#00F0FF] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-wider text-[#F0FDF4] font-cyber">NEXUS//CRAFT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping"></span>
            </div>
            <span className="text-[10px] tracking-widest uppercase text-[#00F0FF] block -mt-1 font-mono">
              SYS:2026.ONLINE
            </span>
          </div>
        </Link>
      );
    }

    // Original UI 1 Logo
    return (
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#B89458] to-[#D2B477] flex items-center justify-center text-[#050505] shadow-md shadow-[#B89458]/25 group-hover:shadow-[#B89458]/40 transition-shadow">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-[#F5F3EF] font-sans">NexusCraft</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2B477] animate-pulse"></span>
          </div>
          <span className="text-[10px] tracking-widest uppercase text-[#A09B92] block -mt-1 font-mono">Web Studio</span>
        </div>
      </Link>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${getHeaderStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          {renderBrandLogo()}

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full ${getNavContainerStyles()}`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all ${getNavLinkStyles(isActive)}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Theme Switcher + Start Project */}
          <div className="hidden md:flex items-center gap-3">
            {/* Global Navbar Theme Switcher */}
            <ThemeSwitcher />

            <Link to="/contact">
              <Button variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
                {isLuxury ? 'Consult Studio' : isFuturistic ? 'Init Project' : 'Start Project'}
              </Button>
            </Link>
          </div>

          {/* Mobile Right Controls: Compact Theme Switcher + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeSwitcher compact={true} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                isLuxury
                  ? 'text-[#1C1917] bg-[#F2ECE1] border border-[#9E7B4F]/30'
                  : isFuturistic
                  ? 'text-[#00F0FF] bg-[#060D1E] border border-[#00F0FF]/40'
                  : 'text-[#F5F3EF] bg-[#111214] border border-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-4 pb-6 space-y-4 animate-fadeIn backdrop-blur-xl ${
            isLuxury
              ? 'bg-[#FAF8F5]/98 border-[#9E7B4F]/25 shadow-xl text-[#1C1917]'
              : isFuturistic
              ? 'bg-[#02040A]/98 border-[#00F0FF]/30 shadow-[0_10px_30px_rgba(0,240,255,0.15)] text-[#F0FDF4]'
              : 'bg-[#111214]/95 border-white/10 text-[#F5F3EF]'
          }`}
        >
          {/* Mobile Theme Switcher Banner Card */}
          <div
            className={`p-3 rounded-xl border flex items-center justify-between ${
              isLuxury
                ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 shadow-xs'
                : isFuturistic
                ? 'bg-[#060D1E] border-[#00F0FF]/40 shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                : 'bg-[#171819] border-white/10'
            }`}
          >
            <div>
              <div className="text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D2B477]" />
                <span>Active Website UI</span>
              </div>
              <div className="text-[11px] opacity-75">{currentThemeMeta.subtitle}</div>
            </div>
            <ThemeSwitcher />
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isLuxury
                      ? isActive
                        ? 'bg-[#FFFFFF] text-[#9E7B4F] border border-[#9E7B4F]/40 font-semibold'
                        : 'text-[#655E56] hover:bg-[#FFFFFF] hover:text-[#1C1917]'
                      : isFuturistic
                      ? isActive
                        ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/50 font-mono font-semibold'
                        : 'text-[#7DD3FC] hover:bg-[#060D1E] hover:text-[#F0FDF4]'
                      : isActive
                      ? 'bg-[#171819] text-[#D2B477] border border-[rgba(184,148,88,0.30)] font-semibold'
                      : 'text-[#A09B92] hover:bg-[#171819] hover:text-[#F5F3EF]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-current/10 flex flex-col gap-2">
            <Link to="/contact" className="w-full">
              <Button variant="primary" size="md" className="w-full" icon={ArrowRight} iconPosition="right">
                {isLuxury ? 'Request Private Consultation' : isFuturistic ? 'Launch Project Protocol' : 'Start Your Project'}
              </Button>
            </Link>
            <Link
              to="/admin/login"
              className="flex items-center justify-center gap-1.5 py-2 text-xs opacity-70 hover:opacity-100"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Portal Login</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
