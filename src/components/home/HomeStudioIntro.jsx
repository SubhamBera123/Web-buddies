import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, 
  Play, ArrowDownRight, Quote, Crown, Cpu, Terminal, Activity 
} from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Signature3DExperience } from '../common/Signature3DExperience';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

// Curated website-focused quotes mapped to each showcase project
const WEBSITE_QUOTES = {
  'savoria-bistro': {
    quote: "A website is the digital front door to your dining tables — mouthwatering visuals turn cravings into direct reservations.",
    context: "Hospitality & Dining Philosophy",
    metric: "40% Direct Bookings"
  },
  'aura-luxe-store': {
    quote: "In digital retail, friction is the enemy of desire. Ultra-clean design and instant checkout convert visitors into buyers.",
    context: "E-Commerce Conversion Architecture",
    metric: "3.4x Faster Checkout"
  },
  'haven-key-realty': {
    quote: "Architecture speaks of physical space, but a distinguished website evokes aspiration and closes multi-million deals.",
    context: "Luxury Real Estate Showcase",
    metric: "Sub-Second Inquiries"
  },
  'novametric-analytics': {
    quote: "Data is only as powerful as its interface. Lightning-fast dashboards transform complex numbers into confident decisions.",
    context: "SaaS Dashboard Architecture",
    metric: "99/100 Lighthouse Speed"
  },
  'elena-vance-portfolio': {
    quote: "Design is not just what it looks like and feels like — design is how it works and commands premium authority.",
    context: "Creative Brand Identity",
    metric: "100% Code Ownership"
  },
  'skillforge-academy': {
    quote: "An engaging website turns passive visitors into passionate learners through frictionless interactive design.",
    context: "EdTech & Learning Platforms",
    metric: "Interactive Syllabus"
  },
  'pulsecare-clinic': {
    quote: "In healthcare, a fast and accessible website builds trust before the patient even walks through the door.",
    context: "Healthcare Web Trust",
    metric: "WCAG AAA Compliant"
  },
  'azure-coastline-resort': {
    quote: "Your website shouldn't just list rooms — it should transport guests directly into an unforgettable getaway.",
    context: "Luxury Hospitality & Bookings",
    metric: "0% Third-Party Fees"
  }
};

const DEFAULT_QUOTE = {
  quote: "Good web design is good business — clarity, speed, and elegance turn curiosity into revenue.",
  context: "Modern Web Philosophy",
  metric: "100% Bespoke Craft"
};

export const HomeStudioIntro = ({ onOpenLiveDemo, onOpenVideoModal }) => {
  const { settings, projects } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [luxuryViewMode, setLuxuryViewMode] = useState('folio');
  const [cyberViewMode, setCyberViewMode] = useState('holo_deck');
  const [originalViewMode, setOriginalViewMode] = useState('project');

  // Take top 6 showcase projects for rich visual diversity
  const showcaseProjects = projects.slice(0, 6);
  const activeProject = showcaseProjects[selectedPreviewIndex] || projects[0];
  const currentQuote = (activeProject && (WEBSITE_QUOTES[activeProject.slug] || WEBSITE_QUOTES[activeProject.id])) || DEFAULT_QUOTE;

  // Auto-advance dynamic showcase every 2 seconds (1-2s range requested)
  useEffect(() => {
    if (isPaused || showcaseProjects.length === 0) return;

    const interval = setInterval(() => {
      setSelectedPreviewIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 2000); // 2000ms = 2s

    return () => clearInterval(interval);
  }, [isPaused, showcaseProjects.length]);

  // Preload images so switching within 1-2s is instantaneous and butter-smooth
  useEffect(() => {
    showcaseProjects.forEach((proj) => {
      const src = proj.desktopImage || proj.thumbnail;
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [showcaseProjects]);

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
        {/* Soft champagne glow */}
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#9E7B4F]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Archival Monogram Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#9E7B4F]/20">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/35 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span className="font-bold">THE EXECUTIVE ATELIER</span>
              <span className="text-[#9E7B4F]/40">|</span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#655E56]">Private Commissions // Est. 2026</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-serif italic text-[#655E56]">
              <span>Haute Digital Engineering</span>
              <span>•</span>
              <span>{settings.location}</span>
            </div>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Poetic Visual Architecture Statement */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-sans uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-[#9E7B4F]" />
                <span>Bespoke Digital Commissions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1917] tracking-tight leading-[1.08]">
                Poetic Visual Architecture.{' '}
                <span className="italic font-normal text-[#9E7B4F] block mt-1">
                  Uncompromising Engineering.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#655E56] font-sans leading-relaxed max-w-xl">
                We design and build bespoke digital flagships, high-conversion storefronts, and private software architectures handcrafted from first principles for discerning clients.
              </p>

              {/* Atelier CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] border border-[#9E7B4F]/40 font-serif text-sm px-6 py-3 shadow-md shadow-[#9E7B4F]/20 cursor-pointer"
                  >
                    Commission an Atelier Project
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#9E7B4F]/40 text-[#1C1917] hover:bg-[#FFFFFF] font-serif text-sm px-5 py-3 cursor-pointer"
                  >
                    Inspect Full Lookbook
                  </Button>
                </Link>
                <Link to="/pricing" className="text-xs font-serif italic text-[#9E7B4F] hover:text-[#1C1917] transition-colors ml-2">
                  Atelier Retainers from ₹19,999 →
                </Link>
              </div>

              {/* 4 Pillars in Editorial Roman Numerals */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#9E7B4F]/20">
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#9E7B4F]/25 text-center shadow-xs">
                  <div className="text-xl font-serif font-bold text-[#9E7B4F]">N° IX</div>
                  <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Live Commissions</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#9E7B4F]/25 text-center shadow-xs">
                  <div className="text-xl font-serif font-bold text-[#9E7B4F]">99.8%</div>
                  <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Performance Index</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#9E7B4F]/25 text-center shadow-xs">
                  <div className="text-xl font-serif font-bold text-[#9E7B4F]">&lt; 0.5s</div>
                  <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Instantaneous Render</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#9E7B4F]/25 text-center shadow-xs">
                  <div className="text-xl font-serif font-bold text-[#9E7B4F]">100%</div>
                  <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Perpetual Ownership</div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Folio Spotlight */}
            <div className="lg:col-span-5">
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="rounded-3xl p-6 sm:p-7 border border-[#9E7B4F]/30 bg-[#FFFFFF] shadow-[0_20px_50px_-15px_rgba(158,123,79,0.18)] space-y-4 relative"
              >
                {/* Archival Header with View Toggle & Roman Numeral Step Buttons */}
                <div className="flex items-center justify-between pb-3 border-b border-[#9E7B4F]/20">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/25 text-xs font-serif">
                    <button
                      onClick={() => setLuxuryViewMode('folio')}
                      className={`px-3 py-1 rounded-lg transition-all font-semibold cursor-pointer ${
                        luxuryViewMode === 'folio'
                          ? 'bg-[#9E7B4F] text-[#FAF8F5] shadow-xs'
                          : 'text-[#655E56] hover:text-[#1C1917]'
                      }`}
                    >
                      Curated Folio
                    </button>
                    <button
                      onClick={() => setLuxuryViewMode('3d_monolith')}
                      className={`px-3 py-1 rounded-lg transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                        luxuryViewMode === '3d_monolith'
                          ? 'bg-[#1C1917] text-[#FAF8F5] shadow-xs'
                          : 'text-[#655E56] hover:text-[#1C1917]'
                      }`}
                    >
                      <Crown className="w-3 h-3 text-[#9E7B4F]" />
                      <span>3D Monolith</span>
                    </button>
                  </div>

                  {luxuryViewMode === 'folio' && (
                    <div className="flex gap-1">
                      {showcaseProjects.map((p, idx) => {
                        const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
                        return (
                          <button
                            key={p.id}
                            onClick={() => setSelectedPreviewIndex(idx)}
                            className={`text-xs px-2.5 py-0.5 rounded-md font-serif font-bold transition-all cursor-pointer ${
                              selectedPreviewIndex === idx
                                ? 'bg-[#9E7B4F] text-[#FAF8F5] shadow-xs'
                                : 'bg-[#FAF8F5] text-[#655E56] hover:text-[#1C1917] border border-[#9E7B4F]/20'
                            }`}
                          >
                            {romanNumerals[idx] || `0${idx + 1}`}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {luxuryViewMode === '3d_monolith' ? (
                  <div className="space-y-4">
                    <Signature3DExperience height="380px" />
                    <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#9E7B4F]/25 text-xs text-[#655E56] font-serif flex items-center justify-between">
                      <span className="italic">Haute 3D Atelier Geometry • PBR Specular Reflections</span>
                      <button onClick={() => setLuxuryViewMode('folio')} className="text-[#9E7B4F] font-bold hover:underline cursor-pointer">← Return to Folio</button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Progress bar */}
                    <div className="h-0.5 w-full bg-[#F2ECE1] overflow-hidden rounded-full">
                      <div
                        key={`luxury-progress-${selectedPreviewIndex}-${isPaused}`}
                        className={`h-full bg-[#9E7B4F] ${isPaused ? 'w-full opacity-30' : 'animate-timer-bar'}`}
                      />
                    </div>

                {activeProject && (
                  <div className="space-y-4">
                    {/* Media Frame with Champagne Border */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#9E7B4F]/30 shadow-md group bg-[#FAF8F5]">
                      <img
                        key={`img-${activeProject.id}`}
                        src={activeProject.desktopImage || activeProject.thumbnail}
                        alt={activeProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-105 group-hover:grayscale-0"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-serif font-bold tracking-widest uppercase bg-[#FAF8F5]/95 text-[#9E7B4F] border border-[#9E7B4F]/40 shadow-xs">
                          PLATE // {activeProject.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
                        <span className="text-[11px] font-serif italic text-[#FAF8F5] bg-[#1C1917]/85 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                          Index: {activeProject.metrics?.lighthouseSpeed || '99/100'}
                        </span>
                        <button
                          onClick={() => onOpenLiveDemo(activeProject)}
                          className="px-3.5 py-1.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#9E7B4F] border border-[#9E7B4F]/50 font-serif font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-transform hover:scale-105"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Examine Prototype</span>
                        </button>
                      </div>
                    </div>

                    {/* Quotation Ribbon */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/25 text-left">
                      <div className="flex items-start gap-2.5">
                        <Quote className="w-4 h-4 text-[#9E7B4F] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-[#9E7B4F] block mb-0.5">
                            Director Manifesto • {currentQuote.context}
                          </span>
                          <p className="text-xs text-[#1C1917] font-serif italic leading-relaxed">
                            "{currentQuote.quote}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <h3 className="font-serif font-bold text-base text-[#1C1917]">{activeProject.title}</h3>
                        <span className="text-[11px] text-[#655E56] font-sans">{currentQuote.metric}</span>
                      </div>
                      <Link
                        to={`/portfolio/${activeProject.slug}`}
                        className="text-xs font-serif font-bold text-[#9E7B4F] hover:text-[#1C1917] inline-flex items-center gap-1"
                      >
                        <span>Inspect Commission Dossier</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
                </>
              )}
            </div>
          </div>
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
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden bg-[#02040A] text-[#F0FDF4]">
        {/* Layered Cyber Matrix background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -top-32 left-1/3 w-[550px] h-[550px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#7928CA]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Cyber Telemetry Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-3 mb-10 rounded-xl bg-[#060D1E]/90 border border-[#00F0FF]/35 shadow-[0_0_20px_rgba(0,240,255,0.12)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00F0FF]/15 border border-[#00F0FF]/50 flex items-center justify-center text-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <div>
                <span className="font-cyber font-bold text-xs tracking-wider text-[#00F0FF]">
                  SYS_CORE // 2026.ONLINE
                </span>
                <span className="text-[10px] text-[#7DD3FC] font-mono block -mt-0.5">
                  QUANTUM_LATENCY: 12ms • CORE_FREQ: 4.8GHz
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#00F0FF] bg-[#02040A] px-2.5 py-1 rounded-full border border-[#00F0FF]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                <span>ACTIVE_STATION: {settings.location}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Cyber Deck Terminal & Direct Commands */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>NEXT-GEN CYBERNETIC PLATFORMS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cyber font-black text-[#F0FDF4] tracking-wider leading-[1.08]">
                NEXT-GEN ARCHITECTURE &amp;{' '}
                <span className="text-[#00F0FF] drop-shadow-[0_0_25px_rgba(0,240,255,0.8)] block mt-1">
                  CYBER TELEMETRY ENGINES.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#7DD3FC] font-mono leading-relaxed max-w-xl">
                High-throughput React 19 engines, real-time WebSockets, 3D WebGL interfaces, and zero-compromise security protocols built for maximum digital impact.
              </p>

              {/* Direct Cyber CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="bg-[#00F0FF] text-[#02040A] hover:bg-[#67E8F9] font-cyber font-bold tracking-wider text-xs px-6 py-3 shadow-[0_0_25px_rgba(0,240,255,0.6)] cursor-pointer"
                  >
                    INITIATE_PROJECT_PROTOCOL
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/10 font-mono text-xs px-5 py-3 shadow-[0_0_12px_rgba(0,240,255,0.2)] cursor-pointer"
                  >
                    [ACCESS_DATA_MATRIX]
                  </Button>
                </Link>
                <Link to="/pricing" className="text-xs font-mono text-[#00F0FF] hover:underline ml-1">
                  SYSTEM_RATES →
                </Link>
              </div>

              {/* Interactive Telemetry Diagnostics Box */}
              <div className="p-4 rounded-xl bg-[#060D1E] border border-[#00F0FF]/30 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#7DD3FC]">
                  <span className="flex items-center gap-1.5 text-[#00F0FF]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>DIAGNOSTIC_CONSOLE // NODE: VITE_8</span>
                  </span>
                  <span className="text-[#00F0FF] animate-pulse">LIVE_STREAM</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                  <div className="p-2 rounded bg-[#02040A] border border-[#00F0FF]/25">
                    <span className="text-[10px] text-[#7DD3FC] block">UPTIME</span>
                    <strong className="text-[#00F0FF] font-bold">99.98%</strong>
                  </div>
                  <div className="p-2 rounded bg-[#02040A] border border-[#00F0FF]/25">
                    <span className="text-[10px] text-[#7DD3FC] block">LATENCY</span>
                    <strong className="text-emerald-400 font-bold">&lt; 0.12s</strong>
                  </div>
                  <div className="p-2 rounded bg-[#02040A] border border-[#00F0FF]/25">
                    <span className="text-[10px] text-[#7DD3FC] block">SECURITY</span>
                    <strong className="text-[#00F0FF] font-bold">ZERO_TRUST</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Holographic 3D Cyber Card */}
            <div className="lg:col-span-5">
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative rounded-2xl p-4 sm:p-5 bg-[#060D1E]/95 border border-[#00F0FF]/40 shadow-[0_0_35px_rgba(0,240,255,0.2)] space-y-3.5"
              >
                {/* HUD Corner Reticles */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00F0FF] pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00F0FF] pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00F0FF] pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00F0FF] pointer-events-none" />

                {/* Telemetry Header with View Mode Switcher */}
                <div className="flex items-center justify-between pb-2 border-b border-[#00F0FF]/20 text-xs font-mono">
                  <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#02040A] border border-[#00F0FF]/35">
                    <button
                      onClick={() => setCyberViewMode('holo_deck')}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                        cyberViewMode === 'holo_deck'
                          ? 'bg-[#00F0FF] text-[#02040A] shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                          : 'text-[#7DD3FC] hover:text-[#00F0FF]'
                      }`}
                    >
                      HOLO_FEED
                    </button>
                    <button
                      onClick={() => setCyberViewMode('quantum_core')}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                        cyberViewMode === 'quantum_core'
                          ? 'bg-[#8B5CF6] text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                          : 'text-[#7DD3FC] hover:text-[#8B5CF6]'
                      }`}
                    >
                      <Cpu className="w-3 h-3 text-[#00F0FF]" />
                      <span>QUANTUM_CORE_3D</span>
                    </button>
                  </div>

                  {cyberViewMode === 'holo_deck' && (
                    <div className="flex gap-1">
                      {showcaseProjects.map((p, idx) => (
                        <button
                          key={p.id}
                          onClick={() => setSelectedPreviewIndex(idx)}
                          className={`text-[10px] px-2 py-0.5 rounded font-mono transition-all cursor-pointer ${
                            selectedPreviewIndex === idx
                              ? 'bg-[#00F0FF] text-[#02040A] font-bold shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                              : 'bg-[#02040A] text-[#7DD3FC] border border-[#00F0FF]/30 hover:border-[#00F0FF]'
                          }`}
                        >
                          P_0{idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {cyberViewMode === 'quantum_core' ? (
                  <div className="space-y-3 font-mono">
                    <Signature3DExperience height="360px" />
                    <div className="p-3 rounded-lg bg-[#02040A] border border-[#00F0FF]/30 text-xs text-[#7DD3FC] flex items-center justify-between">
                      <span className="text-[#00F0FF] font-bold">&gt; QUANTUM_FIELD_ACTIVE // 60 FPS</span>
                      <button onClick={() => setCyberViewMode('holo_deck')} className="text-[#00F0FF] hover:underline cursor-pointer">[RETURN_TO_FEED]</button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Cyan Scanline Progress Bar */}
                    <div className="h-0.5 w-full bg-[#02040A] overflow-hidden rounded-full">
                      <div
                        key={`cyber-progress-${selectedPreviewIndex}-${isPaused}`}
                        className={`h-full bg-gradient-to-r from-[#00F0FF] via-[#67E8F9] to-[#00F0FF] ${
                          isPaused ? 'w-full opacity-30' : 'animate-timer-bar'
                        }`}
                      />
                    </div>

                {activeProject && (
                  <div className="space-y-3 font-mono">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#00F0FF]/40 bg-[#02040A] group">
                      <img
                        key={`cyber-img-${activeProject.id}`}
                        src={activeProject.desktopImage || activeProject.thumbnail}
                        alt={activeProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent" />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#02040A]/90 border border-[#00F0FF]/60 text-[#00F0FF]">
                          SYS_MODULE: {activeProject.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between">
                        <span className="text-[10px] bg-[#02040A]/90 px-2 py-0.5 rounded border border-emerald-400/40 text-emerald-400">
                          FPS: 60 • LIGHTHOUSE: 99
                        </span>
                        <button
                          onClick={() => onOpenLiveDemo(activeProject)}
                          className="px-3 py-1 rounded-lg bg-[#00F0FF] text-[#02040A] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:bg-[#67E8F9] cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>RUN_PROTOTYPE</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#02040A] border border-[#00F0FF]/25 text-left text-xs">
                      <div className="text-[10px] text-[#00F0FF] mb-1 font-bold">
                        &gt; ARCHITECTURE_QUOTE // {currentQuote.context}
                      </div>
                      <p className="text-[#7DD3FC] italic">
                        "{currentQuote.quote}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="font-cyber font-bold text-[#F0FDF4] truncate max-w-[200px]">
                        {activeProject.title}
                      </span>
                      <Link
                        to={`/portfolio/${activeProject.slug}`}
                        className="text-[#00F0FF] hover:underline flex items-center gap-1 text-[11px]"
                      >
                        <span>[VIEW_TELEMETRY]</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }

  /* =========================================================================
     3. ORIGINAL STUDIO VARIANT (UI 1 - Default)
     ========================================================================= */
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#050505] bg-wave-lines">
      {/* Background architectural textures & restrained ambient lighting with slow levitation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#B89458]/8 via-[#B89458]/2 to-transparent pointer-events-none"></div>
      <div className="absolute -top-36 right-1/4 w-[500px] h-[500px] bg-[#B89458]/5 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-[#D2B477]/5 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ animationDelay: '-4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Introductory Section & Clear Business Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Business Statement & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111214] border border-[rgba(184,148,88,0.35)] text-[#D2B477] text-xs font-medium uppercase tracking-wider shadow-sm shadow-[#B89458]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#B89458] animate-pulse" />
              <span>Bespoke Web Architecture • High-Impact Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EF] leading-[1.14]">
              I build custom websites and web applications that{' '}
              <span className="text-gradient-gold-animated">scale real businesses.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A09B92] leading-relaxed max-w-xl font-normal">
              High-performance digital products engineered with senior craftsmanship, clean code, and uncompromising aesthetic standards.
            </p>

            {/* Direct Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  className="shadow-xl shadow-[#B89458]/20 font-semibold hover:shadow-[0_0_24px_rgba(184,148,88,0.35)] transition-all"
                >
                  Start Your Project
                </Button>
              </Link>
              <a href="#selected-projects">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  icon={ArrowDownRight} 
                  iconPosition="right"
                >
                  Explore Work
                </Button>
              </a>
              <Link to="/pricing" className="text-xs font-mono text-[#A09B92] hover:text-[#D2B477] transition-colors ml-1">
                View Pricing →
              </Link>
            </div>

            {/* Core Value Guarantee Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D2B477] shrink-0" />
                <span className="text-xs text-[#F5F3EF] font-medium">100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#B89458] shrink-0" />
                <span className="text-xs text-[#F5F3EF] font-medium">Sub-Second Load Times</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D2B477] shrink-0" />
                <span className="text-xs text-[#F5F3EF] font-medium">Zero Template Bloat</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Project-Focused Interactive Preview Showcase */}
          <div className="lg:col-span-5">
            <div 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="glass-panel-glow rounded-2xl p-4 sm:p-5 border border-[rgba(184,148,88,0.40)] shadow-2xl space-y-3.5 transition-all bg-[#111214]/95"
            >
              {/* Showcase switcher header with 3D Node toggle */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5 p-0.5 rounded-lg bg-[#0d0e12] border border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setOriginalViewMode('project')}
                    className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                      originalViewMode === 'project'
                        ? 'bg-gradient-to-r from-[#B89458] to-[#D2B477] text-[#050505] font-bold shadow-sm'
                        : 'text-[#A09B92] hover:text-[#F5F3EF]'
                    }`}
                  >
                    Live Terminal
                  </button>
                  <button
                    onClick={() => setOriginalViewMode('3d_node')}
                    className={`px-2.5 py-1 rounded-md transition-all font-semibold flex items-center gap-1 cursor-pointer ${
                      originalViewMode === '3d_node'
                        ? 'bg-gradient-to-r from-[#B89458] to-[#D2B477] text-[#050505] font-bold shadow-sm'
                        : 'text-[#A09B92] hover:text-[#F5F3EF]'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-[#D2B477]" />
                    <span>3D Node</span>
                  </button>
                </div>

                {originalViewMode === 'project' && (
                  <div className="flex gap-1">
                    {showcaseProjects.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setSelectedPreviewIndex(idx);
                        }}
                        title={p.title}
                        className={`text-[11px] px-2.5 py-0.5 rounded-md font-mono transition-all cursor-pointer ${
                          selectedPreviewIndex === idx
                            ? 'bg-gradient-to-r from-[#B89458] to-[#D2B477] text-[#050505] font-bold shadow-md shadow-[#B89458]/30'
                            : 'bg-[#171819] text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#1c1e21] border border-white/10'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {originalViewMode === '3d_node' ? (
                <div className="space-y-3">
                  <Signature3DExperience height="360px" />
                  <div className="p-3 rounded-xl bg-[#171819] border border-[rgba(184,148,88,0.30)] text-xs text-[#A09B92] flex items-center justify-between font-mono">
                    <span className="text-[#D2B477]">Architectural 3D Lattice • WebGL PBR</span>
                    <button onClick={() => setOriginalViewMode('project')} className="text-[#D2B477] hover:underline cursor-pointer">← Live Terminal</button>
                  </div>
                </div>
              ) : (
                <>
                  {/* 2-Second Dynamic Progress Bar */}
                  <div className="h-0.5 w-full bg-[#171819] overflow-hidden rounded-full -mt-1">
                    <div 
                      key={`progress-${selectedPreviewIndex}-${isPaused}`} 
                      className={`h-full bg-gradient-to-r from-[#B89458] via-[#D2B477] to-[#B89458] ${
                        isPaused ? 'w-full opacity-30' : 'animate-timer-bar'
                      }`}
                    />
                  </div>

                  {/* Active Dynamic Showcase Card */}
              {activeProject && (
                <div className="space-y-3">
                  {/* Dynamic Image with Smooth Crossfade */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#050505] border border-white/10 group shadow-lg">
                    <img 
                      key={`img-${activeProject.id}`}
                      src={activeProject.desktopImage || activeProject.thumbnail} 
                      alt={activeProject.title} 
                      className="w-full h-full object-cover animate-hero-image group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <Badge variant="gold">{activeProject.category}</Badge>
                    </div>

                    {/* Dynamic 2s Stream indicator badge */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-mono text-[#F5F3EF] bg-[#050505]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-[rgba(184,148,88,0.40)] flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-2.5 h-2.5 text-[#D2B477] animate-pulse" />
                        <span>Dynamic 2s</span>
                      </span>
                    </div>

                    {/* Bottom CTA & Speed Metric */}
                    <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#D2B477] bg-[#050505]/90 backdrop-blur-sm px-2 py-0.5 rounded border border-[rgba(184,148,88,0.40)]">
                        ⚡ {activeProject.metrics?.lighthouseSpeed || '99/100'} Speed
                      </span>
                      <button
                        onClick={() => onOpenLiveDemo(activeProject)}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#B89458] to-[#D2B477] hover:brightness-110 text-[#050505] font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-[#B89458]/20 cursor-pointer transition-transform hover:scale-105"
                      >
                        <Play className="w-3 h-3 fill-[#050505]" />
                        <span>Try Live Prototype</span>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Website-Focused Quote Box */}
                  <div 
                    key={`quote-${activeProject.id}`}
                    className="animate-hero-quote relative overflow-hidden rounded-xl bg-[#171819] border border-[rgba(184,148,88,0.30)] p-3 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-[#B89458]/15 text-[#D2B477] border border-[#B89458]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Quote className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#D2B477] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D2B477] animate-pulse"></span>
                            Website Philosophy
                          </span>
                          <span className="text-[10px] font-mono text-[#A09B92] truncate max-w-[150px]">
                            {currentQuote.context}
                          </span>
                        </div>
                        <p className="text-xs sm:text-[12.5px] text-[#F5F3EF] italic font-medium leading-relaxed">
                          "{currentQuote.quote}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Active Project Compact Info Bar */}
                  <div key={`title-${activeProject.id}`} className="animate-hero-quote flex items-center justify-between gap-2 pt-1 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <h3 className="font-bold text-sm text-[#F5F3EF] truncate">{activeProject.title}</h3>
                      <span className="text-[10px] font-mono text-[#D2B477] bg-[#171819] px-2 py-0.5 rounded border border-[rgba(184,148,88,0.30)] shrink-0">
                        {currentQuote.metric}
                      </span>
                    </div>

                    <Link 
                      to={`/portfolio/${activeProject.slug}`} 
                      className="text-[#D2B477] hover:text-[#F5F3EF] font-medium shrink-0 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
