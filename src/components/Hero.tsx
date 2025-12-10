import logo from "@/assets/la-touche-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="living-logo-portal living-logo--idle">
          <div className="living-logo-orbit">
            <img
              src={logo}
              alt="La Touche - Human centred AI presence"
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground">
            The touch that begins everything
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The spirit of order in a world of disorder, powered by La Touche AI that works the way you think and speak.
          </p>
        </div>
        
        <button 
          onClick={scrollToContact}
          className="hero-cta"
        >
          Stay close as we build
        </button>
      </div>
    </section>
  );
};

export default Hero;
