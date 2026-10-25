import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Rocket, 
  Palette, 
  Code2, 
  Database, 
  MonitorCheck, 
  Terminal, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Crown,
  Laptop,
  Play,
  RotateCcw,
  Activity,
  FileCheck,
  Globe,
  Sliders,
  Maximize2
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import confetti from 'canvas-confetti';

export const ScrollDriven3DLaptopJourney = ({ onRequestQuote }) => {
  const { isLuxury, isFuturistic } = useTheme();
  
  // Active stage index (0 to 5)
  const [activeStage, setActiveStage] = useState(0);
  
  // Continuous scroll progress through the entire journey container (0.0 to 1.0)
  const [journeyProgress, setJourneyProgress] = useState(0);
  
  // Mouse parallax coordinates
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const [isHoveringLaptop, setIsHoveringLaptop] = useState(false);
  
  // Stage 2 Interactive toggle (Wireframe vs Polished UI)
  const [isWireframeMode, setIsWireframeMode] = useState(false);
  
  // Stage 3 Interactive frontend live component state
  const [counterValue, setCounterValue] = useState(1);
  const [activeTab, setActiveTab] = useState('preview');
  
  // Stage 5 Interactive toggle (Desktop / Tablet / Mobile view)
  const [activeDeviceView, setActiveDeviceView] = useState('desktop');
  
  // Confetti trigger flag for Stage 6
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);

  // References
  const journeyContainerRef = useRef(null);
  const stageSectionRefs = useRef([]);
  const laptopSlotRefs = useRef([]);
  const animFrameRef = useRef(null);

  // Dynamic physical position and 3D orientation of the ASUS TUF Gaming A15 laptop
  const [laptopState, setLaptopState] = useState({
    x: -310,
    y: 260,
    rotY: -8,
    rotX: 3,
    rotZ: 0,
    scale: 1.0
  });

  // Target coordinates for smooth interpolation (lerping)
  const targetMotionRef = useRef({
    x: -310,
    y: 260,
    rotY: -8,
    rotX: 3,
    rotZ: 0,
    scale: 1.0
  });

  // Current interpolated motion values
  const currentMotionRef = useRef({
    x: -310,
    y: 260,
    rotY: -8,
    rotX: 3,
    rotZ: 0,
    scale: 1.0
  });

  // Data for the 6 development stages
  const stages = [
    {
      id: 'kickoff',
      stepNumber: '01',
      title: 'Project Kickoff & Strategic Discovery',
      subtitle: 'Blueprint, Architecture & Milestone Planning',
      icon: Terminal,
      duration: 'Week 1',
      tagline: 'Deep client alignment & specifications before coding',
      description: 'Every high-impact commission begins with structured discovery. We deconstruct your commercial goals, user personas, competitor tech stacks, and feature priorities into a verified architectural Blueprint with locked milestones.',
      deliverables: [
        'Commercial Scope Document & Functional Specifications',
        'User Journey Mapping & Information Architecture',
        'Milestone Gantt Timeline & SLA Commitments',
        'Cloud Infrastructure & Data Privacy Blueprint'
      ],
      technologies: ['Architecture Schemas', 'Notion Specs', 'Risk Auditing', 'Turnkey Roadmap'],
      kpiBadge: '100% Scope Bound',
      floatingChips: [
        { label: 'SLA Guarantee: 99.9%', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' },
        { label: 'Discovery Sprint // W-1', icon: Activity, color: 'text-amber-300 border-amber-500/30 bg-amber-950/40' }
      ]
    },
    {
      id: 'design',
      stepNumber: '02',
      title: 'UI/UX Architecture & Bespoke Design Systems',
      subtitle: 'Wireframes to Polished High-Fidelity Components',
      icon: Palette,
      duration: 'Week 2',
      tagline: 'Custom Figma design systems, tokens, and micro-motion',
      description: 'We translate your brand identity into an undeniable digital aesthetic. Starting from raw architectural wireframes, we develop custom component libraries, curated typography scales, accessible color systems, and interactive prototypes.',
      deliverables: [
        'Interactive Figma High-Fidelity Clickable Prototypes',
        'Bespoke Design Token Library (Colors, Fonts, Spacing)',
        'WCAG AAA Accessible Contrast-Checked Atoms',
        'Micro-Interactions & Fluid Motion Choreography Specs'
      ],
      technologies: ['Figma Design System', 'Tailwind Tokens', 'Motion Curves', 'Design Atoms'],
      kpiBadge: '48+ Custom Atoms',
      floatingChips: [
        { label: 'Figma Token Sync', icon: Palette, color: 'text-purple-300 border-purple-500/30 bg-purple-950/40' },
        { label: 'WCAG AAA Accessible', icon: CheckCircle2, color: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/40' }
      ]
    },
    {
      id: 'frontend',
      stepNumber: '03',
      title: 'Frontend Engineering & Reactive Motion',
      subtitle: 'React 19, Modern CSS & 3D Interactive WebGL',
      icon: Code2,
      duration: 'Week 3',
      tagline: 'Clean modular React code with sub-second responsiveness',
      description: 'The interface comes alive. We engineer ultra-responsive frontend components using modern React 19, Vanilla CSS, and lightweight 3D graphics. Every interaction is hardware-accelerated for instantaneous transitions and zero layout shifts.',
      deliverables: [
        'React 19 Component Architecture with Strict Modularity',
        '3D WebGL / Canvas Micro-Visuals & Dynamic Lighting',
        'Fluid Responsive Layouts from 4K Down to Mobile',
        'Optimized Client-Side State Management'
      ],
      technologies: ['React 19', 'Three.js / WebGL', 'Tailwind CSS', 'Framer Motion'],
      kpiBadge: '< 180KB Gzip Footprint',
      floatingChips: [
        { label: 'React 19 Compiler', icon: Zap, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40' },
        { label: '60 FPS Motion Flow', icon: Sliders, color: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/40' }
      ]
    },
    {
      id: 'backend',
      stepNumber: '04',
      title: 'Backend Architecture, Databases & Secure APIs',
      subtitle: 'Scalable Microservices, Auth & High-Speed Data Pipelines',
      icon: Database,
      duration: 'Week 4',
      tagline: 'Relational schemas, encrypted JWT, and sub-50ms REST APIs',
      description: 'A website is only as resilient as the systems backing it. We build scalable serverless REST endpoints, normalized PostgreSQL database schemas, secure token-based authentication, and automated transactional webhooks.',
      deliverables: [
        'Relational Database Schemas (PostgreSQL / MySQL)',
        'Sub-50ms REST / GraphQL Endpoint Pipelines',
        'Encrypted JWT / OAuth2 Security Authentication',
        'Automated Transactional Emails & Payment Webhooks'
      ],
      technologies: ['Node.js / Spring', 'PostgreSQL', 'JWT Security', 'RESTful API'],
      kpiBadge: '< 38ms TTFB Latency',
      floatingChips: [
        { label: 'Postgres Pool Active', icon: Database, color: 'text-blue-300 border-blue-500/30 bg-blue-950/40' },
        { label: 'TLS 1.3 Encrypted', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' }
      ]
    },
    {
      id: 'testing',
      stepNumber: '05',
      title: 'QA Auditing, Cross-Device Testing & Speed Optimization',
      subtitle: 'Lighthouse 100, Security Scans & Zero-Flake QA',
      icon: MonitorCheck,
      duration: 'Week 5',
      tagline: 'Multi-device responsive audits & 100/100 Lighthouse benchmark',
      description: 'Before any public release, your platform undergoes exhaustive cross-device testing. We audit across Safari, Chrome, iOS, and Android, optimize Core Web Vitals, sanitize all input vectors, and run end-to-end integration test suites.',
      deliverables: [
        'Full Google Lighthouse 99+ Performance Tuning',
        'Cross-Browser & Multi-Device Responsive Testing',
        'Automated End-to-End User Journey Tests',
        'OWASP Web Security Hardening & Asset Minification'
      ],
      technologies: ['Lighthouse CI', 'Playwright / Vitest', 'Core Web Vitals', 'Asset Compression'],
      kpiBadge: '100 / 100 Speed Score',
      floatingChips: [
        { label: 'Lighthouse: 100/100', icon: Zap, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' },
        { label: '18/18 Tests Passed', icon: CheckCircle2, color: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/40' }
      ]
    },
    {
      id: 'delivery',
      stepNumber: '06',
      title: 'Global CDN Deployment & Turnkey Delivery',
      subtitle: 'Production Launch, DNS Setup & Complete Code Ownership',
      icon: Rocket,
      duration: 'Week 6',
      tagline: 'Edge CDN rollout with 100% full source code ownership',
      description: 'Your digital flagship is deployed to worldwide edge CDNs with automated CI/CD pipelines, SSL encryption, and custom domains. We hand over the complete git repository, ownership credentials, and documentation—with zero vendor lock-in.',
      deliverables: [
        'Global Edge CDN Deployment with Automated CI/CD',
        'Custom Domain DNS Configuration & SSL Encryption',
        '100% Complete Source Code Ownership Transfer',
        'Deployment Documentation & 30-Day Launch Support'
      ],
      technologies: ['Vercel / Cloudflare Edge', 'Git Repository', 'Full IP Rights', 'Zero Lock-in'],
      kpiBadge: '100% Ownership Handover',
      floatingChips: [
        { label: 'Edge CDN Live', icon: Globe, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40' },
        { label: 'Git Repo Transferred', icon: FileCheck, color: 'text-amber-300 border-amber-500/30 bg-amber-950/40' }
      ]
    }
  ];

  /* =========================================================================
     COMPUTE EXACT SLOT COORDINATES & SCROLL-LINKED VERTICAL MOVEMENT
     ========================================================================= */
  const getSlotCoordinates = useCallback(() => {
    if (!journeyContainerRef.current) return [];
    const containerRect = journeyContainerRef.current.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;

    return stages.map((_, i) => {
      const slotEl = laptopSlotRefs.current[i];
      if (!slotEl) {
        // Fallback default coordinates
        return {
          x: i === 5 ? 0 : i % 2 === 0 ? -310 : 310,
          y: i * 680 + 260
        };
      }
      const slotRect = slotEl.getBoundingClientRect();
      // Center of slot element relative to container center
      const x = (slotRect.left + slotRect.width / 2) - containerCenterX;
      // Center of slot element relative to container top
      const y = (slotRect.top + slotRect.height / 2) - containerRect.top;
      return { x, y };
    });
  }, [stages.length]);

  const updateLaptopPositionOnScroll = useCallback(() => {
    if (!journeyContainerRef.current) return;

    const containerRect = journeyContainerRef.current.getBoundingClientRect();
    const windowScrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Viewport focal line inside container coordinates
    const focalPointInContainer = windowScrollY + windowHeight * 0.48 - (containerRect.top + windowScrollY);

    // Measure exact slot positions
    const slots = getSlotCoordinates();
    if (!slots || slots.length < 6) return;

    // Compute progress of the entire container (0 to 1)
    const totalScrollable = Math.max(1, containerRect.height - windowHeight);
    const containerScrollOffset = Math.max(0, -containerRect.top);
    const overallProgress = Math.min(1, Math.max(0, containerScrollOffset / totalScrollable));
    setJourneyProgress(overallProgress);

    let newActiveIndex = 0;
    let targetX = slots[0].x;
    let targetY = slots[0].y;
    let targetRotY = -8;
    let targetRotX = 3;
    let targetRotZ = 0;
    let targetScale = 1.0;

    if (focalPointInContainer <= slots[0].y) {
      // Parked at Stage 0 slot
      newActiveIndex = 0;
      targetX = slots[0].x;
      targetY = slots[0].y;
      targetRotY = -8;
      targetScale = 1.0;
    } else if (focalPointInContainer >= slots[5].y) {
      // Parked at Stage 5 slot (Center)
      newActiveIndex = 5;
      targetX = slots[5].x;
      targetY = slots[5].y;
      targetRotY = 0;
      targetScale = 1.05;
    } else {
      // Interpolating between Stage i and Stage i+1
      for (let i = 0; i < 5; i++) {
        const startSlot = slots[i];
        const endSlot = slots[i + 1];

        if (focalPointInContainer >= startSlot.y && focalPointInContainer <= endSlot.y) {
          const rawFraction = (focalPointInContainer - startSlot.y) / (endSlot.y - startSlot.y);
          const clampedFraction = Math.max(0, Math.min(1, rawFraction));
          
          // Smoothstep easing for organic deceleration near milestones
          const smoothFraction = clampedFraction * clampedFraction * (3 - 2 * clampedFraction);

          newActiveIndex = clampedFraction >= 0.5 ? i + 1 : i;

          // Continuous vertical travel between slots
          targetY = startSlot.y + (endSlot.y - startSlot.y) * smoothFraction;

          // Continuous lateral glide between slots
          targetX = startSlot.x + (endSlot.x - startSlot.x) * smoothFraction;

          // Base rotation Y from start slot to end slot
          const startRotY = i % 2 === 0 ? -8 : 8;
          const endRotY = (i + 1) === 5 ? 0 : (i + 1) % 2 === 0 ? -8 : 8;
          const baseRotY = startRotY + (endRotY - startRotY) * smoothFraction;

          // Banking turn during lateral crossover
          const bankingDirection = endSlot.x > startSlot.x ? 1 : -1;
          const bankingSwing = Math.sin(clampedFraction * Math.PI) * 12 * bankingDirection;
          targetRotY = baseRotY + bankingSwing;

          // Subtle pitch down while swooping downward
          const travelPitch = Math.sin(clampedFraction * Math.PI) * 4;
          targetRotX = 3 + travelPitch;

          // Roll angle during lateral swing
          targetRotZ = Math.sin(clampedFraction * Math.PI) * 2.2 * bankingDirection;

          // Scale
          targetScale = 1.0 + (i === 4 ? 0.05 * smoothFraction : 0);
          break;
        }
      }
    }

    setActiveStage(newActiveIndex);

    targetMotionRef.current = {
      x: targetX,
      y: targetY,
      rotY: targetRotY,
      rotX: targetRotX,
      rotZ: targetRotZ,
      scale: targetScale
    };
  }, [getSlotCoordinates]);

  // Smooth requestAnimationFrame physics loop for buttery-smooth mass & momentum
  useEffect(() => {
    let isRunning = true;

    const animatePhysics = () => {
      if (!isRunning) return;

      const current = currentMotionRef.current;
      const target = targetMotionRef.current;

      const posLerp = 0.16;
      const rotLerp = 0.14;

      current.x += (target.x - current.x) * posLerp;
      current.y += (target.y - current.y) * posLerp;
      current.rotY += (target.rotY - current.rotY) * rotLerp;
      current.rotX += (target.rotX - current.rotX) * rotLerp;
      current.rotZ += (target.rotZ - current.rotZ) * rotLerp;
      current.scale += (target.scale - current.scale) * posLerp;

      setLaptopState({
        x: current.x,
        y: current.y,
        rotY: current.rotY,
        rotX: current.rotX,
        rotZ: current.rotZ,
        scale: current.scale
      });

      animFrameRef.current = requestAnimationFrame(animatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(animatePhysics);

    return () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Window scroll & resize listeners
  useEffect(() => {
    const onScroll = () => {
      updateLaptopPositionOnScroll();
    };

    const onResize = () => {
      updateLaptopPositionOnScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Initial position calculation after layout renders
    const timeout = setTimeout(updateLaptopPositionOnScroll, 120);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearTimeout(timeout);
    };
  }, [updateLaptopPositionOnScroll]);

  // Confetti trigger at final delivery
  useEffect(() => {
    if (activeStage === 5 && !hasTriggeredConfetti) {
      setHasTriggeredConfetti(true);
      confetti({
        particleCount: 95,
        spread: 85,
        origin: { y: 0.62 },
        colors: isLuxury ? ['#9E7B4F', '#D2B477', '#FAF8F5'] : isFuturistic ? ['#00F0FF', '#8B5CF6', '#38BDF8'] : ['#B89458', '#3B82F6', '#10B981']
      });
    }
  }, [activeStage, hasTriggeredConfetti, isLuxury, isFuturistic]);

  // Mouse parallax interaction
  const handleContainerMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 16;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    setMouseParallax({ x, y });
  };

  const scrollToStage = (index) => {
    setActiveStage(index);
    if (stageSectionRefs.current[index]) {
      stageSectionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  /* =========================================================================
     THEME ACCENT STYLES
     ========================================================================= */
  const getThemeStyles = () => {
    if (isLuxury) {
      return {
        badge: 'bg-[#FFFFFF] border-[#9E7B4F]/40 text-[#9E7B4F] font-serif',
        activePill: 'bg-[#9E7B4F] text-[#FAF8F5] shadow-md',
        inactivePill: 'bg-[#FAF8F5] text-[#655E56] border-[#9E7B4F]/25 hover:border-[#9E7B4F]',
        circuitLine: 'from-[#9E7B4F]/10 via-[#9E7B4F]/40 to-[#9E7B4F]/10',
        cardBg: 'bg-[#FFFFFF] border-[#9E7B4F]/30 shadow-lg',
        activeCardBg: 'border-[#9E7B4F] ring-1 ring-[#9E7B4F]/40 shadow-2xl',
        accentText: 'text-[#9E7B4F]',
        tufChassis: 'border-[#4A433A] bg-[#221F1B]',
        tufArmor: 'bg-[#2E2923] border-[#9E7B4F]/40',
        tufDeck: 'bg-[#181613]',
        tufWasdGlow: 'shadow-[0_0_12px_rgba(210,180,119,0.85)] text-[#FAF8F5] bg-[#D2B477]/60',
        screenBezel: 'bg-[#151311]',
        glow: 'rgba(158,123,79,0.25)',
        slotPlaceholder: 'border-dashed border-[#9E7B4F]/20 bg-[#9E7B4F]/5'
      };
    }
    if (isFuturistic) {
      return {
        badge: 'bg-[#091328] border-[#00F0FF]/50 text-[#00F0FF] font-mono',
        activePill: 'bg-[#00F0FF] text-[#02040A] shadow-[0_0_15px_rgba(0,240,255,0.5)] font-bold',
        inactivePill: 'bg-[#060D1E] text-[#7DD3FC] border-[#00F0FF]/30 hover:border-[#00F0FF]',
        circuitLine: 'from-[#00F0FF]/15 via-[#00F0FF]/50 to-[#8B5CF6]/40',
        cardBg: 'bg-[#060D1E]/95 border-[#00F0FF]/35 shadow-[0_0_20px_rgba(0,240,255,0.12)]',
        activeCardBg: 'border-[#00F0FF] shadow-[0_0_35px_rgba(0,240,255,0.3)] ring-1 ring-[#00F0FF]/50',
        accentText: 'text-[#00F0FF]',
        tufChassis: 'border-[#00F0FF]/40 bg-[#091328]',
        tufArmor: 'bg-[#0B1733] border-[#00F0FF]/50',
        tufDeck: 'bg-[#050C1B]',
        tufWasdGlow: 'shadow-[0_0_14px_rgba(0,240,255,0.95)] text-[#02040A] bg-[#00F0FF]/85',
        screenBezel: 'bg-[#02050E]',
        glow: 'rgba(0,240,255,0.35)',
        slotPlaceholder: 'border-dashed border-[#00F0FF]/20 bg-[#00F0FF]/5'
      };
    }
    // Original UI (Mecha Gunmetal ASUS TUF Gaming A15 aesthetic)
    return {
      badge: 'bg-slate-900 border-[#D2B477]/40 text-[#D2B477] font-mono',
      activePill: 'bg-gradient-to-r from-[#D2B477] to-[#B89458] text-[#050505] font-bold shadow-md shadow-[#D2B477]/20',
      inactivePill: 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-[#D2B477]/50',
      circuitLine: 'from-[#D2B477]/15 via-[#D2B477]/45 to-cyan-500/30',
      cardBg: 'bg-[#0B0F19]/90 border-slate-800/90 shadow-xl',
      activeCardBg: 'border-[#D2B477] ring-1 ring-[#D2B477]/40 shadow-2xl',
      accentText: 'text-[#D2B477]',
      tufChassis: 'border-slate-700/80 bg-[#1A1E26]',
      tufArmor: 'bg-[#252B37] border-slate-600/60',
      tufDeck: 'bg-[#12151D]',
      tufWasdGlow: 'shadow-[0_0_12px_rgba(251,191,36,0.9)] text-[#0B0F19] bg-amber-400/90 font-black',
      screenBezel: 'bg-[#0A0D14]',
      glow: 'rgba(210,180,119,0.25)',
      slotPlaceholder: 'border-dashed border-white/10 bg-white/2'
    };
  };

  const themeStyle = getThemeStyles();

  /* =========================================================================
     SYNCHRONIZED SCREEN CONTENT FOR ALL 6 STAGES
     ========================================================================= */
  const renderScreenContent = (stageIdx = activeStage) => {
    switch (stageIdx) {
      // 1. STAGE 1 — PROJECT DISCUSSION
      case 0:
        return (
          <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 text-left font-mono select-none overflow-hidden animate-fadeIn bg-[#070B14]">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-emerald-400">STAGE 01 // DISCOVERY BRIEF</span>
              </div>
              <span className="text-slate-400 text-[8px] px-1 py-0.2 rounded bg-white/5 border border-white/10">NX-BRIEF-2026</span>
            </div>

            <div className="my-auto space-y-1.5">
              {/* Project Brief Verification */}
              <div className="p-2 rounded-lg bg-black/60 border border-emerald-500/30 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-bold text-white">
                  <span>Commission: Enterprise Web Platform</span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Verified</span>
                </div>
                <div className="space-y-0.5 text-[8px] text-slate-300">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>Commercial Goals: B2B Conversion &amp; Flagship Showcase</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>Performance Target: Sub-0.5s Core Web Vitals Globally</span>
                  </div>
                </div>
              </div>

              {/* Discussion & Requirements Feed */}
              <div className="p-1.5 rounded-lg bg-slate-900/80 border border-white/10 space-y-0.5 text-[8px]">
                <div className="flex items-center justify-between text-[7px] text-slate-400 pb-0.5 border-b border-white/5 font-bold">
                  <span>COLLABORATIVE DISCUSSION</span>
                  <span className="text-cyan-400">SLACK / FIGMA SYNC</span>
                </div>
                <div className="flex items-start gap-1 text-slate-300">
                  <span className="text-cyan-400 font-bold shrink-0">[Client]:</span>
                  <span className="truncate">"Need reactive 3D showcase with zero layout shifts."</span>
                </div>
                <div className="flex items-start gap-1 text-slate-300">
                  <span className="text-emerald-400 font-bold shrink-0">[Lead]:</span>
                  <span className="truncate">"Approved. React 19 architecture + PostgreSQL API."</span>
                </div>
              </div>

              {/* Milestone Timeline */}
              <div className="p-1.5 rounded-lg bg-black/40 border border-white/5 space-y-0.5 text-[8px]">
                <div className="flex items-center justify-between text-[7px] text-slate-400">
                  <span>DISCOVERY VELOCITY</span>
                  <span className="text-amber-300 font-bold">WEEK 1 OF 6</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-amber-300 rounded-full w-1/6" />
                </div>
              </div>
            </div>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <ShieldCheck className="w-2.5 h-2.5" /> SLA LOCKED: 99.9%
              </span>
              <span className="text-cyan-400 font-semibold">100% SPEC COMPLIANCE</span>
            </div>
          </div>
        );

      // 2. STAGE 2 — UI/UX DESIGN
      case 1:
        return (
          <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 text-left font-sans select-none overflow-hidden animate-fadeIn bg-[#070B14]">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-1.5 font-mono text-[9px]">
                <Palette className="w-2.5 h-2.5 text-purple-400" />
                <span className="font-bold text-purple-300">STAGE 02 // FIGMA SYSTEM</span>
              </div>
              <button 
                onClick={() => setIsWireframeMode(!isWireframeMode)}
                className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 transition-colors cursor-pointer"
              >
                {isWireframeMode ? 'View Polished UI' : 'View Wireframe'}
              </button>
            </div>

            <div className="my-auto space-y-1.5">
              {isWireframeMode ? (
                <div className="p-2 rounded-lg border-2 border-dashed border-slate-600 bg-slate-900/80 space-y-1 font-mono text-[8px]">
                  <div className="flex justify-between items-center text-slate-400">
                    <span className="text-slate-500">WIREFRAME SCHEMATIC</span>
                    <span className="text-amber-400">FIGMA TOKENS</span>
                  </div>
                  <div className="w-3/4 h-3 bg-slate-700/80 rounded" />
                  <div className="w-1/2 h-2 bg-slate-700/60 rounded" />
                  <div className="grid grid-cols-3 gap-1 pt-0.5">
                    <div className="h-6 border border-dashed border-slate-700 rounded bg-slate-800/40 flex items-center justify-center text-[6px] text-slate-500">ATOM 01</div>
                    <div className="h-6 border border-dashed border-slate-700 rounded bg-slate-800/40 flex items-center justify-center text-[6px] text-slate-500">ATOM 02</div>
                    <div className="h-6 border border-dashed border-slate-700 rounded bg-slate-800/40 flex items-center justify-center text-[6px] text-slate-500">ATOM 03</div>
                  </div>
                </div>
              ) : (
                <div className="p-2 rounded-lg border border-white/15 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 space-y-1 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-400 to-cyan-400" />
                      <span className="text-[10px] font-bold text-white tracking-wide">NexusCraft Flagship</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded-full text-[7px] bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold">
                      Prestige
                    </span>
                  </div>
                  <h4 className="text-[10px] font-extrabold text-white leading-tight">
                    Architecting High-Prestige Digital Experiences.
                  </h4>
                  <div className="grid grid-cols-3 gap-1 pt-0.5 font-mono text-[7px]">
                    <div className="p-0.5 rounded bg-black/50 border border-white/10 text-center text-cyan-300">3D WebGL</div>
                    <div className="p-0.5 rounded bg-black/50 border border-white/10 text-center text-amber-300">Sub-0.5s</div>
                    <div className="p-0.5 rounded bg-black/50 border border-white/10 text-center text-emerald-300">WCAG AAA</div>
                  </div>
                </div>
              )}

              {/* Color Swatches & Typography Tokens */}
              <div className="flex items-center justify-between px-1 text-[8px] font-mono text-slate-400">
                <span>COLOR PALETTES:</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D2B477] border border-white/20" title="#D2B477 Gold" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] border border-white/20" title="#00F0FF Cyan" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] border border-white/20" title="#8B5CF6 Purple" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-white/20" title="#10B981 Emerald" />
                </div>
              </div>
            </div>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-slate-400">
              <span>SYSTEM TOKENS: FROZEN</span>
              <span className="text-purple-400 font-bold">READY FOR REACT 19</span>
            </div>
          </div>
        );

      // 3. STAGE 3 — FRONTEND DEVELOPMENT
      case 2:
        return (
          <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 text-left font-mono select-none overflow-hidden animate-fadeIn bg-[#070B14]">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px]">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-2.5 h-2.5 text-cyan-400" />
                <span className="font-bold text-cyan-300">STAGE 03 // REACT 19 JSX</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-1.5 py-0.5 rounded text-[7px] cursor-pointer ${activeTab === 'code' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-800 text-slate-400'}`}
                >
                  Code
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-1.5 py-0.5 rounded text-[7px] cursor-pointer ${activeTab === 'preview' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-800 text-slate-400'}`}
                >
                  Preview
                </button>
              </div>
            </div>

            <div className="my-auto space-y-1.5">
              {activeTab === 'code' ? (
                <div className="rounded-lg bg-[#030712] border border-cyan-500/30 p-1.5 text-[8px] leading-relaxed shadow-inner">
                  <div className="text-slate-500 text-[7px] pb-0.5 border-b border-white/5 flex items-center justify-between">
                    <span>ShowcaseComponent.jsx</span>
                    <span className="text-emerald-400 font-bold">● COMPILED</span>
                  </div>
                  <p><span className="text-purple-400">export const</span> <span className="text-amber-300">Showcase</span> = () =&gt; &#123;</p>
                  <p className="pl-2"><span className="text-purple-400">const</span> [count, setCount] = <span className="text-cyan-400">useState</span>({counterValue});</p>
                  <p className="pl-2"><span className="text-purple-400">return</span> (</p>
                  <p className="pl-4 text-emerald-300">&lt;<span className="text-cyan-400">button</span> <span className="text-purple-300">onClick</span>=&#123;() =&gt; setCount(c + 1)&#125;&gt;</p>
                  <p className="pl-6 text-slate-200">Interactions: &#123;count&#125;</p>
                  <p className="pl-4 text-emerald-300">&lt;/<span className="text-cyan-400">button</span>&gt;</p>
                  <p className="pl-2">);</p>
                  <p>&#125;;</p>
                </div>
              ) : (
                <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/40 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white font-bold font-sans">Interactive Live Component</span>
                    <span className="text-[8px] px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono">60 FPS</span>
                  </div>
                  <div className="p-2 rounded bg-black/60 border border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-slate-200 font-sans">Live Interaction Counter:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-cyan-400 text-xs">{counterValue}</span>
                      <button 
                        onClick={() => setCounterValue(c => c + 1)}
                        className="px-2 py-0.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-[9px] cursor-pointer transition-colors"
                      >
                        + Test
                      </button>
                    </div>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-4/5 animate-pulse" />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-[8px] text-slate-400 font-mono px-1">
                <span>VITE HMR: <span className="text-emerald-400 font-bold">11ms</span></span>
                <span>BUNDLE: <span className="text-cyan-400 font-bold">176KB GZIP</span></span>
              </div>
            </div>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] text-slate-400 font-mono">
              <span>REACT 19 COMPILER: PASS</span>
              <span className="text-cyan-400 font-bold">ZERO RUNTIME SHIFT</span>
            </div>
          </div>
        );

      // 4. STAGE 4 — BACKEND DEVELOPMENT
      case 3:
        return (
          <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 text-left font-mono select-none overflow-hidden animate-fadeIn bg-[#070B14]">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px]">
              <div className="flex items-center gap-1.5">
                <Database className="w-2.5 h-2.5 text-blue-400" />
                <span className="font-bold text-blue-300">STAGE 04 // DATA PIPELINE &amp; APIS</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-bold px-1 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/30">
                POSTGRES ACTIVE
              </span>
            </div>

            <div className="my-auto space-y-1.5">
              {/* Relational Schema Models */}
              <div className="grid grid-cols-2 gap-1 text-[8px]">
                <div className="p-1.5 rounded-lg bg-slate-900 border border-blue-500/30">
                  <div className="text-blue-300 font-bold flex justify-between">
                    <span>users_auth</span>
                    <span className="text-[6px] text-slate-400">UUID PK</span>
                  </div>
                  <div className="text-slate-400 text-[7px] mt-0.5 space-y-0.5">
                    <div>id: uuid</div>
                    <div>email: varchar(255)</div>
                    <div>jwt: bytea</div>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-slate-900 border border-blue-500/30">
                  <div className="text-blue-300 font-bold flex justify-between">
                    <span>orders_ledger</span>
                    <span className="text-[6px] text-slate-400">FK INDEX</span>
                  </div>
                  <div className="text-slate-400 text-[7px] mt-0.5 space-y-0.5">
                    <div>order_id: varchar</div>
                    <div>amount: numeric</div>
                    <div>status: active</div>
                  </div>
                </div>
              </div>

              {/* Streaming API Telemetry */}
              <div className="p-1.5 rounded-lg bg-black/60 border border-white/10 space-y-0.5 text-[8px]">
                <div className="flex justify-between text-slate-400 text-[7px] pb-0.5 border-b border-white/5">
                  <span>LIVE ENDPOINTS TELEMETRY</span>
                  <span className="text-emerald-400">TLS 1.3</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>POST /api/v1/auth/session</span>
                  <span className="text-emerald-400 font-bold">200 OK (28ms)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>GET /api/v1/catalog/schema</span>
                  <span className="text-emerald-400 font-bold">200 OK (19ms)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>POST /api/v1/orders/checkout</span>
                  <span className="text-emerald-400 font-bold">200 OK (38ms)</span>
                </div>
              </div>
            </div>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] text-slate-400 font-mono">
              <span>DATABASE POOL: HEALTHY</span>
              <span className="text-blue-400 font-bold">AVG TTFB: 28ms</span>
            </div>
          </div>
        );

      // 5. STAGE 5 — TESTING & OPTIMIZATION
      case 4:
        return (
          <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 text-left font-mono select-none overflow-hidden animate-fadeIn bg-[#070B14]">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px]">
              <div className="flex items-center gap-1.5">
                <MonitorCheck className="w-2.5 h-2.5 text-emerald-400" />
                <span className="font-bold text-emerald-400">STAGE 05 // LIGHTHOUSE 100/100</span>
              </div>
              <div className="flex gap-1">
                {['desktop', 'tablet', 'mobile'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setActiveDeviceView(d)}
                    className={`px-1.5 py-0.5 rounded text-[7px] uppercase cursor-pointer ${
                      activeDeviceView === d ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-auto space-y-1.5">
              {/* Google Lighthouse 100/100 Gauges */}
              <div className="grid grid-cols-4 gap-1 text-center">
                <div className="p-1 rounded-lg bg-black/60 border border-emerald-500/40">
                  <div className="text-sm font-black text-emerald-400">100</div>
                  <div className="text-[6px] text-slate-300 uppercase">Speed</div>
                </div>
                <div className="p-1 rounded-lg bg-black/60 border border-emerald-500/40">
                  <div className="text-sm font-black text-emerald-400">100</div>
                  <div className="text-[6px] text-slate-300 uppercase">A11y</div>
                </div>
                <div className="p-1 rounded-lg bg-black/60 border border-emerald-500/40">
                  <div className="text-sm font-black text-emerald-400">100</div>
                  <div className="text-[6px] text-slate-300 uppercase">Practices</div>
                </div>
                <div className="p-1 rounded-lg bg-black/60 border border-emerald-500/40">
                  <div className="text-sm font-black text-emerald-400">100</div>
                  <div className="text-[6px] text-slate-300 uppercase">SEO</div>
                </div>
              </div>

              {/* Automated QA Test Suite Results */}
              <div className="p-1.5 rounded-lg bg-slate-900 border border-white/10 space-y-0.5 text-[8px]">
                <div className="flex justify-between font-bold text-white">
                  <span>Automated Cross-Device QA</span>
                  <span className="text-emerald-400">18/18 Suites Passed</span>
                </div>
                <div className="space-y-0.5 text-[7px] text-slate-300">
                  <div className="flex justify-between">
                    <span>✓ Safari iOS Touch &amp; Gesture Testing</span>
                    <span className="text-emerald-400">PASS (0.01s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✓ Chrome Desktop 4K Layout &amp; WebGL</span>
                    <span className="text-emerald-400">PASS (0.03s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✓ CSRF Tokens &amp; Security Validation</span>
                    <span className="text-emerald-400">PASS (0.02s)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] text-slate-400 font-mono">
              <span>VIEWPORT: {activeDeviceView.toUpperCase()} AUDITED</span>
              <span className="text-emerald-400 font-bold">ZERO DEFECT RELEASE</span>
            </div>
          </div>
        );

      // 6. STAGE 6 — FINAL TURNKEY DELIVERY
      case 5:
      default:
        return (
          <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 text-left font-sans select-none overflow-hidden animate-fadeIn bg-[#070B14]">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 font-mono text-[9px]">
              <div className="flex items-center gap-1.5">
                <Rocket className="w-2.5 h-2.5 text-amber-400" />
                <span className="font-bold text-amber-300">STAGE 06 // PRODUCTION DEPLOYMENT</span>
              </div>
              <span className="text-[8px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100% PRODUCTION LIVE
              </span>
            </div>

            <div className="my-auto space-y-1 text-center">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#1C1917] via-slate-900 to-black border border-amber-400/50 shadow-xl space-y-1">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[7px] font-mono uppercase">
                  <Sparkles className="w-2 h-2 text-amber-300 animate-spin" />
                  <span>Turnkey Commission Completed</span>
                </div>
                <h3 className="text-xs font-black text-white font-serif leading-tight">
                  Your Flagship Platform Is Live.
                </h3>
                <p className="text-[8px] text-slate-300 leading-relaxed max-w-xs mx-auto">
                  100% full source code ownership transferred. Deployed to worldwide edge CDN with automated CI/CD and zero vendor lock-in.
                </p>

                <div className="pt-0.5 flex flex-wrap justify-center gap-1 font-mono text-[7px]">
                  <span className="px-1 py-0.5 rounded bg-black/60 border border-white/15 text-slate-300">
                    Git Repo Transferred
                  </span>
                  <span className="px-1 py-0.5 rounded bg-black/60 border border-white/15 text-emerald-400 font-bold">
                    SSL Active
                  </span>
                  <span className="px-1 py-0.5 rounded bg-black/60 border border-white/15 text-cyan-300">
                    Edge CDN
                  </span>
                </div>
              </div>

              {/* Multi-Region CDN Nodes */}
              <div className="grid grid-cols-3 gap-1 font-mono text-[7px] text-slate-400">
                <div className="p-1 rounded bg-black/50 border border-white/10">US-East: <span className="text-emerald-400 font-bold">11ms</span></div>
                <div className="p-1 rounded bg-black/50 border border-white/10">EU-Central: <span className="text-emerald-400 font-bold">16ms</span></div>
                <div className="p-1 rounded bg-black/50 border border-white/10">AP-South: <span className="text-emerald-400 font-bold">9ms</span></div>
              </div>
            </div>

            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-slate-400">
              <span className="text-slate-300 font-semibold">OWNERSHIP: 100% CLIENT</span>
              <button
                onClick={() => {
                  confetti({
                    particleCount: 110,
                    spread: 90,
                    origin: { y: 0.6 }
                  });
                }}
                className="px-2 py-0.5 rounded bg-amber-400 hover:bg-amber-300 text-black font-bold text-[8px] cursor-pointer transition-colors"
              >
                Trigger Confetti 🎉
              </button>
            </div>
          </div>
        );
    }
  };

  /* =========================================================================
     AUTHENTIC ASUS TUF GAMING A15 3D MODEL COMPONENT
     ========================================================================= */
  const renderAsusTufLaptopModel = (staticStageIdx = activeStage) => {
    return (
      <div 
        className="relative w-full max-w-[470px] mx-auto select-none"
        style={{
          perspective: '1400px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* ASUS TUF GAMING A15 LID (15.6" NanoEdge Anti-Glare IPS Display) */}
        <div 
          className={`relative rounded-t-xl border-2 ${themeStyle.tufChassis} shadow-2xl overflow-hidden bg-[#10131A]`}
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: `0 20px 50px -10px ${themeStyle.glow}, 0 0 25px rgba(0,0,0,0.8)`
          }}
        >
          {/* Top Bezel: HD Webcam, Privacy LED, Stereo Microphones */}
          <div className={`px-3 py-1.5 ${themeStyle.screenBezel} flex items-center justify-between border-b border-white/10 text-slate-400 text-[8px]`}>
            {/* TUF Mecha Corner Plate */}
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-xs bg-[#242A36] border border-slate-600/60 flex items-center justify-center">
                <span className="w-0.5 h-0.5 rounded-full bg-slate-500" />
              </div>
              <span className="font-mono text-[7px] tracking-wider text-slate-400 uppercase">ASUS TUF A15</span>
            </div>

            {/* Centered HD Webcam + Privacy LED + Stereo Mics */}
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-slate-700" title="Left Mic" />
              <div className="flex items-center gap-1 px-1 py-0.2 rounded-full bg-black/80 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A202C] border border-cyan-400/60" />
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-700" title="Right Mic" />
            </div>

            {/* Display Refresh Rate Badge */}
            <div className="flex items-center gap-1 font-mono text-[7px] text-slate-300">
              <span className="px-1 py-0.2 rounded bg-black/60 border border-white/10 text-cyan-300 font-bold">144Hz IPS</span>
            </div>
          </div>

          {/* 15.6" NanoEdge Display Viewport (Aspect 16:10) */}
          <div className="relative aspect-[16/10] bg-[#050811] overflow-hidden text-slate-100">
            {/* Specular glass reflection sheen */}
            <div 
              className="absolute inset-0 pointer-events-none z-20 opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.02) 45%, transparent 65%)'
              }}
            />

            {/* Synchronized Screen Content */}
            <div className="relative w-full h-full z-10">
              {renderScreenContent(staticStageIdx)}
            </div>
          </div>

          {/* Bottom Bezel with Embossed "TUF GAMING" Metallic Badge */}
          <div className={`py-1 px-4 ${themeStyle.screenBezel} border-t border-white/10 flex items-center justify-center relative`}>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 5L7 12L2 19H5L10 12L5 5H2ZM12 5V19H14V5H12ZM19 5L14 12L19 19H22L17 12L22 5H19Z" />
              </svg>
              <span className="font-mono text-[8px] tracking-widest font-black text-slate-300 uppercase">
                TUF GAMING
              </span>
            </div>
          </div>
        </div>

        {/* SIGNATURE ASUS TUF "V-CUT" TRAPEZOID DISPLAY CUTOUT & DUAL HINGES */}
        <div className="relative -mt-1 flex items-center justify-between px-5 z-20">
          {/* Left Titanium Cylindrical Hinge */}
          <div className="w-10 h-2.5 rounded-t-xs bg-gradient-to-r from-slate-700 via-slate-500 to-slate-800 border-t border-x border-slate-400/40 shadow-sm flex items-center justify-center">
            <div className="w-5 h-0.5 bg-slate-900 rounded-full" />
          </div>

          {/* Iconic TUF Trapezoidal V-Cut Center Gap exposing Status LEDs & Exhaust */}
          <div 
            className="flex-1 mx-3 h-2.5 bg-black/90 border-t border-white/10 flex items-center justify-center gap-2 px-2 shadow-inner"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 94% 100%, 6% 100%)'
            }}
          >
            <div className="flex items-center gap-1.5 text-[6px] text-slate-400 font-mono">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" title="Power LED" />
              <span className="w-1 h-1 rounded-full bg-cyan-400" title="Battery LED" />
              <span className="w-1 h-1 rounded-full bg-amber-400 animate-ping" title="SSD Activity LED" />
              <span className="w-1 h-1 rounded-full bg-slate-500" title="WiFi LED" />
            </div>
          </div>

          {/* Right Titanium Cylindrical Hinge */}
          <div className="w-10 h-2.5 rounded-t-xs bg-gradient-to-r from-slate-700 via-slate-500 to-slate-800 border-t border-x border-slate-400/40 shadow-sm flex items-center justify-center">
            <div className="w-5 h-0.5 bg-slate-900 rounded-full" />
          </div>
        </div>

        {/* ASUS TUF GAMING A15 KEYBOARD DECK & LOWER BASE */}
        <div 
          style={{
            transform: 'perspective(1400px) rotateX(44deg) translateY(-8px) scale(0.98)',
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d'
          }}
          className={`relative rounded-b-xl border-2 ${themeStyle.tufChassis} ${themeStyle.tufDeck} p-2.5 shadow-2xl flex flex-col justify-between select-none`}
        >
          {/* Top Ventilation Panel with Honeycomb Exhaust & 4 Gaming Hotkeys */}
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
            {/* 4 Dedicated TUF Gaming Hotkeys */}
            <div className="flex items-center gap-1">
              <span className="px-1 py-0.2 rounded-xs bg-[#1F2430] border border-white/10 text-[7px] text-slate-300 font-mono">VOL-</span>
              <span className="px-1 py-0.2 rounded-xs bg-[#1F2430] border border-white/10 text-[7px] text-slate-300 font-mono">VOL+</span>
              <span className="px-1 py-0.2 rounded-xs bg-[#1F2430] border border-white/10 text-[7px] text-slate-300 font-mono">MIC</span>
              <span className="px-1 py-0.2 rounded-xs bg-[#2E3648] border border-amber-400/40 text-[7px] text-amber-300 font-mono font-bold">AURA</span>
            </div>

            {/* Honeycomb Air Intake Grille */}
            <div className="flex-1 mx-2 h-1.5 rounded bg-black/60 border border-white/5 flex items-center justify-center gap-0.5 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i} className="w-0.5 h-0.5 rounded-full bg-slate-800" />
              ))}
            </div>

            {/* Hexagonal TUF Power Button with LED */}
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-2.5 rounded-xs bg-[#262C3A] border border-amber-400/50 flex items-center justify-center shadow-xs">
                <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Desktop-Inspired Gaming Keyboard Deck with Highlighted Translucent WASD */}
          <div className="p-1.5 rounded-lg bg-black/70 border border-white/10 space-y-0.5">
            {/* Function Row */}
            <div className="flex justify-between gap-0.5">
              {['ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'DEL'].map((k, i) => (
                <span key={i} className="flex-1 h-2 rounded-xs bg-slate-800/80 border border-white/10 text-[5px] text-slate-400 flex items-center justify-center font-mono">
                  {k}
                </span>
              ))}
            </div>

            {/* Number Row */}
            <div className="flex justify-between gap-0.5">
              {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACK'].map((k, i) => (
                <span key={i} className="flex-1 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-300 flex items-center justify-center font-mono">
                  {k}
                </span>
              ))}
            </div>

            {/* QWERTY Row with HIGHLIGHTED TRANSLUCENT 'W' KEYCAP */}
            <div className="flex justify-between gap-0.5">
              {['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k, i) => {
                const isWASD = k === 'W';
                return (
                  <span 
                    key={i} 
                    className={`flex-1 h-2.5 rounded-xs border text-[6px] flex items-center justify-center font-mono font-bold transition-all ${
                      isWASD 
                        ? `${themeStyle.tufWasdGlow} border-white/80 scale-105 z-10` 
                        : 'bg-slate-800 border-white/10 text-slate-300'
                    }`}
                  >
                    {k}
                  </span>
                );
              })}
            </div>

            {/* ASDF Row with HIGHLIGHTED TRANSLUCENT 'A', 'S', 'D' KEYCAPS */}
            <div className="flex justify-between gap-0.5">
              {['CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'].map((k, i) => {
                const isWASD = k === 'A' || k === 'S' || k === 'D';
                return (
                  <span 
                    key={i} 
                    className={`flex-1 h-2.5 rounded-xs border text-[6px] flex items-center justify-center font-mono font-bold transition-all ${
                      isWASD 
                        ? `${themeStyle.tufWasdGlow} border-white/80 scale-105 z-10` 
                        : 'bg-slate-800 border-white/10 text-slate-300'
                    }`}
                  >
                    {k}
                  </span>
                );
              })}
            </div>

            {/* Bottom Row with Spacebar & Arrow Keys */}
            <div className="flex justify-between gap-0.5">
              <span className="w-6 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-400 flex items-center justify-center font-mono">SHIFT</span>
              <span className="w-4 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-400 flex items-center justify-center font-mono">CTRL</span>
              <span className="w-4 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-400 flex items-center justify-center font-mono">WIN</span>
              <span className="flex-1 h-2.5 rounded-xs bg-slate-800 border border-white/10 flex items-center justify-center font-mono text-[6px] text-slate-400">
                — TUF SPACEBAR —
              </span>
              <span className="w-4 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-400 flex items-center justify-center font-mono">ALT</span>
              <span className="w-4 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-400 flex items-center justify-center font-mono">◄</span>
              <span className="w-4 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-400 flex items-center justify-center font-mono">▼</span>
              <span className="w-4 h-2.5 rounded-xs bg-slate-800 border border-white/10 text-[6px] text-slate-400 flex items-center justify-center font-mono">►</span>
            </div>
          </div>

          {/* Oversized TUF Precision Trackpad with Laser-Etched Target Crosshair */}
          <div className="mt-2 mx-auto w-32 h-8 rounded-md bg-[#0F131A] border border-white/15 relative flex items-center justify-center shadow-inner">
            <div className="absolute top-1 right-1 w-2.5 h-2.5 opacity-60">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" className="w-full h-full text-slate-400">
                <circle cx="8" cy="8" r="6" strokeWidth="1" strokeDasharray="2 1" />
                <line x1="8" y1="0" x2="8" y2="16" strokeWidth="1" />
                <line x1="0" y1="8" x2="16" y2="8" strokeWidth="1" />
              </svg>
            </div>
            <div className="w-3 h-0.5 bg-white/20 rounded-full" />
          </div>

          {/* Left/Right Side I/O Ports & Copper Cooling Exhaust Fins */}
          <div className="flex items-center justify-between pt-1 px-1 text-[6px] font-mono text-slate-500">
            <span>◄ RJ45 / HDMI 2.1 / USB-C / AUDIO</span>
            <span>USB 3.2 / EXHAUST FINS ►</span>
          </div>
        </div>

        {/* Live Station Status Pill */}
        <div className="mt-1.5 py-1 px-2.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>STATION 0{staticStageIdx + 1} OF 06:</span>
            <span className="text-white font-bold">{stages[staticStageIdx].id.toUpperCase()}</span>
          </div>
          <span className="text-[9px] text-cyan-300 font-bold">{stages[staticStageIdx].kpiBadge}</span>
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={journeyContainerRef}
      onMouseMove={handleContainerMouseMove}
      className="relative pt-6 pb-28 lg:pb-36 overflow-hidden"
    >
      {/* =========================================================================
          BACKGROUND PARALLAX LAYER: Depth particles & Central glowing energy conduit
          ========================================================================= */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          transform: `translateY(${mouseParallax.y * 0.4}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Central Vertical Circuit Conduit connecting all 6 stations */}
        <div className="absolute top-28 bottom-28 left-1/2 -translate-x-1/2 w-1 hidden lg:block">
          <div className={`w-full h-full bg-gradient-to-b ${themeStyle.circuitLine}`} />
          {/* Pulsing traveling spark along the track */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-3.5 h-14 rounded-full blur-xs bg-cyan-400 transition-all duration-300"
            style={{
              top: `${journeyProgress * 92}%`
            }}
          />
        </div>

        {/* Dynamic Background Ambient Glowing Orbs */}
        <div 
          className="absolute top-1/6 left-1/12 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
          style={{
            background: activeStage % 2 === 0 ? 'rgba(0,240,255,0.35)' : 'rgba(210,180,119,0.35)',
            transform: `translate(${mouseParallax.x * -0.5}px, ${mouseParallax.y * -0.5}px)`
          }}
        />
        <div 
          className="absolute top-3/5 right-1/12 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
          style={{
            background: activeStage % 2 === 1 ? 'rgba(168,85,247,0.35)' : 'rgba(16,185,129,0.35)',
            transform: `translate(${mouseParallax.x * 0.5}px, ${mouseParallax.y * 0.5}px)`
          }}
        />
      </div>

      {/* =========================================================================
          JOURNEY MILESTONE JUMP BAR & STATION PILLS
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              6-STAGE DEVELOPMENT PIPELINE // LIVE 3D LAPTOP FLIGHT
            </span>
          </div>

          {/* Station Milestone Jump Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => scrollToStage(i)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  activeStage === i ? themeStyle.activePill : themeStyle.inactivePill
                }`}
              >
                <span>{stage.stepNumber}</span>
                <span className="hidden md:inline text-[10px] font-semibold">{stage.id.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          THE MAIN 3D JOURNEY TRACK:
          - A single continuous ASUS TUF Gaming A15 travels vertically down the track
          - The laptop position is bound to scroll progress and settles at each milestone
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* =========================================================================
            CONTINUOUS 3D ASUS TUF GAMING A15 TRAVELER (DESKTOP)
            - Absolutely positioned within the track container
            - Physical vertical position `y` moves continuously down from stage 0 to 5
            - Vertically centered with calc(${laptopState.y}px - 50%)
            ========================================================================= */}
        <div 
          className="hidden lg:block absolute left-1/2 top-0 pointer-events-none z-30"
          style={{
            transform: `translate3d(calc(-50% + ${laptopState.x}px), calc(${laptopState.y}px - 50%), 0)`,
            willChange: 'transform'
          }}
        >
          <div 
            onMouseEnter={() => setIsHoveringLaptop(true)}
            onMouseLeave={() => setIsHoveringLaptop(false)}
            style={{
              transform: `
                rotateY(${laptopState.rotY + (isHoveringLaptop ? mouseParallax.x * 0.3 : 0)}deg) 
                rotateX(${laptopState.rotX - (isHoveringLaptop ? mouseParallax.y * 0.3 : 0)}deg) 
                rotateZ(${laptopState.rotZ}deg) 
                scale(${laptopState.scale})
              `,
              transformStyle: 'preserve-3d',
              transition: isHoveringLaptop ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out'
            }}
            className="relative pointer-events-auto select-none"
          >
            {/* Dynamic Optical Underglow Shadow */}
            <div 
              className="absolute -inset-6 rounded-3xl blur-2xl opacity-40 pointer-events-none transition-all duration-700"
              style={{
                background: activeStage === 0 
                  ? 'radial-gradient(circle, rgba(16, 185, 129, 0.45), transparent 70%)'
                  : activeStage === 1
                  ? 'radial-gradient(circle, rgba(168, 85, 247, 0.45), transparent 70%)'
                  : activeStage === 2
                  ? 'radial-gradient(circle, rgba(6, 182, 212, 0.5), transparent 70%)'
                  : activeStage === 3
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.5), transparent 70%)'
                  : activeStage === 4
                  ? 'radial-gradient(circle, rgba(16, 185, 129, 0.5), transparent 70%)'
                  : 'radial-gradient(circle, rgba(210, 180, 119, 0.55), transparent 70%)'
              }}
            />

            {/* Genuine ASUS TUF Gaming A15 3D Model */}
            {renderAsusTufLaptopModel(activeStage)}
          </div>
        </div>

        {/* =========================================================================
            6 STAGE SECTIONS (2-Column Grid Layout)
            - Each stage has an explicit laptop dock slot
            - Guarantees 100% vertical alignment between laptop and stage card
            ========================================================================= */}
        <div className="space-y-24 lg:space-y-36 py-6 relative z-20">
          {stages.map((stage, idx) => {
            const StageIcon = stage.icon;
            const isActive = activeStage === idx;
            const isCardOnRight = idx % 2 === 0;

            // Stage 6 (Center Finale)
            if (idx === 5) {
              return (
                <div
                  key={stage.id}
                  ref={(el) => (stageSectionRefs.current[idx] = el)}
                  className="min-h-[70vh] flex flex-col items-center justify-center text-center relative"
                >
                  {/* Laptop Dock Slot for Stage 6 */}
                  <div 
                    ref={(el) => (laptopSlotRefs.current[idx] = el)}
                    className="w-full max-w-lg h-[400px] mb-8 flex items-center justify-center relative"
                  >
                    {/* In-Line Laptop for Mobile/Tablet */}
                    <div className="lg:hidden w-full">
                      {renderAsusTufLaptopModel(idx)}
                    </div>
                  </div>

                  {/* Stage Milestone Card */}
                  <div 
                    onClick={() => scrollToStage(idx)}
                    className={`w-full max-w-2xl rounded-3xl p-6 sm:p-8 transition-all duration-500 cursor-pointer relative ${
                      isActive ? themeStyle.activeCardBg : themeStyle.cardBg
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-mono font-bold text-sm ${
                          isActive ? 'scale-110 shadow-md' : 'opacity-80'
                        } ${themeStyle.badge}`}>
                          {stage.stepNumber}
                        </div>
                        <div className="text-left">
                          <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 block">
                            MILESTONE TIMELINE: {stage.duration}
                          </span>
                          <h3 className={`text-xl sm:text-2xl font-bold ${
                            isLuxury ? 'font-serif text-[#1C1917]' : isFuturistic ? 'font-cyber text-white' : 'text-white'
                          }`}>
                            {stage.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl border shrink-0 bg-amber-500/20 text-amber-300 border-amber-500/40">
                        <StageIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="text-left">
                      <p className="text-xs font-mono font-semibold text-cyan-400 mb-2">
                        {stage.subtitle}
                      </p>
                      <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                        isLuxury ? 'text-[#655E56]' : 'text-slate-300'
                      }`}>
                        {stage.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                          Key Phase Deliverables:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {stage.deliverables.map((deliv, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex flex-wrap gap-1.5">
                          {stage.technologies.map((t, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRequestQuote({ name: `${stage.title} (${stage.duration})` });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline cursor-pointer ml-auto"
                        >
                          <span>Commission Flagship</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Stages 0 through 4 (Alternating 2-Column Grid)
            return (
              <div
                key={stage.id}
                ref={(el) => (stageSectionRefs.current[idx] = el)}
                className="min-h-[65vh] flex items-center relative"
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  
                  {/* Left Column */}
                  <div className={isCardOnRight ? 'order-2 lg:order-1' : 'order-1'}>
                    {isCardOnRight ? (
                      /* Laptop Slot on Left */
                      <div 
                        ref={(el) => (laptopSlotRefs.current[idx] = el)}
                        className="w-full h-[400px] flex items-center justify-center relative"
                      >
                        {/* In-Line Laptop for Mobile/Tablet */}
                        <div className="lg:hidden w-full">
                          {renderAsusTufLaptopModel(idx)}
                        </div>
                      </div>
                    ) : (
                      /* Card on Left */
                      <div 
                        onClick={() => scrollToStage(idx)}
                        className={`w-full rounded-3xl p-6 sm:p-8 transition-all duration-500 cursor-pointer relative ${
                          isActive ? themeStyle.activeCardBg : themeStyle.cardBg
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-mono font-bold text-sm ${
                              isActive ? 'scale-110 shadow-md' : 'opacity-80'
                            } ${themeStyle.badge}`}>
                              {stage.stepNumber}
                            </div>
                            <div className="text-left">
                              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 block">
                                MILESTONE TIMELINE: {stage.duration}
                              </span>
                              <h3 className={`text-xl sm:text-2xl font-bold ${
                                isLuxury ? 'font-serif text-[#1C1917]' : isFuturistic ? 'font-cyber text-white' : 'text-white'
                              }`}>
                                {stage.title}
                              </h3>
                            </div>
                          </div>
                          <div className={`p-2.5 rounded-xl border shrink-0 ${
                            isActive ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-white/5 text-slate-400 border-white/10'
                          }`}>
                            <StageIcon className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="text-left">
                          <p className="text-xs font-mono font-semibold text-cyan-400 mb-2">
                            {stage.subtitle}
                          </p>
                          <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                            isLuxury ? 'text-[#655E56]' : 'text-slate-300'
                          }`}>
                            {stage.description}
                          </p>

                          <div className="space-y-2 mb-6">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                              Key Phase Deliverables:
                            </span>
                            <ul className="grid grid-cols-1 gap-2 text-xs">
                              {stage.deliverables.map((deliv, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-200">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{deliv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="flex flex-wrap gap-1.5">
                              {stage.technologies.map((t, i) => (
                                <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onRequestQuote({ name: `${stage.title} (${stage.duration})` });
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer ml-auto"
                            >
                              <span>Inquire Scope</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={isCardOnRight ? 'order-1 lg:order-2' : 'order-2'}>
                    {isCardOnRight ? (
                      /* Card on Right */
                      <div 
                        onClick={() => scrollToStage(idx)}
                        className={`w-full rounded-3xl p-6 sm:p-8 transition-all duration-500 cursor-pointer relative ${
                          isActive ? themeStyle.activeCardBg : themeStyle.cardBg
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-mono font-bold text-sm ${
                              isActive ? 'scale-110 shadow-md' : 'opacity-80'
                            } ${themeStyle.badge}`}>
                              {stage.stepNumber}
                            </div>
                            <div className="text-left">
                              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 block">
                                MILESTONE TIMELINE: {stage.duration}
                              </span>
                              <h3 className={`text-xl sm:text-2xl font-bold ${
                                isLuxury ? 'font-serif text-[#1C1917]' : isFuturistic ? 'font-cyber text-white' : 'text-white'
                              }`}>
                                {stage.title}
                              </h3>
                            </div>
                          </div>
                          <div className={`p-2.5 rounded-xl border shrink-0 ${
                            isActive ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' : 'bg-white/5 text-slate-400 border-white/10'
                          }`}>
                            <StageIcon className="w-5 h-5" />
                          </div>
                        </div>

                        <div className="text-left">
                          <p className="text-xs font-mono font-semibold text-cyan-400 mb-2">
                            {stage.subtitle}
                          </p>
                          <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                            isLuxury ? 'text-[#655E56]' : 'text-slate-300'
                          }`}>
                            {stage.description}
                          </p>

                          <div className="space-y-2 mb-6">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                              Key Phase Deliverables:
                            </span>
                            <ul className="grid grid-cols-1 gap-2 text-xs">
                              {stage.deliverables.map((deliv, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-200">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{deliv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="flex flex-wrap gap-1.5">
                              {stage.technologies.map((t, i) => (
                                <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onRequestQuote({ name: `${stage.title} (${stage.duration})` });
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer ml-auto"
                            >
                              <span>Inquire Scope</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Laptop Slot on Right */
                      <div 
                        ref={(el) => (laptopSlotRefs.current[idx] = el)}
                        className="w-full h-[400px] flex items-center justify-center relative"
                      >
                        {/* In-Line Laptop for Mobile/Tablet */}
                        <div className="lg:hidden w-full">
                          {renderAsusTufLaptopModel(idx)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
