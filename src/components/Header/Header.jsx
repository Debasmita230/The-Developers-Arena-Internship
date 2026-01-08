import { useState } from 'react';
import './Header.css';

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


