import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HygieneSection from "@/components/HygieneSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () =>
<>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <HygieneSection className="shadow-none" />
      <ProductsSection className="bg-gray-100" />
      <ContactSection className="bg-gray-100" />
    </main>
    <Footer className="" />
  </>;


export default Index;