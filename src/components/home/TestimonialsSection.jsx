import React from 'react';
import { Star, Quote, Info, CheckCircle2, Crown, Cpu, Activity } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const TestimonialsSection = () => {
  const { testimonials } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section className="py-24 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span>PATRON CITATIONS &amp; ATELIER PERSPECTIVES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              Distinguished Client Perspectives
            </h2>
            <p className="text-sm sm:text-base text-[#655E56] font-sans leading-relaxed">
              Verified reflections from founding directors, executives, and commercial brands who partnered with our atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="rounded-3xl p-7 border border-[#9E7B4F]/30 bg-[#FFFFFF] shadow-[0_15px_35px_-12px_rgba(158,123,79,0.12)] hover:border-[#9E7B4F] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#9E7B4F]/15">
                    <div className="flex text-[#9E7B4F]">
                      {[...Array(test.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#9E7B4F]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-[#9E7B4F] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#9E7B4F]/25">
                      {test.category}
                    </span>
                  </div>

                  <p className="text-sm text-[#1C1917] font-serif italic leading-relaxed">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#9E7B4F]/15 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-serif font-bold text-[#1C1917]">{test.clientName}</h4>
                    <p className="text-xs text-[#655E56] font-sans">{test.role}, {test.company}</p>
                  </div>
                  <Quote className="w-5 h-5 text-[#9E7B4F]/30" />
                </div>
              </div>
            ))}
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
              <span>[VERIFIED_TELEMETRY // CLIENT_LOGS]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-black text-[#F0FDF4] tracking-wider">
              NETWORK TELEMETRY FEEDBACK
            </h2>
            <p className="text-sm sm:text-base text-[#7DD3FC] leading-relaxed">
              Verified system performance reviews and real client deployment assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="rounded-2xl p-6 bg-[#060D1E]/95 border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.12)] hover:border-[#00F0FF] hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#00F0FF]/20">
                    <div className="flex text-[#00F0FF]">
                      {[...Array(test.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#00F0FF]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-[#02040A] px-2 py-0.5 rounded border border-emerald-400/40">
                      STATUS: 100%_SATISFACTION
                    </span>
                  </div>

                  <p className="text-xs text-[#7DD3FC] leading-relaxed italic">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#00F0FF]/20 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-cyber font-bold text-[#F0FDF4]">{test.clientName}</h4>
                    <p className="text-[11px] text-[#7DD3FC]">{test.role}, {test.company}</p>
                  </div>
                  <span className="text-[10px] text-[#00F0FF]">{test.category}</span>
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
    <section className="py-20 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111214] border border-white/10 text-[#A09B92] text-xs font-mono mb-3">
            <Info className="w-3.5 h-3.5 text-[#D2B477]" />
            <span>Transparency & Verification Notice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
            Client Perspectives & Quality Standards
          </h2>
          <p className="text-xs sm:text-sm text-[#A09B92] mt-2">
            The items below represent prototype testimonials and project case study feedback concepts until verified client endorsements are published via our live admin portal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 relative bg-[#111214]"
            >
              <div className="space-y-3">
                {/* Rating & Placeholder Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D2B477]">
                    {[...Array(test.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D2B477]" />
                    ))}
                  </div>
                  {test.isPlaceholder && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171819] text-[#D2B477] border border-[rgba(184,148,88,0.30)]">
                      {test.verificationLabel || "Demo Placeholder"}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#F5F3EF] leading-relaxed italic">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#F5F3EF]">{test.clientName}</h4>
                  <p className="text-xs text-[#A09B92]">{test.role}, {test.company}</p>
                </div>
                <span className="text-[11px] font-mono text-[#A09B92]">{test.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
