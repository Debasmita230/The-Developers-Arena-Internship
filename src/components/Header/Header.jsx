import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };


  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">Business Website</h2>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


