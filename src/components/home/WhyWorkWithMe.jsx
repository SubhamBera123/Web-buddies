import React from 'react';
import { 
  UserCheck, Zap, Shield, Code2, Headphones, Cpu, 
  CheckCircle, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const WhyWorkWithMe = () => {
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
