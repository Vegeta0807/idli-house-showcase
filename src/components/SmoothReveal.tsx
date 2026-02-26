import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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

const SmoothReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
  duration,
  once = true,
}: SmoothRevealProps) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once, margin: isMobile ? "-20px" : "-60px" });
  const d = directionMap[direction];

  const revealDistance = isMobile ? Math.min(distance, 18) : distance;

  const hiddenState = isMobile
    ? { opacity: 0, x: d.x * revealDistance, y: d.y * revealDistance }
    : { opacity: 0, x: d.x * revealDistance, y: d.y * revealDistance, filter: "blur(8px)" };

  const visibleState = isMobile
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={
        isMobile
          ? { duration: duration ?? 0.35, ease: [0.22, 1, 0.36, 1], delay }
          : { type: "spring", damping: 25, stiffness: 80, delay }
      }
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothReveal;

