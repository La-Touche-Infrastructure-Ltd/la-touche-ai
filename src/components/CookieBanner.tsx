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
    localStorage.setItem(COOKIE_CONSENT_KEY, "essential_acknowledged");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-banner-text">
        We use essential cookies to ensure this website functions correctly. 
        By continuing, you acknowledge their use. Read more in our{" "}
        <Link to="/cookies" className="cookie-banner-link">
          Cookies Policy
        </Link>.
      </p>
      <div className="cookie-banner-actions">
        <button onClick={handleAccept} className="cookie-banner-accept">
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
