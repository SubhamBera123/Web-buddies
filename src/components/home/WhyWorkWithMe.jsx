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
    <section className="py-20 relative bg-[#090D17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            The Studio Difference
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Why High-Growth Businesses Work With Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Most agencies charge massive agency markups and outsource your project to junior freelancers. I provide boutique senior craftsmanship with radical transparency, rigorous quality, and fixed timelines.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 space-y-3 relative overflow-hidden group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 glass-panel-glow rounded-2xl p-6 sm:p-8 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">Have a specific project or deadline in mind?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Get an honest feasibility assessment and a tailored quotation within 4–6 business hours.</p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right">
              Request Your Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
