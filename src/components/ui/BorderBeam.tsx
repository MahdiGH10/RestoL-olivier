"use client";

import { cn } from "../../lib/cn";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  size?: number;
}

export default function BorderBeam({
  className,
  duration = 8,
  colorFrom = "#BE8A3D",
  colorTo = "#8E9A6C",
  size = 120,
}: BorderBeamProps) {
  const conicGradient = `conic-gradient(from 0deg at 50% 50%, transparent, ${colorFrom}, transparent 30%, transparent 60%, ${colorTo}, transparent)`;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-[-16px] opacity-60"
        style={{
          background: conicGradient,
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 0.5px))",
          maskImage:
            "radial-gradient(farthest-side, transparent calc(100% - 1px), black calc(100% - 0.5px))",
          animation: `border-beam ${duration}s linear infinite`,
          offsetPath: `rect(0, auto, auto, 0 round ${size}px)`,
        }}
      />
    </div>
  );
}
