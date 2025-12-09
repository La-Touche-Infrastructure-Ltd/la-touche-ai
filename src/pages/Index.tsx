import Hero from "@/components/Hero";
import WhatIsLaTouche from "@/components/WhatIsLaTouche";
import WhoWeAreBuildingFor from "@/components/WhoWeAreBuildingFor";
import WhatWeAreBuildingNext from "@/components/WhatWeAreBuildingNext";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhatIsLaTouche />
      <WhoWeAreBuildingFor />
      <WhatWeAreBuildingNext />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
