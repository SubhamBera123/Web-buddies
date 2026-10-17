import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Mail, Phone, MapPin, 
  ArrowUpRight, ShieldCheck, Heart, Sparkles 
} from 'lucide-react';
import { Github, Linkedin, Twitter } from '../common/BrandIcons';
import { useData } from '../../context/DataContext';

export const Footer = () => {
  const { settings, services } = useData();

  return (
    <footer className="bg-[#070A12] border-t border-slate-800/80 text-slate-400 text-sm mt-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white">{settings.agencyName}</span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block -mt-1 font-mono">Web Studio</span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We design and engineer high-performance websites, modern e-commerce stores, and custom full-stack web applications tailored for companies that prioritize growth, speed, and conversion.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={`https://wa.me/${settings.whatsappNumber?.replace(/\+/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                title="WhatsApp Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${settings.email}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                title="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={settings.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={settings.linkedinUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-[11px] bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{settings.availabilityStatus}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">Pages</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home Studio</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services (15)</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing Packages</Link></li>
              <li><Link to="/pricing#calculator" className="hover:text-blue-400 transition-colors">Cost Estimator</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio & Demos (9)</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About the Studio</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Start Project / Contact</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services#business-website" className="hover:text-blue-400 transition-colors">Business Websites</Link></li>
              <li><Link to="/services#custom-web-app" className="hover:text-blue-400 transition-colors">Custom Web Apps</Link></li>
              <li><Link to="/services#ecommerce-website" className="hover:text-blue-400 transition-colors">E-Commerce Stores</Link></li>
              <li><Link to="/services#landing-page" className="hover:text-blue-400 transition-colors">High-Conversion Landing Pages</Link></li>
              <li><Link to="/services#admin-dashboard" className="hover:text-blue-400 transition-colors">Admin Dashboards</Link></li>
              <li><Link to="/services#performance-optimization" className="hover:text-blue-400 transition-colors">Speed & Core Web Vitals</Link></li>
            </ul>
          </div>

          {/* Pricing & Direct Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">Pricing</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Starter Plan (₹4,999)</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Business Plan (₹12,999)</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">E-Commerce (₹29,999)</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Custom Web App (₹49,999)</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Maintenance Care Plans</Link></li>
              <li className="pt-2">
                <Link to="/admin/login" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {settings.agencyName} Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with React 19, Tailwind CSS & Supabase</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
