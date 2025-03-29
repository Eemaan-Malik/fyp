import React, { useState } from 'react';
import '../index.css';

function Navbar({ setFormType }) { // Accept setFormType prop
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Architext</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li className="services" onClick={toggleDropdown}>
          Services <span className="arrow">▼</span>
          {isDropdownOpen && (
            <ul className="dropdown">
              <li>2D Visualization</li>
              <li>3D Visualization</li>
            </ul>
          )}
        </li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="auth-buttons">
        {/* Use setFormType to open modals */}
        <button className="sign-up" onClick={() => setFormType('signUp')}>Sign Up</button>
        <button className="login" onClick={() => setFormType('login')}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
