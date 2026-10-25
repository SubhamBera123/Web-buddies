import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Video, ArrowRight, CheckCircle2, Zap, Crown, Cpu } from 'lucide-react';
import { Button } from '../common/Button';
import { useTheme } from '../../context/ThemeContext';

export const ProjectCard = ({ project, onOpenLiveDemo, onOpenVideoModal }) => {
  const { theme, isLuxury, isFuturistic } = useTheme();
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

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

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

  const getCardInnerStyles = () => {
    if (isLuxury) {
      return {
        container: 'bg-[#FFFFFF] border border-[#9E7B4F]/30 group-hover:border-[#9E7B4F] shadow-md hover:shadow-xl',
        title: 'font-serif font-bold text-[#1C1917] group-hover:text-[#9E7B4F] transition-colors',
        description: 'text-[#655E56]',
        highlightTitle: 'text-[#9E7B4F] font-serif uppercase tracking-widest font-bold',
        highlightText: 'text-[#1C1917]',
        highlightIcon: 'text-[#9E7B4F]',
        chip: 'bg-[#FAF8F5] text-[#655E56] border-[#9E7B4F]/25 font-sans font-medium',
        divider: 'border-[#9E7B4F]/20'
      };
    }
    if (isFuturistic) {
      return {
        container: 'bg-[#060D1E]/95 border border-[#00F0FF]/40 group-hover:border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.15)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
        title: 'font-cyber font-bold text-[#F0FDF4] group-hover:text-[#00F0FF] transition-colors',
        description: 'text-[#7DD3FC]',
        highlightTitle: 'text-[#00F0FF] font-mono uppercase tracking-wider font-bold',
        highlightText: 'text-[#E2E8F0]',
        highlightIcon: 'text-[#00F0FF]',
        chip: 'bg-[#091328] text-[#00F0FF] border-[#00F0FF]/30 font-mono text-[10px]',
        divider: 'border-[#00F0FF]/25'
      };
    }
    // Original
    return {
      container: 'bg-[#0D0E12] border border-white/10 group-hover:border-[#B89458]/50 shadow-xl',
      title: 'font-sans font-bold text-[#F5F3EF] group-hover:text-[#D2B477] transition-colors',
      description: 'text-[#A09B92]',
      highlightTitle: 'text-[#D2B477] font-mono uppercase tracking-wider font-bold',
      highlightText: 'text-[#E5DFD3]',
      highlightIcon: 'text-[#B89458]',
      chip: 'bg-[#17181D] text-[#A09B92] border-white/5 font-mono text-[10px]',
      divider: 'border-white/5'
    };
  };

  const cardStyles = getCardInnerStyles();

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl transition-all duration-300 flex flex-col justify-between group"
      style={{
        perspective: '1200px',
        transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${isHovered ? '-6px' : '0px'})`,
        transition: isHovered ? 'transform 0.12s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease-out, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Outer Card Glass Panel with Theme Accent */}
      <div
        className={`w-full h-full rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 relative ${cardStyles.container}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Cyber HUD Corner Brackets */}
        {isFuturistic && (
          <>
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#00F0FF] z-30 pointer-events-none" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#00F0FF] z-30 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#00F0FF] z-30 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#00F0FF] z-30 pointer-events-none" />
          </>
        )}

        {/* Dynamic Specular Glare Reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-30 transition-opacity duration-300"
          style={{
            background: isLuxury
              ? `radial-gradient(circle 300px at ${glare.x}% ${glare.y}%, rgba(158, 123, 79, 0.2) 0%, transparent 70%)`
              : isFuturistic
              ? `radial-gradient(circle 300px at ${glare.x}% ${glare.y}%, rgba(0, 240, 255, 0.28) 0%, transparent 70%)`
              : `radial-gradient(circle 300px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.22) 0%, rgba(210, 180, 119, 0.12) 35%, transparent 70%)`,
            opacity: glare.opacity
          }}
        />

        <div>
          {/* Thumbnail Preview Stage with Layered 3D Elevation */}
          <div
            className="relative aspect-[16/10] overflow-hidden bg-[#050505]"
            style={{
              transform: isHovered ? 'translateZ(16px)' : 'translateZ(0px)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlays */}
            <div className={`absolute inset-0 pointer-events-none ${
              isLuxury
                ? 'bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/20 to-transparent'
                : isFuturistic
                ? 'bg-gradient-to-t from-[#060D1E] via-[#060D1E]/40 to-transparent'
                : 'bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/30 to-transparent'
            }`} />

            {/* Top Badges with Elevated 3D translateZ */}
            <div
              className="absolute top-3 inset-x-3 flex items-center justify-between z-10"
              style={{
                transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
                transition: 'transform 0.3s ease-out'
              }}
            >
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide backdrop-blur-md shadow-md ${
                isLuxury
                  ? 'bg-[#FFFFFF]/95 text-[#9E7B4F] border border-[#9E7B4F]/40 font-serif'
                  : isFuturistic
                  ? 'bg-[#02040A]/90 text-[#00F0FF] border border-[#00F0FF]/50 font-mono'
                  : 'bg-[#111215]/90 text-[#D2B477] border border-[#B89458]/40 font-mono'
              }`}>
                {isLuxury ? `PLATE // ${project.category}` : project.category}
              </span>

              {project.metrics?.lighthouseSpeed && (
                <span className={`flex items-center gap-1 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] shadow-md ${
                  isLuxury
                    ? 'bg-[#FFFFFF]/95 border border-[#9E7B4F]/30 text-[#9E7B4F]'
                    : 'bg-black/85 border border-emerald-500/30 text-emerald-400 font-mono'
                }`}>
                  <Zap className="w-3 h-3" />
                  <span>{project.metrics.lighthouseSpeed}</span>
                </span>
              )}
            </div>

            {/* Hover Quick Action Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 pointer-events-none sm:pointer-events-auto z-20"
              style={{
                transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)',
                transition: 'transform 0.3s ease-out'
              }}
            >
              <button
                onClick={() => onOpenLiveDemo(project)}
                className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer ${
                  isLuxury
                    ? 'bg-[#1C1917] hover:bg-[#9E7B4F] text-[#FAF8F5]'
                    : isFuturistic
                    ? 'bg-[#00F0FF] hover:bg-[#38BDF8] text-[#02040A] shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                    : 'bg-gradient-to-r from-[#B89458] to-[#D2B477] text-[#050505] shadow-[#B89458]/30'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isLuxury ? 'Examine Prototype' : isFuturistic ? 'Execute Prototype' : 'Launch Prototype'}</span>
              </button>
            </div>
          </div>

          {/* Card Body Content with 3D Depth */}
          <div
            className="p-5 sm:p-6 space-y-4"
            style={{
              transform: isHovered ? 'translateZ(14px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div>
              <h3 className={`text-lg sm:text-xl leading-snug ${cardStyles.title}`}>
                {project.title}
              </h3>
              <p className={`text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2 ${cardStyles.description}`}>
                {project.shortDescription}
              </p>
            </div>

            {/* Engineered Highlights */}
            <div className="space-y-1.5 pt-1">
              <span className={`text-[10px] block ${cardStyles.highlightTitle}`}>
                {isLuxury ? 'Distinctive Attributes:' : isFuturistic ? 'SYSTEM_SPECS:' : 'Engineered Highlights:'}
              </span>
              <ul className={`space-y-1 text-xs ${cardStyles.highlightText}`}>
                {project.features?.slice(0, 3).map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${cardStyles.highlightIcon}`} />
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
                    className={`px-2 py-0.5 rounded-md border ${cardStyles.chip}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button Row with 3D Depth */}
        <div
          className={`p-5 sm:p-6 pt-0 border-t ${cardStyles.divider} mt-3 space-y-2.5`}
          style={{
            transform: isHovered ? 'translateZ(16px)' : 'translateZ(0px)',
            transition: 'transform 0.3s ease-out'
          }}
        >
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
              {isLuxury ? 'Inspect Commission Dossier' : isFuturistic ? 'Access Technical Schematics' : 'View Case Study & Architecture'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
