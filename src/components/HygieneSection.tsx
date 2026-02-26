import { Droplets, Cog, Hand, ClipboardCheck, ShieldCheck } from "lucide-react";
import TextReveal from "./TextReveal";
import SmoothReveal from "./SmoothReveal";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import TiltCard from "./TiltCard";

const standards = [
  { icon: Droplets, title: "RO Water Purification", desc: "Every drop of water used is RO purified for absolute purity.", num: "01" },
  { icon: Cog, title: "Automated Grinding", desc: "Precision-ground batter with zero manual handling.", num: "02" },
  { icon: Hand, title: "Zero Hand-Contact", desc: "Fully automated from grinding to packaging.", num: "03" },
  { icon: ClipboardCheck, title: "Daily Quality Checks", desc: "Rigorous testing protocols executed every single day.", num: "04" },
  { icon: ShieldCheck, title: "Food Safety Certified", desc: "Certified and compliant with all food safety regulations.", num: "05" },
];

const HygieneSection = () => (
  <section id="hygiene" className="py-28 md:py-40 bg-primary relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 md:px-12 relative">
      <div className="text-center mb-20">
        <SmoothReveal>
          <p className="text-accent font-body font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Trust & Transparency
          </p>
        </SmoothReveal>

        <TextReveal
          as="h2"
          className="font-display text-4xl md:text-6xl font-black text-primary-foreground mb-6 leading-[1.05]"
        >
          Hygiene & Quality Standards
        </TextReveal>

        <SmoothReveal delay={0.3}>
          <p className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto">
            We don't just meet standards — we set them.
          </p>
        </SmoothReveal>
      </div>

      <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6" staggerDelay={0.08}>
        {standards.map((item) => (
          <StaggerItem key={item.title}>
            <TiltCard className="group h-full">
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 text-center h-full border border-primary-foreground/10 hover:border-accent/40 transition-all duration-300 rounded-3xl hover:bg-primary-foreground/15">
                <span className="font-display text-4xl font-black block mb-3 text-accent">{item.num}</span>
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-base font-semibold text-primary-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default HygieneSection;
