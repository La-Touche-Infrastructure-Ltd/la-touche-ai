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

          <h1>Bring order to policies, procedures, and compliance evidence.</h1>
          <p className="lt-subhead">Turn scattered documents into clear, audit ready packs in minutes.</p>

          <div className="lt-cta-row">
            <a className="lt-btn" href="#request-demo">Request a demo</a>
          </div>
          <p className="lt-micro">No pressure. A short walkthrough. See your own document in the format.</p>
        </div>

        <div className="lt-grid">
          <div className="lt-card">
            <h2>Who it's for</h2>
            <p>For regulated teams who deal with policies, SOPs, audits, inspections, staff training, and compliance evidence.</p>
            <p className="lt-muted">If your work is judged by paperwork and proof, La Touche is built for you.</p>
          </div>

          <div className="lt-card">
            <h2>What it does first</h2>
            <ul>
              <li>Standardises policies into one clear format</li>
              <li>Adds an owner and review date</li>
              <li>Produces exports: policy pack, checklist, training prompts</li>
            </ul>
          </div>

          <div className="lt-card">
            <h2>La Touche, simply The Touch.</h2>
            <p className="lt-tagline">Order begins here.</p>
          </div>

          <div className="lt-card">
            <h2>Proof</h2>
            <p>See a 20 second demo: a Fire Safety Policy pulled into one audit ready format.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
