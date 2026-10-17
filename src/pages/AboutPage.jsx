import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, 
  Terminal, Server, Layout, ArrowRight, Laptop, Cpu, Layers 
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useScrollTop } from '../hooks/useScrollTop';

export const AboutPage = () => {
  useScrollTop();
  const { settings } = useData();

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

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans pt-24">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-16">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'About' }]} />

        {/* Intro Hero */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Profile & Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Hi, I&rsquo;m <span className="text-gradient-blue">{settings.developerName || "Alex Vance"}</span> — Senior Full-Stack Web Developer & UI/UX Specialist.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I help companies, startups, local businesses, entrepreneurs, and personal brands build fast, modern, and conversion-focused digital web products.
          </p>
        </div>

        {/* Development Philosophy & Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Engineering Philosophy</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              I believe that a business website is an active revenue generator, not a digital brochure. My approach eliminates cumbersome WordPress plugin bloat in favor of clean, modular code written in modern React, Tailwind CSS, and scalable PostgreSQL.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every page is designed from the ground up to load in under a second, look breathtaking on any mobile device, and make it effortless for your visitors to become paying clients.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Communication & Transparency</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nothing is more frustrating than working with an agency that disappears for weeks. I provide transparent milestone tracking, direct WhatsApp and Google Meet communication, and private live staging links.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              You are always in control of your timeline, your code, and your budget with zero surprise invoices.
            </p>
          </div>
        </div>

        {/* Technical Skills Stack */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-1">
              Technical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Core Technical Competencies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Proficient across modern frontend systems, enterprise backend frameworks, relational databases, and cloud DevOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((category, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span>{category.name}</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800"
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
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-1">
              Client Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Who I Partner With
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Collaborating with visionary founders and organizations where digital excellence directly influences revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((c, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-sm text-white">{c.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards & Guarantees */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-blue-500/30 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white">My Quality Commitments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2">
              <strong className="text-white text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Responsive Precision</span>
              </strong>
              <p className="text-slate-400 leading-relaxed">
                Tested against real iPhone, Android, iPad, and desktop viewport sizes for flawless touch interactions.
              </p>
            </div>

            <div className="space-y-2">
              <strong className="text-white text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Clean Maintainability</span>
              </strong>
              <p className="text-slate-400 leading-relaxed">
                Modular React architecture with structured design tokens and zero spaghetti code so any future developer can maintain it.
              </p>
            </div>

            <div className="space-y-2">
              <strong className="text-white text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Post-Launch Warranty</span>
              </strong>
              <p className="text-slate-400 leading-relaxed">
                Complimentary post-launch warranty with immediate bug fixes and deployment assistance included with every contract.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8 space-y-4">
          <h3 className="text-2xl font-bold text-white">Ready to discuss your project?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Let’s schedule a consultation to explore your technical goals and review indicative estimates.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Start Your Project Today
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
