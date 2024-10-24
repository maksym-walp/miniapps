import React from 'react';
import '../styles/Footer.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <p>Created by: John Doe, Jane Smith</p>
      <div className="social-links">
        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default FooterComponent;
