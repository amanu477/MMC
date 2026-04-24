import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  loop?: boolean;
};

export function EkgLine({
  className,
  color = "currentColor",
  strokeWidth = 1.5,
  duration = 4,
  loop = true,
}: Props) {
  const reduce = useReducedMotion();
  const path =
    "M0,40 L120,40 L140,40 L160,30 L175,55 L190,10 L205,70 L220,35 L240,40 L360,40 L380,40 L400,32 L415,52 L430,18 L445,62 L460,38 L480,40 L600,40 L620,40 L640,28 L655,58 L670,12 L685,68 L700,36 L720,40 L840,40 L860,40 L880,32 L895,50 L910,22 L925,60 L940,38 L960,40 L1200,40";

  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0.85 }}
        animate={
          reduce
            ? { pathLength: 1 }
            : loop
              ? { pathLength: [0, 1, 1], opacity: [0.85, 0.85, 0] }
              : { pathLength: 1 }
        }
        transition={
          reduce
            ? { duration: 0 }
            : loop
              ? { duration, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }
              : { duration, ease: "easeInOut" }
        }
      />
    </svg>
  );
}
