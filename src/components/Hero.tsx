import logoImage from "@/assets/la-touche-logo-nosquare.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* Layer 1: Logo */}
      <div className="hero-logo">
        <img 
          alt="La Touche" 
          src={logoImage}
          className="hero-logo-img"
        />
      </div>

      {/* Layer 2: Headline */}
      <h1 className="hero-title">The Touch That Brings Order</h1>

      {/* Layer 3: Category line */}
      <p className="hero-category">
        La Touche is Responsibility Infrastructure.
      </p>

      {/* Layer 4: Definition */}
      <p className="hero-definition">
        A digital rail that records when responsibility moves between people, systems, and organisations, producing verifiable proof of duty discharge.
      </p>

      {/* Layer 5: Philosophy */}
      <p className="hero-philosophy">
        The spirit of order in a world of disorder.<br />
        Built by LA TOUCHE®.
      </p>
    </section>
  );
};

export default Hero;
