import { useEffect, useState } from "react";
import { scrollToId } from "./effects";

const links = [
  { label: "Story", id: "story" },
  { label: "Products", id: "products" },
  { label: "Who We Serve", id: "serve" },
  { label: "Distribute", id: "dist" },
];

const TihNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <nav className={scrolled ? "s" : ""}>
        <a
          className="logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="logo-n">THE IDLI HOUSE</div>
          <div className="logo-t">Bulk Idli &amp; Batter Supplier</div>
          <div className="logo-tag">For kitchens that care</div>
        </a>
        <div className="nav-r">
          {links.map((l) => (
            <a key={l.id} onClick={() => go(l.id)}>
              {l.label}
            </a>
          ))}
          <a className="nav-cta" onClick={() => go("contact")}>
            Order Now
          </a>
        </div>
        <div className="hbg" onClick={() => setMenuOpen(true)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div className={menuOpen ? "mob on" : "mob"}>
        <span className="mob-x" onClick={() => setMenuOpen(false)}>
          ✕
        </span>
        <a onClick={() => go("story")}>Story</a>
        <a onClick={() => go("products")}>Products</a>
        <a onClick={() => go("serve")}>Who We Serve</a>
        <a onClick={() => go("dist")}>Distribute</a>
        <a onClick={() => go("contact")}>Contact</a>
      </div>
    </>
  );
};

export default TihNav;
