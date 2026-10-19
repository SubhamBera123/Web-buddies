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
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, Layers, RefreshCw } from 'lucide-react';

export const PortfolioPage = () => {
  useScrollTop();
  const { projects } = useData();

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

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans pt-24 relative overflow-x-hidden selection:bg-[#D2B477] selection:text-black">
      {/* Next-Gen Futuristic Digital Background with Subtle Ambient Lighting & Grid */}
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
      
      {/* Ambient background flares */}
      <div className="fixed top-20 left-1/4 w-[600px] h-[600px] bg-[#B89458]/[0.04] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Next-Gen Portfolio' }]} className="mb-6" />

        {/* 1. Executive Developer Profile Hero (Personal Photo + 3D HUD + Bio + Metrics) */}
        <PersonalProfileHero onExploreDemosClick={handleScrollToDemos} />

        {/* 2. Interactive Skills & Technology Matrix */}
        <SkillsMatrix />

        {/* 3. Engineering Benchmarks & Architectural Standards */}
        <EngineeringStandards />

        {/* 4. Interactive Project Demonstrations Showcase */}
        <section ref={demosSectionRef} id="interactive-demos" className="pt-8 mb-20 scroll-mt-24">
          <div className="max-w-3xl mb-8 space-y-3">
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
            <div className="glass-panel rounded-2xl p-12 text-center my-12 border border-slate-800 bg-[#0c0f18]/80 backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No prototypes match your search criteria</h3>
              <p className="text-xs text-slate-400 mb-5 max-w-md mx-auto">
                No demonstrations matched &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;. Try clearing your search query or choosing another industry.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-[#D2B477] border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
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
