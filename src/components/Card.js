// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css'; // Додамо стилі пізніше

const Card = ({ title, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <Link to={link}>
        <button>Open App</button>
      </Link>
    </div>
  );
};

export default Card;
