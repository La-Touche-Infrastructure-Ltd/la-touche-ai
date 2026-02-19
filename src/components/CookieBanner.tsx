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

  const handleAcknowledge = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "essential_acknowledged");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          This site uses only essential cookies required for it to function.
          No analytics or marketing cookies are currently used.
          Read more in our{" "}
          <Link to="/cookies" className="text-primary hover:text-primary/80 transition-colors">
            Cookies
          </Link>{" "}
          page.
        </p>

        <button
          onClick={handleAcknowledge}
          className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
