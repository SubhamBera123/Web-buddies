import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Video, ArrowRight, ExternalLink, Sparkles, Crown, Cpu, Zap, Activity } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useData } from '../../context/DataContext';
import { useTheme } from '../../context/ThemeContext';

export const SelectedProjects = ({ onOpenLiveDemo, onOpenVideoModal }) => {
  const { projects } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section id="selected-projects" className="py-24 relative bg-[#FAF8F5] border-t border-[#9E7B4F]/20 overflow-hidden">
        {/* Soft champagne glow */}
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#9E7B4F]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-[#9E7B4F]/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs mb-3">
                <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
                <span>THE ATELIER LOOKBOOK // VOL. I</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
                Selected Works &amp; Private Commissions
              </h2>
              <p className="text-sm sm:text-base text-[#655E56] font-sans mt-2 max-w-xl leading-relaxed">
                A curated salon of bespoke digital storefronts, architectural platforms, and private web systems handcrafted from first principles.
              </p>
            </div>
            <Link to="/portfolio" className="shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="border-[#9E7B4F]/40 text-[#1C1917] hover:bg-[#FFFFFF] font-serif text-sm shadow-xs cursor-pointer"
              >
                Inspect All 9 Folio Commissions
              </Button>
            </Link>
          </div>

          {/* Luxury Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, idx) => {
              const romanNums = ['N° 01', 'N° 02', 'N° 03', 'N° 04'];
              return (
                <div
                  key={project.id}
                  className="rounded-3xl p-6 sm:p-7 border border-[#9E7B4F]/30 bg-[#FFFFFF] shadow-[0_15px_40px_-15px_rgba(158,123,79,0.15)] hover:shadow-[0_25px_60px_-15px_rgba(158,123,79,0.25)] hover:border-[#9E7B4F] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Editorial Top Bar */}
                    <div className="flex items-center justify-between text-xs font-serif text-[#9E7B4F] pb-2 border-b border-[#9E7B4F]/15">
                      <span className="font-bold tracking-widest uppercase">
                        COLLECTION {romanNums[idx] || `N° 0${idx + 1}`}
                      </span>
                      <span className="italic text-[#655E56]">
                        {project.category}
                      </span>
                    </div>

                    {/* Image Preview with Champagne Outline */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#9E7B4F]/30 bg-[#FAF8F5]">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      {project.metrics?.lighthouseSpeed && (
                        <div className="absolute top-3 right-3 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#9E7B4F]/35 text-[11px] font-serif font-bold text-[#9E7B4F] shadow-xs">
                          Index: {project.metrics.lighthouseSpeed}
                        </div>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#1C1917] group-hover:text-[#9E7B4F] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#655E56] font-sans mt-2 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges in Editorial Styling */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack?.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-sans px-2.5 py-0.5 rounded-md bg-[#FAF8F5] text-[#655E56] border border-[#9E7B4F]/25"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 mt-5 border-t border-[#9E7B4F]/20 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenLiveDemo(project)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] font-serif text-xs font-semibold flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Examine Prototype</span>
                      </button>
                      <button
                        onClick={() => onOpenVideoModal(project)}
                        className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#FFFFFF] text-[#655E56] border border-[#9E7B4F]/30 font-serif text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Video className="w-3 h-3" />
                        <span>Walkthrough</span>
                      </button>
                    </div>

                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="text-xs font-serif font-bold text-[#9E7B4F] hover:text-[#1C1917] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Commission Dossier</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
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
      <section id="selected-projects" className="py-24 relative bg-[#02040A] text-[#F0FDF4] border-t border-[#00F0FF]/30 overflow-hidden">
        {/* Layered Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#00F0FF]/25 font-mono">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)] mb-3">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>[DATA_ARRAY: 4_ACTIVE_SYSTEMS]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-black text-[#F0FDF4] tracking-wider">
                HOLOGRAPHIC WORK MATRIX
              </h2>
              <p className="text-sm sm:text-base text-[#7DD3FC] mt-2 max-w-xl leading-relaxed">
                Production-ready next-generation web applications deployed across global low-latency edge networks.
              </p>
            </div>
            <Link to="/portfolio" className="shrink-0">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/10 font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer"
              >
                [ACCESS_ALL_9_NODES]
              </Button>
            </Link>
          </div>

          {/* Cyberdeck Holographic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="relative rounded-2xl p-6 bg-[#060D1E]/95 border border-[#00F0FF]/40 shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:border-[#00F0FF] hover:shadow-[0_0_40px_rgba(0,240,255,0.35)] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* HUD Corner Reticles */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00F0FF] pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00F0FF] pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00F0FF] pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00F0FF] pointer-events-none" />

                <div className="space-y-4">
                  {/* Media Preview with Cyan HUD */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#00F0FF]/30 bg-[#02040A]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E] via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#02040A]/90 border border-[#00F0FF]/50 text-[#00F0FF]">
                        MODULE_0{idx + 1} // {project.category}
                      </span>
                    </div>

                    {project.metrics?.lighthouseSpeed && (
                      <div className="absolute top-3 right-3 bg-[#02040A]/90 px-2.5 py-1 rounded font-mono text-[11px] border border-emerald-400/40 text-emerald-400">
                        FPS: 60 • L_SPD: {project.metrics.lighthouseSpeed}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div>
                    <h3 className="text-xl font-cyber font-bold text-[#F0FDF4] group-hover:text-[#00F0FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7DD3FC] font-mono mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack?.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#02040A] text-[#00F0FF] border border-[#00F0FF]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cyber Action Buttons */}
                <div className="pt-4 mt-5 border-t border-[#00F0FF]/20 flex flex-wrap items-center justify-between gap-2 font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenLiveDemo(project)}
                      className="px-3 py-1.5 rounded-lg bg-[#00F0FF] text-[#02040A] font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:bg-[#67E8F9] cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>[EXECUTE_DEMO]</span>
                    </button>
                    <button
                      onClick={() => onOpenVideoModal(project)}
                      className="px-3 py-1.5 rounded-lg bg-[#02040A] text-[#7DD3FC] border border-[#00F0FF]/40 text-xs flex items-center gap-1.5 hover:border-[#00F0FF] cursor-pointer"
                    >
                      <Video className="w-3 h-3" />
                      <span>LOG_VIDEO</span>
                    </button>
                  </div>

                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="text-xs text-[#00F0FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>[SCHEMATIC]</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
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
    <section id="selected-projects" className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background architectural grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[rgba(184,148,88,0.35)] text-[#D2B477] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm shadow-[#B89458]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#B89458]" />
              <span>Featured Client Prototypes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
              Selected Work & Prototypes
            </h2>
            <p className="text-sm sm:text-base text-[#A09B92] mt-2 max-w-xl leading-relaxed">
              Production-ready demonstrations engineered for speed, clean UX architecture, and conversion.
            </p>
          </div>
          <Link to="/portfolio" className="shrink-0">
            <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right">
              Explore All 9 Category Demos
            </Button>
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[rgba(184,148,88,0.50)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),0_0_25px_-3px_rgba(184,148,88,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col group bg-[#111214]"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#050505]">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">{project.category}</Badge>
                </div>

                {/* Speed Score Pill */}
                {project.metrics?.lighthouseSpeed && (
                  <div className="absolute top-4 right-4 bg-[#050505]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[rgba(184,148,88,0.40)] text-[11px] font-mono text-[#D2B477]">
                    ⚡ {project.metrics.lighthouseSpeed} Speed
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A09B92] mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack?.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#171819] text-[#A09B92] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 3 Explicit Action Buttons as specified in prompt */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      icon={Play}
                      onClick={() => onOpenLiveDemo(project)}
                    >
                      View Live Demo
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      icon={Video}
                      onClick={() => onOpenVideoModal(project)}
                    >
                      Demo Video
                    </Button>
                  </div>

                  <Link to={`/portfolio/${project.slug}`}>
                    <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right" className="text-[#D2B477] hover:text-[#F5F3EF]">
                      Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
