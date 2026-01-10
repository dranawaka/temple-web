import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>ශ්‍රී ධර්මාකර විහාරය</h1>
            <p className="logo-subtitle">Sri Dharmakara Viharaya</p>
          </Link>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <div className="dropdown">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <div className="dropdown-content">
                <Link to="/about#monks" onClick={() => setIsMenuOpen(false)}>Resident Monks</Link>
                <Link to="/about#history" onClick={() => setIsMenuOpen(false)}>Our History</Link>
                <Link to="/about#buddhism" onClick={() => setIsMenuOpen(false)}>Buddhism in Sri Lanka</Link>
              </div>
            </div>
            <Link to="/events" className={`nav-link ${isActive('/events')}`} onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link to="/dhamma-sermons" className={`nav-link ${isActive('/dhamma-sermons')}`} onClick={() => setIsMenuOpen(false)}>
              Dhamma Sermons
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <Link to="/donate" className={`nav-link donate ${isActive('/donate')}`} onClick={() => setIsMenuOpen(false)}>
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

