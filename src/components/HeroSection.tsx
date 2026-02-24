import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-idli.jpg";
import FloatingElement from "./FloatingElement";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroImg} alt="Premium Idli with chutney and sambar" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/20" />
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

      <motion.div className="relative container mx-auto px-4 md:px-8 py-32 md:py-0" style={{ y: textY, opacity }}>
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-accent mb-8 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-accent font-body font-semibold text-sm uppercase tracking-[0.25em] mb-6"
          >
            Premium South Indian Taste
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl md:text-8xl font-bold text-primary leading-[0.95] mb-8"
          >
            IDLI
            <br />
            <span className="text-accent">House</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary/70 font-body text-lg md:text-xl leading-relaxed mb-12 max-w-lg"
          >
            Softness You Can Taste.
            <br />
            Hygiene You Can Trust.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-body font-semibold px-10 py-5 rounded-full text-base shadow-[0_8px_30px_-4px] shadow-accent/40 hover:shadow-accent/60 transition-shadow duration-300"
          >
            Contact Us & Get Discount
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
