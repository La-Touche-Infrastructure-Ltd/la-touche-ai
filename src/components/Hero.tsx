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

      <h1 className="hero-title">Simply The Touch that brings order.</h1>

      <p className="hero-category">
        La Touche is Responsibility Infrastructure.
      </p>

      <p className="hero-explanation">
        A digital rail that records when responsibility moves between people, systems, and organisations.
      </p>
    </section>
  );
};

export default Hero;
