import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <main>
      <Hero />
      <ContactForm />
      <div className="page-shell">
        <Footer />
      </div>
      <CookieBanner />
    </main>
  );
};

export default Index;
