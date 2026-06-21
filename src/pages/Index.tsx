import "@/styles/tih.css";
import { useReveal } from "@/components/tih/effects";
import TihNav from "@/components/tih/TihNav";
import TihHero from "@/components/tih/TihHero";
import TihTicker from "@/components/tih/TihTicker";
import TihStory from "@/components/tih/TihStory";
import TihPromise from "@/components/tih/TihPromise";
import TihProducts from "@/components/tih/TihProducts";
import TihServe from "@/components/tih/TihServe";
import TihContact from "@/components/tih/TihContact";
import TihDistributor from "@/components/tih/TihDistributor";
import TihFooter from "@/components/tih/TihFooter";

const Index = () => {
  useReveal();

  return (
    <div className="tih">
      <div className="tih-noise" aria-hidden />

      <TihNav />
      <main>
        <TihHero />
        <TihTicker />
        <TihStory />
        <TihPromise />
        <TihProducts />
        <TihServe />
        <TihContact />
        <TihDistributor />
      </main>
      <TihFooter />
    </div>
  );
};

export default Index;
