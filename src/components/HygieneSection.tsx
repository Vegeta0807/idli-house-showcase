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
{ icon: ShieldCheck, title: "Food Safety Certified", desc: "Certified and compliant with all food safety regulations.", num: "05" }];


const HygieneSection = () =>
<section id="hygiene" className="py-28 md:py-40 bg-muted/40 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 md:px-8 relative shadow-none">
      <div className="text-center mb-20">
        <SmoothReveal>
          <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Trust & Transparency
          </p>
        </SmoothReveal>

        <TextReveal
        as="h2"
        className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">

          Hygiene & Quality Standards
        </TextReveal>

        <SmoothReveal delay={0.3}>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto">
            We don't just meet standards — we set them.
          </p>
        </SmoothReveal>
      </div>

      <StaggerContainer
      className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
      staggerDelay={0.08}>

        {standards.map((item) =>
      <StaggerItem key={item.title}>
            <TiltCard className="group h-full">
              <div className="bg-card p-8 text-center h-full border border-border/50 hover:border-accent/30 transition-all duration-300 bg-amber-100 rounded-3xl shadow-none">
                <span className="font-display text-4xl font-bold block mb-3 text-accent">{item.num}</span>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </TiltCard>
          </StaggerItem>
      )}
      </StaggerContainer>
    </div>
  </section>;


export default HygieneSection;