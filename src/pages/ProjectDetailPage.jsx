import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Play, Video, ArrowLeft, ArrowRight, CheckCircle2, 
  Smartphone, Monitor, Sparkles, Layers, ShieldCheck, ExternalLink, Crown, Terminal 
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { LiveDemoModal } from '../components/common/LiveDemoModal';
import { ProjectVideoModal } from '../components/common/ProjectVideoModal';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';

export const ProjectDetailPage = () => {
  useScrollTop();
  const { slug } = useParams();
  const { projects } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();
  const navigate = useNavigate();

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const project = projects.find(p => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <div className={`min-h-screen flex flex-col justify-center items-center p-4 ${
        isLuxury ? 'bg-[#FAF8F5] text-[#1C1917]' : isFuturistic ? 'bg-[#02040A] text-[#F0FDF4]' : 'bg-[#0B0F19] text-slate-100'
      }`}>
        <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
        <p className="text-xs text-slate-400 mb-6">The requested case study could not be located in our portfolio catalogue.</p>
        <Link to="/portfolio">
          <Button variant="primary" size="sm">Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  const getPageBgClass = () => {
    if (isLuxury) {
      return 'bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#9E7B4F] selection:text-white';
    }
    if (isFuturistic) {
      return 'bg-[#02040A] text-[#F0FDF4] font-mono selection:bg-[#00F0FF] selection:text-black';
    }
    return 'bg-[#0B0F19] text-slate-100 font-sans selection:bg-[#D2B477] selection:text-black';
  };

  const getCardClass = () => {
    if (isLuxury) return 'bg-[#FFFFFF] border border-[#9E7B4F]/30 shadow-md text-[#1C1917]';
    if (isFuturistic) return 'bg-[#060D1E] border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.1)] text-[#F0FDF4] font-mono';
    return 'glass-card border border-slate-800 text-slate-100';
  };

  return (
    <div className={`min-h-screen ${getPageBgClass()} flex flex-col pt-24 transition-colors duration-300`}>
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: isLuxury ? 'Archival Portfolio' : isFuturistic ? 'PORTFOLIO_INDEX' : 'Portfolio', href: '/portfolio' },
            { label: project.title }
          ]}
        />

        {/* Hero Case Study Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs px-3 py-1 rounded-full border ${
              isLuxury
                ? 'bg-[#FFFFFF] border-[#9E7B4F]/40 text-[#9E7B4F] font-serif font-bold uppercase'
                : isFuturistic
                ? 'bg-[#060D1E] border-[#00F0FF]/50 text-[#00F0FF] font-mono shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                : 'bg-blue-500/10 border-blue-500/20 text-blue-400 font-semibold'
            }`}>
              {project.category}
            </span>
            <span className={`text-xs px-2.5 py-0.5 rounded-full border ${
              isLuxury
                ? 'bg-[#FFFFFF] border-[#9E7B4F]/20 text-[#655E56] font-serif'
                : isFuturistic
                ? 'bg-[#02040A] border-emerald-500/40 text-emerald-400 font-mono'
                : 'text-emerald-400 bg-emerald-950/40 border-emerald-500/20 font-mono'
            }`}>
              Active Demonstration Case Study
            </span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
            isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
          }`}>
            {project.title}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'
          }`}>
            {project.shortDescription}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button
              variant="primary"
              size="md"
              icon={Play}
              onClick={() => setDemoModalOpen(true)}
              className={isLuxury ? 'bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] font-serif border border-[#9E7B4F]' : isFuturistic ? 'bg-[#00F0FF] text-[#02040A] font-cyber' : ''}
            >
              Launch Live Prototype Demo
            </Button>
            <Button
              variant="secondary"
              size="md"
              icon={Video}
              onClick={() => setVideoModalOpen(true)}
              className={isLuxury ? 'border-[#9E7B4F]/40 text-[#1C1917]' : isFuturistic ? 'bg-[#060D1E] text-[#00F0FF] border-[#00F0FF]/40' : ''}
            >
              Watch Video Walkthrough
            </Button>
            <Link to={`/contact?service=${encodeURIComponent(project.category)}`}>
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className={isLuxury ? 'border-[#9E7B4F]/40 text-[#1C1917]' : isFuturistic ? 'border-[#00F0FF]/40 text-[#7DD3FC]' : ''}
              >
                Request Similar Architecture
              </Button>
            </Link>
          </div>
        </div>

        {/* Media Preview: Desktop Screenshot */}
        <div className={`rounded-3xl p-3 sm:p-4 border overflow-hidden shadow-2xl ${
          isLuxury
            ? 'bg-[#FFFFFF] border-2 border-[#9E7B4F]/40'
            : isFuturistic
            ? 'bg-[#060D1E] border-2 border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.15)]'
            : 'glass-panel border-slate-800'
        }`}>
          <div className={`flex items-center justify-between px-3 py-2 border-b text-xs font-mono mb-3 ${
            isLuxury ? 'border-[#9E7B4F]/20 text-[#655E56]' : isFuturistic ? 'border-[#00F0FF]/25 text-[#7DD3FC]' : 'border-slate-800 text-slate-400'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block"></span>
              <span className={`ml-2 ${isLuxury ? 'text-[#1C1917] font-serif' : 'text-slate-300'}`}>Desktop Interface Preview</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className={`w-3.5 h-3.5 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`} />
              <span>Full-Bleed Responsive View</span>
            </div>
          </div>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950">
            <img
              src={project.desktopImage || project.thumbnail}
              alt={`${project.title} Desktop Screenshot`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Problem */}
          <div className={`rounded-2xl p-6 sm:p-8 border space-y-3 ${getCardClass()}`}>
            <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : 'text-red-400'
            }`}>
              The Challenge
            </span>
            <h3 className={`text-xl font-bold ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
              Business Problem
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              {project.businessProblem || "The client required an intuitive digital architecture to replace slow manual workflows, eliminate reliance on high-commission aggregators, and attract high-converting organic search traffic."}
            </p>
          </div>

          {/* Proposed Solution */}
          <div className={`rounded-2xl p-6 sm:p-8 border space-y-3 ${getCardClass()}`}>
            <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : 'text-emerald-400'
            }`}>
              The Architecture
            </span>
            <h3 className={`text-xl font-bold ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
              Engineered Solution
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              {project.proposedSolution || "Engineered an ultra-fast React and Tailwind web application featuring interactive filters, smooth micro-animations, structured Supabase database relationships, and instant client-side feedback."}
            </p>
          </div>
        </div>

        {/* Architectural Overview & Design Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className={`rounded-2xl p-6 sm:p-8 border space-y-4 ${getCardClass()}`}>
              <h3 className={`text-xl font-bold ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
                Project Overview & Objectives
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
                {project.overview}
              </p>
            </div>

            {/* Key Features List */}
            <div className={`rounded-2xl p-6 sm:p-8 border space-y-4 ${getCardClass()}`}>
              <h3 className={`text-xl font-bold ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
                Engineered Technical Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {project.features?.map((f, i) => (
                  <li key={i} className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                    isLuxury
                      ? 'bg-[#FAF8F5] border-[#9E7B4F]/25 text-[#1C1917]'
                      : isFuturistic
                      ? 'bg-[#02040A] border-[#00F0FF]/30 text-[#7DD3FC]'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-300'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-emerald-400'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Approach */}
            <div className={`rounded-2xl p-6 sm:p-8 border space-y-4 ${getCardClass()}`}>
              <h3 className={`text-xl font-bold ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
                UI/UX Design Approach
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
                {project.designApproach}
              </p>
            </div>
          </div>

          {/* Right Column: Stack & Mobile Mockup Preview */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Specs */}
            <div className={`rounded-2xl p-6 border space-y-4 ${getCardClass()}`}>
              <h4 className={`text-sm font-bold uppercase font-mono tracking-wider ${
                isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-white'
              }`}>
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((t, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-mono px-3 py-1 rounded-lg border font-semibold ${
                      isLuxury
                        ? 'bg-[#FAF8F5] text-[#1C1917] border-[#9E7B4F]/30 font-sans'
                        : isFuturistic
                        ? 'bg-[#02040A] text-[#00F0FF] border-[#00F0FF]/40'
                        : 'bg-slate-900 text-blue-400 border-slate-800'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Performance Metrics */}
              {project.metrics && (
                <div className={`pt-4 border-t space-y-2 ${isLuxury ? 'border-[#9E7B4F]/20' : isFuturistic ? 'border-[#00F0FF]/25' : 'border-slate-800'}`}>
                  <span className={`text-[11px] font-mono uppercase block ${isLuxury ? 'text-[#9E7B4F]' : 'text-slate-400'}`}>Verified Telemetry:</span>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className={`p-2.5 rounded-xl border ${
                      isLuxury ? 'bg-[#FAF8F5] border-[#9E7B4F]/25' : isFuturistic ? 'bg-[#02040A] border-[#00F0FF]/40' : 'bg-slate-950 border-slate-800'
                    }`}>
                      <span className={`text-[10px] block ${isLuxury ? 'text-[#655E56]' : 'text-slate-500'}`}>Lighthouse Speed</span>
                      <span className={`text-sm font-bold font-mono ${isLuxury ? 'text-[#9E7B4F]' : 'text-emerald-400'}`}>{project.metrics.lighthouseSpeed}</span>
                    </div>
                    <div className={`p-2.5 rounded-xl border ${
                      isLuxury ? 'bg-[#FAF8F5] border-[#9E7B4F]/25' : isFuturistic ? 'bg-[#02040A] border-[#00F0FF]/40' : 'bg-slate-950 border-slate-800'
                    }`}>
                      <span className={`text-[10px] block ${isLuxury ? 'text-[#655E56]' : 'text-slate-500'}`}>Avg Load Time</span>
                      <span className={`text-sm font-bold font-mono ${isLuxury ? 'text-[#1C1917]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`}>{project.metrics.avgLoadTime}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Screenshot Device Mockup */}
            {project.mobileImage && (
              <div className={`rounded-2xl p-6 border space-y-3 ${getCardClass()}`}>
                <div className={`flex items-center justify-between text-xs ${isLuxury ? 'text-[#655E56]' : 'text-slate-400'}`}>
                  <span className="flex items-center gap-1.5 font-mono">
                    <Smartphone className={`w-3.5 h-3.5 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`} />
                    <span>Mobile Device Preview</span>
                  </span>
                  <span className={`font-mono text-[10px] ${isLuxury ? 'text-[#9E7B4F]' : 'text-emerald-400'}`}>100% Touch Responsive</span>
                </div>
                <div className={`aspect-[9/16] w-full max-w-[260px] mx-auto rounded-3xl overflow-hidden border-4 shadow-xl ${
                  isLuxury ? 'border-[#9E7B4F]/40 bg-[#FAF8F5]' : isFuturistic ? 'border-[#00F0FF]/50 bg-[#02040A]' : 'border-slate-800 bg-slate-950'
                }`}>
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} Mobile View`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Strip */}
        <div className={`rounded-3xl p-8 sm:p-10 border flex flex-col md:flex-row items-center justify-between gap-6 ${
          isLuxury
            ? 'bg-[#FFFFFF] border-2 border-[#9E7B4F]/40 shadow-xl'
            : isFuturistic
            ? 'bg-[#060D1E] border-2 border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] font-mono'
            : 'glass-panel-glow border-blue-500/30'
        }`}>
          <div>
            <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
            }`}>
              {isLuxury ? 'Archival Custom Commission' : isFuturistic ? 'SYSTEM_CUSTOMIZATION' : 'Inspired by this Architecture?'}
            </span>
            <h3 className={`text-2xl font-black ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
              Request Similar Architectural Standards
            </h3>
            <p className={`text-xs sm:text-sm mt-1 max-w-xl ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              We can calibrate this design system, database architecture, and performance characteristics for your specific commercial enterprise.
            </p>
          </div>
          <Link to={`/contact?service=${encodeURIComponent(project.category)}&scope=${encodeURIComponent(`Inspired by ${project.title} case study.`)}`} className="shrink-0">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className={`font-bold ${
                isLuxury
                  ? 'bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] font-serif border border-[#9E7B4F]'
                  : isFuturistic
                  ? 'bg-[#00F0FF] text-[#02040A] font-cyber'
                  : ''
              }`}
            >
              Discuss Your Scope
            </Button>
          </Link>
        </div>

        {/* Bottom CTA */}
        <EnquiryCTA />
      </main>

      <Footer />

      {/* Global Interactive Demo Prototype Modal */}
      <LiveDemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
        project={project} 
      />

      {/* Global Project Video Walkthrough Modal */}
      <ProjectVideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        project={project}
      />
    </div>
  );
};
