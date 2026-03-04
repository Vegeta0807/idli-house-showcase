import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import productIdli from "@/assets/product-idli.jpg";
import productBatter from "@/assets/product-batter.jpg";
import logo from "@/assets/logo.svg";
import { useIsMobile } from "@/hooks/use-mobile";

interface BookPage {
  front: React.ReactNode;
  back: React.ReactNode;
}

const MenuBook3D = () => {
  const [currentPage, setCurrentPage] = useState(-1); // -1 = closed (cover visible)
  const isMobile = useIsMobile();

  const w = isMobile ? 280 : 420;
  const h = isMobile ? 400 : 580;

  const goldBorder =
    "inset 0 0 0 10px hsl(var(--card)), inset 0 0 0 11px hsl(var(--accent) / 0.35), inset 0 0 0 12px hsl(var(--card)), inset 0 0 0 13px hsl(var(--accent) / 0.15)";

  // ---- PAGE CONTENT ----
  const pages: BookPage[] = [
    {
      // Page 0 front: Idli
      front: (
        <PageContent
          image={productIdli}
          tag="Bestseller"
          title="Fresh IDLI"
          desc="Perfectly steamed, cloud-soft idlis made fresh daily with premium ingredients and RO purified water."
          bullets={["Steamed to cloud-soft perfection", "Premium rice & urad dal", "Served fresh daily"]}
        />
      ),
      // Page 0 back: decorative
      back: (
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <img src={logo} alt="" className="w-20 md:w-32 opacity-[0.06]" />
        </div>
      ),
    },
    {
      // Page 1 front: Batter
      front: (
        <PageContent
          image={productBatter}
          tag="Fresh Daily"
          title="Premium IDLI Batter"
          desc="Expertly fermented, ready-to-steam batter. Consistent quality, perfect texture — every time."
          bullets={["Perfect fermentation every batch", "RO purified water used", "Zero hand-contact process"]}
        />
      ),
      // Page 1 back: decorative
      back: (
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <img src={logo} alt="" className="w-20 md:w-32 opacity-[0.06]" />
        </div>
      ),
    },
  ];

  const totalPages = pages.length;
  const isOpen = currentPage >= 0;
  const isLastPage = currentPage >= pages.length;

  const nextPage = useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, pages.length));
  }, [pages.length]);

  const prevPage = useCallback(() => {
    setCurrentPage((p) => p - 1);
  }, []);

  const faceStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-6">
      {/* Book */}
      <div style={{ perspective: "1600px" }}>
        <div
          className="relative"
          style={{
            width: `${w}px`,
            height: `${h}px`,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transform: "translateZ(0.0001px)",
          }}
        >
          {/* ==== STATIC BACK PAGE (last page back or placeholder) ==== */}
          {isLastPage && (
            <div
              className="absolute inset-0"
              style={{
                zIndex: 0,
                boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
                transition: "box-shadow 0.5s",
                transform: "translateZ(-1px)", // 🔥 prevents flash
                backfaceVisibility: "hidden",
                willChange: "transform",
              }}
            >
              <div className="w-full h-full bg-card flex flex-col items-center justify-center relative" style={{ boxShadow: goldBorder }}>
                <div className="text-center p-6">
                  <img src={logo} alt="" className="w-16 md:w-24 mx-auto mb-3 opacity-20" />
                  <p className="font-display text-sm md:text-base text-muted-foreground/50 uppercase tracking-widest">
                    End of Menu
                  </p>
                </div>
                <button
                  onClick={prevPage}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-[10px] md:text-xs font-semibold text-accent hover:text-accent/70 uppercase tracking-widest transition-colors cursor-pointer px-4 py-2"
                >
                  ← Back
                </button>
              </div>
            </div>
          )}
          {/* ==== FLIPPABLE PAGES (rendered bottom-to-top so page 0 is on top) ==== */}
          {[...pages].reverse().map((page, reverseIdx) => {
            const pageIdx = totalPages - 1 - reverseIdx;
            const isFlipped = currentPage > pageIdx;

            return (
              <motion.div
                key={pageIdx}
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "0% 50%",
                  zIndex: totalPages - pageIdx + 1,
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                }}
                initial={false}
                animate={{
                  rotateY: isFlipped ? -180 : 0,
                  z: 0, // explicit base depth
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.645, 0.045, 0.355, 1],
                }}
              >
                {/* Front face */}
                <div style={{ ...faceStyle, boxShadow: goldBorder }} className="bg-card overflow-hidden">
                  {page.front}
                  {/* In-page navigation */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 py-2 md:py-3 bg-gradient-to-t from-card via-card/95 to-transparent">
                    <button
                      onClick={(e) => { e.stopPropagation(); prevPage(); }}
                      className="font-display text-[10px] md:text-xs font-semibold text-accent hover:text-accent/70 uppercase tracking-widest transition-colors cursor-pointer px-2 py-1"
                    >
                      {pageIdx === 0 ? "✕ Close" : "← Prev"}
                    </button>
                    <span className="font-body text-[10px] md:text-xs text-muted-foreground/60">
                      {pageIdx + 1} / {totalPages}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextPage(); }}
                      className="font-display text-[10px] md:text-xs font-semibold text-accent hover:text-accent/70 uppercase tracking-widest transition-colors cursor-pointer px-2 py-1"
                    >
                      Next →
                    </button>
                  </div>
                  {/* Right-edge shadow for depth */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-4 pointer-events-none"
                    style={{ background: "linear-gradient(to left, rgba(0,0,0,0.08), transparent)" }}
                  />
                </div>

                {/* Back face */}
                <div
                  style={{ ...faceStyle, transform: "rotateY(180deg)", boxShadow: goldBorder }}
                  className="bg-card overflow-hidden"
                >
                  {page.back}
                  {/* Left-edge shadow (spine) */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-4 pointer-events-none"
                    style={{ background: "linear-gradient(to right, rgba(0,0,0,0.1), transparent)" }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* ==== COVER (highest z-index) ==== */}
          <motion.div
            className="absolute inset-0 cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "0% 50%",
              zIndex: totalPages + 5,
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
            initial={false}
            animate={{
              rotateY: isOpen ? -180 : 0,
              z: 2,
            }} transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            onClick={() => {
              if (!isOpen) setCurrentPage(0);
            }}
          >
            {/* Front cover */}
            <div
              className="rounded-sm overflow-hidden"
              style={{
                ...faceStyle,
                boxShadow: "4px 8px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10"
                style={{
                  background: "linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(165, 85%, 12%) 50%, hsl(165, 60%, 20%) 100%)",
                }}
              >
                <div className="absolute inset-3 md:inset-4 border border-accent/30" />
                <div className="absolute inset-[14px] md:inset-5 border border-accent/15" />

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

                <div
                  className="absolute left-0 top-0 bottom-0 w-3 md:w-5"
                  style={{ background: "linear-gradient(to right, rgba(0,0,0,0.25), transparent)" }}
                />
              </div>
            </div>

            {/* Back of cover */}
            <div
              style={{
                ...faceStyle,
                transform: "rotateY(180deg)",
                background: "linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(165, 85%, 14%) 100%)",
                boxShadow: "inset 3px 0 10px rgba(0,0,0,0.25)",
              }}
            />
          </motion.div>
        </div>
      </div>

    </div>
  );
};

/* ---- Reusable page content component ---- */
function PageContent({
  image,
  tag,
  title,
  desc,
  bullets,
}: {
  image: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative h-[50%] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className="absolute top-3 right-3 bg-accent text-accent-foreground font-body text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
          {tag}
        </span>
      </div>
      <div className="flex-1 p-4 md:p-6 flex flex-col">
        <h3 className="font-display text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">
          {title}
        </h3>
        <div className="w-10 h-0.5 bg-accent mb-2 md:mb-3" />
        <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">
          {desc}
        </p>
        <div className="space-y-1.5 mt-auto">
          {bullets.map((t) => (
            <div key={t} className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-body">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuBook3D;
