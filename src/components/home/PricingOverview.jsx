import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Calculator } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useData } from '../../context/DataContext';

export const PricingOverview = () => {
  const { pricingPackages } = useData();

  return (
    <section className="py-20 relative bg-[#090D17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            Clear & Predictable Investment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Transparent Pricing Built for Every Stage
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
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
                  ? 'glass-panel-glow border-2 border-blue-500/50 shadow-xl shadow-blue-500/15'
                  : 'glass-card border border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    ★ Most Popular Choice
                  </span>
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase block">
                  {pkg.code}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{pkg.name}</h3>
                
                <div className="mt-4 pb-4 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-400 font-mono">from</span>
                    <span className="text-3xl font-extrabold text-white font-mono">{pkg.priceDisplay}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1 uppercase tracking-wider">
                    {pkg.billingType}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Features List */}
                <ul className="mt-6 space-y-2 text-xs text-slate-300">
                  {pkg.features?.slice(0, 5).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
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
                  className="block text-center text-[11px] text-slate-400 hover:text-blue-400 transition-colors"
                >
                  View full package breakdown →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Estimator Callout */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a custom feature combination?</h4>
              <p className="text-xs text-slate-400 mt-1">Use our dynamic interactive Cost Estimator to customize pages, authentication, e-commerce, and admin controls.</p>
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
