import React from 'react';
import { Zap, ShieldCheck, KeyRound, MonitorSmartphone } from 'lucide-react';

export const EngineeringStandards = () => {
  const pillars = [
    {
      num: '01',
      title: 'Sub-Second Performance',
      badge: '99+ Lighthouse Mobile & Desktop',
      description: 'Zero third-party render blockers, next-gen image compression (AVIF/WebP), and optimized virtual DOM trees delivering sub-600ms load latencies.',
      icon: Zap,
      accent: 'from-amber-400/20 to-transparent',
      borderColor: 'border-[#D2B477]/40'
    },
    {
      num: '02',
      title: '100% Code & Asset Ownership',
      badge: 'Zero Vendor Lock-In',
      description: 'Upon project completion, all React source code, Tailwind design tokens, database schemas, and media assets are transferred directly to your private GitHub repository.',
      icon: KeyRound,
      accent: 'from-emerald-400/20 to-transparent',
      borderColor: 'border-emerald-500/30'
    },
    {
      num: '03',
      title: 'Enterprise Security Hardening',
      badge: 'Row-Level Security & CSP',
      description: 'Built-in defense-in-depth with Supabase Row-Level Security (RLS), sanitization against XSS/CSRF, secure session handling, and strict CORS configuration.',
      icon: ShieldCheck,
      accent: 'from-cyan-400/20 to-transparent',
      borderColor: 'border-cyan-500/30'
    },
    {
      num: '04',
      title: 'Next-Gen Cross-Device UI',
      badge: 'Adaptive Touch & 3D WebGL',
      description: 'Fluid responsiveness calibrated across 4K displays down to compact mobile viewports, with graceful degradation for low-powered devices and reduced motion.',
      icon: MonitorSmartphone,
      accent: 'from-purple-400/20 to-transparent',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <section className="mb-20">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89458]/10 border border-[#D2B477]/30 text-[#D2B477] text-xs font-mono uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Architectural Integrity & Delivery Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Engineering Benchmarks
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300">
          Strict technical guarantees applied to every client build, SaaS platform, and high-conversion web application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.num}
              className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#0c0f18]/90 via-[#07090e]/95 to-[#0b0e17]/90 border ${pillar.borderColor} hover:border-[#D2B477] transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#D2B477] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  {pillar.num}
                </span>
                <div className="p-2 rounded-xl bg-slate-900/90 text-[#D2B477] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors mb-1.5">
                  {pillar.title}
                </h3>
                <span className="inline-block text-[11px] font-mono font-medium text-emerald-400 mb-3">
                  {pillar.badge}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED STANDARD</span>
                <span className="text-[#D2B477]">100% COMPLIANT</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
