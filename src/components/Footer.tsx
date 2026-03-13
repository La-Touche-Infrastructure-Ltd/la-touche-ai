import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 py-16 text-center">
      <div className="max-w-2xl mx-auto">

        {/* Section 1 — Brand Signature */}
        <p className="text-sm tracking-widest uppercase text-muted-foreground/60 mb-12">
          La Touche — Responsibility Infrastructure.
        </p>

        {/* Section 2 — Legal Identity */}
        <div className="mb-10 space-y-1">
          <p className="text-sm text-foreground/70">
            © 2026 La Touche Academy Ltd
          </p>
          <p className="text-xs text-muted-foreground/60">
            Services operated by La Touche Academy Ltd
          </p>
        </div>

        {/* Section 3 — Navigation */}
        <nav className="mb-10 text-sm tracking-wide font-light">
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <Link to="/about" className="text-foreground/70 hover:text-primary transition duration-200">About</Link>
            <span className="text-muted-foreground/30">|</span>
            <Link to="/privacy" className="text-foreground/70 hover:text-primary transition duration-200">Privacy</Link>
            <span className="text-muted-foreground/30">|</span>
            <Link to="/cookies" className="text-foreground/70 hover:text-primary transition duration-200">Cookies</Link>
            <span className="hidden sm:inline text-muted-foreground/30">|</span>
            <span className="sm:hidden" />
          </div>
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-3 sm:mt-0 sm:inline-flex">
            <Link to="/terms" className="text-foreground/70 hover:text-primary transition duration-200">Terms</Link>
            <span className="text-muted-foreground/30">|</span>
            <Link to="/trademark" className="text-foreground/70 hover:text-primary transition duration-200">Trade Mark</Link>
          </div>
        </nav>

        {/* Section 4 — Trademark Notice */}
        <p className="text-xs text-muted-foreground/40">
          La Touche® is a registered UK trade mark.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
