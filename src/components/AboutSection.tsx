import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Sparkles, Leaf } from "lucide-react";

const highlights = [
  { icon: Droplets, label: "RO Purified Water" },
  { icon: ShieldCheck, label: "Above Industry Hygiene" },
  { icon: Sparkles, label: "Sanitized Production" },
  { icon: Leaf, label: "Premium Ingredients" },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">Our Story</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Crafted with Care, Served with Love
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          At IDLI House, we believe every idli should be a masterpiece. We use only RO purified water,
          maintain hygiene standards far above industry benchmarks, and source the finest ingredients
          to deliver the softest, most authentic idlis and batter — fresh to your table every day.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <item.icon className="w-7 h-7 text-accent" />
            </div>
            <span className="font-body font-semibold text-sm text-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
