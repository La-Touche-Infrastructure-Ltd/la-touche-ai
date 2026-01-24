import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "la_touche_cookie_consent";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show banner if consent has not been recorded
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-banner-text">
        This site uses only essential cookies required for it to function. Read more in our{" "}
        <Link to="/cookies" className="cookie-banner-link">Cookies</Link> page.
      </p>
      <div className="cookie-banner-actions">
        <button onClick={handleAccept} className="cookie-banner-accept">
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
