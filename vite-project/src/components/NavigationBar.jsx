import React, { useState } from 'react';
import './CSS/NavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    
    if (section) {
      const yOffset = -80; // navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.log(`Section with ID "${id}" not found. Make sure you have elements with these IDs on your page.`);
    }
    
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, 'hero')}
              onTouchStart={() => {}} // Enable touch events
            >
            <p>Tejindra</p>
            </a>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, 'about')}
              onTouchStart={() => {}} // Enable touch events
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={(e) => handleScroll(e, 'experience')}
              onTouchStart={() => {}} // Enable touch events
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              onTouchStart={() => {}} // Enable touch events
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              onTouchStart={() => {}} // Enable touch events
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
};

export default NavigationBar;