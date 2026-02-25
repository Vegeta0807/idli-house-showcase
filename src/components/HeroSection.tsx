import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-idli.jpg";
import FloatingElement from "./FloatingElement";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";
import SmoothReveal from "./SmoothReveal";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Smoothed spring-based parallax for buttery feel
  const rawBgY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const rawTextY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 100]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const bgY = useSpring(rawBgY, { damping: 30, stiffness: 100 });
  const textY = useSpring(rawTextY, { damping: 30, stiffness: 100 });
  const scale = useSpring(rawScale, { damping: 30, stiffness: 100 });

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background with smooth spring scale */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
        <img
          src={heroImg}
          alt="Premium Idli with chutney and sambar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/10" />
      </motion.div>

      {/* Floating decorative circles */}
      <FloatingElement delay={0} duration={5} y={20} className="absolute top-[15%] right-[10%] hidden md:block">
        <div className="w-32 h-32 rounded-full border-2 border-accent/20 backdrop-blur-sm" />
      </FloatingElement>
      <FloatingElement delay={1.5} duration={6} y={15} className="absolute bottom-[20%] right-[20%] hidden md:block">
        <div className="w-20 h-20 rounded-full bg-accent/10 backdrop-blur-sm" />
      </FloatingElement>
      <FloatingElement delay={2} duration={4.5} y={12} className="absolute top-[35%] right-[35%] hidden lg:block">
        <div className="w-10 h-10 rounded-full bg-accent/15" />
      </FloatingElement>

      <motion.div
        className="relative container mx-auto px-4 md:px-8 py-32 md:py-0"
        style={{ y: textY, opacity: rawOpacity }}
      >
        <div className="max-w-2xl">
          {/* Accent bar with spring */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
            className="w-16 h-1 bg-accent mb-8 rounded-full"
          />

          <SmoothReveal delay={0.3} direction="left" distance={40}>
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.25em] mb-6">
              Premium South Indian Taste
            </p>
          </SmoothReveal>

          <TextReveal
  as="h1"
  delay={0.4}
  staggerDelay={0.06}
  className="font-display text-6xl md:text-8xl font-bold leading-[0.95] mb-8 flex gap-4"
>
  <div className="text-lime-500">
    IDLI
  </div>
  <div className="text-amber-500">
    House
  </div>
</TextReveal>
          <SmoothReveal delay={0.8} distance={30}>
            <p className="text-primary/70 font-body text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Softness You Can Taste.
              <br />
              Hygiene You Can Trust.
            </p>
          </SmoothReveal>

          <SmoothReveal delay={1}>
            <MagneticButton
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-body font-semibold px-10 py-5 rounded-full text-base shadow-[0_8px_30px_-4px] shadow-accent/40 hover:shadow-accent/60 transition-shadow duration-300"
            >
              Contact Us & Get Discount
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </MagneticButton>
          </SmoothReveal>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, type: "spring", damping: 15 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-primary/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
