import React from 'react';
import { Compass, Palette, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessSection = () => {
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
