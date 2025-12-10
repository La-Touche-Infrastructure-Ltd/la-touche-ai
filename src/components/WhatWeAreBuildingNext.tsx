const WhatWeAreBuildingNext = () => {
  const features = [
    "Document and policy generation that matches your real world practice",
    "Training and compliance that stay in sync with policy changes",
    "Workflow support that sends the right reminder to the right person at the right time",
  ];

  return (
    <section className="page-section" id="what-we-are-building-next">
      <h2>What we are building next</h2>
      
      <p>
        La Touche is building an AI powered document and workflow layer that sits gently on top of your existing systems. It will help you create, update and connect key documents and processes without needing a big IT project.
      </p>
      
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      <p className="italic">
        This is a holding page. The first tools are in development and we are speaking quietly with early partners.
      </p>
    </section>
  );
};

export default WhatWeAreBuildingNext;
