import logo from "@/assets/logo.svg";
import SmoothReveal from "./SmoothReveal";

const Footer = () => (
  <footer className="bg-primary py-16 md:py-20 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/10 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 md:px-12 relative">
      <div className="text-center">
        <SmoothReveal>
          <img src={logo} alt="IDLI House" className="h-16 w-auto mx-auto mb-6" />
        </SmoothReveal>
        <SmoothReveal delay={0.1}>
          <p className="font-body text-sm text-primary-foreground/50 mb-6">
            Softness You Can Taste. Hygiene You Can Trust.
          </p>
        </SmoothReveal>
        <div className="w-12 h-px bg-primary-foreground/20 mx-auto mb-6" />
        <p className="font-body text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} IDLI House. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
