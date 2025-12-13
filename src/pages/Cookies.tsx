import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <main>
      <div className="legal-page">
        <Link to="/" className="legal-back">← Back to home</Link>
        
        <h1>Cookies</h1>
        <p className="legal-updated">Last updated: 9 December 2025</p>

        <p>This Cookies page explains how La Touche Ltd uses cookies and similar technologies on this site.</p>

        <h2>Who we are</h2>
        <p>
          La Touche Ltd<br />
          Registered in England and Wales
        </p>
        <p>When we say "La Touche", "we" or "us", we mean La Touche Ltd as the organisation responsible for this website.</p>

        <h2>What are cookies</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit a website.
          They help the site remember your actions and preferences so that things work properly and feel consistent as you move around the page.
        </p>
        <p>
          Some cookies are needed so the site can function at all.
          Others are used to understand how visitors use the site or to support marketing activity.
        </p>

        <h2>How we use cookies on this site</h2>
        <p>La Touche uses cookies to:</p>
        <ul>
          <li>Keep this site working in a secure and stable way</li>
          <li>Remember basic choices such as cookie consent</li>
          <li>Understand, in a simple and privacy respectful way, how people use the site so we can improve it</li>
        </ul>
        <p>
          Some cookies are essential and are always on because the site cannot function without them.
          Other cookies are optional and will only be used if you choose to accept them in the cookie banner.
        </p>
        <p>
          At the moment this holding page uses only essential cookies and very simple analytics.
          If we start to use any other type of cookie we will update this page and give you clear choices.
        </p>

        <h2>Types of cookies we may use</h2>
        
        <h3>Essential cookies</h3>
        <p>
          These support things like security, load balancing, basic session functions and remembering your cookie choices.
          They are needed for the site to work and cannot be switched off through the banner, but you can still block them in your browser settings.
        </p>

        <h3>Analytics cookies</h3>
        <p>
          These help us understand which parts of the site are visited, how long people stay and which links are used.
          We use this information to improve the site and keep it useful.
          Any analytics we use are set up to use the minimum amount of personal data possible.
        </p>

        <h3>Functionality cookies</h3>
        <p>
          These remember simple choices such as form preferences or language settings so the site feels more tailored to you.
        </p>

        <p>We do not currently use marketing or advertising cookies on this holding page.</p>

        <h2>Cookies used on this site</h2>
        <p>Because this is a very simple holding page, the cookies in use are limited and may change as we refine the site.</p>
        <p>They may include:</p>
        <ul>
          <li>Cookies that remember whether you have seen and responded to the cookie banner</li>
          <li>Cookies that keep forms working securely</li>
          <li>Cookies that provide basic, anonymous statistics about site traffic</li>
        </ul>
        <p>When we introduce any additional cookies, we will:</p>
        <ul>
          <li>Update this page with the cookie name, purpose and duration</li>
          <li>Make sure they only run after you have given consent in the banner</li>
        </ul>

        <h2>Managing your cookies</h2>
        <p>You are in control of your cookies.</p>
        <p>You can:</p>
        <ul>
          <li>Use the cookie banner to choose Accept cookies or Only essential</li>
          <li>Change your decision at any time by clearing cookies in your browser settings and revisiting the site</li>
          <li>Block or delete cookies through your browser controls if you prefer</li>
        </ul>
        <p>Please note that blocking essential cookies may affect how well the site works for you.</p>

        <h2>Changes to this page</h2>
        <p>
          We may update this Cookies page from time to time, for example when we add new tools or introduce new types of cookies.
        </p>
        <p>
          When we make changes we will update the "last updated" date and, where appropriate, draw your attention to the changes.
        </p>

        <h2>Contact</h2>
        <p>If you have any questions about how La Touche uses cookies, you can contact us at:</p>
        <p>Email: <a href="mailto:hello@latouche.ai">hello@latouche.ai</a></p>
      </div>
    </main>
  );
};

export default Cookies;
