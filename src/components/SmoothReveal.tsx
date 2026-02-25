import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SmoothRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  once?: boolean;
}

const directionMap = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

/**
 * Spring-physics scroll reveal with direction control.
 * Smooth like McD India — uses spring damping instead of duration-based easing.
 */
const SmoothReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
  once = true,
}: SmoothRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const d = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: d.x * distance,
        y: d.y * distance,
        filter: "blur(8px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, x: d.x * distance, y: d.y * distance, filter: "blur(8px)" }
      }
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 80,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SmoothReveal;
