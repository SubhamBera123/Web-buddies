import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ServiceCard } from '../components/services/ServiceCard';
import { ScrollDriven3DLaptopJourney } from '../components/services/ScrollDriven3DLaptopJourney';
import { ServiceEnquiryForm } from '../components/services/ServiceEnquiryForm';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { Interactive3DBackground } from '../components/common/Interactive3DBackground';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, Crown, Terminal, Layers } from 'lucide-react';

export const ServicesPage = () => {
  useScrollTop();
  const { services } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');

  const handleRequestQuote = (service) => {
    setSelectedServiceForQuote(service.name);
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className={`min-h-screen ${getPageBgClass()} flex flex-col pt-24 transition-colors duration-300 relative overflow-x-hidden`}>
      {/* Interactive 3D Background */}
      <Interactive3DBackground />

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: isLuxury ? 'Atelier Disciplines' : isFuturistic ? 'CAPABILITIES_INDEX' : 'Services' }]} className="mb-8" />

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold ${
            isLuxury
              ? 'bg-[#FFFFFF] border border-[#9E7B4F]/40 text-[#9E7B4F] font-serif uppercase tracking-widest'
              : isFuturistic
              ? 'bg-[#060D1E] border border-[#00F0FF]/50 text-[#00F0FF] font-mono shadow-[0_0_12px_rgba(0,240,255,0.3)]'
              : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
          }`}>
            {isLuxury ? <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" /> : isFuturistic ? <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>{isLuxury ? 'Archival Disciplines & Craftsmanship' : isFuturistic ? 'SYSTEM_CAPABILITIES // 15_CORE_MODULES' : 'Complete Engineering & Design Offerings'}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
          }`}>
            {isLuxury ? 'Curated Architectural Disciplines for Distinctive Enterprises' : isFuturistic ? 'DEPLOYABLE ARCHITECTURAL CAPABILITIES' : 'Tailored Web Development Services for Growing Companies'}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLuxury ? 'text-[#655E56] font-sans' : isFuturistic ? 'text-[#7DD3FC] font-mono' : 'text-slate-300'
          }`}>
            Every business requires a distinct digital strategy. We design and build ultra-responsive websites, modern e-commerce storefronts, and full-stack software tailored to your specific commercial goals.
          </p>
        </div>

        {/* Interactive Scroll-Driven 3D Laptop Website-Building Journey */}
        <ScrollDriven3DLaptopJourney onRequestQuote={handleRequestQuote} />

        {/* Section Divider & Catalog Header */}
        <div id="services-catalog" className="pt-16 pb-10 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
              isLuxury ? 'bg-white border border-[#9E7B4F]/30 text-[#9E7B4F] font-serif' : isFuturistic ? 'bg-[#091328] border border-[#00F0FF]/40 text-[#00F0FF] font-mono' : 'bg-slate-900 border border-slate-800 text-slate-300'
            }`}>
              <Layers className="w-3.5 h-3.5" />
              <span>FULL CAPABILITIES CATALOG // ALL 15 SPECIALIZATIONS</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
              Specialized Service Disciplines
            </h2>
            <p className={`text-xs sm:text-sm mt-1 max-w-xl ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
              Select any specialized capability below to inspect deliverables, technologies used, and transparent base investments.
            </p>
          </div>
        </div>

        {/* All 15 Services List */}
        <div className="space-y-8 mb-24">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onRequestQuote={handleRequestQuote}
            />
          ))}
        </div>

        {/* Service Enquiry Form Section */}
        <div className="mb-20">
          <ServiceEnquiryForm preselectedService={selectedServiceForQuote} />
        </div>

        {/* Bottom Enquiry CTA */}
        <EnquiryCTA />
      </main>

      <Footer />
    </div>
  );
};
