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
  ExternalLink,
  Crown,
  Quote,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { SITE_CONFIG } from '../../lib/constants';
import { useTheme } from '../../context/ThemeContext';

export const PersonalProfileHero = ({ onExploreDemosClick }) => {
  const { theme, isLuxury, isFuturistic } = useTheme();

  // Developer 1 (Subham Bera) interactive state
  const dev1CardRef = useRef(null);
  const [dev1Rotate, setDev1Rotate] = useState({ x: 0, y: 0 });
  const [dev1Glare, setDev1Glare] = useState({ x: 50, y: 50, opacity: 0 });
  const [dev1PhotoSrc, setDev1PhotoSrc] = useState('/Profil_rocky.png');
  const [isDev1Hovered, setIsDev1Hovered] = useState(false);

  // Developer 2 (Rahul Kumar Singh) interactive state
  const dev2CardRef = useRef(null);
  const [dev2Rotate, setDev2Rotate] = useState({ x: 0, y: 0 });
  const [dev2Glare, setDev2Glare] = useState({ x: 50, y: 50, opacity: 0 });
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
    setDev1Glare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18
    });
  };

  const handleDev1MouseLeave = () => {
    setDev1Rotate({ x: 0, y: 0 });
    setDev1Glare((prev) => ({ ...prev, opacity: 0 }));
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
    setDev2Glare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18
    });
  };

  const handleDev2MouseLeave = () => {
    setDev2Rotate({ x: 0, y: 0 });
    setDev2Glare((prev) => ({ ...prev, opacity: 0 }));
    setIsDev2Hovered(false);
  };

  /* =========================================================================
     1. LUXURY EDITORIAL VARIANT (UI 2)
     ========================================================================= */
  if (isLuxury) {
    return (
      <section className="relative mb-20 overflow-hidden">
        {/* Ambient warm champagne glow */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#9E7B4F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#9E7B4F]/30 bg-[#FFFFFF] shadow-[0_20px_60px_-15px_rgba(158,123,79,0.15)] overflow-hidden">
          {/* Subtle archival watermark border */}
          <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#9E7B4F]/15 pointer-events-none rounded-2xl" />

          {/* Top Atelier Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#9E7B4F]/20 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#9E7B4F]/35 text-[#9E7B4F] text-xs font-serif tracking-wider shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
              <span className="font-bold">THE EXECUTIVE ATELIER</span>
              <span className="text-[#9E7B4F]/40">|</span>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#655E56]">Two Founding Directors</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-serif italic text-[#655E56]">
              <span>Haute Digital Engineering</span>
              <span>•</span>
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Editorial Headline */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#9E7B4F]/30 text-[#9E7B4F] text-xs font-sans uppercase tracking-widest">
              <span>Bespoke Digital Commission</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
              Two Visionary Directors. <span className="italic font-normal text-[#9E7B4F]">One Uncompromising Atelier.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#655E56] leading-relaxed max-w-2xl mx-auto font-sans">
              Merging poetic visual architecture with bulletproof backend engineering. Every piece in our catalogue is handcrafted collaboratively from first principles.
            </p>

            {/* 4 Atelier Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-2xl mx-auto font-sans">
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/25 text-center">
                <div className="text-xl font-serif font-bold text-[#9E7B4F]">N° IX</div>
                <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Live Commissions</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/25 text-center">
                <div className="text-xl font-serif font-bold text-[#9E7B4F]">99.8%</div>
                <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Performance Index</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/25 text-center">
                <div className="text-xl font-serif font-bold text-[#9E7B4F]">&lt; 0.5s</div>
                <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Instantaneous Render</div>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#9E7B4F]/25 text-center">
                <div className="text-xl font-serif font-bold text-[#9E7B4F]">100%</div>
                <div className="text-[10px] font-semibold text-[#655E56] uppercase tracking-wider">Perpetual Ownership</div>
              </div>
            </div>
          </div>

          {/* Dual Atelier Directors Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative z-10">

            {/* DIRECTOR 1: SUBHAM BERA */}
            <div
              ref={dev1CardRef}
              onMouseMove={handleDev1MouseMove}
              onMouseEnter={() => setIsDev1Hovered(true)}
              onMouseLeave={handleDev1MouseLeave}
              style={{
                perspective: '1000px',
                transform: `perspective(1000px) rotateX(${dev1Rotate.x}deg) rotateY(${dev1Rotate.y}deg) translateY(${isDev1Hovered ? '-6px' : '0px'})`,
                transition: isDev1Hovered ? 'transform 0.15s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease-out, box-shadow 0.3s ease',
                transformStyle: 'preserve-3d'
              }}
              className="rounded-2xl bg-[#FAF8F5] border border-[#9E7B4F]/30 p-6 sm:p-7 shadow-md hover:border-[#9E7B4F] transition-all relative overflow-hidden"
            >
              {/* Specular Glare */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${dev1Glare.x}% ${dev1Glare.y}%, rgba(158, 123, 79, 0.18) 0%, transparent 60%)`,
                  opacity: dev1Glare.opacity
                }}
              />
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10" style={{ transformStyle: 'preserve-3d' }}>
                <div
                  className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#9E7B4F]/60 shadow-lg bg-[#FAF8F5]"
                  style={{
                    transform: isDev1Hovered ? 'translateZ(22px) scale(1.02)' : 'translateZ(0px)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <img
                    src={dev1PhotoSrc}
                    alt="Subham Bera"
                    onError={() => {
                      if (dev1PhotoSrc !== '/profile-photo.svg') setDev1PhotoSrc('/profile-photo.svg');
                    }}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-1.5 inset-x-1.5 px-2 py-0.5 rounded bg-[#1C1917]/85 text-center">
                    <span className="text-[10px] font-serif text-[#FAF8F5] tracking-widest">DIR. I — BERA</span>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-[10px] uppercase tracking-wider font-semibold">
                    <Layers className="w-3 h-3 text-[#9E7B4F]" />
                    <span>Creative Architecture &amp; Direction</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1C1917]">Subham Bera</h3>
                    <p className="text-xs font-serif italic text-[#9E7B4F]">
                      Co-Founder &amp; Principal Creative Technologist
                    </p>
                  </div>

                  <p className="text-xs text-[#655E56] leading-relaxed">
                    Specializing in high-performance digital products, immersive 3D WebGL interfaces, and bespoke React design systems crafted to establish undeniable industry authority.
                  </p>

                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                    {['React 19', 'Three.js / WebGL', 'Tailwind v4', 'Design Systems', 'Micro-Interactions'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-[#FFFFFF] border border-[#9E7B4F]/25 text-[10px] text-[#655E56] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 justify-center sm:justify-start pt-2">
                    <a
                      href="https://github.com/SubhamBera123"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#FFFFFF] border border-[#9E7B4F]/30 hover:border-[#9E7B4F] text-[#1C1917] text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span className="text-xs font-semibold">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#FFFFFF] border border-[#9E7B4F]/30 hover:border-[#9E7B4F] text-[#1C1917] text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </a>
                    <a
                      href="#contact-section"
                      className="p-2 rounded-lg bg-[#9E7B4F] text-[#FAF8F5] text-xs font-semibold flex items-center gap-1 hover:bg-[#83643E] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DIRECTOR 2: RAHUL KUMAR SINGH */}
            <div
              ref={dev2CardRef}
              onMouseMove={handleDev2MouseMove}
              onMouseEnter={() => setIsDev2Hovered(true)}
              onMouseLeave={handleDev2MouseLeave}
              style={{
                perspective: '1000px',
                transform: `perspective(1000px) rotateX(${dev2Rotate.x}deg) rotateY(${dev2Rotate.y}deg) translateY(${isDev2Hovered ? '-6px' : '0px'})`,
                transition: isDev2Hovered ? 'transform 0.15s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease-out, box-shadow 0.3s ease',
                transformStyle: 'preserve-3d'
              }}
              className="rounded-2xl bg-[#FAF8F5] border border-[#9E7B4F]/30 p-6 sm:p-7 shadow-md hover:border-[#9E7B4F] transition-all relative overflow-hidden"
            >
              {/* Specular Glare */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${dev2Glare.x}% ${dev2Glare.y}%, rgba(158, 123, 79, 0.18) 0%, transparent 60%)`,
                  opacity: dev2Glare.opacity
                }}
              />
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10" style={{ transformStyle: 'preserve-3d' }}>
                <div
                  className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#9E7B4F]/60 shadow-lg bg-[#FAF8F5]"
                  style={{
                    transform: isDev2Hovered ? 'translateZ(22px) scale(1.02)' : 'translateZ(0px)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <img
                    src={dev2PhotoSrc}
                    alt="Rahul Kumar Singh"
                    onError={() => {
                      if (dev2PhotoSrc !== '/profile-photo.svg') setDev2PhotoSrc('/profile-photo.svg');
                    }}
                    className="w-full h-full object-cover object-[center_15%] filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-1.5 inset-x-1.5 px-2 py-0.5 rounded bg-[#1C1917]/85 text-center">
                    <span className="text-[10px] font-serif text-[#FAF8F5] tracking-widest">DIR. II — SINGH</span>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/30 text-[#9E7B4F] text-[10px] uppercase tracking-wider font-semibold">
                    <Database className="w-3 h-3 text-[#9E7B4F]" />
                    <span>Systems Architecture &amp; Scale</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1C1917]">Rahul Kumar Singh</h3>
                    <p className="text-xs font-serif italic text-[#9E7B4F]">
                      Founder &amp; Principal Systems Fellow
                    </p>
                  </div>

                  <p className="text-xs text-[#655E56] leading-relaxed">
                    Engineering scalable database architectures, secure transactional REST systems, and robust full-stack infrastructures designed for frictionless commercial longevity.
                  </p>

                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                    {['Java & Spring', 'React', 'MySQL & Postgres', 'REST APIs', 'Enterprise Security'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-[#FFFFFF] border border-[#9E7B4F]/25 text-[10px] text-[#655E56] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 justify-center sm:justify-start pt-2">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#FFFFFF] border border-[#9E7B4F]/30 hover:border-[#9E7B4F] text-[#1C1917] text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span className="text-xs font-semibold">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#FFFFFF] border border-[#9E7B4F]/30 hover:border-[#9E7B4F] text-[#1C1917] text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </a>
                    <a
                      href="#contact-section"
                      className="p-2 rounded-lg bg-[#9E7B4F] text-[#FAF8F5] text-xs font-semibold flex items-center gap-1 hover:bg-[#83643E] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="mt-10 pt-6 border-t border-[#9E7B4F]/20 flex flex-wrap items-center justify-between gap-4 relative z-10 font-sans">
            <div className="flex items-center gap-2 text-xs text-[#655E56]">
              <Crown className="w-4 h-4 text-[#9E7B4F]" />
              <span>Bespoke Commission Guarantee: Complete source code ownership upon delivery.</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onExploreDemosClick}
                className="px-5 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5] font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Inspect Curated Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
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
      <section className="relative mb-20 overflow-hidden font-mono">
        {/* Ambient neon flares */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#00F0FF]/40 bg-[#060D1E]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,240,255,0.18)] overflow-hidden">
          {/* Cyber HUD Corner Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00F0FF] pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00F0FF] pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00F0FF] pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00F0FF] pointer-events-none" />

          {/* Top Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#00F0FF]/25">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF] text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              <span className="font-bold">CYBER_SYS // OPERATIVE DOSSIERS</span>
              <span className="text-[#00F0FF]/40">|</span>
              <span className="text-[#7DD3FC]">DUAL LEAD SPECIALISTS</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#7DD3FC]">
              <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>STATUS: ONLINE // PING 6ms</span>
            </div>
          </div>

          {/* Headline Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF] text-xs uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
              <span>Next-Gen Collaborative Quantum Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0FDF4] tracking-tight font-cyber">
              TWO OPERATIVES. <span className="text-[#00F0FF] drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]">ONE UNIFIED NEXUS.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#7DD3FC] leading-relaxed max-w-2xl mx-auto">
              Combining 3D WebGL cybernetics with enterprise microservices. Fully deployed in zero-latency serverless environments.
            </p>

            {/* 4 Telemetry Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-2xl mx-auto text-center">
              <div className="p-2.5 rounded-xl bg-[#0B1528] border border-[#00F0FF]/30">
                <div className="text-xl font-bold text-[#00F0FF]">9/9</div>
                <div className="text-[10px] text-[#7DD3FC]">PROTOTYPES LIVE</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0B1528] border border-[#00F0FF]/30">
                <div className="text-xl font-bold text-emerald-400">99.9%</div>
                <div className="text-[10px] text-[#7DD3FC]">LIGHTHOUSE QA</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0B1528] border border-[#00F0FF]/30">
                <div className="text-xl font-bold text-[#8B5CF6]">&lt; 0.4s</div>
                <div className="text-[10px] text-[#7DD3FC]">TTFB LATENCY</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0B1528] border border-[#00F0FF]/30">
                <div className="text-xl font-bold text-amber-300">100%</div>
                <div className="text-[10px] text-[#7DD3FC]">ROOT ACCESS</div>
              </div>
            </div>
          </div>

          {/* Dual Operatives Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* OPERATIVE 1: SUBHAM BERA */}
            <div
              ref={dev1CardRef}
              onMouseMove={handleDev1MouseMove}
              onMouseEnter={() => setIsDev1Hovered(true)}
              onMouseLeave={handleDev1MouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${dev1Rotate.x}deg) rotateY(${dev1Rotate.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: isDev1Hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
              }}
              className="relative rounded-2xl bg-[#091328] border-2 border-[#00F0FF]/40 p-6 sm:p-7 shadow-[0_0_25px_rgba(0,240,255,0.15)] group hover:border-[#00F0FF] transition-colors"
            >
              {/* Dynamic 3D Specular Sheen */}
              {isDev1Hovered && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 280px at ${dev1Glare.x}% ${dev1Glare.y}%, rgba(0,240,255,0.22), transparent 70%)`
                  }}
                />
              )}

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
                <div
                  style={{
                    transform: isDev1Hovered ? 'translateZ(26px)' : 'translateZ(0px)',
                    transition: 'transform 0.3s ease-out'
                  }}
                  className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#00F0FF] bg-[#02040A] shadow-xl"
                >
                  <img
                    src={dev1PhotoSrc}
                    alt="Subham Bera"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-1.5 inset-x-1.5 px-2 py-0.5 rounded bg-[#02040A]/90 border border-[#00F0FF]/40 text-center">
                    <span className="text-[10px] text-[#00F0FF] font-bold">OP_01 // BERA</span>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#00F0FF]/15 border border-[#00F0FF]/40 text-[#00F0FF] text-[10px] uppercase">
                    <Layers className="w-3 h-3 text-[#00F0FF]" />
                    <span>Creative Frontend Operative</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#F0FDF4] font-cyber">Subham Bera</h3>
                    <p className="text-xs text-[#00F0FF]">Co-Founder // Creative Technologist</p>
                  </div>

                  <p className="text-xs text-[#7DD3FC] leading-relaxed">
                    Engineering next-generation web architectures, interactive 3D WebGL experiences, and ultra-fluid React 19 motion interfaces.
                  </p>

                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                    {['React 19', 'Three.js / WebGL', 'Tailwind v4', 'Framer Motion', 'HUD UI'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-[#060D1E] border border-[#00F0FF]/30 text-[10px] text-[#00F0FF]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 justify-center sm:justify-start pt-2">
                    <a
                      href="https://github.com/SubhamBera123"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#060D1E] border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#7DD3FC] hover:text-[#00F0FF] text-xs flex items-center gap-1.5 transition-all"
                    >
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#060D1E] border border-[#00F0FF]/30 hover:border-[#00F0FF] text-[#7DD3FC] hover:text-[#00F0FF] text-xs flex items-center gap-1.5 transition-all"
                    >
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#contact-section"
                      className="p-2 rounded-lg bg-[#00F0FF] text-[#02040A] text-xs font-bold flex items-center gap-1 hover:bg-[#38BDF8] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Transmit</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* OPERATIVE 2: RAHUL KUMAR SINGH */}
            <div
              ref={dev2CardRef}
              onMouseMove={handleDev2MouseMove}
              onMouseEnter={() => setIsDev2Hovered(true)}
              onMouseLeave={handleDev2MouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${dev2Rotate.x}deg) rotateY(${dev2Rotate.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: isDev2Hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
              }}
              className="relative rounded-2xl bg-[#091328] border-2 border-[#8B5CF6]/50 p-6 sm:p-7 shadow-[0_0_25px_rgba(139,92,246,0.15)] group hover:border-[#8B5CF6] transition-colors"
            >
              {/* Dynamic 3D Specular Sheen */}
              {isDev2Hovered && (
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 280px at ${dev2Glare.x}% ${dev2Glare.y}%, rgba(139,92,246,0.22), transparent 70%)`
                  }}
                />
              )}

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
                <div
                  style={{
                    transform: isDev2Hovered ? 'translateZ(26px)' : 'translateZ(0px)',
                    transition: 'transform 0.3s ease-out'
                  }}
                  className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#8B5CF6] bg-[#02040A] shadow-xl"
                >
                  <img
                    src={dev2PhotoSrc}
                    alt="Rahul Kumar Singh"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-1.5 inset-x-1.5 px-2 py-0.5 rounded bg-[#02040A]/90 border border-[#8B5CF6]/40 text-center">
                    <span className="text-[10px] text-[#A78BFA] font-bold">OP_02 // SINGH</span>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 text-[#A78BFA] text-[10px] uppercase">
                    <Cpu className="w-3 h-3 text-[#A78BFA]" />
                    <span>Systems &amp; Database Lead</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#F0FDF4] font-cyber">Rahul Kumar Singh</h3>
                    <p className="text-xs text-[#A78BFA]">Founder // Full-Stack Systems Engineer</p>
                  </div>

                  <p className="text-xs text-[#7DD3FC] leading-relaxed">
                    Architecting resilient backends, scalable REST services, and database schemas built for high-throughput enterprise security.
                  </p>

                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                    {['Java & Spring', 'React', 'MySQL & Postgres', 'REST Security', 'Sys Architecture'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-[#060D1E] border border-[#8B5CF6]/30 text-[10px] text-[#A78BFA]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5 justify-center sm:justify-start pt-2">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#060D1E] border border-[#8B5CF6]/30 hover:border-[#8B5CF6] text-[#7DD3FC] hover:text-[#A78BFA] text-xs flex items-center gap-1.5 transition-all"
                    >
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#060D1E] border border-[#8B5CF6]/30 hover:border-[#8B5CF6] text-[#7DD3FC] hover:text-[#A78BFA] text-xs flex items-center gap-1.5 transition-all"
                    >
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#contact-section"
                      className="p-2 rounded-lg bg-[#8B5CF6] text-[#F0FDF4] text-xs font-bold flex items-center gap-1 hover:bg-[#7C3AED] transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Transmit</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="mt-10 pt-6 border-t border-[#00F0FF]/25 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#7DD3FC]">
              <Activity className="w-4 h-4 text-[#00F0FF]" />
              <span>TELEMETRY_LINK: All 9 industry software prototypes fully verified.</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onExploreDemosClick}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#0284C7] text-[#02040A] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>Run Interactive Prototypes</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================================
     3. ORIGINAL VARIANT (UI 1 - PRESERVED 100% AS REFERENCE)
     ========================================================================= */
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
              transformStyle: 'preserve-3d',
              transition: isDev1Hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            }}
            className="relative rounded-2xl bg-gradient-to-b from-[#0f1422]/90 via-[#0a0d16]/95 to-[#07090e] border-2 border-[#D2B477]/40 p-6 sm:p-7 shadow-2xl overflow-hidden group hover:border-[#D2B477] transition-colors"
          >
            {/* Dynamic 3D Specular Sheen */}
            {isDev1Hovered && (
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 280px at ${dev1Glare.x}% ${dev1Glare.y}%, rgba(210,180,119,0.25), transparent 70%)`
                }}
              />
            )}

            {/* Top Amber Ambient Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D2B477]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D2B477]/25 transition-colors" />

            {/* Corner HUD Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D2B477] z-20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D2B477] z-20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D2B477] z-20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D2B477] z-20 pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">

              {/* Photo Frame */}
              <div
                style={{
                  transform: isDev1Hovered ? 'translateZ(24px)' : 'translateZ(0px)',
                  transition: 'transform 0.3s ease-out'
                }}
                className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-[#D2B477]/60 bg-[#090b12] shadow-xl group-hover:scale-105 transition-transform duration-500"
              >
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
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
              transformStyle: 'preserve-3d',
              transition: isDev2Hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            }}
            className="relative rounded-2xl bg-gradient-to-b from-[#0f1922]/90 via-[#0a1216]/95 to-[#07090e] border-2 border-cyan-500/40 p-6 sm:p-7 shadow-2xl overflow-hidden group hover:border-cyan-400 transition-colors"
          >
            {/* Dynamic 3D Specular Sheen */}
            {isDev2Hovered && (
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 280px at ${dev2Glare.x}% ${dev2Glare.y}%, rgba(6,182,212,0.25), transparent 70%)`
                }}
              />
            )}

            {/* Top Cyan Ambient Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/25 transition-colors" />

            {/* Corner HUD Brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">

              {/* Photo Frame */}
              <div
                style={{
                  transform: isDev2Hovered ? 'translateZ(24px)' : 'translateZ(0px)',
                  transition: 'transform 0.3s ease-out'
                }}
                className="relative w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-cyan-500/60 bg-[#090b12] shadow-xl group-hover:scale-105 transition-transform duration-500"
              >
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
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
