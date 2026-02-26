import productIdli from "@/assets/product-idli.jpg";
import productBatter from "@/assets/product-batter.jpg";
import TextReveal from "./TextReveal";
import SmoothReveal from "./SmoothReveal";
import TiltCard from "./TiltCard";

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
  <section id="products" className="py-28 md:py-40 bg-secondary relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative">
      <div className="text-center mb-20">
        <SmoothReveal>
          <p className="text-accent font-body font-bold text-xs uppercase tracking-[0.3em] mb-4">What We Offer</p>
        </SmoothReveal>

        <TextReveal
          as="h2"
          className="font-display text-4xl md:text-6xl font-black text-foreground leading-[1.05]"
        >
          Our Products
        </TextReveal>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {products.map((product, i) => (
          <SmoothReveal
            key={product.name}
            delay={i * 0.15}
            direction={i === 0 ? "left" : "right"}
            distance={80}
          >
            <TiltCard className="group h-full">
              <div className="bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-2xl h-full">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
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
          </SmoothReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
