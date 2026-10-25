import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle, Crown, Cpu, Sparkles, Activity } from 'lucide-react';
import { DynamicIcon, formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const ServicesOverview = () => {
  const { services } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();
  // Display top 6 services on homepage
  const highlightServices = services.slice(0, 6);

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section className="py-24 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-[#9E7B4F]/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs mb-3">
                <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
                <span>THE ATELIER CURATION // 15 DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
                Architectural Offerings &amp; Digital Craft
              </h2>
              <p className="text-sm sm:text-base text-[#655E56] font-sans mt-2 max-w-xl leading-relaxed">
                Tailored digital strategy, bespoke storefronts, and full-stack software architectures designed to establish undeniable commercial prestige.
              </p>
            </div>
            <Link to="/services" className="shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="border-[#9E7B4F]/40 text-[#1C1917] hover:bg-[#FFFFFF] font-serif text-sm shadow-xs cursor-pointer"
              >
                Inspect All 15 Disciplines
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightServices.map((service, idx) => {
              const romanNums = ['I', 'II', 'III', 'IV', 'V', 'VI'];
              return (
                <div
                  key={service.id}
                  className="rounded-3xl p-7 border border-[#9E7B4F]/30 bg-[#FFFFFF] shadow-[0_15px_35px_-12px_rgba(158,123,79,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(158,123,79,0.22)] hover:border-[#9E7B4F] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#9E7B4F]/15">
                      <span className="text-xs font-serif font-bold text-[#9E7B4F] tracking-widest uppercase">
                        DISCIPLINE {romanNums[idx] || `0${idx + 1}`}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/30 text-[#9E7B4F] flex items-center justify-center shadow-xs">
                        <DynamicIcon name={service.iconName} className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#1C1917] group-hover:text-[#9E7B4F] transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#655E56] font-sans leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <ul className="space-y-2 pt-2 text-xs text-[#655E56] font-sans">
                      {service.keyFeatures?.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B4F]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#9E7B4F]/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#655E56] uppercase tracking-wider font-sans block">Starting Commission</span>
                      <span className="text-base font-serif font-bold text-[#9E7B4F]">
                        {formatINR(service.startingPrice)}
                      </span>
                    </div>
                    <Link
                      to={`/services#${service.id}`}
                      className="text-xs font-serif font-bold text-[#1C1917] hover:text-[#9E7B4F] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Scope</span>
                      <ArrowRight className="w-3 h-3 text-[#9E7B4F]" />
                    </Link>
                  </div>
                </div>
              );
            })}
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#00F0FF]/25">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/40 text-[#00F0FF] text-xs tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)] mb-3">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>[SUBSYSTEMS_REGISTRY // 15_CAPABILITIES]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-black text-[#F0FDF4] tracking-wider">
                MODULAR SYSTEM CAPABILITIES
              </h2>
              <p className="text-sm sm:text-base text-[#7DD3FC] mt-2 max-w-xl leading-relaxed">
                Hardware-accelerated web platforms, secure microservice architectures, and enterprise database schemas.
              </p>
            </div>
            <Link to="/services" className="shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/10 text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer"
              >
                [OPEN_ALL_15_PROTOCOLS]
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightServices.map((service, idx) => (
              <div
                key={service.id}
                className="relative rounded-2xl p-6 bg-[#060D1E]/95 border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.12)] hover:border-[#00F0FF] hover:shadow-[0_0_35px_rgba(0,240,255,0.3)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#00F0FF]/20">
                    <span className="text-[10px] text-[#00F0FF] font-bold">
                      PROTOCOL_0{idx + 1} // ONLINE
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#02040A] border border-[#00F0FF]/40 text-[#00F0FF] flex items-center justify-center">
                      <DynamicIcon name={service.iconName} className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-cyber font-bold text-[#F0FDF4] group-hover:text-[#00F0FF] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#7DD3FC] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-1 text-[11px] text-[#7DD3FC]">
                    {service.keyFeatures?.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-5 border-t border-[#00F0FF]/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-[#7DD3FC] block">INITIAL_COST</span>
                    <strong className="text-[#00F0FF] font-bold">{formatINR(service.startingPrice)}</strong>
                  </div>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-[#00F0FF] hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>[RUN_SPEC]</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
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
      {/* Background architectural dot texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#D2B477] uppercase tracking-wider block mb-2">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
              Engineered for Scale & Conversion
            </h2>
            <p className="text-sm sm:text-base text-[#A09B92] mt-2 max-w-xl leading-relaxed">
              Bespoke digital architecture crafted with clean code, modern UX, and zero template bloat.
            </p>
          </div>
          <Link to="/services" className="shrink-0">
            <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right">
              View All 15 Services
            </Button>
          </Link>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group hover:border-[rgba(184,148,88,0.50)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8),0_0_20px_-2px_rgba(184,148,88,0.12)] hover:-translate-y-1 transition-all duration-300 bg-[#111214]"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#171819] border border-[rgba(184,148,88,0.30)] text-[#D2B477] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-[#B89458] group-hover:to-[#D2B477] group-hover:text-[#050505] transition-all duration-300 shadow-sm shadow-[#B89458]/10">
                  <DynamicIcon name={service.iconName} className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#A09B92] mt-2 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features Preview */}
                <ul className="mt-4 space-y-1.5 text-xs text-[#A09B92]">
                  {service.keyFeatures?.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D2B477] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#A09B92] block uppercase font-mono">Starting From</span>
                  <span className="text-sm font-bold text-[#F5F3EF] font-mono">
                    {formatINR(service.startingPrice)}
                  </span>
                </div>
                <Link 
                  to={`/services#${service.id}`} 
                  className="text-xs font-semibold text-[#D2B477] hover:text-[#F5F3EF] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
