import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Calculator } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useData } from '../../context/DataContext';

export const PricingOverview = () => {
  const { pricingPackages } = useData();

  return (
    <section className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background architectural grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D2B477] uppercase tracking-wider block mb-2">
            Clear & Predictable Investment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
            Transparent Pricing Built for Every Stage
          </h2>
          <p className="text-sm sm:text-base text-[#A09B92] mt-2 leading-relaxed">
            Starting development fees with no surprise hidden fees. You own 100% of your code and digital assets.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'glass-panel-glow border-2 border-[rgba(184,148,88,0.60)] shadow-xl shadow-[#B89458]/10 bg-[#111214]'
                  : 'glass-card border border-white/10 hover:border-[rgba(184,148,88,0.40)] bg-[#111214]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#B89458] to-[#D2B477] text-[#050505] font-bold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md shadow-[#B89458]/30">
                    ★ Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono text-[#A09B92] tracking-wider uppercase block">
                  {pkg.code}
                </span>
                <h3 className="text-lg font-bold text-[#F5F3EF] mt-1">{pkg.name}</h3>
                
                <div className="mt-4 pb-4 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#A09B92] font-mono">from</span>
                    <span className="text-3xl font-extrabold text-[#F5F3EF] font-mono">{pkg.priceDisplay}</span>
                  </div>
                  <span className="text-[10px] text-[#A09B92] block mt-1 uppercase tracking-wider">
                    {pkg.billingType}
                  </span>
                </div>

                <p className="text-xs text-[#A09B92] mt-4 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-2 text-xs text-[#F5F3EF]">
                  {pkg.features?.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#D2B477] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                <Link to={`/contact?package=${pkg.id}`} className="block">
                  <Button
                    variant={pkg.popular ? "primary" : "secondary"}
                    size="sm"
                    className="w-full"
                  >
                    {pkg.ctaText || "Select Package"}
                  </Button>
                </Link>
                <Link 
                  to="/pricing" 
                  className="block text-center text-[11px] text-[#A09B92] hover:text-[#D2B477] transition-colors"
                >
                  View full package breakdown →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Estimator Callout */}
        <div className="mt-14 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl bg-[#111214]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#171819] text-[#D2B477] border border-[rgba(184,148,88,0.30)] flex items-center justify-center shrink-0 shadow-sm shadow-[#B89458]/10">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#F5F3EF]">Need a custom feature combination?</h4>
              <p className="text-xs text-[#A09B92] mt-1 leading-relaxed">Use our dynamic interactive Cost Estimator to customize pages, authentication, e-commerce, and admin controls.</p>
            </div>
          </div>
          <Link to="/pricing#calculator" className="shrink-0">
            <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right">
              Open Interactive Cost Estimator
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
