import React, { useEffect } from 'react';
import { X, Play, VideoOff, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export const ProjectVideoModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const hasValidVideo = Boolean(
    project.demoVideoUrl && 
    (project.demoVideoUrl.includes('youtube.com') || project.demoVideoUrl.includes('youtu.be') || project.demoVideoUrl.includes('vimeo.com'))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0F172A] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50">
          <div>
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">Project Video Walkthrough</span>
            <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video or Professional Coming Soon preview */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          {hasValidVideo ? (
            <iframe
              src={`${project.demoVideoUrl}?autoplay=1&rel=0`}
              title={`${project.title} Video Walkthrough`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#0F172A]">
              {/* Background preview image dimmed */}
              {project.desktopImage && (
                <img 
                  src={project.desktopImage} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-15 filter blur-xs"
                />
              )}
              <div className="relative z-10 max-w-md flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/10">
                  <VideoOff className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-100 mb-2">Video Walkthrough Coming Soon</h4>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  A high-definition recorded demonstration video for <strong className="text-slate-200">{project.title}</strong> is currently being recorded and edited. In the meantime, you can explore the real interactive live demo or examine the detailed architectural case study.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => {
                      onClose();
                      window.location.href = `/portfolio/${project.slug || project.id}`;
                    }}
                  >
                    View Project Case Study
                  </Button>
                  <Button variant="secondary" size="sm" onClick={onClose}>
                    Close Preview
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Category: <strong className="text-slate-300">{project.category}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Stack: {project.techStack?.slice(0, 3).join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
