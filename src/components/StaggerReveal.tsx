import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
  delay = 0,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: isMobile ? "-12px" : "-60px" });
  const itemStagger = isMobile ? Math.min(staggerDelay, 0.035) : staggerDelay;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: itemStagger,
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

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  const isMobile = useIsMobile();


  const variants = {
    hidden: { opacity: 0, y: isMobile ? 16 : 40, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: isMobile
        ? {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }
        : {
          type: "spring",
          damping: 22,
          stiffness: 80,
        },
    },
  };
  
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

