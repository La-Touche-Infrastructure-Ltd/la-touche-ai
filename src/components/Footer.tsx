import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-light text-foreground">La Touche</h3>
        
        <p className="text-lg text-primary">
          The touch that begins everything
        </p>
        
        <p className="text-muted-foreground max-w-lg mx-auto">
          La Touche is a human centred AI presence that brings order to documents, policies and workflows.
        </p>
        
        <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
          <Link 
            to="/privacy" 
            className="hover:text-foreground transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            className="hover:text-foreground transition-colors duration-200"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
