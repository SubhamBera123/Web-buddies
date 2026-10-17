import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ProjectFilters } from '../components/portfolio/ProjectFilters';
import { LiveDemoModal } from '../components/common/LiveDemoModal';
import { ProjectVideoModal } from '../components/common/ProjectVideoModal';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { useData } from '../context/DataContext';
import { useScrollTop } from '../hooks/useScrollTop';
import { Sparkles, Play, ShieldAlert } from 'lucide-react';

export const PortfolioPage = () => {
  useScrollTop();
  const { projects } = useData();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDemoProject, setActiveDemoProject] = useState(null);
  const [activeVideoProject, setActiveVideoProject] = useState(null);

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
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans pt-24">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Portfolio' }]} className="mb-8" />

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Demonstration Applications & Prototypes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production-Grade Demos Built for 9 Core Industries
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Instead of presenting static mockups or fabricated client metrics, explore real interactive demonstrations engineered with responsive React, state logic, and modern UX architecture.
          </p>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>All 9 prototypes feature live interactive modals. Click &ldquo;View Live Demo&rdquo; to test real features.</span>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <ProjectFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={projects.length}
          filteredCount={filteredProjects.length}
        />

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center my-12 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-2">No projects matched your criteria</h3>
            <p className="text-xs text-slate-400 mb-4">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-blue-400 underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Bottom CTA */}
        <EnquiryCTA />
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
