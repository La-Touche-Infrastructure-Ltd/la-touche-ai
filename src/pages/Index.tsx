import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <main>
        <div className="page-shell">
          <Header />
          <Hero />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
