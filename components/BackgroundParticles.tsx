"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  blur: number;
  glow: number;
  color: [number, number, number];
}

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const createParticles = () => {
      const particles: Particle[] = [];
      const isMobile = window.innerWidth < 768;

      const baseParticleCount = isMobile ? 60 : 120;
      const particleCount = Math.min(
        Math.floor(
          (window.innerWidth * window.innerHeight) /
            (isMobile ? 30000 : 25000)
        ),
        baseParticleCount
      );

      for (let i = 0; i < particleCount; i++) {
        const rand = Math.random();
        let baseColor: [number, number, number];

        if (rand < 0.4) {
          baseColor = [255, 71, 28];
        } else if (rand < 0.8) {
          baseColor = [255, 255, 255];
        } else {
          baseColor = [0, 0, 0];
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (isMobile ? 1.3 : 1.8) + 1,
          speed: Math.random() * 0.15 + 0.07,
          opacity: Math.random() * (isMobile ? 0.25 : 0.4) + 0.2,
          blur: Math.random() * (isMobile ? 0.6 : 0.8) + 0.2,
          glow: Math.random() * (isMobile ? 0.08 : 0.12) + 0.03,
          color: baseColor,
        });
      }

      particlesRef.current = particles;
    };

    createParticles();

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y -= p.speed;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        p.x += Math.sin(Date.now() * 0.001 + i) * 0.1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100 && distance > 0) {
          const force = (100 - distance) / 100;
          p.x -= (dx / distance) * force * 0.5;
          p.y -= (dy / distance) * force * 0.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.opacity})`;
        ctx.filter = `blur(${p.blur}px)`;
        ctx.fill();

        if (p.glow > 0.1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);

          const glowGradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.size * 3
          );

          glowGradient.addColorStop(
            0,
            `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.glow})`
          );
          glowGradient.addColorStop(
            1,
            `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, 0)`
          );

          ctx.fillStyle = glowGradient;
          ctx.filter = `blur(${p.blur * 1.5}px)`;
          ctx.fill();
        }

        ctx.filter = "none";
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: "transparent",
      }}
    />
  );
}