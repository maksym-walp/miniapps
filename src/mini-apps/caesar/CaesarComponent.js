import React, { useState } from 'react';
import { caesarEncrypt, caesarDecrypt } from './CaesarScript';

const CaesarComponent = () => {
  const [mode, setMode] = useState('encrypt'); // Шифрування за замовчуванням
  const [key, setKey] = useState(0);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleEncryptDecrypt = () => {
    const shift = parseInt(key, 10) % 33; // Використовуємо лише залишок для ключа в межах алфавіту
    let result;

    if (mode === 'encrypt') {
      result = caesarEncrypt(inputText, shift);
    } else {
      result = caesarDecrypt(inputText, shift);
    }

    setOutputText(result);
  };

  return (
    <div>
      <div>
        <label>Виберіть режим:</label>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="encrypt">Шифрування</option>
          <option value="decrypt">Дешифрування</option>
        </select>
      </div>

      <div>
        <label>Введіть ключ (0-32):</label>
        <input
          type="number"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          min="0"
          max="32"
        />
      </div>

      <div>
        <label>Введіть повідомлення:</label>
        <textarea
          rows="4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>

      <button onClick={handleEncryptDecrypt}>
        {mode === 'encrypt' ? 'Зашифрувати' : 'Дешифрувати'}
      </button>

      <div>
        <h2>Результат:</h2>
        <textarea rows="4" value={outputText} readOnly></textarea>
      </div>
    </div>
  );
};

export default CaesarComponent;
