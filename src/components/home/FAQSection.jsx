import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

export const FAQSection = () => {
  const { faqs } = useData();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
