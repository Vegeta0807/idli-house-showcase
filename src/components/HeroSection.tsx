import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-idli.jpg";
import FloatingElement from "./FloatingElement";
import MagneticButton from "./MagneticButton";
import SmoothReveal from "./SmoothReveal";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const rawBgY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const rawTextY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 100]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const bgY = useSpring(rawBgY, { damping: 30, stiffness: 100 });
  const textY = useSpring(rawTextY, { damping: 30, stiffness: 100 });
  const scale = useSpring(rawScale, { damping: 30, stiffness: 100 });

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
        <img
          src={heroImg}
          alt="Premium Idli with chutney and sambar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </motion.div>

      <motion.div
        className="relative container mx-auto px-4 md:px-8 py-32 md:py-0"
        style={{ y: textY, opacity: rawOpacity }}
      >
        <div className="max-w-3xl">

          <SmoothReveal delay={0.3}>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-6">
              Premium South Indian Taste
            </p>
          </SmoothReveal>

          {/* 🔥 Premium Logo Heading */}
          <div className="flex items-end gap-6 mb-8">

            {/* IDLI */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 blur-3xl bg-lime-400/30 rounded-full scale-125" />

              {/* Animated Gradient Text */}
              <motion.h1
                className="relative font-display text-6xl md:text-8xl font-bold bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-[length:200%_200%] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                IDLI
              </motion.h1>
            </motion.div>

            {/* House (offset slightly down for premium look) */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative translate-y-3"
            >
              <motion.h1
                className="font-display text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 bg-[length:200%_200%] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                House
              </motion.h1>
            </motion.div>

          </div>

          <SmoothReveal delay={0.8}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Softness You Can Taste.
              <br />
              Hygiene You Can Trust.
            </p>
          </SmoothReveal>

          <SmoothReveal delay={1}>
            <MagneticButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-3 bg-amber-500 text-white font-semibold px-10 py-5 rounded-full text-base shadow-[0_8px_30px_-4px] shadow-amber-500/40 hover:shadow-amber-500/60 transition-shadow duration-300"
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
    </section>
  );
};

export default HeroSection;
