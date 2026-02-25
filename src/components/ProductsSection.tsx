import { motion } from "framer-motion";
import productIdli from "@/assets/product-idli.jpg";
import productBatter from "@/assets/product-batter.jpg";
import TiltCard from "./TiltCard";
import FloatingElement from "./FloatingElement";

const products = [
  {
    name: "Fresh IDLI",
    desc: "Perfectly steamed, cloud-soft idlis made fresh daily with premium ingredients and RO purified water.",
    image: productIdli,
    tag: "Bestseller",
  },
  {
    name: "Premium IDLI Batter",
    desc: "Expertly fermented, ready-to-steam batter. Consistent quality, perfect texture — every time.",
    image: productBatter,
    tag: "Fresh Daily",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-28 md:py-40 bg-card relative overflow-hidden">
    {/* Decorative */}
    <FloatingElement delay={0} duration={7} y={20} className="absolute top-20 left-10 hidden lg:block">
      <div className="w-24 h-24 rounded-full border border-accent/10" />
    </FloatingElement>
    <FloatingElement delay={2} duration={5} y={15} className="absolute bottom-20 right-10 hidden lg:block">
      <div className="w-16 h-16 rounded-full bg-secondary/20" />
    </FloatingElement>

    <div className="container mx-auto px-4 md:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
        <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">What We Offer</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
          Our <span className="text-accent">Products</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto" style={{ perspective: "1200px" }}>
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <TiltCard className="group h-full">
              <div className="bg-background rounded-[2rem] overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-2xl h-full">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-5 left-5 bg-accent text-accent-foreground font-body text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    {product.tag}
                  </span>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{product.name}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-base">{product.desc}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
