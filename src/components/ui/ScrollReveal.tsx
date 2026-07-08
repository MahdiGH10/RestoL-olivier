import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const variants = {
  up: { y: 40, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: 40, opacity: 0 },
  right: { x: -40, opacity: 0 },
};

export default function ScrollReveal({ children, className, delay = 0, direction = "up" }: Props) {
  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const, delay }}
    >
      {children}
    </motion.div>
  );
}
