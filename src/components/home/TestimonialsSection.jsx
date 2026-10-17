import React from 'react';
import { Star, Quote, Info, CheckCircle2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const TestimonialsSection = () => {
  const { testimonials } = useData();

  return (
    <section className="py-20 relative bg-[#0B0F19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs font-mono mb-3">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>Transparency & Verification Notice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Client Perspectives & Quality Standards
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            The items below represent prototype testimonials and project case study feedback concepts until verified client endorsements are published via our live admin portal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Rating & Placeholder Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(test.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {test.isPlaceholder && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {test.verificationLabel || "Demo Placeholder"}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{test.clientName}</h4>
                  <p className="text-xs text-slate-400">{test.role}, {test.company}</p>
                </div>
                <span className="text-[11px] font-mono text-slate-500">{test.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
