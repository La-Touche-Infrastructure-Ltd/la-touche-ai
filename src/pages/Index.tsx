import Hero from "@/components/Hero";
import HoldingStatement from "@/components/HoldingStatement";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <main>
      <div className="page-shell">
        <Hero />
        <HoldingStatement />
        <Footer />
      </div>
      <CookieBanner />
    </main>
  );
};

export default Index;
