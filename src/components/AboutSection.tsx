import { Droplets, ShieldCheck, Sparkles, Leaf } from "lucide-react";
import TextReveal from "./TextReveal";
import SmoothReveal from "./SmoothReveal";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import TiltCard from "./TiltCard";

const highlights = [
  { icon: Droplets, label: "RO Purified Water", desc: "100% purified for every batch" },
  { icon: ShieldCheck, label: "Above Industry Hygiene", desc: "Standards that set the bar" },
  { icon: Sparkles, label: "Sanitized Production", desc: "Spotless from start to finish" },
  { icon: Leaf, label: "Premium Ingredients", desc: "Sourced from trusted farms" },
];

const AboutSection = () => (
  <section id="about" className="py-28 md:py-40 bg-card relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-4 md:px-8 relative">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <SmoothReveal>
          <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Story</p>
        </SmoothReveal>

        <TextReveal
          as="h2"
          className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight"
        >
          Crafted with Care, Served with Love
        </TextReveal>

        <SmoothReveal delay={0.3}>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            At IDLI House, we believe every idli should be a masterpiece. We use only RO purified water,
            maintain hygiene standards far above industry benchmarks, and source the finest ingredients
            to deliver the softest, most authentic idlis — fresh to your table every day.
          </p>
        </SmoothReveal>
      </div>

      <StaggerContainer
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        staggerDelay={0.1}
      >
        {highlights.map((item) => (
          <StaggerItem key={item.label}>
            <TiltCard className="group h-full">
              <div className="flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-background border border-border/50 hover:border-accent/30 transition-colors duration-300 h-full shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <span className="font-body font-bold text-base text-foreground mb-2">{item.label}</span>
                <span className="font-body text-sm text-muted-foreground">{item.desc}</span>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default AboutSection;
