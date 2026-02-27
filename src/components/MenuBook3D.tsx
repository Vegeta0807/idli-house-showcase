import { useState } from "react";
import { motion } from "framer-motion";
import productIdli from "@/assets/product-idli.jpg";
import productBatter from "@/assets/product-batter.jpg";
import logo from "@/assets/logo.svg";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Tri-fold 3D menu inspired by tympanus.net/Tutorials/3DRestaurantMenu
 * Structure: Cover (flips left) | Middle (stationary) | Right (flips right)
 * All panels stack on top of each other, unfolding outward from center.
 */
const MenuBook3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const w = isMobile ? 280 : 420;
  const h = isMobile ? 400 : 620;

  // Shared page styling — paper texture feel
  const pageStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  };

  const goldBorderShadow =
    "inset 0 0 0 12px hsl(var(--card)), inset 0 0 0 13px hsl(var(--accent) / 0.4), inset 0 0 0 14px hsl(var(--card)), inset 0 0 0 15px hsl(var(--accent) / 0.2)";

  return (
    <div
      className="flex items-center justify-center py-8"
      style={{ perspective: "1600px" }}
    >
      {/* Container — all panels positioned absolutely inside */}
      <div
        className="relative"
        style={{
          width: `${w}px`,
          height: `${h}px`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* ====== MIDDLE (stationary, lowest z-index) ====== */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.4)" : "none",
            transition: "box-shadow 0.6s ease",
          }}
        >
          <div
            className="w-full h-full bg-card overflow-hidden flex flex-col"
            style={{ boxShadow: goldBorderShadow }}
          >
            {/* Idli product page */}
            <div className="relative h-[40%] overflow-hidden">
              <img
                src={productIdli}
                alt="Fresh IDLI"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <span className="absolute top-3 right-3 bg-accent text-accent-foreground font-body text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                Bestseller
              </span>
            </div>
            <div className="flex-1 p-4 md:p-6 flex flex-col">
              <h3 className="font-display text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">
                Fresh IDLI
              </h3>
              <div className="w-10 h-0.5 bg-accent mb-2 md:mb-3" />
              <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Perfectly steamed, cloud-soft idlis made fresh daily with premium ingredients and RO purified water.
              </p>
              <div className="space-y-1.5 md:space-y-2 mt-auto">
                {["Steamed to cloud-soft perfection", "Premium rice & urad dal", "Served fresh daily"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-body">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient overlay for depth when closed */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0) 60%, rgba(0,0,0,0.06) 100%)",
                opacity: isOpen ? 1 : 0,
              }}
            />
          </div>
        </div>

        {/* ====== RIGHT PANEL (flips right, origin-right) ====== */}
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "100% 50%",
            zIndex: 2,
          }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{
            duration: 0.7,
            ease: [0.645, 0.045, 0.355, 1],
            delay: isOpen ? 0.15 : 0,
          }}
        >
          {/* Front of right panel (blank/decorative — hidden behind cover when closed) */}
          <div
            style={{
              ...pageStyle,
              background: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)",
              boxShadow: goldBorderShadow,
            }}
          >
            <div className="w-full h-full flex items-center justify-center opacity-[0.08]">
              <img src={logo} alt="" className="w-24 md:w-36" />
            </div>
          </div>

          {/* Back of right panel (Batter product — visible when flipped open) */}
          <div
            className="overflow-hidden"
            style={{
              ...pageStyle,
              transform: "rotateY(180deg)",
              boxShadow: goldBorderShadow,
            }}
          >
            <div className="w-full h-full bg-card flex flex-col">
              <div className="relative h-[40%] overflow-hidden">
                <img
                  src={productBatter}
                  alt="Premium IDLI Batter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-accent text-accent-foreground font-body text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Fresh Daily
                </span>
              </div>
              <div className="flex-1 p-4 md:p-6 flex flex-col">
                <h3 className="font-display text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">
                  Premium IDLI Batter
                </h3>
                <div className="w-10 h-0.5 bg-accent mb-2 md:mb-3" />
                <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  Expertly fermented, ready-to-steam batter. Consistent quality, perfect texture — every time.
                </p>
                <div className="space-y-1.5 md:space-y-2 mt-auto">
                  {["Perfect fermentation every batch", "RO purified water used", "Zero hand-contact process"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-body">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-3 md:mt-5 font-display text-[10px] md:text-xs font-semibold text-accent hover:text-accent/80 uppercase tracking-widest transition-colors cursor-pointer self-start"
                >
                  ← Close Menu
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ====== COVER (flips left, origin-left, highest z-index) ====== */}
        <motion.div
          className="absolute inset-0 cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "0% 50%",
            zIndex: 10,
          }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? -180 : 0 }}
          transition={{
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1],
            delay: isOpen ? 0 : 0.1,
          }}
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {/* Front cover */}
          <div
            className="rounded-sm overflow-hidden"
            style={{
              ...pageStyle,
              boxShadow: "4px 8px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10"
              style={{
                background: `linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(165, 85%, 12%) 50%, hsl(165, 60%, 20%) 100%)`,
              }}
            >
              {/* Decorative borders */}
              <div className="absolute inset-3 md:inset-4 border border-accent/30" />
              <div className="absolute inset-[14px] md:inset-5 border border-accent/15" />

              {/* Corner ornaments */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 w-3 h-3 md:w-5 md:h-5 border-t-2 border-l-2 border-accent/50" />
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-3 h-3 md:w-5 md:h-5 border-t-2 border-r-2 border-accent/50" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-3 h-3 md:w-5 md:h-5 border-b-2 border-l-2 border-accent/50" />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-3 h-3 md:w-5 md:h-5 border-b-2 border-r-2 border-accent/50" />

              <img src={logo} alt="IDLI House" className="w-16 h-16 md:w-28 md:h-28 mb-3 md:mb-5 drop-shadow-lg" />
              <div className="w-12 md:w-20 h-px bg-accent/50 mb-2 md:mb-3" />
              <h2 className="font-display text-xl md:text-3xl font-black text-primary-foreground text-center leading-tight mb-1 md:mb-2">
                IDLI House
              </h2>
              <p className="font-body text-primary-foreground/60 text-[10px] md:text-xs uppercase tracking-[0.25em] mb-4 md:mb-8">
                Menu
              </p>
              <div className="w-12 md:w-20 h-px bg-accent/50 mb-3 md:mb-5" />

              <motion.p
                className="font-display text-accent text-[10px] md:text-xs uppercase tracking-widest"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Tap to Open →
              </motion.p>

              {/* Spine shadow on left edge */}
              <div
                className="absolute left-0 top-0 bottom-0 w-3 md:w-5"
                style={{
                  background: "linear-gradient(to right, rgba(0,0,0,0.25), transparent)",
                }}
              />
            </div>
          </div>

          {/* Back of cover (visible when flipped open — just dark) */}
          <div
            style={{
              ...pageStyle,
              transform: "rotateY(180deg)",
              background: `linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(165, 85%, 14%) 100%)`,
              boxShadow: "inset 3px 0 10px rgba(0,0,0,0.25)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuBook3D;
