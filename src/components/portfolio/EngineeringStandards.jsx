import React from 'react';
import { Zap, ShieldCheck, KeyRound, MonitorSmartphone, Crown, Terminal } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const EngineeringStandards = () => {
  const { theme, isLuxury, isFuturistic } = useTheme();

  const pillars = [
    {
      num: isLuxury ? 'I' : '01',
      title: isLuxury ? 'Sub-Second Page Architecture' : 'Sub-Second Performance',
      badge: '99+ Lighthouse Mobile & Desktop',
      description: 'Zero third-party render blockers, next-gen image compression (AVIF/WebP), and optimized virtual DOM trees delivering sub-600ms load latencies.',
      icon: Zap,
    },
    {
      num: isLuxury ? 'II' : '02',
      title: isLuxury ? 'Absolute Code & Asset Sovereignty' : '100% Code & Asset Ownership',
      badge: 'Zero Vendor Lock-In',
      description: 'Upon project completion, all React source code, design tokens, database schemas, and media assets are transferred directly to your private repository.',
      icon: KeyRound,
    },
    {
      num: isLuxury ? 'III' : '03',
      title: isLuxury ? 'Enterprise Defense & Hardening' : 'Enterprise Security Hardening',
      badge: 'Row-Level Security & CSP',
      description: 'Built-in defense-in-depth with Supabase Row-Level Security (RLS), sanitization against XSS/CSRF, secure session handling, and strict CORS configuration.',
      icon: ShieldCheck,
    },
    {
      num: isLuxury ? 'IV' : '04',
      title: isLuxury ? 'Fluid Responsive Calibration' : 'Next-Gen Cross-Device UI',
      badge: 'Adaptive Touch & 3D WebGL',
      description: 'Fluid responsiveness calibrated across 4K displays down to compact mobile viewports, with graceful degradation for low-powered devices and reduced motion.',
      icon: MonitorSmartphone,
    }
  ];

  return (
    <section className="mb-20">
      <div className="max-w-3xl mb-8">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-3 ${
          isLuxury
            ? 'bg-[#FFFFFF] border border-[#9E7B4F]/40 text-[#9E7B4F] font-serif'
            : isFuturistic
            ? 'bg-[#060D1E] border border-[#00F0FF]/50 text-[#00F0FF] font-mono shadow-[0_0_10px_rgba(0,240,255,0.2)]'
            : 'bg-[#B89458]/10 border border-[#D2B477]/30 text-[#D2B477] font-mono'
        }`}>
          {isLuxury ? <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" /> : <ShieldCheck className="w-3.5 h-3.5" />}
          <span>{isLuxury ? 'Archival Standards & Technical Guarantees' : isFuturistic ? 'SECURITY_PROTOCOL // ARCHITECTURAL_INTEGRITY' : 'Architectural Integrity & Delivery Standards'}</span>
        </div>
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
        }`}>
          {isLuxury ? 'The Four Pillars of Quality' : isFuturistic ? 'SYSTEM_BENCHMARKS_V4' : 'Engineering Benchmarks'}
        </h2>
        <p className={`mt-2 text-sm sm:text-base ${
          isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC] font-mono' : 'text-slate-300'
        }`}>
          Strict technical guarantees applied to every client build, SaaS platform, and high-conversion web application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.num}
              className={`relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col justify-between ${
                isLuxury
                  ? 'bg-[#FFFFFF] border border-[#9E7B4F]/30 hover:border-[#9E7B4F] shadow-sm hover:shadow-lg'
                  : isFuturistic
                  ? 'bg-[#060D1E] border border-[#00F0FF]/40 hover:border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.08)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                  : 'bg-gradient-to-br from-[#0c0f18]/90 via-[#07090e]/95 to-[#0b0e17]/90 border border-[#D2B477]/40 hover:border-[#D2B477]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                  isLuxury
                    ? 'bg-[#FAF8F5] border-[#9E7B4F]/30 text-[#9E7B4F] font-serif'
                    : isFuturistic
                    ? 'bg-[#02040A] border-[#00F0FF]/40 text-[#00F0FF] font-mono'
                    : 'bg-slate-900 border-slate-800 text-[#D2B477] font-mono'
                }`}>
                  {pillar.num}
                </span>
                <div className={`p-2 rounded-xl group-hover:scale-110 transition-transform ${
                  isLuxury
                    ? 'bg-[#FAF8F5] text-[#9E7B4F]'
                    : isFuturistic
                    ? 'bg-[#02040A] text-[#00F0FF]'
                    : 'bg-slate-900/90 text-[#D2B477]'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-bold mb-1.5 transition-colors ${
                  isLuxury ? 'text-[#1C1917] group-hover:text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#F0FDF4] group-hover:text-[#00F0FF] font-cyber' : 'text-white group-hover:text-amber-200'
                }`}>
                  {pillar.title}
                </h3>
                <span className={`inline-block text-[11px] font-mono font-medium mb-3 ${
                  isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'
                }`}>
                  {pillar.badge}
                </span>
                <p className={`text-xs leading-relaxed ${
                  isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC] font-mono' : 'text-slate-400'
                }`}>
                  {pillar.description}
                </p>
              </div>

              <div className={`mt-6 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                isLuxury ? 'border-[#9E7B4F]/20 text-[#655E56]' : isFuturistic ? 'border-[#00F0FF]/20 text-[#7DD3FC]' : 'border-slate-800/60 text-slate-500'
              }`}>
                <span>{isLuxury ? 'AUDITED ACCORD' : 'VERIFIED STANDARD'}</span>
                <span className={isLuxury ? 'text-[#9E7B4F] font-serif font-bold' : isFuturistic ? 'text-[#00F0FF]' : 'text-[#D2B477]'}>100% COMPLIANT</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
