import logoImage from "@/assets/la-touche-logo-nosquare.png";

const Hero = () => {
  return (
    <section className="lt-hero">
      <div className="lt-shell">
        <div className="lt-card lt-hero-card">
          <div className="lt-brand">
            <img 
              alt="La Touche" 
              src={logoImage}
              className="lt-logo"
            />
          </div>

          <h1>La Touche, simply The Touch.</h1>

          <div className="lt-cta-row">
            <a className="lt-btn" href="#request-demo">Request a demo</a>
          </div>
          <p className="lt-micro">A short private walkthrough. See your document in the format.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
