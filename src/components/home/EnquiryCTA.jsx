import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, ShieldCheck, Sparkles, Crown, Cpu, Terminal, Compass, MessageSquare } from 'lucide-react';
import { Button } from '../common/Button';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const EnquiryCTA = () => {
  const { settings } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();

  // --------------------------------------------------------------------------
  // LUXURY EDITORIAL ATELIER VARIANT
  // --------------------------------------------------------------------------
  if (isLuxury) {
    return (
      <section className="py-24 sm:py-32 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/25 overflow-hidden">
        {/* Subtle Archival Watermark */}
        <div className="absolute inset-0 bg-[radial-gradient(#9E7B4F_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-80 bg-[#9E7B4F]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#FFFFFF] border-2 border-[#9E7B4F]/40 rounded-3xl p-8 sm:p-16 text-center relative shadow-[0_20px_50px_rgba(158,123,79,0.12)]">
            {/* Top Archival Ribbon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#9E7B4F]/35 text-[#9E7B4F] text-xs font-serif font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span>Private Atelier Commission Desk · Vol. MMXXVI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight max-w-3xl mx-auto">
              Commission an Exceptional Digital Standard for Your Enterprise.
            </h2>

            <p className="text-sm sm:text-base text-[#655E56] max-w-2xl mx-auto mt-5 leading-relaxed font-sans">
              We accept a strictly curated number of private commissions each quarter. Secure direct architectural leadership with Subham Bera & Rahul Kumar Singh.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] border border-[#9E7B4F]/40 shadow-xl shadow-[#1C1917]/10 font-serif tracking-wider font-semibold"
                >
                  Initiate Commission Request
                </Button>
              </Link>
              <a
                href={`https://wa.me/${settings.whatsappNumber?.replace(/\+/g, '')}?text=Greetings,%20I%20wish%20to%20inquire%20about%20a%20bespoke%20digital%20commission%20with%20${settings.agencyName}.`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  icon={Phone}
                  className="border-[#9E7B4F]/50 text-[#1C1917] hover:bg-[#FAF8F5] font-serif"
                >
                  Concierge Direct Line ({settings.whatsappDisplay})
                </Button>
              </a>
            </div>

            {/* Trust Seals */}
            <div className="mt-10 pt-8 border-t border-[#9E7B4F]/20 flex flex-wrap items-center justify-center gap-8 text-xs text-[#655E56]">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9E7B4F]" />
                <span className="text-[#1C1917] font-serif font-semibold">Delivery Accord: {settings.turnaroundTime}</span>
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9E7B4F]" />
                <span className="text-[#1C1917] font-serif font-semibold">Institutional Confidentiality (NDA Guaranteed)</span>
              </span>
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#9E7B4F]" />
                <span className="text-[#1C1917] font-serif font-semibold">Direct Principal Architecture</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------------------------------------------------
  // FUTURISTIC CYBERNETIC COMMAND UPLINK VARIANT
  // --------------------------------------------------------------------------
  if (isFuturistic) {
    return (
      <section className="py-24 sm:py-32 relative bg-[#02040A] border-t border-[#00F0FF]/30 overflow-hidden font-mono">
        {/* Cyber Grid & Glowing Energy Core */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-80 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#050C1B]/95 border-2 border-[#00F0FF]/60 rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)]">
            {/* Cyber Corner HUD Brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00F0FF] pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00F0FF] pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00F0FF] pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00F0FF] pointer-events-none" />

            {/* Top Telemetry Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02040A] border border-[#00F0FF]/50 text-[#00F0FF] text-xs font-mono tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Terminal className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
              <span>TERMINAL_UPLINK // PROTOCOL: READY_TO_TRANSMIT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-extrabold text-[#F0FDF4] tracking-tight leading-tight">
              INITIALIZE QUANTUM PROJECT UPLINK.
            </h2>

            <p className="text-sm sm:text-base text-[#7DD3FC] max-w-2xl mx-auto mt-4 leading-relaxed font-mono">
              Deploy high-throughput architectures, microservices, and AI-accelerated web systems engineered for 99.98% availability and sub-second latency.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-[#00F0FF] hover:bg-[#38BDF8] text-[#02040A] font-cyber font-bold tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.5)] border border-[#00F0FF]"
                >
                  [EXECUTE_DEPLOYMENT]
                </Button>
              </Link>
              <a
                href={`https://wa.me/${settings.whatsappNumber?.replace(/\+/g, '')}?text=TRANSMISSION:%20Requesting%20quantum%20web%20architecture%20deployment%20with%20${settings.agencyName}.`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  icon={Phone}
                  className="bg-[#091328] hover:bg-[#0C1A36] text-[#00F0FF] border border-[#00F0FF]/40 font-mono"
                >
                  [DIRECT_SECURE_COMMS: {settings.whatsappDisplay}]
                </Button>
              </a>
            </div>

            {/* Micro Telemetry Readouts */}
            <div className="mt-8 pt-8 border-t border-[#00F0FF]/25 flex flex-wrap items-center justify-center gap-6 text-xs text-[#7DD3FC]">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-[#F0FDF4]">PIPELINE_SLA: {settings.turnaroundTime}</span>
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-[#F0FDF4]">FIXED_PRICE_SMART_CONTRACT // 100% SPEC</span>
              </span>
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00F0FF]" />
                <span className="text-[#F0FDF4]">CORE_LEADERSHIP: SUBHAM & RAHUL</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------------------------------------------------
  // ORIGINAL DESIGN (UI 1) — PRESERVED EXACTLY
  // --------------------------------------------------------------------------
  return (
    <section className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background architectural grid texture & ambient electric glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-[#B89458]/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-14 text-center border border-[rgba(184,148,88,0.40)] relative overflow-hidden bg-[#111214] shadow-2xl">
          {/* Top pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171819] border border-[rgba(184,148,88,0.35)] text-[#D2B477] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm shadow-[#B89458]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#B89458] animate-pulse" />
            <span>Ready to Elevate Your Digital Presence?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F3EF] tracking-tight leading-tight">
            Let’s Build a Website That Drives Real Growth.
          </h2>

          <p className="text-sm sm:text-base text-[#A09B92] max-w-2xl mx-auto mt-4 leading-relaxed">
            Whether you need a brand-new high-converting business website, an e-commerce platform, or a custom full-stack web application, let’s discuss your vision and deliver it on time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="shadow-xl shadow-[#B89458]/20 font-bold">
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
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A09B92]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D2B477]" />
              <span className="text-[#F5F3EF] font-medium">Turnaround: {settings.turnaroundTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B89458]" />
              <span className="text-[#F5F3EF] font-medium">Free Consultation & Fixed-Price Quotation</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
