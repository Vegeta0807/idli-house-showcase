import { useRef } from "react";
// 3D flip-book menu — commented out for now, kept for later.
// import MenuBook3D from "@/components/MenuBook3D";
import regularIdli from "@/assets/tih/product-regular-idli.jpg";
import miniIdli from "@/assets/tih/product-mini-idli.jpg";
import thatteIdli from "@/assets/tih/product-thatte-idli.jpg";
import podi from "@/assets/tih/process-hands-podi.jpg";
import batter from "@/assets/product-batter.jpg";
import storySpread from "@/assets/tih/story-spread.jpg";
import { scrollToId } from "./effects";

interface Product {
  num: string;
  name: string;
  desc: string;
  link: string;
  img: string;
  /** Optional stock fallback if the primary src fails to load. */
  fallback?: string;
  badge?: string;
}

const products: Product[] = [
  {
    num: "No. 01",
    name: "Regular Idli",
    desc: "The everyday classic. Soft, perfectly fermented, never bouncy. The one your customers will keep coming back for.",
    link: "Enquire",
    img: regularIdli,
  },
  {
    num: "No. 02",
    name: "Mini Idli",
    desc: "Bite-sized, irresistible. Made for kids' tiffins, sambar bowls, and that cafe favourite, mini idli fry.",
    link: "Enquire",
    img: miniIdli,
  },
  {
    num: "No. 03",
    name: "Thatte Idli",
    desc: "Wide, flat, pillowy. The Karnataka classic, a menu standout, made the right way.",
    link: "Enquire",
    img: thatteIdli,
    badge: "Specialty",
  },
  {
    num: "No. 04",
    name: "Coconut Chutney",
    desc: "Fresh-ground daily. No preservatives, no shortcuts. Because an idli is only as good as what's beside it.",
    link: "Enquire",
    img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?w=800&q=80",
    fallback: storySpread,
  },
  {
    num: "No. 05",
    name: "Idli Podi",
    desc: "Our house gunpowder blend. Bold, aromatic, made the slow way. Coming to your kitchen soon.",
    link: "Join Waitlist",
    img: podi,
    badge: "Soon",
  },
  {
    num: "No. 06",
    name: "Idli Batter",
    desc: "Ready to steam, in retail or bulk packs. Naturally fermented, no additives. For homes and kitchens both.",
    link: "Enquire",
    img: batter,
  },
];

const TihProducts = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0 });

  const onDown = (e: React.MouseEvent) => {
    const t = trackRef.current;
    if (!t) return;
    drag.current = {
      down: true,
      startX: e.pageX - t.offsetLeft,
      startLeft: t.scrollLeft,
    };
  };
  const onMove = (e: React.MouseEvent) => {
    const t = trackRef.current;
    if (!t || !drag.current.down) return;
    e.preventDefault();
    const x = e.pageX - t.offsetLeft;
    t.scrollLeft = drag.current.startLeft - (x - drag.current.startX) * 1.8;
  };
  const stop = () => {
    drag.current.down = false;
  };

  return (
    <section id="products" className="products">
      <div className="prod-hd">
        <div className="rv">
          <div className="prod-tag">What We Make</div>
          <h2 className="prod-title">
            On the
            <br />
            <em>menu.</em>
          </h2>
        </div>
        <div className="prod-hint">Drag to explore</div>
      </div>

      <div
        className="prod-track"
        ref={trackRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={stop}
        onMouseLeave={stop}
      >
        {products.map((p) => (
          <div className="pc" key={p.num}>
            <div className="pc-img">
              <img
                src={p.img}
                alt={p.name}
                draggable={false}
                onError={(e) => {
                  if (p.fallback) e.currentTarget.src = p.fallback;
                }}
              />
              <div className="pc-img-overlay" />
              <div className="pc-num">{p.num}</div>
              {p.badge && <div className="pc-badge">{p.badge}</div>}
              <div className="pc-name">{p.name}</div>
            </div>
            <div className="pc-body">
              <p className="pc-desc">{p.desc}</p>
              <a className="pc-link" onClick={() => scrollToId("contact")}>
                {p.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TihProducts;
