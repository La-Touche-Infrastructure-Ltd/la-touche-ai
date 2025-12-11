import logo from "@/assets/la-touche-logo.png";
const Hero = () => {
  return <section className="hero">
      <div className="hero-visual">
        <div className="living-logo-portal living-logo--idle">
          <div className="living-logo-orbit">
            <img alt="La Touche logo" src="/lovable-uploads/4ffb72c6-3fb2-486f-b48f-303583bbbe0b.png" />
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