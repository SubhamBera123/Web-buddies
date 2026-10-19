import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, ArrowRight, Monitor, ChevronRight, MousePointerClick } from 'lucide-react';

export const LaptopIntro = ({ onComplete }) => {
  // Check if user already viewed the intro in this browser session
  const [isVisible, setIsVisible] = useState(() => {
    // Check URL parameters for explicit override (e.g. ?intro=true or ?replay=1)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('intro') === 'true' || params.get('replay') === '1') {
        sessionStorage.removeItem('nexuscraft_laptop_intro_seen');
        return true;
      }
      const hasSeen = sessionStorage.getItem('nexuscraft_laptop_intro_seen');
      return hasSeen !== 'true';
    }
    return true;
  });

  const [isOpening, setIsOpening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [transitionStage, setTransitionStage] = useState('idle'); // 'idle' | 'zooming' | 'dissolving'
  const containerRef = useRef(null);

  const triggerOpen = useCallback(() => {
    if (isOpening) return;
    setIsOpening(true);
    setTransitionStage('zooming');

    // Cinematic zoom sequence:
    // 0ms - 750ms: Camera dives forward into the laptop screen, lid squares to camera, glow intensifies
    // 750ms - 1200ms: Golden screen bloom dissolves seamlessly into authentic homepage
    // 1200ms: Overlay unmounts and session state saved
    setTimeout(() => {
      setTransitionStage('dissolving');
    }, 750);

    setTimeout(() => {
      sessionStorage.setItem('nexuscraft_laptop_intro_seen', 'true');
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1250);
  }, [isOpening, onComplete]);

  const skipIntro = useCallback(() => {
    sessionStorage.setItem('nexuscraft_laptop_intro_seen', 'true');
    setIsVisible(false);
    if (onComplete) onComplete();
  }, [onComplete]);

  // Expose replay function globally for convenience
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.replayLaptopIntro = () => {
        sessionStorage.removeItem('nexuscraft_laptop_intro_seen');
        setIsVisible(true);
        setIsOpening(false);
        setTransitionStage('idle');
      };
    }
  }, []);

  // Lock body scroll while intro is visible
  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isVisible]);

  // Subtle interactive 3D mouse parallax tracking on hover
  const handleMouseMove = (e) => {
    if (isOpening || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalized offset from center (-1 to 1)
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    setTilt({
      x: Math.max(-8, Math.min(8, -offsetY * 5)),
      y: Math.max(-10, Math.min(10, offsetX * 7))
    });
  };

  const handleMouseLeave = () => {
    if (!isOpening) {
      setTilt({ x: 0, y: 0 });
      setIsHovered(false);
    }
  };

  // Keyboard accessibility: ESC key skips intro, ENTER or SPACE opens
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        skipIntro();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, skipIntro, triggerOpen]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between px-3 sm:px-6 py-2 sm:py-3.5 bg-[#050505] select-none overflow-hidden transition-opacity duration-500 ${
        transitionStage === 'dissolving' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        transition: 'opacity 0.5s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Architectural Atmosphere matching NexusCraft */}
      <div className="absolute inset-0 bg-canvas-textured opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none"></div>

      {/* Ambient Lighting Orbs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[110px] pointer-events-none transition-all duration-700"
        style={{
          background: isHovered 
            ? 'radial-gradient(circle, rgba(184, 148, 88, 0.24) 0%, rgba(210, 180, 119, 0.08) 50%, transparent 75%)' 
            : 'radial-gradient(circle, rgba(184, 148, 88, 0.15) 0%, rgba(210, 180, 119, 0.04) 50%, transparent 75%)',
          transform: `translate(-50%, -50%) scale(${isOpening ? 3 : 1})`,
          opacity: isOpening ? 1 : 0.8
        }}
      />

      {/* Floating Gold & Ivory Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i % 3) * 2 + 2}px`,
              height: `${(i % 3) * 2 + 2}px`,
              left: `${(i * 6.8 + 4) % 96}%`,
              top: `${(i * 8.8 + 6) % 92}%`,
              background: i % 2 === 0 ? '#B89458' : '#F5F3EF',
              opacity: (i % 5 + 3) * 0.08,
              boxShadow: '0 0 8px rgba(184, 148, 88, 0.6)',
              animation: `floatParticle ${6 + (i % 5)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Top Header Bar with Brand Badge & Skip Option */}
      <header className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between pt-1">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#171819] to-[#0A0B0D] border border-[#B89458]/40 flex items-center justify-center shadow-md shadow-black/40">
            <span className="text-[11px] font-bold text-[#D2B477] font-mono tracking-wider">NC</span>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-[#F5F3EF] tracking-tight">NexusCraft Studio</div>
            <div className="text-[9px] text-[#A09B92] font-mono uppercase tracking-wider hidden sm:block">Digital Architecture • 2026</div>
          </div>
        </div>

        {/* Skip to Homepage Button */}
        <button
          onClick={skipIntro}
          className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#A09B92] hover:text-[#F5F3EF] bg-[#171819]/80 hover:bg-[#202225] border border-white/10 hover:border-[#B89458]/40 transition-all duration-200 backdrop-blur-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#B89458]"
          title="Directly enter homepage (or press Esc)"
        >
          <span>Skip to Homepage</span>
          <ArrowRight className="w-3 h-3 text-[#B89458] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </header>

      {/* Center Showcase: Explore Prompt + Interactive 3D Realistic Laptop + Quick Action */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl my-auto py-1">
        
        {/* ======================= EXPLORE MESSAGE ======================= */}
        <div className="text-center mb-2.5 sm:mb-3.5 transition-all duration-500">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#111214] border border-[#B89458]/35 mb-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2B477] animate-pulse"></span>
            <span className="text-[10px] font-mono font-medium text-[#D2B477] tracking-wider uppercase">
              Interactive Digital Preview
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Ready to <span className="text-gradient-gold-animated">Explore?</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mt-1 text-xs sm:text-sm text-[#A09B92]">
            <MousePointerClick className="w-3.5 h-3.5 text-[#D2B477] animate-bounce" />
            <span className="font-medium text-[#F5F3EF]">Click the laptop to enter</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-xs font-mono text-[#D2B477]/80">Or press Enter</span>
          </div>
        </div>

        {/* ======================= 3D REALISTIC LAPTOP ======================= */}
        <div 
          ref={containerRef}
          onClick={triggerOpen}
          onMouseEnter={() => setIsHovered(true)}
          role="button"
          tabIndex={0}
          aria-label="Click laptop to enter NexusCraft website"
          className="relative flex flex-col items-center justify-center cursor-pointer group focus:outline-none"
        >
          {/* Laptop 3D Container with Parallax Tilt */}
          <div 
            className="relative transition-transform duration-700 ease-out"
            style={{
              perspective: '1200px',
              transform: isOpening 
                ? 'scale(4.5) translateY(14%)' 
                : `perspective(1200px) rotateX(${9 + tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? '-6px' : '0px'})`,
              transformStyle: 'preserve-3d',
              transition: isOpening 
                ? 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease' 
                : 'transform 0.22s ease-out'
            }}
          >
            {/* Ambient Screen Light Cast onto Desk & Deck */}
            <div 
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-4/5 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(210, 180, 119, 0.40) 0%, rgba(184, 148, 88, 0.18) 50%, transparent 80%)',
                opacity: isHovered ? 0.95 : 0.65
              }}
            />

            {/* ======================= LAPTOP LID / SCREEN ======================= */}
            <div 
              className="relative mx-auto rounded-t-2xl rounded-b-sm border border-[#2F3238] shadow-2xl transition-all duration-700"
              style={{
                width: 'min(86vw, 440px)',
                height: 'min(50vw, 255px)',
                background: 'linear-gradient(180deg, #1C1E23 0%, #101114 100%)',
                boxShadow: isHovered 
                  ? '0 0 45px rgba(184, 148, 88, 0.32), 0 20px 45px rgba(0,0,0,0.92), inset 0 1px 1px rgba(255,255,255,0.3)' 
                  : '0 0 25px rgba(184, 148, 88, 0.12), 0 20px 35px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.15)',
                transformOrigin: 'bottom center',
                transform: isOpening 
                  ? 'rotateX(0deg)' 
                  : (isHovered ? 'rotateX(-6deg)' : 'rotateX(-10deg)'),
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Webcam & Privacy Optical Sensor Dot */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/70 z-30">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b2533] border border-cyan-500/40 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-cyan-400"></div>
                </div>
              </div>

              {/* Bezel inner border */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-t-xl rounded-b-xs bg-[#050505] border border-white/5 overflow-hidden flex flex-col justify-between">
                
                {/* Screen Top Status Bar */}
                <div className="h-5 sm:h-5.5 px-2.5 bg-[#0D0E12] border-b border-white/5 flex items-center justify-between text-[8.5px] font-mono text-[#A09B92]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#EF4444]/80"></div>
                    <div className="w-2 h-2 rounded-full bg-[#EAB308]/80"></div>
                    <div className="w-2 h-2 rounded-full bg-[#10B981]/80"></div>
                    <span className="ml-2 text-[8.5px] text-white/50 hidden sm:inline">nexuscraft.dev/preview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[8px] text-[#D2B477] bg-[#B89458]/10 px-1.5 py-0.2 rounded border border-[#B89458]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>ONLINE • 60FPS</span>
                    </span>
                  </div>
                </div>

                {/* Screen Inner Display Area (Mini Interactive Portal) */}
                <div className="relative flex-1 p-2 sm:p-3 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#090A0E] via-[#07080B] to-[#040405] overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
                  <div className="absolute inset-0 bg-radial-gradient from-[#B89458]/20 via-transparent to-transparent opacity-70"></div>

                  {/* Central glowing studio pill */}
                  <div className="relative z-10 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#171819]/90 border border-[#B89458]/40 mb-1 shadow-md shadow-black/50">
                    <Sparkles className="w-2.5 h-2.5 text-[#D2B477] animate-pulse" />
                    <span className="text-[8.5px] sm:text-[9.5px] font-mono font-medium text-[#D2B477] tracking-wider uppercase">
                      NexusCraft Studio
                    </span>
                  </div>

                  {/* Main Screen Branding */}
                  <h2 className="relative z-10 text-xs sm:text-base md:text-lg font-bold tracking-tight text-white mb-0.5">
                    High-Performance Web Architecture
                  </h2>
                  <p className="relative z-10 text-[8.5px] sm:text-[10px] text-[#A09B92] max-w-xs mb-2 hidden sm:block">
                    Custom digital products engineered with senior craftsmanship.
                  </p>

                  {/* Interactive Button on Laptop Screen */}
                  <div 
                    className={`relative z-10 inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 shadow-lg ${
                      isHovered 
                        ? 'bg-gradient-to-r from-[#B89458] via-[#C5A568] to-[#D2B477] text-[#050505] scale-105 shadow-[#B89458]/40 ring-1 ring-[#D2B477]' 
                        : 'bg-[#171819] text-[#F5F3EF] border border-[#B89458]/40'
                    }`}
                  >
                    <Monitor className="w-3 h-3 text-current" />
                    <span>{isOpening ? "Opening..." : "Enter Website"}</span>
                    <ChevronRight className={`w-3 h-3 transition-transform ${isHovered ? 'translate-x-0.5' : ''}`} />
                  </div>

                  {/* Glass Glare */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      background: 'linear-gradient(125deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 30%, transparent 60%)'
                    }}
                  />
                </div>

                {/* Screen Bottom Chin */}
                <div className="h-3 bg-[#0D0E12] border-t border-white/5 flex items-center justify-center">
                  <span className="text-[7px] font-mono tracking-widest text-white/30 uppercase">NEXUSCRAFT PRECISION</span>
                </div>
              </div>
            </div>

            {/* ======================= LAPTOP HINGE ======================= */}
            <div 
              className="mx-auto h-2 rounded-xs border-x border-[#33353C]"
              style={{
                width: 'min(74vw, 380px)',
                background: 'linear-gradient(180deg, #111215 0%, #24262C 50%, #0F1013 100%)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
              }}
            />

            {/* ======================= LAPTOP BASE (KEYBOARD & TRACKPAD) ======================= */}
            <div 
              className="relative mx-auto rounded-b-2xl border-t border-white/15 border-x border-b border-[#23252B] transition-shadow duration-300"
              style={{
                width: 'min(90vw, 470px)',
                height: 'min(32vw, 160px)',
                background: 'linear-gradient(180deg, #16171B 0%, #1A1C20 40%, #121316 100%)',
                boxShadow: isHovered 
                  ? '0 25px 55px -10px rgba(0,0,0,0.95), 0 0 35px rgba(184, 148, 88, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)' 
                  : '0 20px 45px -10px rgba(0,0,0,0.9), 0 0 20px rgba(184, 148, 88, 0.1), inset 0 1px 0 rgba(255,255,255,0.12)',
                transform: 'rotateX(42deg)',
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Front Lip Opening Scoop / Thumb Notch */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-1 rounded-t-sm bg-[#0A0B0E] border-t border-white/10"></div>

              {/* Speaker Grilles on Left & Right Sides */}
              <div className="absolute top-2.5 left-2 sm:left-3 bottom-10 w-2 flex flex-col justify-between py-1 opacity-25">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-full h-0.5 rounded-full bg-white/40"></div>
                ))}
              </div>
              <div className="absolute top-2.5 right-2 sm:right-3 bottom-10 w-2 flex flex-col justify-between py-1 opacity-25">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-full h-0.5 rounded-full bg-white/40"></div>
                ))}
              </div>

              {/* Recessed Keyboard Well */}
              <div 
                className="absolute top-2 inset-x-5 sm:inset-x-7 h-[58%] rounded-lg bg-[#0C0D10] border border-white/5 p-1 flex flex-col justify-between"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.9)'
                }}
              >
                {/* Backlit Keys Rows */}
                {/* Row 1: Function Keys */}
                <div className="flex gap-0.5 sm:gap-1 h-[14%]">
                  <div className="flex-1 rounded-xs bg-[#1A1B20] border border-white/10 flex items-center justify-center text-[4.5px] font-mono text-white/60">esc</div>
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-1 rounded-xs bg-[#1A1B20] border border-white/10 flex items-center justify-center text-[4px] font-mono text-white/40">
                      F{i + 1}
                    </div>
                  ))}
                  <div className="flex-1 rounded-xs bg-[#1A1B20] border border-[#B89458]/40 flex items-center justify-center text-[4px] font-mono text-[#D2B477]">
                    ⌽
                  </div>
                </div>

                {/* Row 2: Numbers */}
                <div className="flex gap-0.5 sm:gap-1 h-[15%]">
                  <div className="w-[8%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  {[...Array(11)].map((_, i) => (
                    <div key={i} className="flex-1 rounded-xs bg-[#1E2025] border border-white/10"></div>
                  ))}
                  <div className="w-[12%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                </div>

                {/* Row 3: QWERTY */}
                <div className="flex gap-0.5 sm:gap-1 h-[15%]">
                  <div className="w-[12%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  {[...Array(11)].map((_, i) => (
                    <div key={i} className="flex-1 rounded-xs bg-[#1E2025] border border-white/10"></div>
                  ))}
                  <div className="w-[9%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                </div>

                {/* Row 4: ASDFGH */}
                <div className="flex gap-0.5 sm:gap-1 h-[15%]">
                  <div className="w-[14%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-1 rounded-xs bg-[#1E2025] border border-white/10"></div>
                  ))}
                  <div className="w-[14%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                </div>

                {/* Row 5: ZXCVBN */}
                <div className="flex gap-0.5 sm:gap-1 h-[15%]">
                  <div className="w-[17%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="flex-1 rounded-xs bg-[#1E2025] border border-white/10"></div>
                  ))}
                  <div className="w-[17%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                </div>

                {/* Row 6: Spacebar row */}
                <div className="flex gap-0.5 sm:gap-1 h-[15%]">
                  <div className="w-[9%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  <div className="w-[9%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  <div className="w-[11%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  {/* Glowing Spacebar */}
                  <div 
                    className="flex-1 rounded-xs bg-[#24262E] border border-white/15 flex items-center justify-center transition-all duration-300"
                    style={{
                      boxShadow: isHovered ? '0 0 6px rgba(184, 148, 88, 0.4)' : 'none'
                    }}
                  />
                  <div className="w-[11%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  <div className="w-[9%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                  <div className="w-[13%] rounded-xs bg-[#1E2025] border border-white/10"></div>
                </div>
              </div>

              {/* Precision Glass Touchpad */}
              <div 
                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-8 sm:h-11 rounded-md bg-[#131417] border border-white/10 transition-colors duration-300"
                style={{
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.06)',
                  borderColor: isHovered ? 'rgba(184, 148, 88, 0.4)' : 'rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-full h-px bg-white/10"></div>
              </div>
            </div>

            {/* Under-Laptop Ground Shadow & Desk Reflection */}
            <div 
              className="mx-auto rounded-full blur-xl pointer-events-none transition-all duration-500"
              style={{
                width: 'min(84vw, 440px)',
                height: '26px',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(184, 148, 88, 0.15) 45%, transparent 75%)',
                transform: `translateY(6px) scale(${isHovered ? 1.05 : 1})`,
                opacity: isHovered ? 0.95 : 0.75
              }}
            />
          </div>
        </div>

        {/* ======================= BOTTOM QUICK ACTION BAR ======================= */}
        <div className="mt-3 sm:mt-4 flex items-center gap-3">
          <button
            onClick={triggerOpen}
            disabled={isOpening}
            className="inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#B89458] via-[#C5A568] to-[#D2B477] text-[#050505] shadow-lg shadow-[#B89458]/25 hover:shadow-[#B89458]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer border border-[#D2B477]/60"
          >
            {isOpening ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                <span>Opening Studio...</span>
              </>
            ) : (
              <>
                <span>Enter Studio Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer Branding Status */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between text-[10.5px] text-[#A09B92]/70 font-mono pb-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>NexusCraft Studio v2.4</span>
        </div>
        <div className="hidden sm:block">
          Click laptop screen or press Space to enter
        </div>
      </footer>

      {/* Floating Particles Animation Keyframe Style */}
      <style>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-40px) translateX(-6px);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};
