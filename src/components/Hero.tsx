import logoImage from "@/assets/la-touche-logo.png";

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
        For regulated teams buried in documents, LA TOUCHE brings calm by turning messy workflows into reliable systems—launching soon.
      </p>

      <a href="#contact" className="hero-cta">
        Stay close as we build
      </a>
    </section>
  );
};

export default Hero;
