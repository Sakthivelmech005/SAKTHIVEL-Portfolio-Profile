'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GearCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    const point = new THREE.PointLight(0x0ea5e9, 1.2);
    point.position.set(2, 3, 5);
    scene.add(ambient, point);

    const material = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.8,
      roughness: 0.25,
      emissive: 0x0a3f5f,
      emissiveIntensity: 0.08,
    });

    const outerGear = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.24, 20, 64), material);
    const innerGear = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.18, 32), material);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.16, 16, 64), material);

    outerGear.rotation.x = Math.PI / 2;
    innerGear.position.set(0, 0, 0.1);
    ring.rotation.x = Math.PI / 2;
    ring.material = material;

    scene.add(outerGear, innerGear, ring);

    let frameId = 0;
    const animate = () => {
      outerGear.rotation.z += 0.005;
      innerGear.rotation.z -= 0.01;
      ring.rotation.z += 0.007;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-slate-500/30 bg-slate-950/70 shadow-glow">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.18),_transparent_35%)]" />
    </div>
  );
}
