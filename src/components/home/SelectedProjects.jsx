import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Video, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useData } from '../../context/DataContext';

export const SelectedProjects = ({ onOpenLiveDemo, onOpenVideoModal }) => {
  const { projects } = useData();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section id="selected-projects" className="py-24 relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background architectural grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111214] border border-[rgba(184,148,88,0.35)] text-[#D2B477] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm shadow-[#B89458]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#B89458]" />
              <span>Featured Client Prototypes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3EF] tracking-tight">
              Selected Work & Prototypes
            </h2>
            <p className="text-sm sm:text-base text-[#A09B92] mt-2 max-w-xl leading-relaxed">
              Production-ready demonstrations engineered for speed, clean UX architecture, and conversion.
            </p>
          </div>
          <Link to="/portfolio" className="shrink-0">
            <Button variant="outline" size="md" icon={ArrowRight} iconPosition="right">
              Explore All 9 Category Demos
            </Button>
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[rgba(184,148,88,0.50)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9),0_0_25px_-3px_rgba(184,148,88,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col group bg-[#111214]"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#050505]">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="gold">{project.category}</Badge>
                </div>

                {/* Speed Score Pill */}
                {project.metrics?.lighthouseSpeed && (
                  <div className="absolute top-4 right-4 bg-[#050505]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[rgba(184,148,88,0.40)] text-[11px] font-mono text-[#D2B477]">
                    ⚡ {project.metrics.lighthouseSpeed} Speed
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A09B92] mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack?.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#171819] text-[#A09B92] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 3 Explicit Action Buttons as specified in prompt */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      icon={Play}
                      onClick={() => onOpenLiveDemo(project)}
                    >
                      View Live Demo
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      icon={Video}
                      onClick={() => onOpenVideoModal(project)}
                    >
                      Demo Video
                    </Button>
                  </div>

                  <Link to={`/portfolio/${project.slug}`}>
                    <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right" className="text-[#D2B477] hover:text-[#F5F3EF]">
                      Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
