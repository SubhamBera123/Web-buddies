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
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const PricingPage = () => {
  useScrollTop();
  const { pricingPackages } = useData();

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans pt-24">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Pricing' }]} className="mb-8" />

        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear Starting Investment • Zero Secret Fees</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Pricing Built Around Your Business Stage
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every quote includes complete source code ownership, mobile-first responsiveness, on-page SEO, and dedicated post-launch warranty support.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-emerald-400 font-mono">
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

        {/* One-Time vs Recurring + Maintenance Plans */}
        <MaintenanceSection />

        {/* Pricing FAQs */}
        <FAQSection />

        {/* Final CTA */}
        <EnquiryCTA />
      </main>

      <Footer />
    </div>
  );
};
