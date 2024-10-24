import React, { useState } from 'react';
import { decimalToBinary, decimalToHexadecimal, binaryToDecimal, hexadecimalToDecimal, binaryToHexadecimal, hexadecimalToBinary } from './ConverterScript.js';

function Converter() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [convertFrom, setConvertFrom] = useState('decimal'); // Система з якої конвертуємо
  const [convertTo, setConvertTo] = useState('binary'); // Система в яку конвертуємо

  const handleConvert = () => {
    let result;
    const num = parseInt(inputValue, 10);

    if (convertFrom === 'decimal' && convertTo === 'binary') {
      result = decimalToBinary(num);
    } else if (convertFrom === 'decimal' && convertTo === 'hexadecimal') {
      result = decimalToHexadecimal(num);
    } else if (convertFrom === 'binary' && convertTo === 'decimal') {
      result = binaryToDecimal(inputValue);
    } else if (convertFrom === 'binary' && convertTo === 'hexadecimal') {
      result = binaryToHexadecimal(inputValue);
    } else if (convertFrom === 'hexadecimal' && convertTo === 'decimal') {
      result = hexadecimalToDecimal(inputValue);
    } else if (convertFrom === 'hexadecimal' && convertTo === 'binary') {
      result = hexadecimalToBinary(inputValue);
    } else {
      result = "Invalid conversion!";
    }

    setOutputValue(result);
  };

  return (
    <div className="App">
      <h1>Number System Converter</h1>
      <div>
        <label>Convert from: </label>
        <select value={convertFrom} onChange={(e) => setConvertFrom(e.target.value)}>
          <option value="decimal">Decimal</option>
          <option value="binary">Binary</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </div>

      <div>
        <label>Convert to: </label>
        <select value={convertTo} onChange={(e) => setConvertTo(e.target.value)}>
          <option value="binary">Binary</option>
          <option value="decimal">Decimal</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Result: {outputValue}</h2>
      </div>
    </div>
  );
}

export default Converter;