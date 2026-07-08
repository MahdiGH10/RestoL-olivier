"use client";

import { cn } from "../../lib/cn";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  speed?: number;
}

export default function Marquee({
  children,
  direction = "left",
  pauseOnHover = true,
  className,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem]",
        className
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[var(--gap)]",
          "animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[var(--gap)]",
          "animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
