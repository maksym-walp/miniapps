import React from 'react';
import CaesarComponent from './CaesarComponent'; // Імпортуємо компонент шифрування

const CaesarPage = () => {
  return (
    <div>
      <h1 className='pageTitle'>Caesar Cipher (Шифр Цезаря)</h1>
      <CaesarComponent />
    </div>
  );
};

export default CaesarPage;
