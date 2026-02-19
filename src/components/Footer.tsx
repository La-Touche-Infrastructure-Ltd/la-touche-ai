import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <p className="footer-meta">
          © 2026 La Touche Academy Ltd.
        </p>

        <p className="footer-meta">
          Services operated by La Touche Academy Ltd.
        </p>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/trademark">Trade Mark</Link>
        </nav>

        <p className="footer-trademark">
          La Touche® is a registered UK trade mark.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
