import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <main>
      <div className="page-shell">
        <Hero />
        <ContactForm />
        <Footer />
      </div>
      <CookieBanner />
    </main>
  );
};

export default Index;
