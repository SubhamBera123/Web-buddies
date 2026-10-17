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
    <section id="selected-projects" className="py-20 relative bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Real Working Prototypes & Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Selected Demonstration Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Each demonstration is engineered with production-ready logic, responsive design, and fast performance metrics. Test them directly right in your browser.
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
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col group"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="blue">{project.category}</Badge>
                </div>

                {/* Speed Score Pill */}
                {project.metrics?.lighthouseSpeed && (
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                    ⚡ {project.metrics.lighthouseSpeed} Speed
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack?.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 3 Explicit Action Buttons as specified in prompt */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
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
                      Watch Demo Video
                    </Button>
                  </div>

                  <Link to={`/portfolio/${project.slug}`}>
                    <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
                      View Case Study
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
