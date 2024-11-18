import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure the CSS is correctly imported

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>Sanirenic</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
