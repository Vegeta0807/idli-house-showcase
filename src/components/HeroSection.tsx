import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-idli.jpg";
import logo from "@/assets/logo.svg";
import MagneticButton from "./MagneticButton";
import SmoothReveal from "./SmoothReveal";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const rawBgY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1, 1.1]);

  const bgY = useSpring(rawBgY, { damping: 30, stiffness: 100 });
  const scale = useSpring(rawScale, { damping: 30, stiffness: 100 });

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
        <img
          src={heroImg}
          alt="Premium Idli with chutney and sambar"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(165,85%,10%)]/90 via-[hsl(165,85%,12%)]/70 to-transparent" />
      </motion.div>

      <motion.div
        className="relative container mx-auto px-6 md:px-12 py-32 md:py-0">
        
        <div className="max-w-3xl">
          {/* Logo mark */}
          <SmoothReveal delay={0.2}>
            <motion.img
              src={logo}
              alt="IDLI House Logo"
              className="h-28 md:h-40 w-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 80 }} />
            
          </SmoothReveal>

          <SmoothReveal delay={0.4}>
            <h1 className="font-display sm:text-7xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6 text-7xl">
              Softness You
              <br />
              Can <span className="text-accent italic">Taste.</span>
            </h1>
          </SmoothReveal>

          <SmoothReveal delay={0.6}>
            <p className="text-primary-foreground/70 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-md">
              Premium idli & batter made with RO purified water — hygiene you can trust, freshness you can feel.
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-body font-bold px-10 py-5 rounded-full text-base uppercase tracking-wider shadow-[0_8px_30px_-4px] shadow-accent/40 hover:shadow-accent/60 transition-shadow duration-300">
                
                Order Now
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  animate={isMobile ? { x: 0 } : { x: [0, 4, 0] }}
                  transition={isMobile ? { duration: 0 } : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </MagneticButton>

              <MagneticButton
                onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-3 border-2 border-primary-foreground/30 text-primary-foreground font-body font-bold px-10 py-5 rounded-full text-base uppercase tracking-wider hover:border-primary-foreground/60 transition-colors duration-300">
                
                Learn More
              </MagneticButton>
            </div>
          </SmoothReveal>
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;