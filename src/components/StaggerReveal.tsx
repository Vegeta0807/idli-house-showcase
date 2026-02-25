import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container + Item pattern for staggered spring reveals.
 * Wrap items in StaggerItem inside a StaggerContainer.
 */
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
  delay = 0,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          damping: 22,
          stiffness: 80,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
