"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

interface WordFadeInProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WordFadeIn({ text, className, delay = 0 }: WordFadeInProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.06,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
