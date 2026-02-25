import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Quality", id: "hygiene" },
  { label: "Products", id: "products" },
  { label: "Contact", id: "contact" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback((id: string) => {
    scrollToSection(id);
    setOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <button onClick={() => scrollToSection("hero")} className="font-display text-2xl font-bold text-foreground tracking-tight">
          IDLI <span className="text-accent">House</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="font-body text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className="font-body text-base font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
