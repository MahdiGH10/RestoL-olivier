"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  highlightClassName?: string;
}

export default function TextGenerateEffect({
  words,
  className,
  highlightClassName,
}: TextGenerateEffectProps) {
  const wordArray = words.split(" ");

  return (
    <span className={cn("inline", className)}>
      {wordArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: idx * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={cn("inline-block mr-[0.3em]", highlightClassName)}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
