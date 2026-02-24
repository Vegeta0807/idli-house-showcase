import { motion } from "framer-motion";
import { Droplets, Cog, Hand, ClipboardCheck, ShieldCheck } from "lucide-react";

const standards = [
  { icon: Droplets, title: "RO Water Purification", desc: "Every drop of water used is RO purified for absolute purity." },
  { icon: Cog, title: "Automated Batter Grinding", desc: "Precision-ground batter with zero manual handling." },
  { icon: Hand, title: "Zero Hand-Contact Process", desc: "Fully automated from grinding to packaging." },
  { icon: ClipboardCheck, title: "Daily Quality Checks", desc: "Rigorous testing protocols executed every single day." },
  { icon: ShieldCheck, title: "Food Safety Compliance", desc: "Certified and compliant with all food safety regulations." },
];

const HygieneSection = () => (
  <section id="hygiene" className="py-24 md:py-32 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">
          Trust & Transparency
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Hygiene & Quality Standards
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
          We don't just meet standards — we set them.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {standards.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HygieneSection;
