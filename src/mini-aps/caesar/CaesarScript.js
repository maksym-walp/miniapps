const alphabet = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'.split('');
const alphabetLength = alphabet.length;

export const caesarEncrypt = (text, shift) => {
  return text
    .toLowerCase()
    .split('')
    .map(char => {
      const index = alphabet.indexOf(char);
      if (index === -1) return char; // Залишаємо символ без змін, якщо це не літера
      return alphabet[(index + shift) % alphabetLength];
    })
    .join('');
};

export const caesarDecrypt = (text, shift) => {
  return text
    .toLowerCase()
    .split('')
    .map(char => {
      const index = alphabet.indexOf(char);
      if (index === -1) return char;
      return alphabet[(index - shift + alphabetLength) % alphabetLength];
    })
    .join('');
};
