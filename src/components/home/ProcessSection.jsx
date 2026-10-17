import React from 'react';
import { Compass, Palette, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Discovery & Architecture Scope",
      description: "We analyze your business goals, target audience, conversion paths, and technical requirements to define a fixed scope, clear milestones, and realistic timeline."
    },
    {
      num: "02",
      icon: Palette,
      title: "Custom UI/UX & Interactive Design",
      description: "We craft a distinctive, modern visual identity with custom typography, responsive layouts, tailored glass/dark surfaces, and purposeful micro-interactions."
    },
    {
      num: "03",
      icon: Code,
      title: "Clean React & Full-Stack Engineering",
      description: "We write clean, modular React components, configure Supabase PostgreSQL databases and RLS security policies, and test all interactive user flows."
    },
    {
      num: "04",
      icon: Rocket,
      title: "QA Auditing, Deployment & Launch",
      description: "We test across real devices, tune Core Web Vitals to 90+, assist with custom domain DNS setup on Netlify, and hand over 100% of your source code and documentation."
    }
  ];

  return (
    <section className="py-20 relative bg-[#0B0F19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            Proven Execution Framework
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            How We Build Your Website from Start to Finish
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A transparent, collaborative four-stage engineering process designed to eliminate guesswork, respect your schedule, and deliver on time.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div 
                key={i}
                className="glass-card rounded-2xl p-6 border border-slate-800 relative flex flex-col justify-between group hover:border-blue-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-blue-500/40 group-hover:text-blue-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
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
