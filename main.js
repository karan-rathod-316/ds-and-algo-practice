
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
    let reversedInt = 0
    switch(Math.sign(n)) {
      case 0:
        return reversedInt
      case 1:
        reversedInt = parseInt(n.toString().split("").reverse().join(""))
        break;
      case -1:
        reversedInt = parseInt(n.toString().replace('-', '').split("").reverse().join("")) * -1
        break;
      default:
        return null
    }
    return reversedInt
  }



