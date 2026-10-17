import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Video, ArrowRight, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const ProjectCard = ({ project, onOpenLiveDemo, onOpenVideoModal }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300">
      <div>
        {/* Thumbnail Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <Badge variant="blue">{project.category}</Badge>
          </div>

          {/* Speed Badge */}
          {project.metrics?.lighthouseSpeed && (
            <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
              ⚡ {project.metrics.lighthouseSpeed}
            </div>
          )}

          {/* Overlay Quick Action on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none sm:pointer-events-auto">
            <button
              onClick={() => onOpenLiveDemo(project)}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Launch Prototype</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Features Highlights */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider font-mono block mb-1">
              Engineered Highlights:
            </span>
            <ul className="space-y-1 text-xs text-slate-300">
              {project.features?.slice(0, 3).map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Explicit Action Buttons */}
      <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 space-y-3">
        <div className="flex items-center gap-2 pt-4">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
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
            title="Watch recorded walkthrough"
          >
            Watch Video
          </Button>
        </div>

        <Link to={`/portfolio/${project.slug}`} className="block">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            icon={ArrowRight}
            iconPosition="right"
          >
            View Case Study & Architecture
          </Button>
        </Link>
      </div>
    </div>
  );
};
