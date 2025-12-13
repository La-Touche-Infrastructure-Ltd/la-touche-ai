import logoImage from "@/assets/la-touche-logo-nosquare.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-logo">
        <img 
          alt="La Touche" 
          src={logoImage}
          className="hero-logo-img"
        />
      </div>

      <h1 className="hero-title">The touch that begins everything</h1>
      <p className="hero-subline">
        The spirit of order in a world of disorder, powered by La Touche AI that works the way you think and speak.
      </p>

      <a href="#contact" className="hero-cta">
        Stay close as we build
      </a>
    </section>
  );
};

export default Hero;
