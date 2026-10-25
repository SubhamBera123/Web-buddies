import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, 
  Terminal, Server, Layout, ArrowRight, Laptop, Cpu, Layers, Crown 
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';

export const AboutPage = () => {
  useScrollTop();
  const { settings } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();

  const technicalSkills = [
    { name: "Frontend Architecture", skills: ["React 19", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 Semantics", "Vite", "Framer Motion", "React Router", "Zod & React Hook Form"] },
    { name: "Backend & Databases", skills: ["Supabase PostgreSQL", "Row-Level Security (RLS)", "REST APIs", "Java", "Spring Boot", "MySQL", "Authentication & JWT"] },
    { name: "Performance & Quality", skills: ["Lighthouse 90+ Auditing", "Core Web Vitals", "WCAG Accessibility", "Responsive Layouts", "Netlify Deployment", "Git / GitHub CI/CD"] },
  ];

  const clientTypes = [
    {
      title: "Growing Businesses & SMEs",
      desc: "Companies needing to modernize legacy websites, generate higher-margin inbound leads, and project undeniable market authority."
    },
    {
      title: "Tech Founders & Startups",
      desc: "Startups launching new products or MVPs who need fast, robust React frontends and secure Supabase backends without bloated overhead."
    },
    {
      title: "Direct-to-Consumer & Retail Brands",
      desc: "Artisans and boutique brands desiring high-conversion e-commerce storefronts with frictionless checkout and zero marketplace commissions."
    },
    {
      title: "Independent Consultants & Executives",
      desc: "Senior professionals and keynote speakers looking to command premium consulting fees with distinctive editorial personal portfolios."
    }
  ];

  const getPageBgClass = () => {
    if (isLuxury) {
      return 'bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#9E7B4F] selection:text-white';
    }
    if (isFuturistic) {
      return 'bg-[#02040A] text-[#F0FDF4] font-mono selection:bg-[#00F0FF] selection:text-black';
    }
    return 'bg-[#0B0F19] text-slate-100 font-sans selection:bg-[#D2B477] selection:text-black';
  };

  return (
    <div className={`min-h-screen ${getPageBgClass()} flex flex-col pt-24 transition-colors duration-300`}>
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: isLuxury ? 'Atelier Dossier' : isFuturistic ? 'CORE_SPEC' : 'About' }]} />

        {/* Intro Hero */}
        <div className="max-w-4xl space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold ${
            isLuxury
              ? 'bg-[#FFFFFF] border border-[#9E7B4F]/40 text-[#9E7B4F] font-serif uppercase tracking-widest'
              : isFuturistic
              ? 'bg-[#060D1E] border border-[#00F0FF]/50 text-[#00F0FF] font-mono shadow-[0_0_12px_rgba(0,240,255,0.3)]'
              : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
          }`}>
            {isLuxury ? <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>{isLuxury ? 'Archival Studio Roster & Architectural Philosophy' : isFuturistic ? 'KERNEL_INFO // SYSTEM_PROFILES' : 'Developer Profile & Philosophy'}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
            isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
          }`}>
            {isLuxury ? (
              <>Subham Bera & Rahul Kumar Singh — <span className="text-[#9E7B4F]">Principal Software Architects</span> & Creative Directors.</>
            ) : isFuturistic ? (
              <>SYSTEM DIRECTORS: <span className="text-[#00F0FF]">SUBHAM BERA & RAHUL KUMAR SINGH</span> // FULL-STACK ARCHITECTS.</>
            ) : (
              <>Hi, We&rsquo;re <span className="text-gradient-gold">Subham Bera & Rahul Kumar Singh</span> — Senior Full-Stack Web Developers & UI/UX Specialists.</>
            )}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isLuxury ? 'text-[#655E56] font-sans' : isFuturistic ? 'text-[#7DD3FC] font-mono' : 'text-slate-300'
          }`}>
            We partner with visionary enterprises, funded tech startups, e-commerce brands, and professional practices to engineer fast, conversion-optimized digital web architectures.
          </p>
        </div>

        {/* Development Philosophy & Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className={`rounded-3xl p-6 sm:p-8 space-y-4 border transition-all ${
            isLuxury
              ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 shadow-md text-[#1C1917]'
              : isFuturistic
              ? 'bg-[#060D1E] border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.1)] text-[#F0FDF4]'
              : 'glass-panel border-slate-800 text-slate-100'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isLuxury
                ? 'bg-[#FAF8F5] text-[#9E7B4F] border border-[#9E7B4F]/30'
                : isFuturistic
                ? 'bg-[#02040A] text-[#00F0FF] border border-[#00F0FF]/40'
                : 'bg-blue-500/10 text-blue-400'
            }`}>
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className={`text-xl font-bold ${isLuxury ? 'font-serif text-[#1C1917]' : isFuturistic ? 'font-cyber text-[#F0FDF4]' : 'text-white'}`}>
              {isLuxury ? 'Architectural Philosophy' : 'Engineering Philosophy'}
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              We believe a commercial digital property is an active revenue instrument, not a digital flyer. We eliminate cumbersome CMS bloat in favor of clean, modular code written in modern React 19, Tailwind CSS, and scalable PostgreSQL.
            </p>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#8A8177]' : isFuturistic ? 'text-[#38BDF8]' : 'text-slate-400'}`}>
              Every interface is calibrated to load in sub-600 milliseconds, render flawlessly on any mobile screen, and inspire immediate consumer trust.
            </p>
          </div>

          <div className={`rounded-3xl p-6 sm:p-8 space-y-4 border transition-all ${
            isLuxury
              ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 shadow-md text-[#1C1917]'
              : isFuturistic
              ? 'bg-[#060D1E] border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.1)] text-[#F0FDF4]'
              : 'glass-panel border-slate-800 text-slate-100'
          }`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isLuxury
                ? 'bg-[#FAF8F5] text-[#9E7B4F] border border-[#9E7B4F]/30'
                : isFuturistic
                ? 'bg-[#02040A] text-[#00F0FF] border border-[#00F0FF]/40'
                : 'bg-emerald-500/10 text-emerald-400'
            }`}>
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className={`text-xl font-bold ${isLuxury ? 'font-serif text-[#1C1917]' : isFuturistic ? 'font-cyber text-[#F0FDF4]' : 'text-white'}`}>
              {isLuxury ? 'Absolute Transparency Accord' : 'Communication & Transparency'}
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-300'}`}>
              We operate with milestone tracking, direct phone and video sessions, and private live staging links.
            </p>
            <p className={`text-xs sm:text-sm leading-relaxed ${isLuxury ? 'text-[#8A8177]' : isFuturistic ? 'text-[#38BDF8]' : 'text-slate-400'}`}>
              You remain in control of your timeline, your source code repository, and your investment with zero surprise charges.
            </p>
          </div>
        </div>

        {/* Technical Skills Stack */}
        <div className="space-y-6">
          <div>
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider block mb-1 ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
            }`}>
              {isLuxury ? 'Disciplines & Capabilities' : isFuturistic ? 'SYSTEM_COMPETENCIES' : 'Technical Capabilities'}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${
              isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
            }`}>
              Core Technical Competencies
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${
              isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'
            }`}>
              Proficient across modern frontend systems, enterprise backend frameworks, relational databases, and cloud DevOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((category, idx) => (
              <div key={idx} className={`rounded-2xl p-6 border space-y-4 transition-all ${
                isLuxury
                  ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 shadow-sm'
                  : isFuturistic
                  ? 'bg-[#060D1E] border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.08)]'
                  : 'glass-card border-slate-800'
              }`}>
                <h3 className={`font-bold text-sm flex items-center gap-2 ${
                  isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#00F0FF] font-cyber' : 'text-white'
                }`}>
                  <Terminal className={`w-4 h-4 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`} />
                  <span>{category.name}</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-mono px-2.5 py-1 rounded border ${
                        isLuxury
                          ? 'bg-[#FAF8F5] text-[#1C1917] border-[#9E7B4F]/25 font-sans'
                          : isFuturistic
                          ? 'bg-[#02040A] text-[#00F0FF] border-[#00F0FF]/40 font-mono'
                          : 'bg-slate-900 text-slate-300 border-slate-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Clients I Work With */}
        <div className="space-y-6">
          <div>
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider block mb-1 ${
              isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'
            }`}>
              Client Focus
            </span>
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${
              isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'
            }`}>
              Who We Partner With
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${
              isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'
            }`}>
              Collaborating with visionary founders and organizations where digital excellence directly influences revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((c, i) => (
              <div key={i} className={`rounded-2xl p-6 border space-y-3 transition-all ${
                isLuxury
                  ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 shadow-sm'
                  : isFuturistic
                  ? 'bg-[#060D1E] border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.08)]'
                  : 'glass-card border-slate-800'
              }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                  isLuxury
                    ? 'bg-[#FAF8F5] text-[#9E7B4F] border border-[#9E7B4F]/30'
                    : isFuturistic
                    ? 'bg-[#02040A] text-[#00F0FF] border border-[#00F0FF]/40'
                    : 'bg-blue-500/10 text-blue-400'
                }`}>
                  0{i + 1}
                </div>
                <h4 className={`font-bold text-sm ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
                  {c.title}
                </h4>
                <p className={`text-xs leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards & Guarantees */}
        <div className={`rounded-3xl p-6 sm:p-10 border space-y-6 ${
          isLuxury
            ? 'bg-[#FFFFFF] border-2 border-[#9E7B4F]/40 shadow-lg text-[#1C1917]'
            : isFuturistic
            ? 'bg-[#060D1E] border-2 border-[#00F0FF]/60 shadow-[0_0_30px_rgba(0,240,255,0.15)] text-[#F0FDF4]'
            : 'glass-panel-glow border-blue-500/30 text-white'
        }`}>
          <h3 className={`text-xl sm:text-2xl font-bold ${isLuxury ? 'font-serif text-[#1C1917]' : isFuturistic ? 'font-cyber text-[#F0FDF4]' : 'text-white'}`}>
            {isLuxury ? 'Quality Accords & Commitments' : 'Engineering Commitments'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2">
              <strong className={`text-sm flex items-center gap-1.5 ${isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#00F0FF]' : 'text-white'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Responsive Precision</span>
              </strong>
              <p className={`leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
                Tested against real iPhone, Android, iPad, and desktop viewport sizes for flawless touch interactions.
              </p>
            </div>

            <div className="space-y-2">
              <strong className={`text-sm flex items-center gap-1.5 ${isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#00F0FF]' : 'text-white'}`}>
                <CheckCircle2 className={`w-4 h-4 ${isLuxury ? 'text-[#9E7B4F]' : isFuturistic ? 'text-[#00F0FF]' : 'text-blue-400'}`} />
                <span>Clean Maintainability</span>
              </strong>
              <p className={`leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
                Modular React architecture with structured design tokens and zero spaghetti code so any future developer can maintain it.
              </p>
            </div>

            <div className="space-y-2">
              <strong className={`text-sm flex items-center gap-1.5 ${isLuxury ? 'text-[#1C1917] font-serif font-bold' : isFuturistic ? 'text-[#00F0FF]' : 'text-white'}`}>
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Post-Launch Warranty</span>
              </strong>
              <p className={`leading-relaxed ${isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-400'}`}>
                Complimentary post-launch warranty with immediate bug fixes and deployment assistance included with every contract.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Enquiry CTA */}
        <EnquiryCTA />
      </main>

      <Footer />
    </div>
  );
};
