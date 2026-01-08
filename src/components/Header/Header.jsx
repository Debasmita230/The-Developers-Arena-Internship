import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">Business Website</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


