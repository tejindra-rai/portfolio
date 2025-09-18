import React, { useState } from 'react';
import './CSS/NavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const section = document.getElementById(id);
      
      if (section) {
        const yOffset = -80;
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
            onTouchStart={() => {}}
          >
            <p>Tejindra</p>
          </a>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              onTouchEnd={(e) => {
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

        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
};

export default NavigationBar;