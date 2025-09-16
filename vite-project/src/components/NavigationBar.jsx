import React, { useState } from 'react';
import './CSS/NavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const section = document.getElementById(id);
      
      if (section) {
        const yOffset = -80; // navbar height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        console.log(`Section with ID "${id}" not found. Make sure you have elements with these IDs on your page.`);
      }
    }, 100);
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
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              onTouchEnd={(e) => {
                // Prevent double firing on mobile
                e.preventDefault();
                handleScroll(e, 'about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience"
              onClick={(e) => handleScroll(e, 'experience')}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleScroll(e, 'experience');
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleScroll(e, 'projects');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleScroll(e, 'contact');
              }}
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