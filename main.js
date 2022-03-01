
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

// 4. Return the character that is most commonly used in the string
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    let strObject = {};
    let result = {char:0, val:0};

    for(let char of str) {
        if(!strObject[char]) {
            strObject[char] = 1
        } else {
            strObject[char]++
        }    
    } 

    for(let char in strObject) {
        if(strObject[char] > result.val) {
            result.char = char;
            result.val = strObject[char] 
        }
    } 
    return result.char
}
maxChar("abcdefghijklmnaaaaa")

