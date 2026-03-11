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

      <h1 className="hero-title">The Touch That Brings Order</h1>
      <p className="hero-subline" style={{ fontWeight: 600 }}>
        La Touche is Responsibility Infrastructure.
      </p>
      <p className="hero-subline">
        A digital rail that records when responsibility moves between people, systems, and organisations, producing verifiable proof of duty discharge.
      </p>
      <p className="hero-subline">
        The spirit of order in a world of disorder.<br />
        Built by LA TOUCHE®.
      </p>
    </section>
  );
};

export default Hero;
