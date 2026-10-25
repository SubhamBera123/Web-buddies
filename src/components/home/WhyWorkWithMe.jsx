import React from 'react';
import { 
  UserCheck, Zap, Shield, Code2, Headphones, Cpu, 
  CheckCircle, ArrowRight, Crown, Sparkles, Activity, Terminal 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { useTheme } from '../../context/ThemeContext';

export const WhyWorkWithMe = () => {
  const { theme, isLuxury, isFuturistic } = useTheme();
  const differentiators = [
    {
      icon: UserCheck,
      title: "Direct Access to Your Senior Engineer",
      description: "You work directly with the developer building your code. No sales reps, no junior interns, and no games of telephone. Feedback is implemented fast and accurately."
    },
    {
      icon: Code2,
      title: "Handcrafted Code, Zero Clunky Builders",
      description: "We don't use slow WordPress page-builder plugins that bloat your website with 40 scripts. We write clean, semantic React, Tailwind CSS, and SQL engineered for longevity."
    },
    {
      icon: Zap,
      title: "Obsession with Sub-Second Loading Speed",
      description: "Every website is tuned to hit 90+ Google Lighthouse scores. Faster sites retain more mobile visitors, reduce paid ad bounce rates, and rank higher organically on Google."
    },
    {
      icon: Shield,
      title: "100% Full IP & Source Code Ownership",
      description: "Once launched, you own all code, database schemas, and digital assets. You are never locked into proprietary hosting systems or recurring hostage fees."
    },
    {
      icon: Cpu,
      title: "Enterprise Full-Stack Capability",
      description: "Beyond presentation websites, we build authenticated client dashboards, relational databases, REST APIs, and automated Stripe/Razorpay payment workflows."
    },
    {
      icon: Headphones,
      title: "Dedicated Post-Launch Warranty Support",
      description: "We don't vanish after launch day. Every package includes a complimentary post-launch warranty with bug-fixing guarantees and optional ongoing care retainers."
    }
  ];

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section className="py-24 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span>THE CRAFTSMANSHIP MANIFESTO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              The Uncompromising Atelier Standard
            </h2>
            <p className="text-sm sm:text-base text-[#655E56] font-sans leading-relaxed">
              Direct master engineering with transparent fees, strict delivery milestones, and absolute digital asset ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl p-7 bg-[#FFFFFF] border border-[#9E7B4F]/30 shadow-[0_15px_35px_-12px_rgba(158,123,79,0.12)] hover:border-[#9E7B4F] hover:shadow-[0_20px_50px_-15px_rgba(158,123,79,0.2)] transition-all duration-300 space-y-4 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF8F5] border border-[#9E7B4F]/30 text-[#9E7B4F] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#655E56] font-sans leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-3xl p-8 sm:p-10 border border-[#9E7B4F]/30 bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_-15px_rgba(158,123,79,0.15)]">
            <div className="space-y-1">
              <h4 className="text-xl font-serif font-bold text-[#1C1917]">Have an ambitious private commission in mind?</h4>
              <p className="text-xs sm:text-sm text-[#655E56] font-sans">Receive a confidential feasibility scope and exact delivery timeline within hours.</p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] border border-[#9E7B4F]/40 font-serif text-sm px-6 py-2.5 shadow-md cursor-pointer"
              >
                Inquire With Atelier
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
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/40 text-[#00F0FF] text-xs tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>CORE ARCHITECTURAL BENCHMARKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-black text-[#F0FDF4] tracking-wider">
              SYSTEM DIAGNOSTICS &amp; GUARANTEES
            </h2>
            <p className="text-sm sm:text-base text-[#7DD3FC] leading-relaxed">
              Direct engineering access with zero latency, verified zero-vulnerability standards, and full IP transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-6 bg-[#060D1E]/95 border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.12)] hover:border-[#00F0FF] hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#02040A] border border-[#00F0FF]/40 text-[#00F0FF] flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-[#00F0FF] font-bold">BENCHMARK_0{index + 1}</span>
                  </div>
                  <h3 className="text-base font-cyber font-bold text-[#F0FDF4] group-hover:text-[#00F0FF] transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-[#7DD3FC] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl p-6 sm:p-8 bg-[#060D1E] border border-[#00F0FF]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(0,240,255,0.15)]">
            <div>
              <h4 className="text-base font-cyber font-bold text-[#F0FDF4]">READY TO INITIALIZE SYSTEM SPECIFICATIONS?</h4>
              <p className="text-xs text-[#7DD3FC] mt-1">Receive technical architecture review and fixed resource quotation within 4-6 hours.</p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-[#00F0FF] text-[#02040A] hover:bg-[#67E8F9] font-cyber font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.5)] cursor-pointer"
              >
                INITIALIZE_CONSULTATION
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
      {/* Background architectural dot texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D2B477] uppercase tracking-wider block mb-2">
            The Studio Difference
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
            Why High-Growth Businesses Work With Me
          </h2>
          <p className="text-sm sm:text-base text-[#A09B92] mt-3 leading-relaxed">
            Direct senior craftsmanship with transparent pricing, guaranteed delivery timelines, and 100% code ownership.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[rgba(184,148,88,0.50)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8),0_0_20px_-2px_rgba(184,148,88,0.12)] hover:-translate-y-1 transition-all duration-300 space-y-3 relative overflow-hidden group bg-[#111214]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#171819] border border-[rgba(184,148,88,0.30)] text-[#D2B477] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#B89458]/10 transition-transform shadow-sm shadow-[#B89458]/10">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A09B92] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-14 glass-panel-glow rounded-2xl p-6 sm:p-8 border border-[rgba(184,148,88,0.40)] flex flex-col md:flex-row items-center justify-between gap-6 bg-[#111214] shadow-xl">
          <div>
            <h4 className="text-lg font-bold text-[#F5F3EF]">Have a specific project or deadline in mind?</h4>
            <p className="text-xs sm:text-sm text-[#A09B92] mt-1 leading-relaxed">Get an honest feasibility assessment and tailored quotation within 4–6 business hours.</p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
              Request Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
