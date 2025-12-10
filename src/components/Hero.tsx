import logo from "@/assets/la-touche-logo.png";
const Hero = () => {
  return <section className="hero">
      <div className="hero-visual">
        <div className="living-logo-portal living-logo--idle">
          <div className="living-logo-orbit">
            <img alt="La Touche logo" src="/lovable-uploads/e57d8877-0f4c-49f2-9b8e-2c78294b3e58.png" />
          </div>
        </div>
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">
          The touch that begins everything
        </h1>

        <p className="hero-sub">
          The spirit of order in a world of disorder, powered by La Touche AI that works the way you think and speak.
        </p>

        <a href="#contact" className="hero-cta">
          Stay close as we build
        </a>
      </div>
    </section>;
};
export default Hero;