import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Buttery smooth word-by-word text reveal with spring physics.
 * Inspired by premium food brand sites.
 */
const TextReveal = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  as: Tag = "h2",
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = children.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: 40, opacity: 0 }}
            animate={
              isInView
                ? { y: "0%", rotateX: 0, opacity: 1 }
                : { y: "110%", rotateX: 40, opacity: 0 }
            }
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 90,
              delay: delay + i * staggerDelay,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;
