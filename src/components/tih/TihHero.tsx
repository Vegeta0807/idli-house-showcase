import { useEffect, useRef } from "react";
import heroImg from "@/assets/tih/hero-idli-banana-leaf.jpg";
import { scrollToId } from "./effects";

const TihHero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const bg = bgRef.current;
      if (bg && window.scrollY < window.innerHeight * 1.5) {
        bg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        ref={bgRef}
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="hero-corner hero-corner-tl">~ Mumbai &amp; Navi Mumbai ~</div>
      <div className="hero-corner hero-corner-tr">~ Est. 2024 ~</div>
      <div className="hero-corner hero-corner-bl">No soda · No additives</div>
      <div className="hero-corner hero-corner-br">Bulk supply available</div>

      <div className="hero-stamp">
        Made
        <br />
        like
        <br />
        amma's
        <small>★ TIH ★</small>
      </div>

      <div className="hero-inner">
        <div className="hero-mark" />
        <span className="hero-eyebrow">The Idli House</span>
        <h1 className="hero-h">
          <span className="hero-h-line">Soft.</span>
          <span className="hero-h-line">Honest.</span>
          <span className="hero-h-line">Like home.</span>
        </h1>
        <p className="hero-sub">
          For kitchens that care, made with RO water, no soda, no shortcuts.
          Delivered fresh to your kitchen, every morning.
        </p>
        <div className="hero-btns">
          <button className="btn-p" onClick={() => scrollToId("contact")}>
            Order for Your Kitchen
          </button>
          <button className="btn-s" onClick={() => scrollToId("story")}>
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default TihHero;
