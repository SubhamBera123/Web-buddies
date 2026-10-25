import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Calculator, Crown, Cpu, Zap, Activity } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const PricingOverview = () => {
  const { pricingPackages } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section className="py-24 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span>TRANSPARENT ATELIER COMMISSIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              Curated Retainers &amp; Scope Investments
            </h2>
            <p className="text-sm sm:text-base text-[#655E56] font-sans leading-relaxed">
              Transparent, fixed investment tiers with zero hidden fees. Every engagement guarantees complete code and asset ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative bg-[#FFFFFF] ${
                  pkg.popular
                    ? 'border-2 border-[#9E7B4F] shadow-[0_20px_50px_-15px_rgba(158,123,79,0.25)]'
                    : 'border border-[#9E7B4F]/30 shadow-[0_15px_35px_-12px_rgba(158,123,79,0.12)] hover:border-[#9E7B4F]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#9E7B4F] text-[#FAF8F5] font-serif font-bold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      ★ Atelier Signature Tier
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-serif text-[#9E7B4F] tracking-widest uppercase block">
                    {pkg.code}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1C1917] mt-1">{pkg.name}</h3>

                  <div className="mt-4 pb-4 border-b border-[#9E7B4F]/15">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#655E56] font-serif">from</span>
                      <span className="text-3xl font-serif font-bold text-[#9E7B4F]">{pkg.priceDisplay}</span>
                    </div>
                    <span className="text-[10px] text-[#655E56] block mt-1 uppercase tracking-wider font-sans">
                      {pkg.billingType}
                    </span>
                  </div>

                  <p className="text-xs text-[#655E56] font-sans mt-4 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <ul className="mt-6 space-y-2 text-xs text-[#1C1917] font-sans">
                    {pkg.features?.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#9E7B4F] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#9E7B4F]/15 space-y-2">
                  <Link to={`/contact?package=${pkg.id}`} className="block">
                    <Button
                      variant={pkg.popular ? "primary" : "secondary"}
                      size="sm"
                      className={`w-full font-serif text-xs ${
                        pkg.popular
                          ? 'bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5]'
                          : 'bg-[#FAF8F5] text-[#1C1917] hover:bg-[#FFFFFF] border border-[#9E7B4F]/30'
                      }`}
                    >
                      {pkg.ctaText ? `Inquire: ${pkg.name}` : "Select Atelier Tier"}
                    </Button>
                  </Link>
                  <Link
                    to="/pricing"
                    className="block text-center text-[11px] font-serif italic text-[#655E56] hover:text-[#9E7B4F] transition-colors"
                  >
                    View detailed dossier breakdown →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl p-8 border border-[#9E7B4F]/30 bg-[#FFFFFF] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_-15px_rgba(158,123,79,0.12)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] text-[#9E7B4F] border border-[#9E7B4F]/30 flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-[#1C1917]">Require a bespoke architectural quotation?</h4>
                <p className="text-xs text-[#655E56] font-sans mt-0.5">Utilize our interactive scope calculator to estimate bespoke deliverables, APIs, and timeline.</p>
              </div>
            </div>
            <Link to="/pricing#calculator" className="shrink-0">
              <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right" className="border-[#9E7B4F]/40 font-serif text-xs text-[#1C1917]">
                Open Scope Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================================
     2. CYBER FUTURISTIC VARIANT (UI 3)
     ========================================================================= */
  if (isFuturistic) {
    return (
      <section className="py-24 relative bg-[#02040A] text-[#F0FDF4] border-t border-[#00F0FF]/30 overflow-hidden font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/40 text-[#00F0FF] text-xs tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>[DEPLOYMENT_SPEC // 4_SYS_TIERS]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-black text-[#F0FDF4] tracking-wider">
              DEPLOYMENT PROTOCOL TIERS
            </h2>
            <p className="text-sm sm:text-base text-[#7DD3FC] leading-relaxed">
              Standardized deployment packages with 100% intellectual property handover and zero vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative bg-[#060D1E]/95 ${
                  pkg.popular
                    ? 'border-2 border-[#00F0FF] shadow-[0_0_35px_rgba(0,240,255,0.3)]'
                    : 'border border-[#00F0FF]/35 hover:border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00F0FF] text-[#02040A] font-bold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                      ★ PRIORITY_SYS_TIER
                    </span>
                  </div>
                )}

                <div>
                  <span className="text-[10px] text-[#7DD3FC] tracking-wider uppercase block">
                    {pkg.code}
                  </span>
                  <h3 className="text-lg font-cyber font-bold text-[#F0FDF4] mt-1">{pkg.name}</h3>

                  <div className="mt-4 pb-4 border-b border-[#00F0FF]/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#7DD3FC]">from</span>
                      <span className="text-3xl font-cyber font-black text-[#00F0FF]">{pkg.priceDisplay}</span>
                    </div>
                    <span className="text-[10px] text-[#7DD3FC] block mt-1 uppercase tracking-wider">
                      {pkg.billingType}
                    </span>
                  </div>

                  <p className="text-xs text-[#7DD3FC] mt-4 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <ul className="mt-6 space-y-2 text-xs text-[#F0FDF4]">
                    {pkg.features?.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#00F0FF]/20 space-y-2">
                  <Link to={`/contact?package=${pkg.id}`} className="block">
                    <Button
                      variant={pkg.popular ? "primary" : "secondary"}
                      size="sm"
                      className={`w-full font-mono text-xs ${
                        pkg.popular
                          ? 'bg-[#00F0FF] text-[#02040A] hover:bg-[#67E8F9] shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                          : 'bg-[#02040A] text-[#7DD3FC] border border-[#00F0FF]/40 hover:border-[#00F0FF]'
                      }`}
                    >
                      {pkg.ctaText || "INITIALIZE_PACKAGE"}
                    </Button>
                  </Link>
                  <Link
                    to="/pricing"
                    className="block text-center text-[10px] text-[#7DD3FC] hover:text-[#00F0FF] transition-colors"
                  >
                    [FULL_SPECIFICATION_MATRIX] →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl p-6 sm:p-8 bg-[#060D1E] border border-[#00F0FF]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(0,240,255,0.15)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#02040A] text-[#00F0FF] border border-[#00F0FF]/40 flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-cyber font-bold text-[#F0FDF4]">CUSTOM MODULE COMBINATION REQUIRED?</h4>
                <p className="text-xs text-[#7DD3FC] mt-0.5">Use the dynamic interactive Cost Estimator to configure custom nodes, APIs, and microservices.</p>
              </div>
            </div>
            <Link to="/pricing#calculator" className="shrink-0">
              <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right" className="border-[#00F0FF]/40 text-[#00F0FF] font-mono text-xs">
                [RUN_COST_ESTIMATOR]
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================================
     3. ORIGINAL STUDIO VARIANT (UI 1 - Default)
     ========================================================================= */
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
