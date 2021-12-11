
// 1. string reversal

function reverse(str) {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

// 2. palindrome 

function palindrome(str) {
    const reversed = str.split('').reverse().join('')
    return str === reversed;
}

// 3. reverse integers
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

