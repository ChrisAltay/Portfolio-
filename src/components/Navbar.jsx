import React, { useState } from 'react';
import '../css/darkmode.css';
import '../css/Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    closeMenu(); 
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-custom ${darkMode ? 'dark' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <span className="split fname">Chris</span>
          <span className="split">Altay</span>
          <span className="red-circle"></span>
        </a>

        <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer" onClick={closeMenu}>Contact me</a>
            </li>
            <li className="nav-item">
              <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? '🌞' : '🌙'}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
