import logo from "@/assets/la-touche-logo.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="brand-mark">
        <img src={logo} alt="La Touche icon" />
        <div className="brand-title">
          LA TOUCHE®
          <span>Human centred AI</span>
        </div>
      </div>
      <nav className="header-links">
        <a href="#what-is-la-touche">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
