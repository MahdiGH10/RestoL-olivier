"use client";

import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function ShimmerButton({ children, href, className, onClick }: ShimmerButtonProps) {
  const Tag = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Tag
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full",
        "px-7 py-3.5 text-sm font-medium tracking-wide",
        "text-ink transition-all duration-300",
        "group",
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="absolute inset-0 bg-gold" />
      <span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/30 to-transparent"
        style={{
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
          maskImage:
            "linear-gradient(90deg, transparent, rgba(250,246,237,0.5) 50%, transparent)",
        }}
      />
      <span className="absolute inset-[1px] rounded-full bg-gold" />
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </Tag>
  );
}
