import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="logo">BPO Clone</div>
      <button className="theme-switcher" onClick={toggleTheme}>
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a onClick={() => handleScroll("#services")}>Services</a>
          </li>
          <li>
            <a onClick={() => handleScroll("#about")}>About</a>
          </li>
          <li className="dropdown">
            <a onClick={toggleSubmenu}>Solutions ⮟</a>
            {isSubmenuOpen && (
              <ul className="submenu">
                <li>
                  <a href="#call-center">Call Center Solutions</a>
                </li>
                <li>
                  <a href="#bpo-services">BPO Services</a>
                </li>
                <li>
                  <a href="#it-services">IT Services</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a onClick={() => handleScroll("#contact")}>Contact</a>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

