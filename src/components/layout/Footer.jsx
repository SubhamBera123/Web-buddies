import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Mail, Phone, MapPin, 
  ArrowUpRight, ShieldCheck, Heart, Sparkles, Crown, Cpu, Terminal 
} from 'lucide-react';
import { Github, Linkedin, Twitter } from '../common/BrandIcons';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const Footer = () => {
  const { settings, services } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();

  const getFooterContainerClass = () => {
    if (isLuxury) {
      return 'bg-[#FAF8F5] border-t border-[#9E7B4F]/25 text-[#655E56]';
    }
    if (isFuturistic) {
      return 'bg-[#02040A] border-t border-[#00F0FF]/30 text-[#7DD3FC] shadow-[0_-5px_30px_rgba(0,240,255,0.08)]';
    }
    return 'bg-[#050505] border-t border-white/10 text-[#A09B92]';
  };

  const getHeadingClass = () => {
    if (isLuxury) {
      return 'text-[#1C1917] font-serif font-bold text-sm tracking-wide uppercase';
    }
    if (isFuturistic) {
      return 'text-[#F0FDF4] font-cyber text-xs tracking-widest uppercase font-mono text-cyan-300';
    }
    return 'text-[#F5F3EF] font-mono text-xs font-bold uppercase tracking-wider';
  };

  const getLinkHoverClass = () => {
    if (isLuxury) {
      return 'text-[#655E56] hover:text-[#9E7B4F] transition-colors';
    }
    if (isFuturistic) {
      return 'text-[#7DD3FC] hover:text-[#00F0FF] transition-colors font-mono';
    }
    return 'text-[#A09B92] hover:text-[#D2B477] transition-colors';
  };

  const getSocialBtnClass = () => {
    if (isLuxury) {
      return 'w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#9E7B4F]/30 flex items-center justify-center text-[#655E56] hover:text-[#9E7B4F] hover:border-[#9E7B4F] shadow-xs transition-colors';
    }
    if (isFuturistic) {
      return 'w-8 h-8 rounded-lg bg-[#060D1E] border border-[#00F0FF]/40 flex items-center justify-center text-[#7DD3FC] hover:text-[#00F0FF] hover:border-[#00F0FF] hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all';
    }
    return 'w-8 h-8 rounded-lg bg-[#111214] border border-white/10 flex items-center justify-center text-[#A09B92] hover:text-[#D2B477] hover:border-[rgba(184,148,88,0.40)] transition-colors';
  };

  return (
    <footer className={`${getFooterContainerClass()} text-sm mt-20 relative overflow-hidden transition-colors duration-300`}>
      {/* Background glow per theme */}
      {isLuxury ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#9E7B4F]/10 to-transparent pointer-events-none" />
      ) : isFuturistic ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-b from-[#00F0FF]/12 via-[#8B5CF6]/5 to-transparent pointer-events-none" />
      ) : (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#B89458]/8 to-transparent pointer-events-none" />
      )}

      {/* Futuristic Scanline Overlay */}
      {isFuturistic && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              {isLuxury ? (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#9E7B4F] to-[#C5A880] flex items-center justify-center text-[#FAF8F5] shadow-md shadow-[#9E7B4F]/20">
                  <Crown className="w-5 h-5 text-[#FAF8F5]" />
                </div>
              ) : isFuturistic ? (
                <div className="w-9 h-9 rounded-xl bg-[#060D1E] border border-[#00F0FF]/50 flex items-center justify-center text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Cpu className="w-5 h-5 text-[#00F0FF] animate-pulse" />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#B89458] to-[#D2B477] flex items-center justify-center text-[#050505] shadow-md shadow-[#B89458]/20">
                  <Layers className="w-5 h-5" />
                </div>
              )}
              <div>
                <span className={`font-extrabold text-base tracking-tight ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber tracking-wider' : 'text-[#F5F3EF]'}`}>
                  {settings.agencyName}
                </span>
                <span className={`text-[10px] tracking-widest uppercase block -mt-1 ${isLuxury ? 'text-[#9E7B4F] font-sans' : isFuturistic ? 'text-[#00F0FF] font-mono' : 'text-[#A09B92] font-mono'}`}>
                  {isLuxury ? 'Editorial Atelier' : isFuturistic ? 'Digital Command' : 'Web Studio'}
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed max-w-sm">
              We design and engineer high-performance websites, modern e-commerce stores, and custom full-stack web applications tailored for companies that prioritize growth, speed, and conversion.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={`https://wa.me/${settings.whatsappNumber?.replace(/\+/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className={getSocialBtnClass()}
                title="WhatsApp Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${settings.email}`}
                className={getSocialBtnClass()}
                title="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={settings.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className={getSocialBtnClass()}
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={settings.linkedinUrl} 
                target="_blank" 
                rel="noreferrer"
                className={getSocialBtnClass()}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className={`inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full border ${
                isLuxury
                  ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 text-[#9E7B4F] shadow-xs'
                  : isFuturistic
                  ? 'bg-[#060D1E] border-[#00F0FF]/40 text-[#00F0FF] font-mono shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'bg-[#111214] border-[rgba(184,148,88,0.30)] text-[#D2B477]'
              }`}>
                <span className={`w-2 h-2 rounded-full animate-pulse ${isLuxury ? 'bg-[#9E7B4F]' : isFuturistic ? 'bg-[#00F0FF]' : 'bg-[#D2B477]'}`} />
                <span>{settings.availabilityStatus}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className={getHeadingClass()}>Pages</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className={getLinkHoverClass()}>Home Studio</Link></li>
              <li><Link to="/services" className={getLinkHoverClass()}>Our Services (15)</Link></li>
              <li><Link to="/pricing" className={getLinkHoverClass()}>Pricing Packages</Link></li>
              <li><Link to="/pricing#calculator" className={getLinkHoverClass()}>Cost Estimator</Link></li>
              <li><Link to="/portfolio" className={getLinkHoverClass()}>Portfolio & Demos (9)</Link></li>
              <li><Link to="/about" className={getLinkHoverClass()}>About the Studio</Link></li>
              <li><Link to="/contact" className={getLinkHoverClass()}>Start Project / Contact</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="space-y-3">
            <h4 className={getHeadingClass()}>Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services#business-website" className={getLinkHoverClass()}>Business Websites</Link></li>
              <li><Link to="/services#custom-web-app" className={getLinkHoverClass()}>Custom Web Apps</Link></li>
              <li><Link to="/services#ecommerce-website" className={getLinkHoverClass()}>E-Commerce Stores</Link></li>
              <li><Link to="/services#landing-page" className={getLinkHoverClass()}>High-Conversion Landing Pages</Link></li>
              <li><Link to="/services#admin-dashboard" className={getLinkHoverClass()}>Admin Dashboards</Link></li>
              <li><Link to="/services#performance-optimization" className={getLinkHoverClass()}>Speed & Core Web Vitals</Link></li>
            </ul>
          </div>

          {/* Pricing & Direct Access */}
          <div className="space-y-3">
            <h4 className={getHeadingClass()}>Pricing</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/pricing" className={getLinkHoverClass()}>Starter Plan (₹4,999)</Link></li>
              <li><Link to="/pricing" className={getLinkHoverClass()}>Business Plan (₹12,999)</Link></li>
              <li><Link to="/pricing" className={getLinkHoverClass()}>E-Commerce (₹29,999)</Link></li>
              <li><Link to="/pricing" className={getLinkHoverClass()}>Custom Web App (₹49,999)</Link></li>
              <li><Link to="/pricing" className={getLinkHoverClass()}>Maintenance Care Plans</Link></li>
              <li className="pt-2">
                <Link to="/admin/login" className={`inline-flex items-center gap-1.5 transition-colors ${getLinkHoverClass()}`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-12 mt-12 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isLuxury ? 'border-[#9E7B4F]/20 text-[#655E56]' : isFuturistic ? 'border-[#00F0FF]/25 text-[#7DD3FC]' : 'border-white/10 text-[#A09B92]'
        }`}>
          <p>© {new Date().getFullYear()} {settings.agencyName} Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with React 19, Tailwind CSS & Supabase</span>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
