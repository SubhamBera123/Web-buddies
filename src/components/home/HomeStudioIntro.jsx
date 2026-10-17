import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, 
  ExternalLink, Layers, Monitor, Play, Smartphone, ArrowDownRight 
} from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useData } from '../../context/DataContext';

export const HomeStudioIntro = ({ onOpenLiveDemo, onOpenVideoModal }) => {
  const { settings, projects } = useData();
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState(0);

  // Take top 3 showcase projects for the interactive preview dock
  const showcaseProjects = projects.slice(0, 3);
  const activeProject = showcaseProjects[selectedPreviewIndex] || projects[0];

  return (
    <section className="relative pt-6 sm:pt-8 pb-12 overflow-hidden bg-gradient-to-b from-[#090D17] via-[#0B0F19] to-[#0D1322]">
      {/* Background architectural glow grids */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Studio Control Header (Compact in-page studio bar instead of conventional global navbar) */}
        <div className="glass-panel rounded-2xl p-3 sm:p-4 mb-8 flex flex-wrap items-center justify-between gap-4 border border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white">{settings.agencyName}</span>
              <span className="text-[10px] text-slate-400 font-mono block -mt-0.5">Freelance Web Engineering</span>
            </div>
          </div>

          {/* Quick jump navigation pills */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto text-xs py-1">
            <Link to="/services" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              Services (15)
            </Link>
            <Link to="/pricing" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              Pricing Packages
            </Link>
            <Link to="/portfolio" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              Portfolio & Demos
            </Link>
            <Link to="/about" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              About
            </Link>
            <Link to="/contact" className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Business Statement & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Full-Stack Development • UI/UX Architecture • Conversion Optimization</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              I build custom websites and web applications that{' '}
              <span className="text-gradient-blue">scale real businesses.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              From high-conversion corporate websites and e-commerce stores to bespoke full-stack applications with database integration, I help founders, local businesses, and ambitious brands turn visitors into paying customers.
            </p>

            {/* Direct Dual CTAs as requested in prompt */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  className="shadow-xl shadow-blue-600/30 font-semibold"
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
                  Explore My Work
                </Button>
              </a>
              <Link to="/pricing">
                <Button variant="outline" size="lg">
                  View Transparent Pricing
                </Button>
              </Link>
            </div>

            {/* Core Value Guarantee Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Sub-Second Load Times</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Zero Bloated Templates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project-Focused Interactive Preview Showcase */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow rounded-2xl p-4 sm:p-5 border border-slate-700/60 shadow-2xl space-y-4">
              {/* Showcase switcher pills */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono font-semibold text-slate-300 uppercase">Live Demo Terminal</span>
                </div>
                <div className="flex gap-1">
                  {showcaseProjects.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPreviewIndex(idx)}
                      className={`text-[11px] px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
                        selectedPreviewIndex === idx
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Showcase Card */}
              {activeProject && (
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
                    <img 
                      src={activeProject.desktopImage || activeProject.thumbnail} 
                      alt={activeProject.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="blue">{activeProject.category}</Badge>
                    </div>
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                        ⚡ {activeProject.metrics?.lighthouseSpeed || '99/100'} Speed
                      </span>
                      <button
                        onClick={() => onOpenLiveDemo(activeProject)}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/30 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>Try Live Prototype</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-white">{activeProject.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{activeProject.shortDescription}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeProject.techStack?.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 text-xs">
                    <Link 
                      to={`/portfolio/${activeProject.slug}`} 
                      className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link to="/portfolio" className="text-slate-400 hover:text-white">
                      View all 9 demos →
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
