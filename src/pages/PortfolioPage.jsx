import React, { useState, useMemo, useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ProjectFilters } from '../components/portfolio/ProjectFilters';
import { PersonalProfileHero } from '../components/portfolio/PersonalProfileHero';
import { SkillsMatrix } from '../components/portfolio/SkillsMatrix';
import { EngineeringStandards } from '../components/portfolio/EngineeringStandards';
import { LiveDemoModal } from '../components/common/LiveDemoModal';
import { ProjectVideoModal } from '../components/common/ProjectVideoModal';
import { Interactive3DBackground } from '../components/common/Interactive3DBackground';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, Layers, RefreshCw, Crown, Terminal, ShieldCheck } from 'lucide-react';

export const PortfolioPage = () => {
  useScrollTop();
  const { projects } = useData();
  const { theme, isLuxury, isFuturistic } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDemoProject, setActiveDemoProject] = useState(null);
  const [activeVideoProject, setActiveVideoProject] = useState(null);

  const demosSectionRef = useRef(null);

  const handleScrollToDemos = () => {
    if (demosSectionRef.current) {
      demosSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { key: 'restaurant', label: 'Restaurant & Food' },
    { key: 'ecommerce', label: 'Fashion & E-Commerce' },
    { key: 'realestate', label: 'Real Estate' },
    { key: 'healthcare', label: 'Healthcare & Clinics' },
    { key: 'corporate', label: 'Corporate Business' },
    { key: 'portfolio', label: 'Personal Portfolio' },
    { key: 'hotel', label: 'Hotel & Hospitality' },
    { key: 'education', label: 'Education & Learning' },
    { key: 'saas', label: 'SaaS Dashboard' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        project.categoryKey === selectedCategory ||
        project.category?.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.techStack?.some(tech => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const getPageBgClass = () => {
    if (isLuxury) {
      return 'bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#9E7B4F] selection:text-white';
    }
    if (isFuturistic) {
      return 'bg-[#02040A] text-[#F0FDF4] font-mono selection:bg-[#00F0FF] selection:text-black';
    }
    return 'bg-[#07090E] text-slate-100 font-sans selection:bg-[#D2B477] selection:text-black';
  };

  return (
    <div className={`min-h-screen ${getPageBgClass()} flex flex-col pt-24 relative overflow-x-hidden transition-colors duration-300`}>
      {/* Interactive 3D Background */}
      <Interactive3DBackground />

      {/* Background Graphic Decor */}
      {isLuxury ? (
        <>
          <div
            className="fixed inset-0 pointer-events-none opacity-20 z-0"
            style={{
              backgroundImage: 'radial-gradient(#9E7B4F 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          <div className="fixed top-20 left-1/4 w-[600px] h-[600px] bg-[#9E7B4F]/[0.05] rounded-full blur-[140px] pointer-events-none z-0" />
        </>
      ) : isFuturistic ? (
        <>
          <div
            className="fixed inset-0 pointer-events-none opacity-25 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="fixed top-20 left-1/4 w-[600px] h-[600px] bg-[#00F0FF]/[0.06] rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-[#7928CA]/[0.08] rounded-full blur-[140px] pointer-events-none z-0" />
        </>
      ) : (
        <>
          <div
            className="fixed inset-0 pointer-events-none opacity-40 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(210, 180, 119, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(210, 180, 119, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px'
            }}
          />
          <div className="fixed top-20 left-1/4 w-[600px] h-[600px] bg-[#B89458]/[0.04] rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />
        </>
      )}

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs items={[{ label: isLuxury ? 'Archival Portfolio' : isFuturistic ? 'Holographic Portfolios' : 'Next-Gen Portfolio' }]} className="mb-6" />

        {/* 1. Executive Developer Profile Hero (Personal Photo + 3D HUD + Bio + Metrics) */}
        <PersonalProfileHero onExploreDemosClick={handleScrollToDemos} />

        {/* 2. Interactive Skills & Technology Matrix */}
        <SkillsMatrix />

        {/* 3. Engineering Benchmarks & Architectural Standards */}
        <EngineeringStandards />

        {/* 4. Interactive Project Demonstrations Showcase */}
        <section ref={demosSectionRef} id="interactive-demos" className="pt-8 mb-20 scroll-mt-24">
          <div className="max-w-3xl mb-8 space-y-3">
            {isLuxury ? (
              <>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#9E7B4F]/40 text-[#9E7B4F] text-xs font-serif tracking-widest uppercase">
                  <Crown className="w-3.5 h-3.5 text-[#9E7B4F]" />
                  <span>Production Portfolio // IX Commercial Plates</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight">
                  Archival Prototype Exhibitions
                </h2>
                <p className="text-sm sm:text-base text-[#655E56] leading-relaxed font-sans">
                  Experience bespoke digital works engineered with real architectural precision, dynamic commerce funnels, and uncompromising typography.
                </p>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#9E7B4F]/30 text-xs text-[#655E56] flex items-center gap-2.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#9E7B4F]" />
                  <span>All 9 prototypes feature live in-browser testing. Click <strong className="text-[#1C1917]">&ldquo;View Live Demo&rdquo;</strong> to examine any commission.</span>
                </div>
              </>
            ) : isFuturistic ? (
              <>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#060D1E] border border-[#00F0FF]/50 text-[#00F0FF] text-xs font-mono uppercase tracking-wider shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                  <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>PRODUCTION_RUNTIMES // 09_DEPLOYMENTS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-extrabold text-[#F0FDF4] tracking-tight">
                  HOLOGRAPHIC WORK MATRIX
                </h2>
                <p className="text-sm sm:text-base text-[#7DD3FC] leading-relaxed font-mono">
                  Interact with operational prototypes running real state logic, telemetry dashboards, and 60 FPS reactive components.
                </p>
                <div className="p-3.5 rounded-xl bg-[#060D1E] border border-[#00F0FF]/40 text-xs text-[#7DD3FC] flex items-center gap-2.5 shadow-sm font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                  </span>
                  <span>9 verified nodes active. Click <strong className="text-[#00F0FF]">[EXECUTE_PROTOTYPE]</strong> on any node to mount sandbox runtime.</span>
                </div>
              </>
            ) : (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89458]/10 border border-[#D2B477]/30 text-[#D2B477] text-xs font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Production Demonstrations // 9 Core Industries</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Interactive Digital Showcases
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Experience functioning software prototypes engineered with real state logic, interactive checkout funnels, appointment bookings, and responsive UI components.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>All 9 prototypes feature live in-browser testing. Click <strong className="text-white">&ldquo;View Live Demo&rdquo;</strong> on any card to run the interactive prototype.</span>
                </div>
              </>
            )}
          </div>

          {/* Filters & Real-Time Search Bar */}
          <ProjectFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalCount={projects.length}
            filteredCount={filteredProjects.length}
          />

          {/* Project Cards 3D Perspective Grid */}
          {filteredProjects.length === 0 ? (
            <div className={`rounded-2xl p-12 text-center my-12 border ${
              isLuxury
                ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 text-[#655E56]'
                : isFuturistic
                ? 'bg-[#060D1E] border-[#00F0FF]/40 text-[#7DD3FC]'
                : 'glass-panel border-slate-800 bg-[#0c0f18]/80 text-slate-400 backdrop-blur-md'
            }`}>
              <div className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto mb-4 ${
                isLuxury
                  ? 'bg-[#FAF8F5] border-[#9E7B4F]/40 text-[#9E7B4F]'
                  : isFuturistic
                  ? 'bg-[#091328] border-[#00F0FF]/40 text-[#00F0FF]'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400'
              }`}>
                <Layers className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isLuxury ? 'text-[#1C1917] font-serif' : isFuturistic ? 'text-[#F0FDF4] font-cyber' : 'text-white'}`}>
                No prototypes match your search criteria
              </h3>
              <p className="text-xs mb-5 max-w-md mx-auto">
                No demonstrations matched &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;. Try clearing your search query or choosing another industry.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  isLuxury
                    ? 'bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9E7B4F] border-[#9E7B4F]/40'
                    : isFuturistic
                    ? 'bg-[#00F0FF] text-[#02040A] hover:bg-[#38BDF8] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'bg-slate-800 hover:bg-slate-700 text-[#D2B477] border-slate-700'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLiveDemo={(proj) => setActiveDemoProject(proj)}
                  onOpenVideoModal={(proj) => setActiveVideoProject(proj)}
                />
              ))}
            </div>
          )}
        </section>

        {/* 5. Bottom Call to Action Section */}
        <div id="contact-section" className="scroll-mt-24">
          <EnquiryCTA />
        </div>
      </main>

      <Footer />

      {/* Global Interactive Demo Prototype Modal */}
      <LiveDemoModal
        isOpen={Boolean(activeDemoProject)}
        onClose={() => setActiveDemoProject(null)}
        project={activeDemoProject}
      />

      {/* Global Project Video Walkthrough Modal */}
      <ProjectVideoModal
        isOpen={Boolean(activeVideoProject)}
        onClose={() => setActiveVideoProject(null)}
        project={activeVideoProject}
      />
    </div>
  );
};
