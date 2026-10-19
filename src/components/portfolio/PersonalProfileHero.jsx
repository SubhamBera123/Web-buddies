import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Mail, 
  CheckCircle2, 
  ArrowDown, 
  Code2, 
  Layers, 
  Cpu, 
  Database,
  ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants';

export const PersonalProfileHero = ({ onExploreDemosClick }) => {
  // Developer 1 (Subham Bera) interactive state
  const dev1CardRef = useRef(null);
  const [dev1Rotate, setDev1Rotate] = useState({ x: 0, y: 0 });
  const [dev1PhotoSrc, setDev1PhotoSrc] = useState('/Profil_rocky.png');
  const [isDev1Hovered, setIsDev1Hovered] = useState(false);

  // Developer 2 (Rahul Kumar Singh) interactive state
  const dev2CardRef = useRef(null);
  const [dev2Rotate, setDev2Rotate] = useState({ x: 0, y: 0 });
  const [dev2PhotoSrc, setDev2PhotoSrc] = useState('/rahulprofile.jpeg');
  const [isDev2Hovered, setIsDev2Hovered] = useState(false);

  // 3D tilt handler for Developer 1
  const handleDev1MouseMove = (e) => {
    if (!dev1CardRef.current) return;
    const rect = dev1CardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;
    setDev1Rotate({ x: rotX, y: rotY });
  };

  const handleDev1MouseLeave = () => {
    setDev1Rotate({ x: 0, y: 0 });
    setIsDev1Hovered(false);
  };

  // 3D tilt handler for Developer 2
  const handleDev2MouseMove = (e) => {
    if (!dev2CardRef.current) return;
    const rect = dev2CardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;
    setDev2Rotate({ x: rotX, y: rotY });
  };

  const handleDev2MouseLeave = () => {
    setDev2Rotate({ x: 0, y: 0 });
    setIsDev2Hovered(false);
  };

  return (
    <section className="relative mb-20 overflow-hidden">
      {/* Ambient background glow flares */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#B89458]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#B89458]/30 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden bg-gradient-to-br from-[#0c0f18]/95 via-[#07090e]/98 to-[#0b0e17]/95 backdrop-blur-xl">
        {/* Futuristic grid background accent */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D2B477 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Top Studio HUD Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#B89458]/10 border border-[#D2B477]/30 text-[#D2B477] text-xs font-mono tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">DUAL SYSTEM ONLINE</span>
            <span className="text-slate-500">|</span>
            <span>Two Lead Engineers • Collaborative Studio</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-[#D2B477]" />
            <span>DEV_STUDIO // 2026.4</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{SITE_CONFIG.location}</span>
          </div>
        </div>

        {/* Studio Headline Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#B89458]/20 via-cyan-500/10 to-emerald-500/10 border border-[#D2B477]/40 text-amber-200 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D2B477]" />
            <span>Dual Developer Studio • Next-Generation Collaborative Engineering</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Two Engineers. <span className="bg-gradient-to-r from-amber-200 via-[#D2B477] to-cyan-300 bg-clip-text text-transparent">One Unified Digital Experience.</span>
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Combining immersive 3D creative frontend architecture with scalable, secure full-stack backend systems. Every project below is engineered collaboratively from initial concept to turnkey production deployment.
          </p>

          {/* 4 Studio KPI Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-2xl mx-auto">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xl font-black text-amber-300 font-mono">9/9</div>
              <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Live Prototypes</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xl font-black text-emerald-400 font-mono">99+</div>
              <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Lighthouse Avg</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xl font-black text-cyan-400 font-mono">&lt; 0.6s</div>
              <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Sub-Sec Latency</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xl font-black text-[#D2B477] font-mono">100%</div>
              <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Code Ownership</div>
            </div>
          </div>
        </div>

        {/* Central Collaborative Synergy Connector Bridge */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D2B477]/40 to-[#D2B477]" />
          <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-[#D2B477]/40 text-[11px] font-mono text-[#D2B477] tracking-wider uppercase flex items-center gap-2 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-amber-300" />
            <span>Frontend &amp; 3D Creative</span>
            <span className="text-slate-600">⇄</span>
            <span>Full-Stack &amp; Scalable Systems</span>
            <Database className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/40 to-cyan-500" />
        </div>

        {/* Dual Developers Asymmetric Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* ================= DEVELOPER 1: SUBHAM BERA ================= */}
          <div 
            ref={dev1CardRef}
            onMouseMove={handleDev1MouseMove}
            onMouseEnter={() => setIsDev1Hovered(true)}
            onMouseLeave={handleDev1MouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${dev1Rotate.x}deg) rotateY(${dev1Rotate.y}deg)`,
              transition: isDev1Hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            }}
            className="relative rounded-2xl bg-gradient-to-b from-[#0f1422]/90 via-[#0a0d16]/95 to-[#07090e] border-2 border-[#D2B477]/40 p-6 sm:p-7 shadow-2xl overflow-hidden group hover:border-[#D2B477] transition-colors"
          >
            {/* Top Amber Ambient Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D2B477]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D2B477]/25 transition-colors" />

            {/* Corner HUD Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D2B477] z-20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D2B477] z-20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D2B477] z-20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D2B477] z-20 pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
              
              {/* Photo Frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-[#D2B477]/60 bg-[#090b12] shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src={dev1PhotoSrc}
                  alt="Subham Bera"
                  onError={() => {
                    if (dev1PhotoSrc !== '/profile-photo.svg') {
                      setDev1PhotoSrc('/profile-photo.svg');
                    }
                  }}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-70 pointer-events-none" />
                
                {/* HUD Scanline */}
                <div 
                  className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)'
                  }}
                />

                {/* In-Frame Badge */}
                <div className="absolute bottom-1.5 inset-x-1.5 px-2 py-1 rounded bg-[#07090e]/90 backdrop-blur-md border border-[#D2B477]/30 text-center">
                  <span className="text-[10px] font-mono font-bold text-amber-200">ID: SB-2026</span>
                </div>
              </div>

              {/* Details Column */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-mono uppercase tracking-wider">
                  <Layers className="w-3 h-3 text-[#D2B477]" />
                  <span>Frontend Architect &amp; UI/UX</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Subham Bera
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-200 via-[#D2B477] to-amber-400 bg-clip-text text-transparent mt-0.5">
                    Co-Founder &amp; Creative Full-Stack Technologist
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Specializing in high-performance web applications, sub-second architectures, interactive 3D WebGL interfaces, and modern React 19 design systems. Engineered to convert with zero framework bloat.
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                  {['React 19', 'Three.js / WebGL', 'Tailwind v4', 'Framer Motion', 'Core Web Vitals', 'UI/UX'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-amber-200/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Social & Action Links */}
                <div className="flex items-center gap-2.5 justify-center sm:justify-start pt-2">
                  <a
                    href="https://github.com/SubhamBera123"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Subham's GitHub"
                    className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-[#D2B477] text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Subham's LinkedIn"
                    className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-[#D2B477] text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="#contact-section"
                    className="p-2 rounded-lg bg-[#D2B477]/10 border border-[#D2B477]/40 hover:bg-[#D2B477]/20 text-[#D2B477] text-xs font-semibold transition-all flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* ================= DEVELOPER 2: RAHUL KUMAR SINGH ================= */}
          <div 
            ref={dev2CardRef}
            onMouseMove={handleDev2MouseMove}
            onMouseEnter={() => setIsDev2Hovered(true)}
            onMouseLeave={handleDev2MouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${dev2Rotate.x}deg) rotateY(${dev2Rotate.y}deg)`,
              transition: isDev2Hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            }}
            className="relative rounded-2xl bg-gradient-to-b from-[#0f1922]/90 via-[#0a1216]/95 to-[#07090e] border-2 border-cyan-500/40 p-6 sm:p-7 shadow-2xl overflow-hidden group hover:border-cyan-400 transition-colors"
          >
            {/* Top Cyan Ambient Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/25 transition-colors" />

            {/* Corner HUD Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
              
              {/* Photo Frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-cyan-500/60 bg-[#090b12] shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src={dev2PhotoSrc}
                  alt="Rahul Kumar Singh"
                  onError={() => {
                    if (dev2PhotoSrc !== '/profile-photo.svg') {
                      setDev2PhotoSrc('/profile-photo.svg');
                    }
                  }}
                  className="w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-70 pointer-events-none" />
                
                {/* HUD Scanline */}
                <div 
                  className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)'
                  }}
                />

                {/* In-Frame Badge */}
                <div className="absolute bottom-1.5 inset-x-1.5 px-2 py-1 rounded bg-[#07090e]/90 backdrop-blur-md border border-cyan-500/30 text-center">
                  <span className="text-[10px] font-mono font-bold text-cyan-300">ID: RS-2026</span>
                </div>
              </div>

              {/* Details Column */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono uppercase tracking-wider">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  <span>Backend Architect &amp; Systems</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Rahul Kumar Singh
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent mt-0.5">
                    Founder &amp; Full-Stack Systems Developer
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  Passionate B.Tech CSE developer focused on robust full-stack systems, scalable backend architectures, secure REST APIs, and turning complex business requirements into affordable, enterprise-grade digital solutions.
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                  {['Java & Spring', 'React', 'MySQL & Postgres', 'REST APIs', 'JWT Security', 'System Design'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-cyan-200/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Social & Action Links */}
                <div className="flex items-center gap-2.5 justify-center sm:justify-start pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Rahul's GitHub"
                    className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Rahul's LinkedIn"
                    className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="#contact-section"
                    className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/40 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold transition-all flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Action Footer inside the Studio Card */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Co-Engineered Architecture: All 9 industry prototypes below feature collaborative source code.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onExploreDemosClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D2B477] to-[#B89458] text-[#050505] font-bold text-xs sm:text-sm hover:from-amber-300 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(210,180,119,0.3)] flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore 9 Live Demos</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#contact-section"
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-[#D2B477]/50 font-medium text-xs sm:text-sm transition-all flex items-center gap-1.5"
            >
              <span>Book Studio Call</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
