// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Converter from './mini-apps/converter/ConverterPage';
import Caesar from './mini-apps/caesar/CaesarPage';
import WishlistPage from './mini-apps/birthday/WishlistPage';
import FrequencyAnalyzerPage from './mini-apps/Frequency/FrequencyAnalyzerPage'; // Імпортуємо нову сторінку
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/miniapps" element={<Home />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/caesar" element={<Caesar />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/frequency" element={<FrequencyAnalyzerPage />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
