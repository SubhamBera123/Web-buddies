import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Play, Video, ArrowLeft, ArrowRight, CheckCircle2, 
  Smartphone, Monitor, Sparkles, Layers, ShieldCheck, ExternalLink 
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
import { useScrollTop } from '../hooks/useScrollTop';

export const ProjectDetailPage = () => {
  useScrollTop();
  const { slug } = useParams();
  const { projects } = useData();
  const navigate = useNavigate();

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const project = projects.find(p => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
        <p className="text-xs text-slate-400 mb-6">The requested case study could not be located in our portfolio catalogue.</p>
        <Link to="/portfolio">
          <Button variant="primary" size="sm">Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans pt-24">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Portfolio', href: '/portfolio' },
            { label: project.title }
          ]}
        />

        {/* Hero Case Study Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="blue">{project.category}</Badge>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Active Demonstration Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Button
              variant="primary"
              size="md"
              icon={Play}
              onClick={() => setDemoModalOpen(true)}
            >
              Launch Live Prototype Demo
            </Button>
            <Button
              variant="secondary"
              size="md"
              icon={Video}
              onClick={() => setVideoModalOpen(true)}
            >
              Watch Video Walkthrough
            </Button>
            <Link to={`/contact?service=${encodeURIComponent(project.category)}`}>
              <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right">
                Request Similar Website
              </Button>
            </Link>
          </div>
        </div>

        {/* Media Preview: Desktop Screenshot */}
        <div className="glass-panel rounded-3xl p-3 sm:p-4 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400 font-mono mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block"></span>
              <span className="ml-2 text-slate-300">Desktop Interface Preview</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-blue-400" />
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
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-3">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
              The Challenge
            </span>
            <h3 className="text-xl font-bold text-white">Business Problem</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.businessProblem || "The client required an intuitive digital architecture to replace slow manual workflows, eliminate reliance on high-commission aggregators, and attract high-converting organic search traffic."}
            </p>
          </div>

          {/* Proposed Solution */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              The Architecture
            </span>
            <h3 className="text-xl font-bold text-white">Engineered Solution</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.proposedSolution || "Engineered an ultra-fast React and Tailwind web application featuring interactive filters, smooth micro-animations, structured Supabase database relationships, and instant client-side feedback."}
            </p>
          </div>
        </div>

        {/* Architectural Overview & Design Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white">Project Overview & Objectives</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Features List */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white">Engineered Technical Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                {project.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Approach */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white">UI/UX Design Approach</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.designApproach}
              </p>
            </div>
          </div>

          {/* Right Column: Stack & Mobile Mockup Preview */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Specs */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-blue-400 border border-slate-800 font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Performance Metrics */}
              {project.metrics && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Verified Telemetry:</span>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block">Lighthouse Speed</span>
                      <span className="text-sm font-bold text-emerald-400 font-mono">{project.metrics.lighthouseSpeed}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block">Avg Load Time</span>
                      <span className="text-sm font-bold text-blue-400 font-mono">{project.metrics.avgLoadTime}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Screenshot Device Mockup */}
            {project.mobileImage && (
              <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-slate-300">
                    <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Mobile Device Preview</span>
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px]">100% Touch Responsive</span>
                </div>
                <div className="aspect-[9/16] w-full max-w-[260px] mx-auto rounded-3xl overflow-hidden border-4 border-slate-800 shadow-xl bg-slate-950">
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
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-10 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
              Inspired by this Architecture?
            </span>
            <h3 className="text-2xl font-black text-white">
              Request a Custom Website with Similar Functionality
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              We can tailor this design language, database structure, and feature set for your specific company.
            </p>
          </div>
          <Link to={`/contact?service=${encodeURIComponent(project.category)}&scope=${encodeURIComponent(`Inspired by ${project.title} case study.`)}`} className="shrink-0">
            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="font-bold">
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
