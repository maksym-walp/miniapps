import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const HeaderComponent = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Home</Link>
      <nav>
        <ul className="dropdown">
          <li>
            <span className="nav" >Menu</span>
            <ul className="dropdown-content">
              <li><Link to="/converter">Number Converter</Link></li>
              <li><Link to="/caesar">Caesar Cipher</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
