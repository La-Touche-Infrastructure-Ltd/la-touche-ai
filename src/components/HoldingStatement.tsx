const HoldingStatement = () => {
  return (
    <section className="holding-statement">
      <div className="holding-card">
        <p className="holding-lead">La Touche is being built carefully.</p>
        
        <p className="holding-body">
          We are designing a calm, human-centred system to reduce friction and restore order to everyday work.
        </p>
        
        <p className="holding-body">
          When there is something real to share, you'll see it here.
        </p>
        
        <p className="holding-contact">
          For enquiries, email{" "}
          <a href="mailto:hello@latouche.ai" className="holding-email">
            hello@latouche.ai
          </a>
        </p>
        
        <p className="holding-disclaimer">
          This page is provided for general information only and does not constitute an offer of services.
          No services are currently being provided through this website.
        </p>
      </div>
    </section>
  );
};

export default HoldingStatement;
