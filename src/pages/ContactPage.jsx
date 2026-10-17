import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfoCard } from '../components/contact/ContactInfoCard';
import { FAQSection } from '../components/home/FAQSection';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, MessageSquare } from 'lucide-react';

export const ContactPage = () => {
  useScrollTop();

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans pt-24">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Contact & Inquiry' }]} />

        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Lead Engineer Consultation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Start Your Project or Request a Detailed Scope Quotation
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind, an existing website that needs modernizing, or an ambitious web app to launch? Fill out the discovery form below or reach out directly on WhatsApp.
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
