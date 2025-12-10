const WhoWeAreBuildingFor = () => {
  const audiences = [
    "Healthcare and care organisations who need policies and training that match real practice",
    "Schools and education providers balancing safeguarding, teaching and admin",
    "Housing and community organisations managing residents, safety and compliance",
    "Business owners and operations leads who want less admin and more meaningful work",
  ];

  return (
    <section className="page-section my-8 mx-6 md:mx-auto">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground">
          Who we are building for
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          We are especially focused on people and organisations who feel the daily weight of paperwork and regulation.
        </p>
        
        <ul className="space-y-4">
          {audiences.map((audience, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="text-primary mt-1.5">•</span>
              <span className="leading-relaxed">{audience}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoWeAreBuildingFor;
