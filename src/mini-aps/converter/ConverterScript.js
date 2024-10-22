//converter.js

// Конвертація з десяткової в двійкову
export const decimalToBinary = (number) => {
  let result = "";
  while (number > 0) {
    result = (number % 2).toString() + result;
    number = Math.floor(number / 2);
  }
  return result === "" ? "0" : result;
};


// Конвертація з двійкової в десяткову
export const binaryToDecimal = (binary) => {
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    const bit = binary[binary.length - 1 - i];
    if (bit === '1') {
      result += Math.pow(2, i);
    }
  }
  return result;
};


// Конвертація з десяткової в шістнадцяткову
export const decimalToHexadecimal = (number) => {
  const hexChars = "0123456789ABCDEF";
  let result = "";
  while (number > 0) {
    result = hexChars[number % 16] + result;
    number = Math.floor(number / 16);
  }
  return result === "" ? "0" : result;
};


// Конвертація з шістнадцяткової в десяткову
export const hexadecimalToDecimal = (hex) => {
  const hexChars = "0123456789ABCDEF";
  let result = 0;
  for (let i = 0; i < hex.length; i++) {
    const digit = hex[hex.length - 1 - i].toUpperCase();
    result += hexChars.indexOf(digit) * Math.pow(16, i);
  }
  return result;
};


// Конвертація з двійкової в шістнадцяткову через десяткову
export const binaryToHexadecimal = (binary) => {
  const decimal = binaryToDecimal(binary);
  return decimalToHexadecimal(decimal);
};


// Конвертація з шістнадцяткової в двійкову
export const hexadecimalToBinary = (hex) => {
  const decimal = parseInt(hex, 16); // Спершу у десяткове
  return decimal.toString(2); // Потім у двійкове
};
