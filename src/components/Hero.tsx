import logo from "@/assets/la-touche-logo.png";
import { Button } from "@/components/ui/button";

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
        <img
          src={logo}
          alt="La Touche - Human centred AI presence"
          className="w-48 md:w-64 mx-auto"
        />
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
            The touch that begins everything
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The spirit of order in a world of disorder, powered by La Touche AI that works the way you think and speak.
          </p>
        </div>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="mt-8 px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
        >
          Stay in the loop
        </Button>
      </div>
    </section>
  );
};

export default Hero;
