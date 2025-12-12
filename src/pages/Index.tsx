import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <div className="page-shell">
        <Hero />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
