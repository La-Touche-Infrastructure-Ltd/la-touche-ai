import { Link } from "react-router-dom";

const Terms = () => {
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
          Website Terms of Use
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
          <h2 className="text-2xl font-light text-foreground pt-4">About this site</h2>
          <p className="leading-relaxed">
            This website is operated by La Touche Academy Ltd ("we", "us", "our"), a company registered in England and Wales (Company No. 16394708). La Touche Ltd is not the operator or service provider of this website. LA TOUCHE® is a trademark owned by La Touche Ltd and used under licence.
          </p>
          <p className="leading-relaxed">
            This website is an early holding page provided for general information about our vision and future services. By using this site, you agree to these Terms of Use.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">No services currently offered</h2>
          <p className="leading-relaxed">
            No services are currently being provided through this website. This page does not constitute an offer of services, and no contract or agreement for services arises from use of this site.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">No professional advice</h2>
          <p className="leading-relaxed">
            Nothing on this website is financial, legal, medical or professional advice. Any examples or descriptions are illustrative only. You remain responsible for your own decisions and for complying with any laws or regulations that apply to you.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Use of the site</h2>
          <p className="leading-relaxed">You agree that you will not:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Misuse the website, for example by sending spam, abusive or unlawful content</li>
            <li>Try to interfere with or damage the website or its security</li>
            <li>Attempt to access data that does not belong to you</li>
          </ul>
          <p className="leading-relaxed">
            We may block access if we believe our site is being misused.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Intellectual property</h2>
          <p className="leading-relaxed">
            All text, images, branding and other content on this site belong to La Touche Academy Ltd, La Touche Ltd, or our licensors. LA TOUCHE® is a registered trademark of La Touche Ltd. You may not copy, reproduce or reuse content without our permission, except for normal personal browsing.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Links</h2>
          <p className="leading-relaxed">
            This site may contain links to other websites. We are not responsible for the content or privacy practices of those sites.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Changes to the site and terms</h2>
          <p className="leading-relaxed">
            Because this is a holding page, we may change or remove content at any time. We may also update these Terms. Continued use of the site after changes means you accept the updated terms.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Limitation of liability</h2>
          <p className="leading-relaxed">
            As far as the law allows, La Touche Academy Ltd is not liable for any loss or damage arising from use of, or inability to use, this website, or reliance on any content on this website.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Governing law</h2>
          <p className="leading-relaxed">
            These Terms are governed by the laws of England and Wales, and any disputes will be handled by the courts of England and Wales.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Contact</h2>
          <p className="leading-relaxed">
            For enquiries, email <a href="mailto:hello@latouche.ai" className="text-primary hover:text-primary/80">hello@latouche.ai</a>
          </p>
          
          <p className="text-sm text-muted-foreground pt-8">
            Last updated: 24 January 2026
          </p>
        </div>
      </article>
    </main>
  );
};

export default Terms;
