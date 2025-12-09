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
          Privacy Policy – La Touche Website
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            This Privacy Policy explains how La Touche ("we", "us", "our") collects and uses personal data when you visit our website and when you contact us through the "Stay close as we build" form.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Who we are</h2>
          <p className="leading-relaxed">
            La Touche is a human centred AI brand based in the United Kingdom.<br />
            Contact email: hello@latouche.ai
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Data we collect</h2>
          <p className="leading-relaxed">If you use our contact form, we collect:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Name</li>
            <li>Email address</li>
            <li>Organisation (optional)</li>
            <li>The message you send us about your documents, workflows or other questions</li>
          </ul>
          
          <p className="leading-relaxed">
            Our hosting and email providers may also collect basic technical information such as:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Date and time of your visit</li>
          </ul>
          
          <p className="leading-relaxed">
            We do not currently run advertising trackers on this holding page.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">How we use your data</h2>
          <p className="leading-relaxed">We use the information you provide to:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Read and respond to your message</li>
            <li>Keep a record of people and organisations interested in La Touche</li>
            <li>Improve how we design our tools and services</li>
          </ul>
          <p className="leading-relaxed">We do not sell your personal data.</p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Legal basis</h2>
          <p className="leading-relaxed">Our legal basis for processing this data is:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Legitimate interests, to respond to your enquiry and understand interest in La Touche</li>
            <li>In some cases consent, when you clearly ask us to keep you updated</li>
          </ul>
          
          <h2 className="text-2xl font-light text-foreground pt-4">How long we keep your data</h2>
          <p className="leading-relaxed">
            We keep contact emails and form submissions while we are actively building La Touche and engaging with early partners, unless you ask us to delete your information sooner.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Who we share data with</h2>
          <p className="leading-relaxed">We may share your data with:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Our website hosting provider</li>
            <li>Our email provider (for example, Google Workspace)</li>
            <li>Other service providers who help us operate the website and manage messages</li>
          </ul>
          <p className="leading-relaxed">
            All such providers are required to keep your data secure and use it only for providing their services to us.
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
            To exercise these rights, contact hello@latouche.ai.
          </p>
          
          <h2 className="text-2xl font-light text-foreground pt-4">Changes to this policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy as La Touche develops. The updated version will be posted on this page with a revised "last updated" date.
          </p>
          
          <p className="text-sm text-muted-foreground pt-8">
            Last updated: [DATE]
          </p>
        </div>
      </article>
    </main>
  );
};

export default Privacy;
