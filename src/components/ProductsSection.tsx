import TextReveal from "./TextReveal";
import SmoothReveal from "./SmoothReveal";
import MenuBook3D from "./MenuBook3D";

const ProductsSection = () => (
  <section id="products" className="py-28 md:py-40 bg-secondary relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative">
      <div className="text-center mb-16 md:mb-20">
        <SmoothReveal>
          <p className="text-accent font-body font-bold text-xs uppercase tracking-[0.3em] mb-4">What We Offer</p>
        </SmoothReveal>

        <TextReveal
          as="h2"
          className="font-display text-4xl md:text-6xl font-black text-foreground leading-[1.05]"
        >
          Our Products
        </TextReveal>

        <SmoothReveal delay={0.3}>
          <p className="text-muted-foreground font-body text-base md:text-lg mt-4 max-w-md mx-auto">
            Tap the menu to explore our offerings
          </p>
        </SmoothReveal>
      </div>

      <SmoothReveal delay={0.2}>
        <MenuBook3D />
      </SmoothReveal>
    </div>
  </section>
);

export default ProductsSection;
