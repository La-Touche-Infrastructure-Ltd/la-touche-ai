import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsLaTouche from "@/components/WhatIsLaTouche";
import WhoWeAreBuildingFor from "@/components/WhoWeAreBuildingFor";
import WhatWeAreBuildingNext from "@/components/WhatWeAreBuildingNext";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <main>
        <div className="page-shell">
          <Header />
          <Hero />
          <WhatIsLaTouche />
          <WhoWeAreBuildingFor />
          <WhatWeAreBuildingNext />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
