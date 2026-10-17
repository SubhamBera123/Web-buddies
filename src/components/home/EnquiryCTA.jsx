import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { useData } from '../../context/DataContext';

export const EnquiryCTA = () => {
  const { settings } = useData();

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#090D17] to-[#070A12] border-t border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 text-center border border-blue-500/30 relative overflow-hidden">
          {/* Top pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Elevate Your Digital Presence?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let’s Build a Website That Drives Real Growth.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Whether you need a brand-new high-converting business website, an e-commerce platform, or a custom full-stack web application, let’s discuss your vision and deliver it on time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="shadow-xl shadow-blue-500/30 font-bold">
                Start Your Project Today
              </Button>
            </Link>
            <a 
              href={`https://wa.me/${settings.whatsappNumber?.replace(/\+/g, '')}?text=Hi%20${settings.agencyName},%20I%20would%20like%20to%20discuss%20a%20new%20website%20project.`}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary" size="lg" icon={Phone}>
                Chat on WhatsApp ({settings.whatsappDisplay})
              </Button>
            </a>
          </div>

          {/* Micro trust guarantees */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Turnaround: {settings.turnaroundTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Free Consultation & Fixed-Price Quotation</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
