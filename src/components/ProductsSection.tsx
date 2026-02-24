import { motion } from "framer-motion";
import productIdli from "@/assets/product-idli.jpg";
import productBatter from "@/assets/product-batter.jpg";

const products = [
  {
    name: "Fresh IDLI",
    desc: "Perfectly steamed, cloud-soft idlis made fresh daily with premium ingredients and RO purified water.",
    image: productIdli,
  },
  {
    name: "Premium IDLI Batter",
    desc: "Expertly fermented, ready-to-steam batter. Consistent quality, perfect texture — every time.",
    image: productBatter,
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">What We Offer</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Products</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group bg-muted/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{product.name}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{product.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
