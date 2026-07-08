import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface Props {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function AnimatedCounter({ from = 0, to, suffix = "", prefix = "", decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const once = useRef(false);
  const count = useSpring(from, { stiffness: 60, damping: 20 });
  const rounded = useTransform(count, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el || once.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          once.current = true;
          count.set(to);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, to]);

  return <span ref={ref}><motion.span>{rounded}</motion.span></span>;
}
