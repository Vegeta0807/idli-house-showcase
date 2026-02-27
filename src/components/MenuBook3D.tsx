import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productIdli from "@/assets/product-idli.jpg";
import productBatter from "@/assets/product-batter.jpg";
import logo from "@/assets/logo.svg";
import { useIsMobile } from "@/hooks/use-mobile";

const MenuBook3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-center" style={{ perspective: "1800px" }}>
      <div
        className="relative"
        style={{
          width: isMobile ? "300px" : "520px",
          height: isMobile ? "420px" : "680px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Back page (visible when open) — Right side: Batter */}
        <div
          className="absolute inset-0 rounded-r-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            boxShadow: isOpen ? "2px 4px 30px rgba(0,0,0,0.3)" : "none",
          }}
        >
          <div className="w-full h-full bg-card border border-border/40 rounded-r-lg flex flex-col">
            {/* Image */}
            <div className="relative h-[45%] overflow-hidden rounded-tr-lg">
              <img
                src={productBatter}
                alt="Premium IDLI Batter"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <span className="absolute top-4 right-4 bg-accent text-accent-foreground font-body text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                Fresh Daily
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
                  Premium IDLI Batter
                </h3>
                <div className="w-12 h-0.5 bg-accent mb-3 md:mb-4" />
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                  Expertly fermented, ready-to-steam batter. Consistent quality, perfect texture — every time.
                </p>
              </div>

              <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Perfect fermentation every batch
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  RO purified water used
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Zero hand-contact process
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 md:mt-6 font-display text-xs md:text-sm font-semibold text-accent hover:text-accent/80 uppercase tracking-widest transition-colors cursor-pointer"
              >
                ← Close Menu
              </button>
            </div>
          </div>
        </div>

        {/* Middle page (spine area, visible when open) — Left side: Idli */}
        <motion.div
          className="absolute inset-0 origin-left"
          style={{
            transformStyle: "preserve-3d",
            zIndex: isOpen ? 10 : 5,
          }}
          animate={{
            rotateY: isOpen ? -160 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1],
          }}
        >
          {/* Front of inner page (Idli product) */}
          <div
            className="absolute inset-0 rounded-r-lg overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-full h-full bg-card border border-border/40 rounded-r-lg flex flex-col">
              <div className="relative h-[45%] overflow-hidden rounded-tr-lg">
                <img
                  src={productIdli}
                  alt="Fresh IDLI"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-accent text-accent-foreground font-body text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Bestseller
                </span>
              </div>

              <div className="flex-1 p-5 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
                    Fresh IDLI
                  </h3>
                  <div className="w-12 h-0.5 bg-accent mb-3 md:mb-4" />
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                    Perfectly steamed, cloud-soft idlis made fresh daily with premium ingredients and RO purified water.
                  </p>
                </div>

                <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Steamed to cloud-soft perfection
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Premium rice & urad dal
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Served fresh daily
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back of inner page (decorative) */}
          <div
            className="absolute inset-0 rounded-l-lg"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center opacity-10">
              <img src={logo} alt="" className="w-32 md:w-48" />
            </div>
          </div>
        </motion.div>

        {/* Cover */}
        <motion.div
          className="absolute inset-0 origin-left cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            zIndex: isOpen ? 20 : 15,
          }}
          animate={{
            rotateY: isOpen ? -180 : 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {/* Front cover */}
          <div
            className="absolute inset-0 rounded-lg overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              boxShadow: "4px 8px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12 rounded-lg"
              style={{
                background: `linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(165, 85%, 12%) 50%, hsl(165, 60%, 20%) 100%)`,
              }}
            >
              {/* Decorative border */}
              <div className="absolute inset-3 md:inset-5 border border-accent/30 rounded-md" />
              <div className="absolute inset-4 md:inset-6 border border-accent/15 rounded-sm" />

              {/* Corner ornaments */}
              <div className="absolute top-5 left-5 md:top-7 md:left-7 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-accent/50" />
              <div className="absolute top-5 right-5 md:top-7 md:right-7 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-accent/50" />
              <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 border-accent/50" />
              <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-accent/50" />

              <img src={logo} alt="IDLI House" className="w-20 h-20 md:w-32 md:h-32 mb-4 md:mb-6 drop-shadow-lg" />

              <div className="w-16 md:w-24 h-px bg-accent/50 mb-3 md:mb-4" />

              <h2 className="font-display text-2xl md:text-4xl font-black text-primary-foreground text-center leading-tight mb-2 md:mb-3">
                IDLI House
              </h2>

              <p className="font-body text-primary-foreground/60 text-xs md:text-sm uppercase tracking-[0.25em] mb-6 md:mb-10">
                Menu
              </p>

              <div className="w-16 md:w-24 h-px bg-accent/50 mb-4 md:mb-6" />

              <motion.p
                className="font-display text-accent text-xs md:text-sm uppercase tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Open to View →
              </motion.p>

              {/* Spine shadow */}
              <div
                className="absolute left-0 top-0 bottom-0 w-4 md:w-6"
                style={{
                  background: "linear-gradient(to right, rgba(0,0,0,0.3), transparent)",
                }}
              />
            </div>
          </div>

          {/* Back of cover */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: `linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(165, 85%, 14%) 100%)`,
              boxShadow: "inset 2px 0 8px rgba(0,0,0,0.2)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuBook3D;
