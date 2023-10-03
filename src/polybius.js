// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  function polybius(input, encode = true) {
    // your solution code here
  
  input = input.toLowerCase();

  if((!encode) && !(input.split(" ").join("").length % 2 === 0 )) return false; //if we are decoding and the string length without spaces is not even, return false

   if(encode) return encodePolybius(input);
   return decodePolybius(input);

  }

  function encodePolybius(input) {
    //iterate through each letter and find the index of the letter in the alphabet. 
    //the row = index / 5. if that value is less than 1, it's row 1. if less than 2, it's row 2. etc
    // the column = index % 5. this is the difference from the first letter in the row. Then, add 1 to get from 0-indexing to 1-indexing
    // add these 2 (column & row) to the string

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'ij', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = "";

    for(let i=0; i<input.length; i++) {//iterating through each letter
      let letter = input[i];
      if(letter === "i"  || letter === "j") letter = "ij";
      const letterIndex = alphabet.indexOf(letter) + 1; //not zero indexed. 1 indexed
      if(letterIndex === 0) { //handling spaces and unfound characters
        result += letter 
      } else {
        const row = Math.ceil(letterIndex / 5);
        let column = letterIndex % 5;
        if(column === 0) column = 5;
        result += column.toString() + row.toString();
      }
    }

    return result;
  }

  function decodePolybius(input) {
    //get first letter (column) and second letter (row)
    //index in alphabet = ((row * 5) - 6 ) + column
    //return letter at that index

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = "";

    for(let i=0; i<input.length; i++) {
      let letter = input[i];
      if(letter === " ") {
        result += letter;
      } else {
        const column = Number(letter);
        const row = Number(input[i+1]);
        result += alphabet[((row*5) - 6) + column]
        i++; //go forward an extra character if this was not a space
      }
    }

    return result;

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
