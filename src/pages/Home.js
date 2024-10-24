// src/pages/Home.js
import React from 'react';
import Card from '../components/Card';
import '../styles/Home.css';

const Home = () => {
  const apps = [
    { title: 'Number Converter', link: '/converter' },
    { title: 'Caesar Cipher', link: '/caesar' },
    { title: 'Wishlist', link: '/wishlist' },
    // Додаємо інші програми
  ];

  return (
    <div className="home">
      <h1 className='pageTitle'>Small Apps</h1>
      <div className="grid">
        {apps.map((app, index) => (
          <Card key={index} title={app.title} link={app.link} />
        ))}
      </div>
    </div>
  );
};

export default Home;
