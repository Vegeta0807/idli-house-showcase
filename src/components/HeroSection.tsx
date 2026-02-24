import { motion } from "framer-motion";
import heroImg from "@/assets/hero-idli.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Premium Idli with chutney and sambar" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 py-32 md:py-0">
      <div className="max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4"
        >
          Premium South Indian Taste
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl font-bold text-primary leading-tight mb-6"
        >
          IDLI House
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-primary/80 font-body text-lg md:text-xl leading-relaxed mb-10"
        >
          Softness You Can Taste. Hygiene You Can Trust.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="inline-block bg-accent text-accent-foreground font-body font-semibold px-8 py-4 rounded-full text-base hover:brightness-110 transition-all duration-300 shadow-lg shadow-accent/30"
        >
          Contact Us & Get Discount
        </motion.a>
      </div>
    </div>
  </section>
);

export default HeroSection;
