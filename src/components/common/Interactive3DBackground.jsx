import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const Interactive3DBackground = () => {
  const { theme, isLuxury, isFuturistic } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    } catch {
      return;
    }

    let particles = null;
    let gridMesh = null;
    let animId = null;
    let isVisible = true;

    if (isLuxury) {
      // -----------------------------------------------------------------------
      // LUXURY: Subtle Champagne Gold Floating Embers
      // -----------------------------------------------------------------------
      const count = 55;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 60;
        pos[i + 1] = (Math.random() - 0.5) * 50;
        pos[i + 2] = (Math.random() - 0.5) * 30;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0x9E7B4F,
        size: 0.18,
        transparent: true,
        opacity: 0.45,
      });
      particles = new THREE.Points(geo, mat);
      scene.add(particles);

    } else if (isFuturistic) {
      // -----------------------------------------------------------------------
      // FUTURISTIC: 3D Receding Cyber Grid + Cyan Data Sparks
      // -----------------------------------------------------------------------
      scene.fog = new THREE.FogExp2(0x02040A, 0.035);
      const gridHelper = new THREE.GridHelper(90, 45, 0x006677, 0x0A1526);
      gridHelper.position.y = -15;
      gridHelper.rotation.x = 0.35;
      scene.add(gridHelper);
      gridMesh = gridHelper;

      const count = 90;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 70;
        pos[i + 1] = (Math.random() - 0.5) * 50;
        pos[i + 2] = (Math.random() - 0.5) * 35;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0x00F0FF,
        size: 0.16,
        transparent: true,
        opacity: 0.55,
      });
      particles = new THREE.Points(geo, mat);
      scene.add(particles);

    } else {
      // -----------------------------------------------------------------------
      // ORIGINAL: Deep Space Constellation Dust
      // -----------------------------------------------------------------------
      const count = 65;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 65;
        pos[i + 1] = (Math.random() - 0.5) * 50;
        pos[i + 2] = (Math.random() - 0.5) * 30;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xD2B477,
        size: 0.14,
        transparent: true,
        opacity: 0.35,
      });
      particles = new THREE.Points(geo, mat);
      scene.add(particles);
    }

    // Scroll & Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      if (particles) {
        particles.rotation.y = elapsed * 0.02 + mouseX * 0.05;
        particles.rotation.x = Math.sin(elapsed * 0.03) * 0.03 + mouseY * 0.05;
      }

      if (gridMesh) {
        gridMesh.position.z = (elapsed * 3) % 2;
        gridMesh.rotation.y = mouseX * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      try {
        renderer.dispose();
      } catch {
        // ignore
      }
    };
  }, [theme, isLuxury, isFuturistic]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{
        opacity: isLuxury ? 0.6 : isFuturistic ? 0.75 : 0.5
      }}
    />
  );
};
