import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Crown, Cpu, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const FAQSection = () => {
  const { faqs } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section className="py-24 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span>THE CONCIERGE DOSSIER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
              Curated Inquiries &amp; Atelier Clarifications
            </h2>
            <p className="text-sm text-[#655E56] font-sans">
              Comprehensive guidance regarding commission timelines, intellectual property ownership, and private retainers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id || index}
                  className="rounded-2xl border border-[#9E7B4F]/30 bg-[#FFFFFF] overflow-hidden transition-all duration-300 shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-serif font-bold text-[#1C1917]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#9E7B4F] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-[#9E7B4F]/15 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-[#655E56] font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/40 text-[#00F0FF] text-xs tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>[KNOWLEDGE_BASE // DECRYPTED_QUERIES]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-black text-[#F0FDF4] tracking-wider">
              DECRYPTED FAQ PROTOCOLS
            </h2>
            <p className="text-sm text-[#7DD3FC]">
              Core architectural queries regarding code ownership, delivery speed, and technical integrations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id || index}
                  className="rounded-2xl border border-[#00F0FF]/35 bg-[#060D1E]/95 overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#091328] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-cyber font-bold text-[#F0FDF4]">
                      &gt; {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00F0FF] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 border-t border-[#00F0FF]/20 animate-fadeIn text-xs text-[#7DD3FC] leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  )}
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold text-[#D2B477] uppercase tracking-wider block mb-2">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#A09B92] mt-2">
            Everything you need to know about working with our web studio, code ownership, timelines, and payment structures.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id || index}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors bg-[#111214]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#171819] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#F5F3EF]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A09B92] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#D2B477]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-white/10 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#A09B92] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-[#A09B92]">
            Have a question that is not covered here?{' '}
            <Link to="/contact" className="text-[#D2B477] hover:text-[#F5F3EF] font-medium underline inline-flex items-center gap-1">
              Ask directly via WhatsApp or Email
              <ArrowRight className="w-3 h-3" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
