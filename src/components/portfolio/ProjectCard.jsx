import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Video, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '../common/Button';

export const ProjectCard = ({ project, onOpenLiveDemo, onOpenVideoModal }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Subtle interactive 3D perspective tilt on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl transition-all duration-300 flex flex-col justify-between group"
      style={{
        perspective: '1000px',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${isHovered ? '-6px' : '0px'})`,
        transition: isHovered ? 'transform 0.15s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease-out, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Outer Card Glass Panel with Gold/Obsidian Accent */}
      <div 
        className="w-full h-full rounded-2xl bg-[#0D0E12] border border-white/10 group-hover:border-[#B89458]/50 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300"
        style={{
          boxShadow: isHovered 
            ? '0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 25px rgba(184, 148, 88, 0.12)' 
            : '0 10px 30px -10px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Dynamic Specular Glare Reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.18) 0%, rgba(210, 180, 119, 0.08) 35%, transparent 70%)`,
            opacity: glare.opacity
          }}
        />

        <div>
          {/* Thumbnail Preview Stage */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#050505]">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none"></div>

            {/* Top Badges */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wide bg-[#111215]/90 text-[#D2B477] border border-[#B89458]/40 backdrop-blur-md shadow-md">
                {project.category}
              </span>

              {project.metrics?.lighthouseSpeed && (
                <span className="flex items-center gap-1 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30 text-[10px] font-mono text-emerald-400 shadow-md">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  <span>{project.metrics.lighthouseSpeed}</span>
                </span>
              )}
            </div>

            {/* Hover Quick Action Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 pointer-events-none sm:pointer-events-auto z-20">
              <button
                onClick={() => onOpenLiveDemo(project)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B89458] to-[#D2B477] hover:brightness-110 text-[#050505] font-bold text-xs flex items-center gap-2 shadow-lg shadow-[#B89458]/30 transition-transform hover:scale-105 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Prototype</span>
              </button>
            </div>
          </div>

          {/* Card Body Content */}
          <div className="p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A09B92] mt-2 leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>
            </div>

            {/* Engineered Highlights */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-[#D2B477] uppercase tracking-wider font-mono block">
                Engineered Highlights:
              </span>
              <ul className="space-y-1 text-xs text-[#E5DFD3]">
                {project.features?.slice(0, 3).map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89458] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#17181D] text-[#A09B92] border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="p-5 sm:p-6 pt-0 border-t border-white/5 mt-3 space-y-2.5">
          <div className="flex items-center gap-2 pt-3">
            <Button
              variant="primary"
              size="sm"
              className="flex-1 text-xs"
              icon={Play}
              onClick={() => onOpenLiveDemo(project)}
            >
              View Live Demo
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="text-xs"
              icon={Video}
              onClick={() => onOpenVideoModal(project)}
              title="Watch recorded video walkthrough"
            >
              Video
            </Button>
          </div>

          <Link to={`/portfolio/${project.slug}`} className="block">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
              icon={ArrowRight}
              iconPosition="right"
            >
              View Case Study & Architecture
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
