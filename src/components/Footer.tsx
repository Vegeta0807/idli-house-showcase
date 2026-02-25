import SmoothReveal from "./SmoothReveal";

const Footer = () =>
<footer className="bg-foreground py-16 md:py-20 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/10 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 md:px-8 relative">
      <div className="text-center">
        <SmoothReveal>
          <p className="font-display text-3xl font-bold text-primary mb-4 text-lime-500">
            IDLI <span className="text-accent">House</span>
          </p>
        </SmoothReveal>
        <SmoothReveal delay={0.1}>
          <p className="font-body text-sm text-primary/40 mb-6">
            Softness You Can Taste. Hygiene You Can Trust.
          </p>
        </SmoothReveal>
        <div className="w-12 h-px bg-primary/20 mx-auto mb-6" />
        <p className="font-body text-xs text-primary/30">
          © {new Date().getFullYear()} IDLI House. All rights reserved.
        </p>
      </div>
    </div>
  </footer>;


export default Footer;