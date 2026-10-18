import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Shield, Layers } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#111214]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111214]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all ${
                    isActive 
                      ? 'bg-[#171819] text-[#D2B477] border border-[rgba(184,148,88,0.40)] font-semibold shadow-sm shadow-[#B89458]/10' 
                      : 'text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#171819]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
                Start Project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F3EF] bg-[#111214] border border-white/10 rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111214]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-[#171819] text-[#D2B477] border border-[rgba(184,148,88,0.30)] font-semibold' 
                      : 'text-[#A09B92] hover:bg-[#171819] hover:text-[#F5F3EF]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link to="/contact" className="w-full">
              <Button variant="primary" size="md" className="w-full" icon={ArrowRight} iconPosition="right">
                Start Your Project
              </Button>
            </Link>
            <Link to="/admin/login" className="flex items-center justify-center gap-1.5 py-2 text-xs text-[#A09B92] hover:text-[#F5F3EF]">
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Portal Login</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
