import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-24 px-6 py-14 text-center">
      <div className="max-w-2xl mx-auto space-y-2">

        <p className="text-sm opacity-70">
          © 2026 La Touche Academy Ltd.
        </p>

        <p className="text-sm opacity-60">
          Services operated by La Touche Academy Ltd.
        </p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 text-sm tracking-wide">
          <Link to="/about" className="opacity-80 hover:opacity-100 transition">
            About
          </Link>
          <Link to="/privacy" className="opacity-80 hover:opacity-100 transition">
            Privacy
          </Link>
          <Link to="/cookies" className="opacity-80 hover:opacity-100 transition">
            Cookies
          </Link>
          <Link to="/terms" className="opacity-80 hover:opacity-100 transition">
            Terms
          </Link>
          <Link to="/trademark" className="opacity-80 hover:opacity-100 transition">
            Trade Mark
          </Link>
        </nav>

        <p className="text-xs opacity-50 pt-8">
          La Touche® is a registered UK trade mark.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
