// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift > 25 || shift === 0 || shift < -25) return false;
    return cipher(input, shift, encode)
  }

  function cipher(input, shift, encode) {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = "";
    input = input.toLowerCase();

    //if decoding, shift in opposite direction
    if(!encode) shift = shift * -1 

    //iterate through input - find the shifted index using its existing index + shift. handle overflow by adding or subtracting 26. add the letter at the shifted index to a string & return
    for(let i=0; i<input.length; i++) {
      const letter = input[i];
      if(!alphabet.includes(letter)) {
        result += letter;
      } else {
        let newIndex = (alphabet.indexOf(letter) + shift)
        if(newIndex > 25) newIndex = (newIndex - 26)
        if(newIndex < 0) newIndex = (newIndex + 26) 
        result += alphabet[newIndex] 
      }
    }

    return result;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
