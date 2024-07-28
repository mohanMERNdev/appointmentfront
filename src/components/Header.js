import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure you have corresponding CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/booking" className="nav-link" onClick={() => setIsOpen(false)}>Booking</Link>
        <Link to="/my-appointments" className="nav-link" onClick={() => setIsOpen(false)}>My Appointments</Link>
      </nav>
    </header>
  );
};

export default Header;
