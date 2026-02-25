import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const FloatingElement = ({ children, delay = 0, duration = 4, y = 15, className = "" }: FloatingElementProps) => {
  const isMobile = useIsMobile();

  // Skip animation entirely on mobile for performance
  if (isMobile) return null;

  return (
    <motion.div
      animate={{ y: [-y, y, -y] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
