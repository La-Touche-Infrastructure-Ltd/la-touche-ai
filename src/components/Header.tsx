const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand-pill">
          <img 
            alt="La Touche logo" 
            src="/lovable-uploads/4ffb72c6-3fb2-486f-b48f-303583bbbe0b.png" 
            className="brand-pill-logo"
          />
          <span className="brand-pill-text">LA TOUCHE®</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
