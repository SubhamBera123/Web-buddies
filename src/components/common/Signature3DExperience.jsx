import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, Crown, Cpu, RotateCw, Eye } from 'lucide-react';

export const Signature3DExperience = ({
  className = '',
  height = '380px',
  interactive = true,
  showBadge = true
}) => {
  const { theme, isLuxury, isFuturistic } = useTheme();
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasWebGLError, setHasWebGLError] = useState(false);

  // Internal state ref for animation and Three.js objects
  const sceneStateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    mainGroup: null,
    orbitalGroup: null,
    particleSystem: null,
    lights: [],
    targetRotationX: 0,
    targetRotationY: 0,
    currentRotationX: 0,
    currentRotationY: 0,
    pointerX: 0,
    pointerY: 0,
    isPointerDown: false,
    dragStart: { x: 0, y: 0 },
    reqId: null,
    isVisible: true,
  });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 360;
    const heightPx = container.clientHeight || 360;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, heightPx);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn("WebGL not supported:", err);
      setHasWebGLError(true);
      return;
    }

    const mainGroup = new THREE.Group();
    const orbitalGroup = new THREE.Group();
    mainGroup.add(orbitalGroup);
    scene.add(mainGroup);

    // =========================================================================
    // 2. THEME-SPECIFIC 3D GEOMETRY, MATERIALS & LIGHTING
    // =========================================================================
    const lights = [];
    let particleSystem = null;

    if (isLuxury) {
      // -----------------------------------------------------------------------
      // LUXURY: Metallic Champagne Gold Faceted Torus Knot & Orbital Rings
      // -----------------------------------------------------------------------
      // Lighting: Warm champagne studio setup
      const ambient = new THREE.AmbientLight(0xfff6ea, 1.2);
      scene.add(ambient);
      lights.push(ambient);

      const goldKey = new THREE.DirectionalLight(0xE5C38D, 3.5);
      goldKey.position.set(4, 5, 4);
      scene.add(goldKey);
      lights.push(goldKey);

      const rimLight = new THREE.DirectionalLight(0x9E7B4F, 2.2);
      rimLight.position.set(-4, -2, -3);
      scene.add(rimLight);
      lights.push(rimLight);

      // Core Monolith: Metallic Champagne Gold Torus Knot
      const knotGeo = new THREE.TorusKnotGeometry(0.95, 0.28, 128, 32, 2, 3);
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0xC5A880,
        metalness: 0.95,
        roughness: 0.22,
      });
      const coreMesh = new THREE.Mesh(knotGeo, knotMat);
      mainGroup.add(coreMesh);

      // Floating Faceted Gem at center
      const gemGeo = new THREE.OctahedronGeometry(0.38, 0);
      const gemMat = new THREE.MeshStandardMaterial({
        color: 0xFFF2D6,
        metalness: 0.98,
        roughness: 0.1,
      });
      const gemMesh = new THREE.Mesh(gemGeo, gemMat);
      mainGroup.add(gemMesh);

      // Concentric Thin Orbital Rings
      const ring1Geo = new THREE.TorusGeometry(1.85, 0.015, 16, 120);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x9E7B4F,
        metalness: 0.9,
        roughness: 0.3,
      });
      const ring1 = new THREE.Mesh(ring1Geo, ringMat);
      ring1.rotation.x = Math.PI / 3;
      orbitalGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.15, 0.012, 16, 120);
      const ring2 = new THREE.Mesh(ring2Geo, ringMat);
      ring2.rotation.y = Math.PI / 4;
      ring2.rotation.x = -Math.PI / 6;
      orbitalGroup.add(ring2);

      // Floating Champagne Embers Particles
      const particleCount = 70;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 5.5;
        positions[i + 1] = (Math.random() - 0.5) * 5.5;
        positions[i + 2] = (Math.random() - 0.5) * 4.0;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xD4AF37,
        size: 0.045,
        transparent: true,
        opacity: 0.75,
      });
      particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

    } else if (isFuturistic) {
      // -----------------------------------------------------------------------
      // FUTURISTIC: Holographic Cybernetic Quantum Sphere & Particle Vortex
      // -----------------------------------------------------------------------
      const ambient = new THREE.AmbientLight(0x0a192f, 1.5);
      scene.add(ambient);
      lights.push(ambient);

      const cyanLight = new THREE.DirectionalLight(0x00F0FF, 4.0);
      cyanLight.position.set(3, 4, 3);
      scene.add(cyanLight);
      lights.push(cyanLight);

      const purpleLight = new THREE.DirectionalLight(0x8B5CF6, 3.5);
      purpleLight.position.set(-3, -3, -2);
      scene.add(purpleLight);
      lights.push(purpleLight);

      // Outer Holographic Wireframe Icosahedron
      const sphereGeo = new THREE.IcosahedronGeometry(1.25, 2);
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0x00F0FF,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const wireframeMesh = new THREE.Mesh(sphereGeo, wireframeMat);
      mainGroup.add(wireframeMesh);

      // Point Vertices on outer sphere
      const pointsMat = new THREE.PointsMaterial({
        color: 0x67E8F9,
        size: 0.06,
        transparent: true,
        opacity: 0.9,
      });
      const pointsMesh = new THREE.Points(sphereGeo, pointsMat);
      mainGroup.add(pointsMesh);

      // Inner Pulsing Quantum Energy Core
      const coreGeo = new THREE.SphereGeometry(0.72, 32, 32);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x7928CA,
        emissive: 0x8B5CF6,
        emissiveIntensity: 0.85,
        roughness: 0.2,
        metalness: 0.9,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);

      // Quantum Orbital Rings with Tick Nodes
      const ring1Geo = new THREE.TorusGeometry(1.75, 0.02, 16, 80);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00F0FF, wireframe: true });
      const ring1 = new THREE.Mesh(ring1Geo, ringMat);
      ring1.rotation.x = Math.PI / 2.5;
      orbitalGroup.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.05, 0.015, 16, 80);
      const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x8B5CF6, wireframe: true });
      const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
      ring2.rotation.y = Math.PI / 3;
      orbitalGroup.add(ring2);

      // Luminous Cyber Particle Cloud
      const particleCount = 200;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const radius = 1.6 + Math.random() * 2.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI;
        positions[i] = radius * Math.cos(theta) * Math.cos(phi);
        positions[i + 1] = radius * Math.sin(phi);
        positions[i + 2] = radius * Math.sin(theta) * Math.cos(phi);
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x00F0FF,
        size: 0.045,
        transparent: true,
        opacity: 0.85,
      });
      particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

    } else {
      // -----------------------------------------------------------------------
      // ORIGINAL: Architectural Polyhedral Node with Dark Gold Wireframe
      // -----------------------------------------------------------------------
      const ambient = new THREE.AmbientLight(0xffffff, 0.9);
      scene.add(ambient);
      lights.push(ambient);

      const keyLight = new THREE.DirectionalLight(0xD2B477, 3.0);
      keyLight.position.set(4, 5, 4);
      scene.add(keyLight);
      lights.push(keyLight);

      const rimLight = new THREE.DirectionalLight(0xB89458, 2.0);
      rimLight.position.set(-4, -2, -3);
      scene.add(rimLight);
      lights.push(rimLight);

      // Faceted Dodecahedron Core
      const polyGeo = new THREE.DodecahedronGeometry(1.05, 0);
      const polyMat = new THREE.MeshStandardMaterial({
        color: 0x1a1c22,
        metalness: 0.85,
        roughness: 0.32,
      });
      const polyMesh = new THREE.Mesh(polyGeo, polyMat);
      mainGroup.add(polyMesh);

      // Gold Edges on facets
      const edges = new THREE.EdgesGeometry(polyGeo);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xD2B477, linewidth: 2 });
      const wireframeLines = new THREE.LineSegments(edges, lineMat);
      mainGroup.add(wireframeLines);

      // Concentric Gold Orbital Ring
      const ringGeo = new THREE.TorusGeometry(1.8, 0.015, 16, 90);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xB89458,
        metalness: 0.8,
        roughness: 0.3,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3;
      orbitalGroup.add(ring);

      // Orbital Gold Constellation
      const count = 90;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        pPos[i] = (Math.random() - 0.5) * 5.0;
        pPos[i + 1] = (Math.random() - 0.5) * 5.0;
        pPos[i + 2] = (Math.random() - 0.5) * 3.5;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({
        color: 0xD2B477,
        size: 0.04,
        transparent: true,
        opacity: 0.7,
      });
      particleSystem = new THREE.Points(pGeo, pMat);
      scene.add(particleSystem);
    }

    // Save refs
    const s = sceneStateRef.current;
    s.scene = scene;
    s.camera = camera;
    s.renderer = renderer;
    s.mainGroup = mainGroup;
    s.orbitalGroup = orbitalGroup;
    s.particleSystem = particleSystem;
    s.lights = lights;

    // =========================================================================
    // 3. INTERACTIVE POINTER / TOUCH HANDLERS
    // =========================================================================
    const handlePointerMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      s.pointerX = x;
      s.pointerY = y;

      if (s.isPointerDown) {
        const deltaX = e.clientX - s.dragStart.x;
        const deltaY = e.clientY - s.dragStart.y;
        s.targetRotationY += deltaX * 0.01;
        s.targetRotationX += deltaY * 0.01;
        s.dragStart = { x: e.clientX, y: e.clientY };
      } else {
        s.targetRotationY = x * 0.85;
        s.targetRotationX = -y * 0.85;
      }
    };

    const handlePointerDown = (e) => {
      if (!interactive) return;
      s.isPointerDown = true;
      s.dragStart = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      s.isPointerDown = false;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // Visibility Observer to pause loop when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        s.isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 360;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // =========================================================================
    // 4. ANIMATION RENDER LOOP (with smooth lerp & particle drift)
    // =========================================================================
    let clock = new THREE.Clock();

    const animate = () => {
      s.reqId = requestAnimationFrame(animate);

      if (!s.isVisible) return; // Save CPU when out of view

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertial easing (lerp) toward target rotation
      s.currentRotationX += (s.targetRotationX - s.currentRotationX) * 0.06;
      s.currentRotationY += (s.targetRotationY - s.currentRotationY) * 0.06;

      // Continuous ambient rotation + pointer offset
      if (mainGroup) {
        mainGroup.rotation.y = elapsedTime * (isFuturistic ? 0.35 : 0.22) + s.currentRotationY;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.15 + s.currentRotationX;
      }

      if (orbitalGroup) {
        orbitalGroup.rotation.y = -elapsedTime * 0.28;
        orbitalGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.2;
      }

      // Rotate particles
      if (particleSystem) {
        particleSystem.rotation.y = elapsedTime * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // 5. CLEANUP
    // =========================================================================
    return () => {
      if (s.reqId) cancelAnimationFrame(s.reqId);
      observer.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      if (renderer && renderer.domElement) {
        try {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        } catch {
          // ignore
        }
      }
    };
  }, [theme, isLuxury, isFuturistic, interactive]);

  // Fallback if WebGL fails
  if (hasWebGLError) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl border ${
          isLuxury
            ? 'bg-[#FFFFFF] border-[#9E7B4F]/30 text-[#9E7B4F]'
            : isFuturistic
            ? 'bg-[#060D1E] border-[#00F0FF]/40 text-[#00F0FF]'
            : 'bg-[#0D0E12] border-white/10 text-[#D2B477]'
        } ${className}`}
        style={{ height }}
      >
        <div className="text-center space-y-2 p-6">
          <Sparkles className="w-8 h-8 mx-auto animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider block font-bold">
            Interactive 3D Visual Active
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 group select-none cursor-grab active:cursor-grabbing ${
        isLuxury
          ? 'bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF] border border-[#9E7B4F]/35 shadow-[0_20px_50px_rgba(158,123,79,0.12)]'
          : isFuturistic
          ? 'bg-gradient-to-b from-[#060D1E]/95 via-[#02040A] to-[#060D1E]/95 border border-[#00F0FF]/40 shadow-[0_0_35px_rgba(0,240,255,0.2)]'
          : 'bg-gradient-to-b from-[#0D0E12] via-[#050505] to-[#0D0E12] border border-white/10 shadow-2xl'
      } ${className}`}
      style={{ height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Cyber Corner HUD Reticles for Futuristic Theme */}
      {isFuturistic && (
        <>
          <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00F0FF] pointer-events-none z-10" />
          <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#00F0FF] pointer-events-none z-10" />
          <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#00F0FF] pointer-events-none z-10" />
          <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00F0FF] pointer-events-none z-10" />
        </>
      )}

      {/* Luxury Archival Inner Border */}
      {isLuxury && (
        <div className="absolute inset-2.5 rounded-2xl border border-[#9E7B4F]/15 pointer-events-none z-10" />
      )}

      {/* Top Floating Badge */}
      {showBadge && (
        <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none z-20">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold backdrop-blur-md shadow-sm ${
            isLuxury
              ? 'bg-[#FFFFFF]/90 border border-[#9E7B4F]/40 text-[#9E7B4F] font-serif'
              : isFuturistic
              ? 'bg-[#02040A]/90 border border-[#00F0FF]/50 text-[#00F0FF] font-mono shadow-[0_0_12px_rgba(0,240,255,0.25)]'
              : 'bg-[#111215]/90 border border-[#B89458]/40 text-[#D2B477] font-mono'
          }`}>
            {isLuxury ? (
              <>
                <Crown className="w-3 h-3 text-[#9E7B4F]" />
                <span>Atelier 3D Monolith</span>
              </>
            ) : isFuturistic ? (
              <>
                <Cpu className="w-3 h-3 text-[#00F0FF] animate-pulse" />
                <span>Quantum Hologram // 60 FPS</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3 text-[#B89458]" />
                <span>Interactive 3D Geometry</span>
              </>
            )}
          </div>

          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full backdrop-blur-md ${
            isLuxury
              ? 'text-[#655E56] bg-[#FFFFFF]/80 border border-[#9E7B4F]/20 font-serif'
              : isFuturistic
              ? 'text-[#7DD3FC] bg-[#02040A]/80 border border-[#00F0FF]/30'
              : 'text-[#A09B92] bg-[#111215]/80 border border-white/5'
          }`}>
            Three.js WebGL
          </span>
        </div>
      )}

      {/* Bottom Interactive Hint Overlay */}
      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between pointer-events-none z-20 text-[10px]">
        <span className={`flex items-center gap-1 font-mono transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-70'
        } ${isLuxury ? 'text-[#9E7B4F] font-serif' : isFuturistic ? 'text-[#00F0FF]' : 'text-[#D2B477]'}`}>
          <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{isLuxury ? 'Drag or hover to rotate sculpture' : isFuturistic ? 'CURSOR_ACTIVE // TACTILE_3D' : 'Drag to rotate 3D node'}</span>
        </span>

        <span className={`font-mono text-[9px] ${
          isLuxury ? 'text-[#655E56]' : isFuturistic ? 'text-[#7DD3FC]' : 'text-slate-500'
        }`}>
          PBR Metallic
        </span>
      </div>
    </div>
  );
};
