import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© 2025 La Touche. All rights reserved.</div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <a href="mailto:hello@latouche.ai">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
