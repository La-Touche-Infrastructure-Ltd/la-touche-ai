import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="footer-disclaimer">
        La Touche helps organise your work. Please check important details before using them.
      </p>
      <div className="footer-brand-block">
        <span className="footer-brand">LA TOUCHE®</span>
        <span className="footer-copyright">© 2025 La Touche Ltd. All rights reserved.</span>
      </div>
      <div className="footer-links">
        <Link to="/privacy">Privacy</Link>
        <span className="footer-divider">|</span>
        <Link to="/cookies">Cookies</Link>
        <span className="footer-divider">|</span>
        <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
