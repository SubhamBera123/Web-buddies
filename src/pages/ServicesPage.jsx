import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceEnquiryForm } from '../components/services/ServiceEnquiryForm';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, ArrowDown } from 'lucide-react';

export const ServicesPage = () => {
  useScrollTop();
  const { services } = useData();
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');

  const handleRequestQuote = (service) => {
    setSelectedServiceForQuote(service.name);
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans pt-24">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Services' }]} className="mb-8" />

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Engineering & Design Offerings</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailored Web Development Services for Growing Companies
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every business requires a distinct digital strategy. We design and build ultra-responsive websites, modern e-commerce storefronts, and full-stack software tailored to your specific commercial goals.
          </p>
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
