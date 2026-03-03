import { Link } from "react-router-dom";
import { useEffect } from "react";

const Trademark = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

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
          Trade mark notice
        </h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            <strong>LA TOUCHE®</strong> is a registered UK trade mark (No.{" "}
            <strong>UK00004295675</strong>) owned by{" "}
            <strong>La Touche Ltd</strong> (Company No.{" "}
            <strong>13217665</strong>).
          </p>

          <p className="leading-relaxed">
            This website is operated by <strong>La Touche Academy Ltd</strong>{" "}
            (Company No. <strong>16394708</strong>).
          </p>

          <p className="text-sm text-muted-foreground pt-8">
            Last updated: 24 January 2026
          </p>
        </div>
      </article>
    </main>
  );
};

export default Trademark;
