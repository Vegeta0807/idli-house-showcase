import { useEffect } from "react";

/** Reveal-on-scroll: toggles `.on` for every `.rv` element as it enters view. */
export const useReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            obs.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

/** Smooth-scroll to a section id; used by nav + CTA links. */
export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
