"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/cn";

interface BackgroundBeamsProps {
  className?: string;
}

export default function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const beams: { x: number; y: number; vx: number; vy: number; hue: number; width: number }[] = [];

    for (let i = 0; i < 8; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        hue: 35 + Math.random() * 20,
        width: 80 + Math.random() * 120,
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      time += 0.002;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((beam) => {
        beam.x += beam.vx;
        beam.y += beam.vy;

        if (beam.x < -beam.width) beam.x = canvas.width + beam.width;
        if (beam.x > canvas.width + beam.width) beam.x = -beam.width;
        if (beam.y < -beam.width) beam.y = canvas.height + beam.width;
        if (beam.y > canvas.height + beam.width) beam.y = -beam.width;

        const gradient = ctx.createRadialGradient(
          beam.x,
          beam.y,
          0,
          beam.x,
          beam.y,
          beam.width
        );
        gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 60%, 0.08)`);
        gradient.addColorStop(0.4, `hsla(${beam.hue + 20}, 60%, 50%, 0.04)`);
        gradient.addColorStop(1, `hsla(${beam.hue + 40}, 50%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          beam.x - beam.width,
          beam.y - beam.width,
          beam.width * 2,
          beam.width * 2
        );
      });

      // Extra sweeping light beams (thin lines)
      for (let i = 0; i < 3; i++) {
        const x = ((time * 60 + i * 300) % (canvas.width + 400)) - 200;
        const y = canvas.height * (0.3 + Math.sin(time + i * 2) * 0.3);

        const grad = ctx.createLinearGradient(x - 200, y, x + 200, y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, `hsla(${45 + i * 15}, 80%, 70%, 0.04)`);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.fillRect(x - 200, y - 1, 400, 3);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      aria-hidden="true"
    />
  );
}
