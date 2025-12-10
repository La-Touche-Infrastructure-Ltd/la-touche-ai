import logo from "@/assets/la-touche-logo.png";
const Header = () => {
  return <header className="site-header">
      <div className="brand-mark">
        <img alt="La Touche icon" src="/lovable-uploads/39dfb032-ac6a-4900-a9c8-f72f3468cd77.png" />
        <div className="brand-title">
          LA TOUCHE®
          <span>Human centred AI</span>
        </div>
      </div>
      <nav className="header-links">
        <a href="#what-is-la-touche">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>;
};
export default Header;