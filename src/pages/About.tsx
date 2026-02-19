import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <article className="max-w-3xl mx-auto space-y-8">

        <Link
          to="/"
          className="text-primary hover:text-primary/80 transition-colors text-sm"
        >
          ← Back to home
        </Link>

        <h1 className="text-4xl font-light text-foreground">
          About La Touche
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">

          <p className="leading-relaxed">
            La Touche exists to bring order to complexity.
          </p>

          <p className="leading-relaxed">
            We build responsibility infrastructure — systems that turn
            responsibility into proof.
          </p>

          <p className="leading-relaxed">
            The LA TOUCHE® trade mark is owned by <strong>La Touche Ltd</strong>.
            This website and its services are operated by{" "}
            <strong>La Touche Academy Ltd</strong>.
          </p>

          <p className="leading-relaxed">
  <strong>LA TOUCHE®</strong> is a registered UK trade mark owned by 
  <strong> La Touche Ltd</strong>. This website and its services are operated by 
  <strong> La Touche Academy Ltd</strong>.
</p>
          
        </div>
      </article>
    </main>
  );
};

export default About;
