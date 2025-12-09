const WhatWeAreBuildingNext = () => {
  const features = [
    "Document and policy generation that matches your real world practice",
    "Training and compliance that stay in sync with policy changes",
    "Workflow support that sends the right reminder to the right person at the right time",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground">
          What we are building next
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          La Touche is building an AI powered document and workflow layer that sits gently on top of your existing systems. It will help you create, update and connect key documents and processes without needing a big IT project.
        </p>
        
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="text-primary mt-1.5">•</span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <p className="text-muted-foreground italic pt-4">
          This is a holding page. The first tools are in development and we are speaking quietly with early partners.
        </p>
      </div>
    </section>
  );
};

export default WhatWeAreBuildingNext;
