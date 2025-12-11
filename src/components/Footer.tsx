import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-brand">La Touche</div>
      <div className="footer-subline">The touch that begins everything</div>
      <p className="footer-desc">
        La Touche is a human centred AI presence that brings order to documents, policies and workflows.
      </p>
      <div className="footer-links">
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
