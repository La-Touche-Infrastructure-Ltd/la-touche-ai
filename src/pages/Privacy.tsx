import { Link } from "react-router-dom";

const Privacy = () => {
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
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            This Privacy Policy explains how La Touche Academy Ltd ("we", "us", "our") collects and uses personal data when you visit our website.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Data controller</h2>
          <p className="leading-relaxed">
            La Touche Academy Ltd is the data controller for personal data collected through this website. La Touche Academy Ltd is a company registered in England and Wales (Company No. 16394708).
          </p>
          <p className="leading-relaxed">
            La Touche Ltd is not a data controller or joint controller for data collected through this website. La Touche Ltd is the owner of the LA TOUCHE® trademark.
          </p>
          <p className="leading-relaxed">
            Contact email: <a href="mailto:hello@latouche.ai" className="text-primary hover:text-primary/80">hello@latouche.ai</a>
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Data we collect</h2>
          <p className="leading-relaxed">
            This is a holding page with no forms or data submission mechanisms. We do not actively collect personal data from visitors.
          </p>
          <p className="leading-relaxed">
            Our hosting providers may automatically collect basic technical information such as:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Date and time of your visit</li>
          </ul>
          <p className="leading-relaxed">
            This data is collected for security and operational purposes only.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Email contact</h2>
          <p className="leading-relaxed">
            If you choose to contact us by email at hello@latouche.ai, we will collect and process the information you provide (such as your name, email address, and message content) to respond to your enquiry.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Cookies and trackers</h2>
          <p className="leading-relaxed">
            We do not use marketing or analytics trackers on this website. We use only essential cookies required for the basic operation of the site. See our <Link to="/cookies" className="text-primary hover:text-primary/80">Cookies page</Link> for more information.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Legal basis</h2>
          <p className="leading-relaxed">Our legal basis for processing data is:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Legitimate interests, for security and operational purposes</li>
            <li>Legitimate interests, to respond to email enquiries</li>
          </ul>
          
          <h2 className="text-2xl font-light text-foreground pt-4">How long we keep your data</h2>
          <p className="leading-relaxed">
            Technical logs are retained for a limited period for security purposes. Email correspondence is retained while relevant to ongoing discussions or as required for legal purposes.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Who we share data with</h2>
          <p className="leading-relaxed">We may share your data with:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Our website hosting provider</li>
            <li>Our email provider (for example, Google Workspace)</li>
          </ul>
          <p className="leading-relaxed">
            All such providers are required to keep your data secure and use it only for providing their services to us. We do not sell your personal data.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Your rights</h2>
          <p className="leading-relaxed">If you are in the UK or EU, you may have the right to:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Ask us to delete your data</li>
            <li>Object to or restrict certain types of processing</li>
          </ul>
          <p className="leading-relaxed">
            To exercise these rights, contact <a href="mailto:hello@latouche.ai" className="text-primary hover:text-primary/80">hello@latouche.ai</a>.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Changes to this policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy as La Touche develops. The updated version will be posted on this page with a revised "last updated" date.
          </p>
          
          <p className="text-sm text-muted-foreground pt-8">
            Last updated: 24 January 2026
          </p>
        </div>
      </article>
    </main>
  );
};

export default Privacy;
