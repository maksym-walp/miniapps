// src/pages/Converter.js
import React from 'react';
import ConverterApp from './ConverterComponent'; // Імпортуємо існуючий конвертер

const Converter = () => {
  return (
    <div>
      <h1 className='pageTitle'>Number System Converter</h1>
      <ConverterApp />
    </div>
  );
};

export default Converter;
