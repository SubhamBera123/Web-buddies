import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, ArrowRight, ShieldCheck, Sparkles, Crown, Cpu } from 'lucide-react';
import { Button } from '../common/Button';
import { useTheme } from '../../context/ThemeContext';

export const PricingCard = ({ pkg }) => {
  const { isLuxury, isFuturistic } = useTheme();

  const getContainerStyles = () => {
    if (isLuxury) {
      return pkg.popular
        ? 'bg-[#FFFFFF] border-2 border-[#9E7B4F] shadow-xl'
        : 'bg-[#FFFFFF] border border-[#9E7B4F]/30 hover:border-[#9E7B4F]/60 shadow-md';
    }
    if (isFuturistic) {
      return pkg.popular
        ? 'bg-[#060D1E] border-2 border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.25)]'
        : 'bg-[#060D1E]/90 border border-[#00F0FF]/35 hover:border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.1)]';
    }
    // Original
    return pkg.popular
      ? 'glass-panel-glow border-2 border-blue-500/60 shadow-2xl shadow-blue-500/20'
      : 'glass-card border border-slate-800 hover:border-slate-700';
  };

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${getContainerStyles()}`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`font-bold text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 ${
              isLuxury
                ? 'bg-[#1C1917] text-[#FAF8F5] border border-[#9E7B4F] font-serif'
                : isFuturistic
                ? 'bg-[#00F0FF] text-[#02040A] font-mono shadow-[0_0_15px_rgba(0,240,255,0.6)]'
                : 'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-blue-500/30'
            }`}
          >
            {isLuxury ? (
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
            ) : isFuturistic ? (
              <Cpu className="w-3.5 h-3.5 text-[#02040A]" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            <span>{isLuxury ? 'Signature Tier' : isFuturistic ? 'PRIORITY_SYS' : 'Most Popular Choice'}</span>
          </span>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <span
            className={`text-xs font-mono font-bold tracking-widest uppercase block ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
            }`}
          >
            {pkg.code}
          </span>
          <h3
            className={`text-2xl font-black mt-1 ${
              isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
            }`}
          >
            {pkg.name}
          </h3>
          <p
            className={`text-xs sm:text-sm mt-2 leading-relaxed ${
              isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'
            }`}
          >
            {pkg.tagline}
          </p>
        </div>

        {/* Pricing Display */}
        <div
          className={`p-4 rounded-2xl border ${
            isLuxury
              ? 'bg-[#FAF8F5] border-[#9E7B4F]/25 text-[#1C1917]'
              : isFuturistic
              ? 'bg-[#091328] border-[#00F0FF]/30 text-[#F0FDF4]'
              : 'bg-slate-900/80 border border-slate-800/80'
          }`}
        >
          <div className="flex items-baseline gap-1">
            <span
              className={`text-xs font-mono ${
                isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'
              }`}
            >
              starting at
            </span>
            <span
              className={`text-3xl sm:text-4xl font-black font-mono ${
                isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-white'
              }`}
            >
              {pkg.priceDisplay}
            </span>
          </div>
          <span
            className={`text-[11px] block mt-1 uppercase font-mono tracking-wider ${
              isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'
            }`}
          >
            {pkg.billingType}
          </span>
          <div
            className={`flex items-center gap-1.5 text-xs mt-2 pt-2 border-t font-medium ${
              isLuxury
                ? 'border-[#9E7B4F]/20 text-[#9E7B4F]'
                : isFuturistic
                ? 'border-[#00F0FF]/25 text-emerald-400'
                : 'border-slate-800/60 text-emerald-400'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Delivery Timeline: {pkg.deliveryTime}</span>
          </div>
        </div>

        {/* Target Fit */}
        {pkg.recommendedFor && (
          <div
            className={`text-xs p-3 rounded-xl border ${
              isLuxury
                ? 'bg-[#FAF8F5] text-[#655E56] border-[#9E7B4F]/20'
                : isFuturistic
                ? 'bg-[#091328] text-[#7DD3FC] border-[#00F0FF]/25 font-mono'
                : 'bg-slate-900/40 text-slate-300 border-slate-800/60'
            }`}
          >
            <strong className={`block mb-0.5 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`}>
              Best For:
            </strong>
            {pkg.recommendedFor}
          </div>
        )}

        {/* Included Features */}
        <div className="space-y-2.5">
          <h4
            className={`text-xs font-bold uppercase tracking-wider font-mono ${
              isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-slate-200'
            }`}
          >
            Included Deliverables:
          </h4>
          <ul className="space-y-2 text-xs">
            {pkg.features?.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'
                  }`}
                />
                <span
                  className={`leading-relaxed ${
                    isLuxury ? 'text-[#1C1917]' : isFuturistic ? 'text-[#F0FDF4]' : 'text-slate-300'
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div
        className={`pt-8 mt-8 border-t space-y-3 ${
          isLuxury ? 'border-[#9E7B4F]/20' : isFuturistic ? 'border-[#00F0FF]/25' : 'border-slate-800/80'
        }`}
      >
        <Link to={`/contact?package=${pkg.id}`} className="block">
          <Button
            variant={pkg.popular ? 'primary' : 'secondary'}
            size="lg"
            className="w-full font-bold"
            icon={ArrowRight}
            iconPosition="right"
          >
            {pkg.ctaText || 'Get a Quote'}
          </Button>
        </Link>
        <p
          className={`text-[11px] text-center font-mono ${
            isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]/70' : 'text-slate-500'
          }`}
        >
          Fixed-price milestone agreement • 100% source code handover
        </p>
      </div>
    </div>
  );
};
