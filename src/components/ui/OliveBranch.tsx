import { motion } from "framer-motion";

export default function OliveBranch({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.path
        d="M100 10 C90 90 110 160 95 240 C88 275 92 305 100 330"
        stroke="#BE8A3D"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
      />
      <g stroke="#8E9A6C" strokeWidth="2" strokeLinecap="round">
        {[
          { cx: 72, cy: 60, rot: -28 },
          { cx: 128, cy: 90, rot: 28 },
          { cx: 68, cy: 130, rot: -30 },
          { cx: 130, cy: 160, rot: 30 },
          { cx: 70, cy: 200, rot: -26 },
          { cx: 126, cy: 225, rot: 26 },
        ].map((leaf, i) => (
          <motion.ellipse
            key={i}
            cx={leaf.cx}
            cy={leaf.cy}
            rx={26}
            ry={11}
            transform={`rotate(${leaf.rot} ${leaf.cx} ${leaf.cy})`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 + i * 0.2, ease: "easeOut" }}
          />
        ))}
      </g>
      {[
        { cx: 60, cy: 52 },
        { cx: 140, cy: 82 },
        { cx: 56, cy: 122 },
        { cx: 142, cy: 152 },
      ].map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r={5}
          fill="#BE8A3D"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 + i * 0.25, ease: "backOut" }}
        />
      ))}
    </motion.svg>
  );
}
