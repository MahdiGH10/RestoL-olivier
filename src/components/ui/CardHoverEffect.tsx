"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "../../lib/cn";

interface CardHoverEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardHoverEffect({ children, className }: CardHoverEffectProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const pctX = useTransform(mouseX, [0, 1], [0, 100]);
  const pctY = useTransform(mouseY, [0, 1], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      mouseX.set(e.clientX / rect.width);
      mouseY.set(e.clientY / rect.height);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-[4px] bg-cream-card p-8 md:p-9",
        "border-t-3 border-wood transition-all duration-500 h-full",
        className
      )}
      style={{
        background: useMotionTemplate`radial-gradient(
          600px circle at ${pctX}% ${pctY}%,
          rgba(190,138,61,0.08),
          transparent 60%
        )`,
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
