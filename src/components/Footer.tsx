import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-legal-block">

        <p className="footer-copyright">
          © 2026 La Touche Academy Ltd. All rights reserved.
        </p>

        <p className="footer-operator">
          Services are operated by La Touche Academy Ltd.
        </p>

        <p className="footer-trademark">
          La Touche® is a registered UK trade mark.
        </p>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <span className="footer-divider">|</span>

          <Link to="/privacy">Privacy Policy</Link>
          <span className="footer-divider">|</span>

          <Link to="/cookies">Cookies</Link>
          <span className="footer-divider">|</span>

          <Link to="/terms">Terms</Link>
          <span className="footer-divider">|</span>

          <Link to="/trademark">Trade Mark</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
