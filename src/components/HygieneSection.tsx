import { motion } from "framer-motion";
import { Droplets, Cog, Hand, ClipboardCheck, ShieldCheck } from "lucide-react";
import TiltCard from "./TiltCard";

const standards = [
  { icon: Droplets, title: "RO Water Purification", desc: "Every drop of water used is RO purified for absolute purity.", num: "01" },
  { icon: Cog, title: "Automated Grinding", desc: "Precision-ground batter with zero manual handling.", num: "02" },
  { icon: Hand, title: "Zero Hand-Contact", desc: "Fully automated from grinding to packaging.", num: "03" },
  { icon: ClipboardCheck, title: "Daily Quality Checks", desc: "Rigorous testing protocols executed every single day.", num: "04" },
  { icon: ShieldCheck, title: "Food Safety Certified", desc: "Certified and compliant with all food safety regulations.", num: "05" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const HygieneSection = () => (
  <section id="hygiene" className="py-28 md:py-40 bg-muted/40 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 md:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
        <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
          Trust & Transparency
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Hygiene & Quality
          <br />
          <span className="text-accent">Standards</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto">
          We don't just meet standards — we set them.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
        style={{ perspective: "1000px" }}
      >
        {standards.map((item) => (
          <motion.div key={item.title} variants={itemVariants}>
            <TiltCard className="group h-full">
              <div className="bg-card rounded-3xl p-8 text-center h-full border border-border/50 hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-2xl">
                <span className="font-display text-4xl font-bold text-accent/15 block mb-3">{item.num}</span>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HygieneSection;
