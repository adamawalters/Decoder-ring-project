// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if( ( !(alphabet) || !(typeof alphabet) === "string") || !(alphabet.length === 26)) return false;
    if(!uniqueString(alphabet)) return false;
    input = input.toLowerCase();
    return encodeSubstitution(input, alphabet, encode)
  }
  
  function encodeSubstitution(input, alphabet, encode) {
    //map the provided alphabet to normal alphabet
    let map = {};
    const standardAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //if you're encoding: map normal letters to other alphabet letters. Otherwise, map other alphabet letters to standard letters
    if(encode) {
      for(let i=0; i<standardAlphabet.length; i++) {
        const letter = standardAlphabet[i];
        map[letter] = alphabet[i];
      }

    } else {
      for(let i=0; i<alphabet.length; i++) {
        const character = alphabet[i];
        map[character] = standardAlphabet[i];
    }
  }

    //iterate through each character in input and add the corresponding value of the letter as a key in the map to the string
    let result = "";
    for(let i=0; i<input.length; i++) {
      const letter = input[i];
      if(letter === " ") {
        result += letter 
      } else {
      result += map[letter];
      }
    }
    return result;
    }
  
    function uniqueString(text) {
      for (i = 0; i < text.length; i++) {
        if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
          return false;
        }
      }
      return true;
    }
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
