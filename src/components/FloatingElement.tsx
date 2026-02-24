import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const FloatingElement = ({ children, delay = 0, duration = 4, y = 15, className = "" }: FloatingElementProps) => (
  <motion.div
    animate={{ y: [-y, y, -y] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FloatingElement;
