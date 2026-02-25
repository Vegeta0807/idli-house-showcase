import { useState, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
{ label: "Home", id: "hero" },
{ label: "About", id: "about" },
{ label: "Quality", id: "hygiene" },
{ label: "Products", id: "products" },
{ label: "Contact", id: "contact" }];


const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  const handleClick = useCallback((id: string) => {
    scrollToSection(id);
    setOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-card/90 backdrop-blur-xl border-b border-border shadow-lg" :
      "bg-transparent border-b border-transparent"}`
      }>

      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <motion.button
          onClick={() => scrollToSection("hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-display text-2xl font-bold text-foreground tracking-tight font-sans text-lime-500">

          IDLI <span className="text-accent">House</span>
        </motion.button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) =>
          <motion.li
            key={link.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, type: "spring", damping: 20 }}>

              <button
              onClick={() => handleClick(link.id)}
              className="font-body text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200 relative group text-slate-100">

                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            </motion.li>
          )}
        </ul>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}>

          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border overflow-hidden">

            <ul className="flex flex-col items-center gap-2 py-6">
              {navLinks.map((link, i) =>
            <motion.li
              key={link.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, type: "spring", damping: 20 }}>

                  <button
                onClick={() => handleClick(link.id)}
                className="font-body text-base font-medium text-muted-foreground hover:text-accent transition-colors py-2 px-4">

                    {link.label}
                  </button>
                </motion.li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

};

export default Navbar;