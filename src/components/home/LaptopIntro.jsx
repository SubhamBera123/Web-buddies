import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { ArrowRight, MousePointerClick, Sparkles } from 'lucide-react';

/* =========================================================================
   ASUS TUF GAMING A15 PROCEDURAL TEXTURE GENERATORS
   ========================================================================= */

// 1. ASUS TUF Lid Texture (Embossed Winged Mecha Emblem + Jaeger Gray finish)
function createTufLidTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  // Brushed Jaeger Gray metallic base
  const grad = ctx.createLinearGradient(0, 0, 1024, 640);
  grad.addColorStop(0, '#1c1e22');
  grad.addColorStop(0.3, '#22252a');
  grad.addColorStop(0.7, '#181a1d');
  grad.addColorStop(1, '#0f1012');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 640);

  // Subtle brushed metal streak lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
  ctx.lineWidth = 1;
  for (let y = 0; y < 640; y += 4) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  // Geometric mecha angular chamfer border lines (TUF signature)
  ctx.strokeStyle = 'rgba(210, 180, 119, 0.25)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(60, 40);
  ctx.lineTo(964, 40);
  ctx.lineTo(1000, 76);
  ctx.lineTo(1000, 564);
  ctx.lineTo(964, 600);
  ctx.lineTo(60, 600);
  ctx.lineTo(24, 564);
  ctx.lineTo(24, 76);
  ctx.closePath();
  ctx.stroke();

  // Corner mecha accents
  const corners = [
    [40, 56], [984, 56], [40, 584], [984, 584]
  ];
  ctx.fillStyle = 'rgba(184, 148, 88, 0.4)';
  corners.forEach(([cx, cy]) => {
    ctx.fillRect(cx - 6, cy - 2, 12, 4);
    ctx.fillRect(cx - 2, cy - 6, 4, 12);
  });

  // Center ASUS TUF Winged Mecha Crest
  ctx.save();
  ctx.translate(512, 300);

  // Winged TUF Emblem
  ctx.fillStyle = '#D2B477';
  ctx.shadowColor = 'rgba(210, 180, 119, 0.6)';
  ctx.shadowBlur = 18;

  // Left Wing
  ctx.beginPath();
  ctx.moveTo(-90, -45);
  ctx.lineTo(-45, -45);
  ctx.lineTo(-20, 20);
  ctx.lineTo(-50, 45);
  ctx.lineTo(-65, 10);
  ctx.lineTo(-100, 0);
  ctx.closePath();
  ctx.fill();

  // Right Wing
  ctx.beginPath();
  ctx.moveTo(90, -45);
  ctx.lineTo(45, -45);
  ctx.lineTo(20, 20);
  ctx.lineTo(50, 45);
  ctx.lineTo(65, 10);
  ctx.lineTo(100, 0);
  ctx.closePath();
  ctx.fill();

  // Center TUF Shield Pillar
  ctx.beginPath();
  ctx.moveTo(0, -60);
  ctx.lineTo(15, -25);
  ctx.lineTo(10, 40);
  ctx.lineTo(0, 55);
  ctx.lineTo(-10, 40);
  ctx.lineTo(-15, -25);
  ctx.closePath();
  ctx.fill();

  ctx.restore();

  // TUF GAMING Typography
  ctx.font = 'bold 32px "JetBrains Mono", monospace';
  ctx.fillStyle = '#E5DFD3';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '8px';
  ctx.fillText('TUF GAMING', 512, 410);

  ctx.font = '500 14px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(184, 148, 88, 0.7)';
  ctx.fillText('// A15 TACTICAL EDITION //', 512, 440);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  return texture;
}

// 2. ASUS TUF Keyboard & Trackpad Deck Texture
function createTufKeyboardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  // Matte graphite deck base
  ctx.fillStyle = '#111215';
  ctx.fillRect(0, 0, 1024, 600);

  // Recessed keyboard well
  ctx.fillStyle = '#0a0a0d';
  ctx.fillRect(70, 40, 884, 330);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 2;
  ctx.strokeRect(70, 40, 884, 330);

  // Keyboard Rows & Key Caps with TUF Amber Backlight
  const rows = 6;
  const cols = 15;
  const startX = 85;
  const startY = 55;
  const keyW = 54;
  const keyH = 46;
  const gap = 5;

  ctx.font = '10px monospace';
  ctx.textAlign = 'center';

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = startX + c * (keyW + gap);
      const y = startY + r * (keyH + gap);

      // Distinctive Translucent Highlighted WASD Gaming Keys
      const isWASD = (r === 2 && (c === 2 || c === 3)) || (r === 3 && (c === 1 || c === 2 || c === 3));

      // Key Glow under keycaps
      ctx.fillStyle = isWASD ? 'rgba(255, 220, 140, 0.85)' : 'rgba(184, 148, 88, 0.22)';
      ctx.fillRect(x - 1, y - 1, keyW + 2, keyH + 2);

      // Key Cap
      ctx.fillStyle = isWASD ? '#FFF2D6' : '#17191d';
      ctx.fillRect(x, y, keyW, keyH);

      // Keycap border
      ctx.strokeStyle = isWASD ? '#B89458' : 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, keyW, keyH);

      // WASD Lettering
      if (isWASD) {
        let letter = '';
        if (r === 2 && c === 2) letter = 'W';
        if (r === 3 && c === 1) letter = 'A';
        if (r === 3 && c === 2) letter = 'S';
        if (r === 3 && c === 3) letter = 'D';
        if (letter) {
          ctx.fillStyle = '#050505';
          ctx.font = 'bold 16px "JetBrains Mono", sans-serif';
          ctx.fillText(letter, x + keyW / 2, y + keyH / 2 + 5);
          ctx.font = '10px monospace';
        }
      }
    }
  }

  // Enlarged Left-Flared Ergonomic Gaming Spacebar
  ctx.fillStyle = 'rgba(184, 148, 88, 0.35)';
  ctx.fillRect(startX + 4 * (keyW + gap), startY + 5 * (keyH + gap), keyW * 5 + gap * 4, keyH);
  ctx.fillStyle = '#1c1e24';
  ctx.fillRect(startX + 4 * (keyW + gap) + 1, startY + 5 * (keyH + gap) + 1, keyW * 5 + gap * 4 - 2, keyH - 2);

  // Precision Trackpad with TUF Corner Crosshairs
  const tpX = 370;
  const tpY = 400;
  const tpW = 284;
  const tpH = 175;

  ctx.fillStyle = '#14161a';
  ctx.fillRect(tpX, tpY, tpW, tpH);
  ctx.strokeStyle = 'rgba(184, 148, 88, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(tpX, tpY, tpW, tpH);

  // Corner crosshairs (+)
  const crosshairs = [
    [tpX + 16, tpY + 16],
    [tpX + tpW - 16, tpY + 16],
    [tpX + 16, tpY + tpH - 16],
    [tpX + tpW - 16, tpY + tpH - 16]
  ];
  ctx.strokeStyle = '#D2B477';
  ctx.lineWidth = 2;
  crosshairs.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.moveTo(cx - 7, cy);
    ctx.lineTo(cx + 7, cy);
    ctx.moveTo(cx, cy - 7);
    ctx.lineTo(cx, cy + 7);
    ctx.stroke();
  });

  // Palm Rest Insignia
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.textAlign = 'left';
  ctx.fillText('ASUS TUF GAMING', 80, 480);
  ctx.font = '10px monospace';
  ctx.fillStyle = 'rgba(184, 148, 88, 0.6)';
  ctx.fillText('MIL-STD-810H CERTIFIED // 165HZ', 80, 502);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  return texture;
}

// 3. ASUS TUF Dynamic Screen Canvas
function updateTufScreenCanvas(canvas, state, isHoveredScreen) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Dark obsidian screen background with subtle scanlines
  ctx.fillStyle = '#060709';
  ctx.fillRect(0, 0, w, h);

  // Cyber grid pattern
  ctx.strokeStyle = 'rgba(184, 148, 88, 0.08)';
  ctx.lineWidth = 1;
  const step = 32;
  for (let x = 0; x < w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Top Armoury Crate Gaming Status HUD
  ctx.fillStyle = '#0c0e12';
  ctx.fillRect(0, 0, w, 44);
  ctx.strokeStyle = 'rgba(184, 148, 88, 0.25)';
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, w, 44);

  // Status HUD Telemetry
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillStyle = '#D2B477';
  ctx.textAlign = 'left';
  ctx.fillText('ASUS TUF A15 // ARMOURY CRATE', 24, 27);

  ctx.textAlign = 'right';
  ctx.fillStyle = '#10B981';
  ctx.fillText('● 165Hz // 0.8ms // G-SYNC', w - 24, 27);

  // Main Screen Display based on Stage
  if (state === 'initial') {
    // Stage 1: Ambient TUF Cyber Interface
    ctx.save();
    ctx.translate(w / 2, h / 2 - 20);

    // Glowing Radar circle
    ctx.strokeStyle = 'rgba(210, 180, 119, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 120, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 70, 0, Math.PI * 2);
    ctx.stroke();

    // Central TUF Monogram
    ctx.font = 'bold 44px "JetBrains Mono", monospace';
    ctx.fillStyle = '#F5F3EF';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#D2B477';
    ctx.shadowBlur = 16;
    ctx.fillText('NEXUSCRAFT', 0, 14);

    ctx.restore();

    ctx.font = '14px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(160, 155, 146, 0.85)';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 0;
    ctx.fillText('High-Performance Web Architecture & Bespoke Systems', w / 2, h / 2 + 75);

    // Prompt hint on screen
    ctx.fillStyle = 'rgba(184, 148, 88, 0.8)';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('// CLICK "EXPLORE THE WEBSITE" BELOW TO ENGAGE //', w / 2, h / 2 + 115);

  } else {
    // Stage 2 & 3: The phrase "Explore the Website" is docked INSIDE the screen
    ctx.save();
    ctx.translate(w / 2, h / 2);

    // Tactical HUD Brackets
    ctx.strokeStyle = isHoveredScreen ? '#F5F3EF' : '#D2B477';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#D2B477';
    ctx.shadowBlur = isHoveredScreen ? 25 : 12;

    const bW = 280;
    const bH = 65;
    const bracketLen = 24;

    // Top-Left Bracket
    ctx.beginPath();
    ctx.moveTo(-bW, -bH + bracketLen);
    ctx.lineTo(-bW, -bH);
    ctx.lineTo(-bW + bracketLen, -bH);
    ctx.stroke();

    // Top-Right Bracket
    ctx.beginPath();
    ctx.moveTo(bW - bracketLen, -bH);
    ctx.lineTo(bW, -bH);
    ctx.lineTo(bW, -bH + bracketLen);
    ctx.stroke();

    // Bottom-Left Bracket
    ctx.beginPath();
    ctx.moveTo(-bW, bH - bracketLen);
    ctx.lineTo(-bW, bH);
    ctx.lineTo(-bW + bracketLen, bH);
    ctx.stroke();

    // Bottom-Right Bracket
    ctx.beginPath();
    ctx.moveTo(bW - bracketLen, bH);
    ctx.lineTo(bW, bH);
    ctx.lineTo(bW, bH - bracketLen);
    ctx.stroke();

    // Center Button Box Fill
    ctx.fillStyle = isHoveredScreen ? 'rgba(210, 180, 119, 0.25)' : 'rgba(184, 148, 88, 0.12)';
    ctx.fillRect(-bW + 8, -bH + 8, (bW - 8) * 2, (bH - 8) * 2);

    // Primary Interactive Text inside screen
    ctx.font = 'bold 36px "Plus Jakarta Sans", "Manrope", sans-serif';
    ctx.fillStyle = isHoveredScreen ? '#FFFFFF' : '#F5F3EF';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#D2B477';
    ctx.shadowBlur = 20;
    ctx.fillText('Explore the Website', 0, 12);

    ctx.restore();

    // Sub-instruction
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillStyle = isHoveredScreen ? '#D2B477' : '#A09B92';
    ctx.textAlign = 'center';
    ctx.shadowBlur = 0;
    ctx.fillText('► CLICK TO ENTER NEXUSCRAFT STUDIO ◄', w / 2, h / 2 + 105);
  }

  // Bottom bezel stats line
  ctx.font = '10px "JetBrains Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.textAlign = 'center';
  ctx.fillText('ASUS TUF GAMING A15 // MILITARY SPEC CHASSIS // READY', w / 2, h - 18);
}

/* =========================================================================
   LAPTOP INTRO COMPONENT WITH THREE.JS 3D ASUS TUF GAMING A15
   ========================================================================= */

export const LaptopIntro = ({ onComplete }) => {
  // Session check
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('intro') === 'true' || params.get('replay') === '1') {
        sessionStorage.removeItem('nexuscraft_laptop_intro_seen');
        return true;
      }
      return sessionStorage.getItem('nexuscraft_laptop_intro_seen') !== 'true';
    }
    return true;
  });

  // State stages:
  // 'initial': Rotating 360°, external "Explore the Website" text active
  // 'docked': Text has moved INSIDE laptop screen, screen is now clickable
  // 'entering': Camera enters laptop display, viewport expands to reveal homepage
  const [stage, setStage] = useState('initial');
  const [isWebGLError, setIsWebGLError] = useState(false);

  const mountRef = useRef(null);
  const threeStateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    laptopGroup: null,
    screenCanvas: null,
    screenTexture: null,
    screenMesh: null,
    animationId: null,
    targetRotationY: 0,
    currentRotationY: 0,
    targetCameraZ: 5.6,
    targetCameraY: 1.1,
    isUserDragging: false,
    dragStartX: 0,
    rotationSpeed: 0.007,
    hasCompleted360: false,
    totalRotated: 0
  });

  // Lock body scroll while intro is visible
  useEffect(() => {
    if (isVisible) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isVisible]);

  // Global replay function
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.replayLaptopIntro = () => {
        sessionStorage.removeItem('nexuscraft_laptop_intro_seen');
        setIsVisible(true);
        setStage('initial');
      };
    }
  }, []);

  const skipIntro = useCallback(() => {
    sessionStorage.setItem('nexuscraft_laptop_intro_seen', 'true');
    setIsVisible(false);
    if (onComplete) onComplete();
  }, [onComplete]);

  // Click 1: Click external "Explore the Website" -> docks inside laptop screen
  const handleDockIntoScreen = useCallback(() => {
    if (stage !== 'initial') return;
    setStage('docked');

    const s = threeStateRef.current;
    if (s.screenCanvas && s.screenTexture) {
      updateTufScreenCanvas(s.screenCanvas, 'docked', false);
      s.screenTexture.needsUpdate = true;
    }

    // Align laptop directly to frontal view for clear screen reading
    s.targetRotationY = 0;
    s.targetCameraZ = 4.4;
    s.targetCameraY = 0.55;
  }, [stage]);

  // Click 2: Click "Explore the Website" inside laptop screen -> cinematic entry to homepage
  const handleEnterHomepage = useCallback(() => {
    if (stage === 'entering') return;
    setStage('entering');

    const s = threeStateRef.current;
    if (s.screenCanvas && s.screenTexture) {
      updateTufScreenCanvas(s.screenCanvas, 'docked', true);
      s.screenTexture.needsUpdate = true;
    }

    // Cinematic camera zoom deep into the screen
    s.targetCameraZ = 1.35;
    s.targetCameraY = 0.72;

    // After 1100ms, complete the transition seamlessly into the real homepage
    setTimeout(() => {
      sessionStorage.setItem('nexuscraft_laptop_intro_seen', 'true');
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1150);
  }, [stage, onComplete]);

  // Keyboard accessibility
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        skipIntro();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (stage === 'initial') {
          handleDockIntoScreen();
        } else if (stage === 'docked') {
          handleEnterHomepage();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, stage, handleDockIntoScreen, handleEnterHomepage, skipIntro]);

  // Initialize Three.js 3D Scene
  useEffect(() => {
    if (!isVisible || !mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.08);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.1, 5.6);
    camera.lookAt(0, 0.4, 0);

    // 2. WebGL Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn("WebGL initialization failed:", err);
      setTimeout(() => setIsWebGLError(true), 0);
      return;
    }

    // 3. Lighting (Tactical Studio Setup)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Warm Gold Key Light
    const keyLight = new THREE.DirectionalLight(0xD2B477, 2.8);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Subtle Amber/Copper Rim Light (highlights TUF mecha chamfers)
    const rimLight = new THREE.DirectionalLight(0xB89458, 2.2);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    // Top Fill
    const topLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topLight.position.set(0, 6, 2);
    scene.add(topLight);

    // =========================================================================
    // 4. BUILD 3D ASUS TUF GAMING A15 LAPTOP MODEL
    // =========================================================================
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // Materials
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x16181c,
      roughness: 0.38,
      metalness: 0.82
    });

    const darkTrimMat = new THREE.MeshStandardMaterial({
      color: 0x0a0b0d,
      roughness: 0.6,
      metalness: 0.4
    });

    const copperVentMat = new THREE.MeshStandardMaterial({
      color: 0xc86420,
      emissive: 0xff6600,
      emissiveIntensity: 0.65,
      roughness: 0.3,
      metalness: 0.9
    });

    // A. Base Chassis (Wedge mecha body)
    const baseGeo = new THREE.BoxGeometry(3.5, 0.16, 2.4);
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    baseMesh.position.y = 0.08;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    laptopGroup.add(baseMesh);

    // B. Keyboard Deck Surface
    const kbTexture = createTufKeyboardTexture();
    const kbMat = new THREE.MeshStandardMaterial({
      map: kbTexture,
      roughness: 0.4,
      metalness: 0.5
    });
    const kbGeo = new THREE.PlaneGeometry(3.46, 2.36);
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.rotation.x = -Math.PI / 2;
    kbMesh.position.set(0, 0.162, 0);
    laptopGroup.add(kbMesh);

    // C. Rear Honeycomb Exhaust Vents & Copper Heat Fins (Signature TUF A15 cooling)
    const ventGeo = new THREE.BoxGeometry(1.2, 0.12, 0.1);
    const leftVent = new THREE.Mesh(ventGeo, copperVentMat);
    leftVent.position.set(-1.0, 0.08, -1.21);
    laptopGroup.add(leftVent);

    const rightVent = new THREE.Mesh(ventGeo, copperVentMat);
    rightVent.position.set(1.0, 0.08, -1.21);
    laptopGroup.add(rightVent);

    // D. Side I/O Ports
    const portGeo = new THREE.BoxGeometry(0.04, 0.07, 1.4);
    const leftPorts = new THREE.Mesh(portGeo, darkTrimMat);
    leftPorts.position.set(-1.752, 0.08, 0.1);
    laptopGroup.add(leftPorts);

    const rightPorts = new THREE.Mesh(portGeo, darkTrimMat);
    rightPorts.position.set(1.752, 0.08, 0.1);
    laptopGroup.add(rightPorts);

    // E. Signature TUF Dual Hinge with Trapezoid Center Cutout
    const hingeGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.55, 16);
    const hingeMat = new THREE.MeshStandardMaterial({ color: 0x22242a, metalness: 0.9, roughness: 0.3 });

    const leftHinge = new THREE.Mesh(hingeGeo, hingeMat);
    leftHinge.rotation.z = Math.PI / 2;
    leftHinge.position.set(-1.15, 0.18, -1.18);
    laptopGroup.add(leftHinge);

    const rightHinge = new THREE.Mesh(hingeGeo, hingeMat);
    rightHinge.rotation.z = Math.PI / 2;
    rightHinge.position.set(1.15, 0.18, -1.18);
    laptopGroup.add(rightHinge);

    // F. Display Lid Assembly (Hinged at back)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.18, -1.18);
    // Natural gaming open angle: 105 degrees (~1.83 rad)
    lidGroup.rotation.x = 0.28;
    laptopGroup.add(lidGroup);

    // Lid Outer Shell (Back of display) with ASUS TUF Winged Mecha Emblem
    const lidTexture = createTufLidTexture();
    const lidMat = new THREE.MeshStandardMaterial({
      map: lidTexture,
      roughness: 0.35,
      metalness: 0.8
    });
    const lidBackGeo = new THREE.PlaneGeometry(3.5, 2.3);
    const lidBack = new THREE.Mesh(lidBackGeo, lidMat);
    lidBack.rotation.y = Math.PI;
    lidBack.position.set(0, 1.15, -0.05);
    lidGroup.add(lidBack);

    // Lid Chassis Body
    const lidBodyGeo = new THREE.BoxGeometry(3.5, 2.3, 0.08);
    const lidBody = new THREE.Mesh(lidBodyGeo, chassisMat);
    lidBody.position.set(0, 1.15, 0);
    lidGroup.add(lidBody);

    // Display Bezel (NanoEdge slim bezels)
    const bezelGeo = new THREE.PlaneGeometry(3.48, 2.28);
    const bezelMesh = new THREE.Mesh(bezelGeo, darkTrimMat);
    bezelMesh.position.set(0, 1.15, 0.041);
    lidGroup.add(bezelMesh);

    // Webcam module at top center
    const camGeo = new THREE.SphereGeometry(0.02, 12, 12);
    const camMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const cam = new THREE.Mesh(camGeo, camMat);
    cam.position.set(0, 2.24, 0.046);
    lidGroup.add(cam);

    // G. The Interactive TUF Display Screen
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    updateTufScreenCanvas(screenCanvas, 'initial', false);

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.anisotropy = 8;

    const screenGeo = new THREE.PlaneGeometry(3.26, 2.05);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.15, 0.045);
    lidGroup.add(screenMesh);

    // Soft Ambient Screen Glow casting light onto keyboard
    const screenLight = new THREE.PointLight(0xD2B477, 1.8, 4.5);
    screenLight.position.set(0, 1.1, 0.3);
    lidGroup.add(screenLight);

    // Under-Laptop Contact Shadow
    const shadowGeo = new THREE.PlaneGeometry(4.2, 3.0);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    const sGrad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 120);
    sGrad.addColorStop(0, 'rgba(0,0,0,0.85)');
    sGrad.addColorStop(0.5, 'rgba(0,0,0,0.4)');
    sGrad.addColorStop(1, 'rgba(0,0,0,0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.85 });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, 0.005, 0);
    scene.add(shadowMesh);

    // Save refs for state and raycasting
    threeStateRef.current = {
      ...threeStateRef.current,
      scene,
      camera,
      renderer,
      laptopGroup,
      screenCanvas,
      screenTexture,
      screenMesh
    };

    // =========================================================================
    // 5. INTERACTIVE 360° ROTATION & DRAG / ORBIT HANDLERS
    // =========================================================================
    let isDragging = false;
    let prevMouseX = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
    };

    const onPointerMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        prevMouseX = e.clientX;
        threeStateRef.current.currentRotationY += deltaX * 0.008;
        threeStateRef.current.targetRotationY = threeStateRef.current.currentRotationY;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // =========================================================================
    // 6. ANIMATION RENDER LOOP
    // =========================================================================
    const animate = () => {
      const s = threeStateRef.current;

      // 360-Degree Continuous Rotation on Initial Load
      if (!s.hasCompleted360 && !isDragging) {
        s.currentRotationY += s.rotationSpeed;
        s.totalRotated += s.rotationSpeed;

        // When full 360 rotation (2 * PI) completes, ease smoothly to attractive 3/4 gaming angle (-0.45 rad)
        if (s.totalRotated >= Math.PI * 2) {
          s.hasCompleted360 = true;
          s.targetRotationY = -0.45;
        }
      } else if (!isDragging) {
        // Smooth interpolation toward target angle
        s.currentRotationY += (s.targetRotationY - s.currentRotationY) * 0.06;
      }

      laptopGroup.rotation.y = s.currentRotationY;

      // Smooth camera interpolation for docking / entering
      camera.position.z += (s.targetCameraZ - camera.position.z) * 0.08;
      camera.position.y += (s.targetCameraY - camera.position.y) * 0.08;
      camera.lookAt(0, 0.45, 0);

      renderer.render(scene, camera);
      s.animationId = requestAnimationFrame(animate);
    };

    threeStateRef.current.animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);

      if (threeStateRef.current.animationId) {
        cancelAnimationFrame(threeStateRef.current.animationId);
      }
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, [isVisible]);

  // Update screen canvas when hover state changes inside docked stage
  const handleScreenHover = (hovered) => {
    const s = threeStateRef.current;
    if (s.screenCanvas && s.screenTexture && stage === 'docked') {
      updateTufScreenCanvas(s.screenCanvas, 'docked', hovered);
      s.screenTexture.needsUpdate = true;
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 bg-[#050505] select-none overflow-hidden transition-opacity duration-700 ${stage === 'entering' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      style={{
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-canvas-textured opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      {/* Atmospheric Amber/Gold Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(210, 180, 119, 0.22) 0%, rgba(184, 148, 88, 0.08) 50%, transparent 75%)',
          transform: `translate(-50%, -50%) scale(${stage === 'entering' ? 3.5 : 1})`
        }}
      />

      {/* Top Header Bar */}
      <header className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-between pt-1">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#111215] border border-[#B89458]/40 flex items-center justify-center shadow-lg shadow-black/50">
            <span className="text-xs font-bold text-[#D2B477] font-mono tracking-wider">TUF</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-[#F5F3EF] tracking-tight">ASUS TUF Gaming A15</div>
            <div className="text-[10px] text-[#A09B92] font-mono uppercase tracking-wider">Interactive 3D Showcase • 360° View</div>
          </div>
        </div>

        {/* Skip to Homepage */}
        <button
          onClick={skipIntro}
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#A09B92] hover:text-[#F5F3EF] bg-[#111215]/80 hover:bg-[#1c1e22] border border-white/10 hover:border-[#B89458]/40 transition-all duration-200 backdrop-blur-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#B89458]"
          title="Directly enter homepage (or press Esc)"
        >
          <span>Skip to Homepage</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#B89458] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </header>

      {/* Center 3D WebGL Canvas Stage */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
        {/* Three.js Canvas Container */}
        <div
          ref={mountRef}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          title="Drag mouse to rotate ASUS TUF Gaming A15 360 degrees"
        />

        {/* Fallback if WebGL not supported */}
        {isWebGLError && (
          <div className="relative z-20 text-center p-6 bg-[#111215] border border-[#B89458]/40 rounded-2xl max-w-md">
            <h3 className="text-lg font-bold text-white mb-2">ASUS TUF Gaming A15</h3>
            <p className="text-xs text-[#A09B92] mb-4">Click below to enter the NexusCraft experience.</p>
            <button
              onClick={skipIntro}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#B89458] to-[#D2B477] text-black"
            >
              Explore the Website
            </button>
          </div>
        )}

        {/* When in Stage 2 ('docked'): Transparent interactive target directly over the 3D screen */}
        {stage === 'docked' && (
          <div
            onClick={handleEnterHomepage}
            onMouseEnter={() => handleScreenHover(true)}
            onMouseLeave={() => handleScreenHover(false)}
            role="button"
            tabIndex={0}
            aria-label="Click Explore the Website inside the laptop screen to enter"
            className="absolute z-30 cursor-pointer w-[320px] sm:w-[480px] h-[200px] sm:h-[300px] rounded-xl flex items-center justify-center transition-transform hover:scale-105"
            style={{
              top: '42%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Visual subtle pulsing target badge guiding user to click inside the screen */}
            <div className="px-4 py-2 rounded-xl bg-black/60 border border-[#D2B477]/80 backdrop-blur-md shadow-2xl shadow-[#B89458]/40 flex items-center gap-2 animate-pulse">
              <Sparkles className="w-4 h-4 text-[#D2B477]" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wider">
                Click Screen to Enter Website
              </span>
              <ArrowRight className="w-4 h-4 text-[#D2B477]" />
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          EXPLORE THE WEBSITE INTERACTION (Stage 1)
          ========================================================================= */}
      <footer className="relative z-20 w-full max-w-xl mx-auto flex flex-col items-center text-center pb-3">

        {/* Animated Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#111215] border border-[#B89458]/40 mb-2 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D2B477] animate-pulse"></span>
          <span className="text-[10px] font-mono font-medium text-[#D2B477] tracking-wider uppercase">
            {stage === 'initial' ? 'Drag 360° to Inspect // ASUS TUF A15' : 'Text Docked Inside Screen'}
          </span>
        </div>

        {/* Prompt: "READY TO EXPLORE?" */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
          READY TO <span className="text-gradient-gold-animated">EXPLORE?</span>
        </h1>

        {/* Primary Interactive Element: "Explore the Website" */}
        {stage === 'initial' ? (
          <div className="flex flex-col items-center">
            <button
              onClick={handleDockIntoScreen}
              className="group relative inline-flex items-center gap-2 text-base sm:text-lg md:text-xl font-bold text-[#F5F3EF] hover:text-[#D2B477] transition-all duration-300 py-1 cursor-pointer focus:outline-none"
              aria-label="Explore the Website"
            >
              <MousePointerClick className="w-5 h-5 text-[#D2B477] group-hover:scale-125 transition-transform animate-bounce" />
              <span className="border-b-2 border-[#B89458]/60 group-hover:border-[#D2B477] pb-0.5 tracking-wide">
                Explore the Website
              </span>
            </button>
            <span className="text-[11px] text-[#A09B92] font-mono mt-1">
              Click above to transfer into the ASUS TUF screen
            </span>
          </div>
        ) : (
          <div className="text-xs sm:text-sm text-[#D2B477] font-mono animate-pulse">
            ► Now click "Explore the Website" inside the laptop screen to enter ◄
          </div>
        )}

        {/* Footer Subtext */}
        <div className="mt-3 text-[10px] text-[#A09B92]/60 font-mono">
          Interactive WebGL 3D • 360° Drag Inspection Supported
        </div>
      </footer>
    </div>
  );
};
