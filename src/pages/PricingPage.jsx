import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingCard } from '../components/pricing/PricingCard';
import { PricingComparisonTable } from '../components/pricing/PricingComparisonTable';
import { CostEstimator } from '../components/pricing/CostEstimator';
import { MaintenanceSection } from '../components/pricing/MaintenanceSection';
import { FAQSection } from '../components/home/FAQSection';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, ShieldCheck, Crown, Terminal } from 'lucide-react';

export const PricingPage = () => {
  useScrollTop();
  const { pricingPackages } = useData();
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

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: isLuxury ? 'Investment Schedule' : isFuturistic ? 'DEPLOYMENT_TIERS' : 'Pricing' }]} className="mb-8" />

        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold ${
            isLuxury
              ? 'bg-[#FFFFFF] border border-[#9E7B4F]/40 text-[#9E7B4F] font-serif uppercase tracking-widest'
              : isFuturistic
              ? 'bg-[#060D1E] border border-[#00F0FF]/50 text-[#00F0FF] font-mono shadow-[0_0_12px_rgba(0,240,255,0.3)]'
              : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
          }`}>
            {isLuxury ? <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" /> : isFuturistic ? <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>{isLuxury ? 'Archival Retainers & Investment Schedule' : isFuturistic ? 'CLEARANCE_INDEX // ZERO_SURPRISE_FEES' : 'Clear Starting Investment • Zero Secret Fees'}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
          }`}>
            {isLuxury ? 'Curated Investment Tiers Tailored to Your Commercial Ambitions' : isFuturistic ? 'TRANSPARENT SYSTEM DEPLOYMENT TIERS' : 'Transparent Pricing Built Around Your Business Stage'}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLuxury ? 'text-[#655E56] font-sans' : isFuturistic ? 'text-[#7DD3FC] font-mono' : 'text-slate-300'
          }`}>
            Every engagement includes complete source code ownership, mobile-first calibration, on-page SEO, and dedicated post-launch warranty support.
          </p>

          <div className={`pt-2 flex items-center gap-3 text-xs font-mono ${
            isLuxury ? 'text-[#9E7B4F] font-serif font-bold' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'
          }`}>
            <ShieldCheck className="w-4 h-4" />
            <span>Configurable starting fees • Milestone-based delivery guarantees</span>
          </div>
        </div>

        {/* 4 Core Pricing Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
          {pricingPackages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Interactive Cost Estimator Tool */}
        <CostEstimator />

        {/* Full Feature Comparison Matrix */}
        <PricingComparisonTable />

        {/* Maintenance Care Plans */}
        <MaintenanceSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Bottom Call to Action */}
        <EnquiryCTA />
      </main>

      <Footer />
    </div>
  );
};
