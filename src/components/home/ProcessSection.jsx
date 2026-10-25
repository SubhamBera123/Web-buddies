import React from 'react';
import { Compass, Palette, Code, Rocket, CheckCircle2, Crown, Cpu, Activity, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ProcessSection = () => {
  const { theme, isLuxury, isFuturistic } = useTheme();
  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Discovery & Architecture",
      description: "Strategic scoping of user flows, technical stack, and fixed delivery milestones."
    },
    {
      num: "02",
      icon: Palette,
      title: "Design & Prototyping",
      description: "Editorial UI design systems, responsive typography, and interactive prototypes."
    },
    {
      num: "03",
      icon: Code,
      title: "Full-Stack Engineering",
      description: "Clean modular React engineering with secure database logic and API integration."
    },
    {
      num: "04",
      icon: Rocket,
      title: "Audit & Global Launch",
      description: "Cross-device testing, 90+ Lighthouse speed tuning, and 100% code handover."
    }
  ];

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    const romanStages = ['I', 'II', 'III', 'IV'];
    return (
      <section className="py-24 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span>THE ARTISANAL JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              The Four Milestones of Craft
            </h2>
            <p className="text-sm sm:text-base text-[#655E56] font-sans leading-relaxed">
              A transparent, disciplined atelier journey engineered for zero surprises and uncompromising perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl p-7 border border-[#9E7B4F]/30 bg-[#FFFFFF] shadow-[0_15px_35px_-12px_rgba(158,123,79,0.12)] hover:border-[#9E7B4F] hover:shadow-[0_20px_50px_-15px_rgba(158,123,79,0.22)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#9E7B4F]/15">
                      <span className="font-serif text-2xl font-bold text-[#9E7B4F]">
                        STAGE {romanStages[i]}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/30 text-[#9E7B4F] flex items-center justify-center shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#9E7B4F] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#655E56] font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#9E7B4F]/15 flex items-center gap-1.5 text-xs text-[#9E7B4F] font-serif font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Milestone {romanStages[i]} Authenticated</span>
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
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/40 text-[#00F0FF] text-xs tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>[CI_CD_PIPELINE // 4_PHASES]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-black text-[#F0FDF4] tracking-wider">
              QUANTUM DEPLOYMENT PIPELINE
            </h2>
            <p className="text-sm sm:text-base text-[#7DD3FC] leading-relaxed">
              Automated integration testing, sub-second edge routing, and continuous production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-6 bg-[#060D1E]/95 border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.12)] hover:border-[#00F0FF] hover:shadow-[0_0_35px_rgba(0,240,255,0.3)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#00F0FF]/20">
                      <span className="font-cyber text-lg font-bold text-[#00F0FF]">
                        PHASE_0{i + 1}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#02040A] border border-[#00F0FF]/40 text-[#00F0FF] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-cyber font-bold text-[#F0FDF4] group-hover:text-[#00F0FF] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#7DD3FC] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#00F0FF]/20 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <Zap className="w-3 h-3" />
                    <span>PIPELINE_VERIFIED: 100%</span>
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
     3. ORIGINAL STUDIO VARIANT (UI 1 - Default)
     ========================================================================= */
  return (
    <section className="py-20 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-[#D2B477] uppercase tracking-wider block mb-2">
            Execution Framework
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
            How We Build Your Digital Presence
          </h2>
          <p className="text-sm sm:text-base text-[#A09B92] mt-2">
            A disciplined four-stage engineering framework built for transparency and fixed timelines.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div 
                key={i}
                className="glass-card rounded-2xl p-6 border border-white/10 relative flex flex-col justify-between group hover:border-[rgba(184,148,88,0.50)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8),0_0_20px_-2px_rgba(184,148,88,0.12)] hover:-translate-y-1 transition-all duration-300 bg-[#111214]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#B89458]/40 group-hover:text-[#D2B477] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#171819] border border-[rgba(184,148,88,0.30)] text-[#D2B477] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A09B92] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#A09B92] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D2B477]" />
                  <span>Stage {step.num} Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
