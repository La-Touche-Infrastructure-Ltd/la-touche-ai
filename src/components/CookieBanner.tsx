import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "la_touche_cookie_consent";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-banner-text">
        La Touche uses cookies to keep this site working and to understand how it is used. You can read more in our{" "}
        <Link to="/cookies" className="cookie-banner-link">Cookies</Link> page.
      </p>
      <div className="cookie-banner-actions">
        <button onClick={handleAccept} className="cookie-banner-accept">
          Accept cookies
        </button>
        <button onClick={handleEssentialOnly} className="cookie-banner-essential">
          Only essential
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
