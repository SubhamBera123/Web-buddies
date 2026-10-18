import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, 
  Layers, Play, ArrowDownRight, Quote 
} from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useData } from '../../context/DataContext';

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
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 overflow-hidden bg-[#050505] bg-wave-lines">
      {/* Background architectural textures & restrained ambient lighting with slow levitation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#B89458]/8 via-[#B89458]/2 to-transparent pointer-events-none"></div>
      <div className="absolute -top-36 right-1/4 w-[500px] h-[500px] bg-[#B89458]/5 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-[#D2B477]/5 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ animationDelay: '-4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Studio Control Header (Compact in-page studio bar instead of conventional global navbar) */}
        <div className="glass-panel rounded-2xl p-3 sm:p-3.5 mb-10 flex flex-wrap items-center justify-between gap-4 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#B89458] to-[#D2B477] flex items-center justify-center text-[#050505] shadow-md shadow-[#B89458]/20 transition-transform hover:scale-105">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-[#F5F3EF]">{settings.agencyName}</span>
              <span className="text-[10px] text-[#A09B92] font-mono block -mt-0.5">Freelance Web Engineering</span>
            </div>
          </div>

          {/* Quick jump navigation pills */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto text-xs py-1">
            <Link to="/services" className="px-3 py-1.5 rounded-lg text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#171819] transition-colors">
              Services (15)
            </Link>
            <Link to="/pricing" className="px-3 py-1.5 rounded-lg text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#171819] transition-colors">
              Pricing Packages
            </Link>
            <Link to="/portfolio" className="px-3 py-1.5 rounded-lg text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#171819] transition-colors">
              Portfolio & Demos
            </Link>
            <Link to="/about" className="px-3 py-1.5 rounded-lg text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#171819] transition-colors">
              About
            </Link>
            <Link to="/contact" className="px-3 py-1.5 rounded-lg text-[#A09B92] hover:text-[#F5F3EF] hover:bg-[#171819] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-[#D2B477] font-mono bg-[#171819] px-2.5 py-1 rounded-full border border-[rgba(184,148,88,0.40)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2B477] animate-pulse"></span>
              <span>Available for Hire</span>
            </span>
            <Link to="/contact">
              <Button variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
                Start Project
              </Button>
            </Link>
          </div>
        </div>

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
              {/* Showcase switcher header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D2B477] animate-pulse"></span>
                  <span className="text-xs font-mono font-semibold text-[#F5F3EF] uppercase tracking-wider">
                    Live Demo Terminal
                  </span>
                  <span className="hidden sm:inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#171819] border border-[rgba(184,148,88,0.40)] text-[#D2B477] shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D2B477] animate-pulse mr-1"></span>
                    {isPaused ? 'Paused' : 'Auto 2s'}
                  </span>
                </div>
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
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
