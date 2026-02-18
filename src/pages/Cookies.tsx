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
          <h2 className="text-2xl font-light text-foreground pt-4">About this site</h2>
          <p className="leading-relaxed">
            This website is operated by La Touche Academy Ltd, a company registered in England and Wales (Company No. 16394708).
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">What are cookies?</h2>
          <p className="leading-relaxed">
            Cookies are small text files that websites place on your device to store information. They help websites function properly and can remember your preferences.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">How we use cookies</h2>
          <p className="leading-relaxed">
            This is a minimal holding page. We use only essential cookies that are strictly necessary for the basic operation of the website. We do not use:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Marketing cookies</li>
            <li>Analytics or tracking cookies</li>
            <li>Third-party advertising cookies</li>
          </ul>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Essential cookies</h2>
          <p className="leading-relaxed">
            Essential cookies are required for the website to function. These may include:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Session cookies to maintain your browsing session</li>
            <li>Security cookies to protect against malicious activity</li>
            <li>Cookie consent preference (to remember your cookie choice)</li>
          </ul>
          <p className="leading-relaxed">
            These cookies do not require your consent as they are necessary for the site to work.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Managing cookies</h2>
          <p className="leading-relaxed">
            You can control cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>View what cookies are stored</li>
            <li>Delete cookies individually or all at once</li>
            <li>Block cookies from specific or all websites</li>
          </ul>
          <p className="leading-relaxed">
            Please note that blocking essential cookies may affect how the website functions.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Changes to this policy</h2>
          <p className="leading-relaxed">
            We may update this Cookies page as La Touche develops. Any changes will be posted here with an updated date.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Contact</h2>
          <p className="leading-relaxed">
            For questions about our use of cookies, contact <a href="mailto:hello@latouche.ai" className="text-primary hover:text-primary/80">hello@latouche.ai</a>.
          </p>
          
          <p className="text-sm text-muted-foreground pt-8">
            Last updated: 24 January 2026
          </p>
        </div>
      </article>
    </main>
  );
};

export default Cookies;
