import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-legal-block">
        <p className="footer-copyright">© 2026 La Touche Academy Ltd. All rights reserved.</p>
        <p className="footer-operator">
          Services are operated by La Touche Academy Ltd (Company No. 16394708).
        </p>
        <p className="footer-trademark">
          LA TOUCHE® is a trademark owned by La Touche Ltd.
        </p>
      </div>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span className="footer-divider">|</span>
        <Link to="/cookies">Cookies</Link>
        <span className="footer-divider">|</span>
        <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
