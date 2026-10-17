import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const PricingCard = ({ pkg }) => {
  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
        pkg.popular
          ? 'glass-panel-glow border-2 border-blue-500/60 shadow-2xl shadow-blue-500/20'
          : 'glass-card border border-slate-800 hover:border-slate-700'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-bold text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Most Popular Choice</span>
          </span>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold text-blue-400 tracking-widest uppercase block">
            {pkg.code}
          </span>
          <h3 className="text-2xl font-black text-white mt-1">{pkg.name}</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            {pkg.tagline}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80">
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-slate-400 font-mono">starting at</span>
            <span className="text-3xl sm:text-4xl font-black text-white font-mono">{pkg.priceDisplay}</span>
          </div>
          <span className="text-[11px] text-slate-400 block mt-1 uppercase font-mono tracking-wider">
            {pkg.billingType}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 pt-2 border-t border-slate-800/60 font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>Delivery Timeline: {pkg.deliveryTime}</span>
          </div>
        </div>

        {/* Target Fit */}
        {pkg.recommendedFor && (
          <div className="text-xs text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
            <strong className="text-blue-400 block mb-0.5">Best For:</strong>
            {pkg.recommendedFor}
          </div>
        )}

        {/* Included Features */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
            Included Deliverables:
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {pkg.features?.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-8 mt-8 border-t border-slate-800/80 space-y-3">
        <Link to={`/contact?package=${pkg.id}`} className="block">
          <Button
            variant={pkg.popular ? "primary" : "secondary"}
            size="lg"
            className="w-full font-bold"
            icon={ArrowRight}
            iconPosition="right"
          >
            {pkg.ctaText || "Get a Quote"}
          </Button>
        </Link>
        <p className="text-[11px] text-slate-500 text-center font-mono">
          Fixed-price milestone agreement • 100% source code handover
        </p>
      </div>
    </div>
  );
};
