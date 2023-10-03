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
     //use indexOf. to cipher - iterate through the word, get the index of the letter, then get the cipher letter by using that index + shift on the regular alphabet
      // to decipher - find the index of the letter and return the letter of the alphabet that's at that index - shift
      //wrap around - if the index + shift is above 25, subtract 25. if the index + shift is below 25, add 25
      //if a letter is not in the alphabet, don't shift it
    //create an alphabet array
    //loop through the input - for each character, check if it is present in the array. if not, push directly to the return string. if so, encode further
    //if the character is present in the array - get the index of the character and add the shift value, then push the character at that value to the string (take care of wrap around to make sure number is always 0 - 25)
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = "";
    input = input.toLowerCase();

    if(!encode) shift = shift * -1

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
