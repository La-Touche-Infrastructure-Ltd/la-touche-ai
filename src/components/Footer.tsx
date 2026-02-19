import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 py-16 text-center">
      <div className="max-w-2xl mx-auto space-y-3">

        <p className="text-sm opacity-70">
          © 2026 La Touche Academy Ltd.
        </p>

        <p className="text-sm opacity-60">
          Services operated by La Touche Academy Ltd.
        </p>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-10 text-sm tracking-wide font-light">
          <Link to="/about" className="opacity-70 hover:opacity-100 transition duration-200">
            About
          </Link>
          <Link to="/privacy" className="opacity-70 hover:opacity-100 transition duration-200">
            Privacy
          </Link>
          <Link to="/cookies" className="opacity-70 hover:opacity-100 transition duration-200">
            Cookies
          </Link>
          <Link to="/terms" className="opacity-70 hover:opacity-100 transition duration-200">
            Terms
          </Link>
          <Link to="/trademark" className="opacity-70 hover:opacity-100 transition duration-200">
            Trade Mark
          </Link>
        </nav>

        <p className="text-xs opacity-40 pt-12">
          La Touche® is a registered UK trade mark.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
