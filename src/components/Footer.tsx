import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="footer-disclaimer">
        La Touche uses artificial intelligence to support your work but it can still make mistakes so please check important information before you rely on it.
      </p>
      <div className="footer-links">
        <span className="footer-brand">LA TOUCHE®</span>
        <span className="footer-copyright">© 2025 La Touche Ltd. All rights reserved.</span>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
