import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <article className="max-w-3xl mx-auto space-y-8">
        <Link 
          to="/" 
          className="text-primary hover:text-primary/80 transition-colors text-sm"
        >
          ← Back to home
        </Link>
        
        <h1 className="text-4xl font-light text-foreground">
          Cookies
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">Last updated: 9 December 2025</p>
          
          <p className="leading-relaxed">
            This Cookies page explains how La Touche Ltd uses cookies and similar technologies on this site.
          </p>

          <h2 className="text-2xl font-light text-foreground pt-4">Who we are</h2>
          <p className="leading-relaxed">
            La Touche Ltd<br />
            Registered in England and Wales
          </p>
          <p className="leading-relaxed">
            When we say "La Touche", "we" or "us", we mean La Touche Ltd as the organisation responsible for this website.
          </p>

          <h2 className="text-2xl font-light text-foreground pt-4">What are cookies</h2>
          <p className="leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a website.
            They help the site remember your actions and preferences so that things work properly and feel consistent as you move around the page.
          </p>
          <p className="leading-relaxed">
            Some cookies are needed so the site can function at all.
            Others are used to understand how visitors use the site or to support marketing activity.
          </p>

          <h2 className="text-2xl font-light text-foreground pt-4">How we use cookies on this site</h2>
          <p className="leading-relaxed">La Touche uses cookies to:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Keep this site working in a secure and stable way</li>
            <li>Remember basic choices such as cookie consent</li>
            <li>Understand, in a simple and privacy respectful way, how people use the site so we can improve it</li>
          </ul>
          <p className="leading-relaxed">
            Some cookies are essential and are always on because the site cannot function without them.
            Other cookies are optional and will only be used if you choose to accept them in the cookie banner.
          </p>
          <p className="leading-relaxed">
            At the moment this holding page uses only essential cookies and very simple analytics.
            If we start to use any other type of cookie we will update this page and give you clear choices.
          </p>

          <h2 className="text-2xl font-light text-foreground pt-4">Types of cookies we may use</h2>
          
          <p className="leading-relaxed"><strong className="text-foreground">Essential cookies</strong></p>
          <p className="leading-relaxed">
            These support things like security, load balancing, basic session functions and remembering your cookie choices.
            They are needed for the site to work and cannot be switched off through the banner, but you can still block them in your browser settings.
          </p>

          <p className="leading-relaxed"><strong className="text-foreground">Analytics cookies</strong></p>
          <p className="leading-relaxed">
            These help us understand which parts of the site are visited, how long people stay and which links are used.
            We use this information to improve the site and keep it useful.
            Any analytics we use are set up to use the minimum amount of personal data possible.
          </p>

          <p className="leading-relaxed"><strong className="text-foreground">Functionality cookies</strong></p>
          <p className="leading-relaxed">
            These remember simple choices such as form preferences or language settings so the site feels more tailored to you.
          </p>

          <p className="leading-relaxed">We do not currently use marketing or advertising cookies on this holding page.</p>

          <h2 className="text-2xl font-light text-foreground pt-4">Cookies used on this site</h2>
          <p className="leading-relaxed">
            Because this is a very simple holding page, the cookies in use are limited and may change as we refine the site.
          </p>
          <p className="leading-relaxed">They may include:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Cookies that remember whether you have seen and responded to the cookie banner</li>
            <li>Cookies that keep forms working securely</li>
            <li>Cookies that provide basic, anonymous statistics about site traffic</li>
          </ul>
          <p className="leading-relaxed">When we introduce any additional cookies, we will:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Update this page with the cookie name, purpose and duration</li>
            <li>Make sure they only run after you have given consent in the banner</li>
          </ul>

          <h2 className="text-2xl font-light text-foreground pt-4">Managing your cookies</h2>
          <p className="leading-relaxed">You are in control of your cookies.</p>
          <p className="leading-relaxed">You can:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Use the cookie banner to choose Accept cookies or Only essential</li>
            <li>Change your decision at any time by clearing cookies in your browser settings and revisiting the site</li>
            <li>Block or delete cookies through your browser controls if you prefer</li>
          </ul>
          <p className="leading-relaxed">
            Please note that blocking essential cookies may affect how well the site works for you.
          </p>

          <h2 className="text-2xl font-light text-foreground pt-4">Changes to this page</h2>
          <p className="leading-relaxed">
            We may update this Cookies page from time to time, for example when we add new tools or introduce new types of cookies.
          </p>
          <p className="leading-relaxed">
            When we make changes we will update the "last updated" date and, where appropriate, draw your attention to the changes.
          </p>

          <h2 className="text-2xl font-light text-foreground pt-4">Contact</h2>
          <p className="leading-relaxed">
            If you have any questions about how La Touche uses cookies, you can contact us at:
          </p>
          <p className="leading-relaxed">
            Email: <a href="mailto:hello@latouche.ai" className="text-primary hover:text-primary/80 transition-colors">hello@latouche.ai</a>
          </p>
        </div>
      </article>
    </main>
  );
};

export default Cookies;
