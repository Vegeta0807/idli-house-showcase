import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const TextReveal = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  as: Tag = "h2"
}: TextRevealProps) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: isMobile ? "-20px" : "-80px" });

  const words = children.split(" ");

  if (isMobile) {
    return (
      <Tag ref={ref} className={className}>
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}>

          {children}
        </motion.span>
      </Tag>);

  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) =>
      <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
          className="inline-block my-[12px]"
          initial={{ y: "110%", rotateX: 40, opacity: 0 }}
          animate={isInView ? { y: "0%", rotateX: 0, opacity: 1 } : { y: "110%", rotateX: 40, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 90,
            delay: delay + i * staggerDelay
          }}>

            {word}
          </motion.span>
        </span>
      )}
    </Tag>);

};

export default TextReveal;