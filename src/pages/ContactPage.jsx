import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfoCard } from '../components/contact/ContactInfoCard';
import { FAQSection } from '../components/home/FAQSection';
import { useTheme } from '../context/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, Crown, Terminal } from 'lucide-react';

export const ContactPage = () => {
  useScrollTop();
  const { theme, isLuxury, isFuturistic } = useTheme();

  const getPageBgClass = () => {
    if (isLuxury) {
      return 'bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#9E7B4F] selection:text-white';
    }
    if (isFuturistic) {
      return 'bg-[#02040A] text-[#F0FDF4] font-mono selection:bg-[#00F0FF] selection:text-black';
    }
    return 'bg-[#0B0F19] text-slate-100 font-sans selection:bg-[#D2B477] selection:text-black';
  };

  return (
    <div className={`min-h-screen ${getPageBgClass()} flex flex-col pt-24 transition-colors duration-300`}>
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: isLuxury ? 'Private Dialogue' : isFuturistic ? 'UPLINK_INITIALIZE' : 'Contact & Inquiry' }]} />

        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold ${
            isLuxury
              ? 'bg-[#FFFFFF] border border-[#9E7B4F]/40 text-[#9E7B4F] font-serif uppercase tracking-widest'
              : isFuturistic
              ? 'bg-[#060D1E] border border-[#00F0FF]/50 text-[#00F0FF] font-mono shadow-[0_0_12px_rgba(0,240,255,0.3)]'
              : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
          }`}>
            {isLuxury ? <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" /> : isFuturistic ? <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>{isLuxury ? 'Direct Principal Audience & Discovery' : isFuturistic ? 'TERMINAL_UPLINK // LEAD_DIRECTORS' : 'Direct Lead Engineer Consultation'}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
            isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
          }`}>
            {isLuxury ? 'Initiate Private Commission Dialogue' : isFuturistic ? 'INITIALIZE SECURE SYSTEM UPLINK' : 'Start Your Project or Request a Detailed Scope Quotation'}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLuxury ? 'text-[#655E56] font-sans' : isFuturistic ? 'text-[#7DD3FC] font-mono' : 'text-slate-300'
          }`}>
            Have an ambitious web project in mind, an existing system that needs modernizing, or an MVP to engineer? Submit your discovery brief below or connect directly via WhatsApp.
          </p>
        </div>

        {/* Main Grid: Contact Form (7 cols) + Contact Info (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>
        </div>

        {/* FAQs */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};
