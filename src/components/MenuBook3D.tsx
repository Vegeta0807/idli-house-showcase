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
  const isMobile = useIsMobile();

  const w = isMobile ? 280 : 420;
  const h = isMobile ? 400 : 580;

  // 0 = cover
  // 1..pages.length = real pages
  // pages.length + 1 = end page
  const pages: BookPage[] = [
    {
      front: (
        <PageContent
          image={productIdli}
          tag="Bestseller"
          title="Fresh IDLI"
          desc="Perfectly steamed, cloud-soft idlis made fresh daily with premium ingredients and RO purified water."
          bullets={[
            "Steamed to cloud-soft perfection",
            "Premium rice & urad dal",
            "Served fresh daily",
          ]}
        />
      ),
      back: <DecorativeBack />,
    },
    {
      front: (
        <PageContent
          image={productBatter}
          tag="Fresh Daily"
          title="Premium IDLI Batter"
          desc="Expertly fermented, ready-to-steam batter. Consistent quality, perfect texture — every time."
          bullets={[
            "Perfect fermentation every batch",
            "RO purified water used",
            "Zero hand-contact process",
          ]}
        />
      ),
      back: <DecorativeBack />,
    },
  ];

  const totalDisplayPages = pages.length + 2; // cover + real pages + end
  const [pageIndex, setPageIndex] = useState(0); // start closed

  const isOpen = pageIndex > 0;
  const isEnd = pageIndex === pages.length + 1;

  const nextPage = useCallback(() => {
    setPageIndex((p) => Math.min(p + 1, pages.length + 1));
  }, [pages.length]);

  const prevPage = useCallback(() => {
    setPageIndex((p) => Math.max(p - 1, 0));
  }, []);

  const faceStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-6">
      <div style={{ perspective: "1600px" }}>
        <div
          className="relative"
          style={{
            width: `${w}px`,
            height: `${h}px`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* ===== END PAGE ===== */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: pages.length + 2,
              boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
            }}
          >
            <div className="w-full h-full bg-card flex items-center justify-center">
              <div className="text-center p-6">
                <img
                  src={logo}
                  alt=""
                  className="w-16 md:w-24 mx-auto mb-3 opacity-20"
                />
                <p className="font-display text-sm md:text-base text-muted-foreground/50 uppercase tracking-widest">
                  End of Menu
                </p>
              </div>
            </div>
          </div>

          {/* ===== FLIPPABLE PAGES ===== */}
          {[...pages].reverse().map((page, reverseIdx) => {
            const pageNumber = pages.length - reverseIdx; // 2,1
            const isFlipped = pageIndex > pageNumber;

            return (
              <motion.div
                key={pageNumber}
                className="absolute inset-0"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "0% 50%",
                  zIndex: pageNumber,
                }}
                animate={{ rotateY: isFlipped ? -180 : 0 }}
                transition={{ duration: 0.7 }}
              >
                <div style={faceStyle} className="bg-card overflow-hidden">
                  {page.front}
                </div>

                <div
                  style={{ ...faceStyle, transform: "rotateY(180deg)" }}
                  className="bg-card overflow-hidden"
                >
                  {page.back}
                </div>
              </motion.div>
            );
          })}

          {/* ===== COVER ===== */}
          <motion.div
            className="absolute inset-0 cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "0% 50%",
              zIndex: pages.length + 3,
            }}
            animate={{ rotateY: pageIndex > 0 ? -180 : 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => {
              if (pageIndex === 0) setPageIndex(1);
            }}
          >
            <div
              style={faceStyle}
              className="bg-primary flex flex-col items-center justify-center"
            >
              <img src={logo} alt="IDLI House" className="w-20 mb-4" />
              <h2 className="text-white font-display text-2xl font-bold">
                IDLI House
              </h2>
              <p className="text-white/70 text-xs uppercase tracking-widest">
                Menu
              </p>
            </div>

            <div
              style={{
                ...faceStyle,
                transform: "rotateY(180deg)",
                background: "hsl(var(--primary))",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      {isOpen && (
        <div className="flex items-center gap-4">
          <button onClick={prevPage} className="px-4 py-2 text-accent">
            {pageIndex === 1 ? "← Close" : "← Prev"}
          </button>

          <span className="text-xs text-muted-foreground">
            {pageIndex} / {totalDisplayPages - 1}
          </span>

          {!isEnd && (
            <button onClick={nextPage} className="px-4 py-2 text-accent">
              Next →
            </button>
          )}
        </div>
      )}
    </div>
  );
};

function DecorativeBack() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-secondary">
      <img src={logo} alt="" className="w-20 opacity-10" />
    </div>
  );
}

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
        <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{desc}</p>
        <div className="space-y-1 mt-auto text-xs text-muted-foreground">
          {bullets.map((b) => (
            <div key={b}>• {b}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuBook3D;