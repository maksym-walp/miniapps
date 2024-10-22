import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Converter from './mini-aps/converter/ConverterPage';
import Caesar from './mini-aps/caesar/CaesarPage';
import Wishlist from './mini-aps/birthday/WishlistPage'; // Імпортуємо нову сторінку
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/caesar" element={<Caesar />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
