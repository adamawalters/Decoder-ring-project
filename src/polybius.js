// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  

  function polybius(input, encode = true) {
    // your solution code here
  input = input.toLowerCase();
  inputArray = input.split("");
  if((!encode) && !(input.split(" ").join("").length % 2 === 0 )) return false; //if we are decoding and the string length without spaces is not even, return false
  if(encode) return encodePolybius(inputArray);
  return decodePolybius(inputArray);
  }

  function encodePolybius(input) {

    //create mapping of letter to number to encode
    let encodeMapping = {
      a: "11", b: "21", c : "31", d: "41", e: "51", 
      f: "12", g: "22", h: "32", i : "42", j: "42", k: "52",
      l: "13", m: "23", n: "33", o: "43", p: "53", 
      q: "14", r: "24", s: "34", t: "44", u: "54", 
      v: "15", w: "25", x: "35", y: "45", z: "55"
    }

    //iterate through input array - for each letter, return the encoded version by referencing the encode mapping - store in a string
    let result = input.reduce((string, currentLetter) =>{
      if(currentLetter === " ") return string + currentLetter;
      return string + encodeMapping[currentLetter];
    }, "")

    //return the string
    return result;
  }

  function decodePolybius(input) {
    //create mapping of numbers to letters
    let decodeMapping = {
      "11": "a", "21": "b", "31" : "c", "41":"d", "51":"e",
      "12":"f",  "22":"g", "32":"h", "42":"(i/j)", "52":"k",
      "13": "l", "23":"m", "33":"n", "43":"o", "53":"p", 
      "14":"q", "24":"r", "34":"s", "44":"t", "54":"u", 
      "15": "v","25":"w", "35":"x", "45":"y", "55":"z"
    }

    let result = "";
    
    //iterate through input array - add the relevant mapping of the input to the string (retrieve the decoded value using the input letter)
    for(let i=0; i<input.length; i++) {
      if(input[i] === " ") {
        result += " " 
      } else {
      const key = input[i] + input[i+1];
      result+= decodeMapping[key];
      i++;
      }
    }

    //return the string with the decoded values
    return result;

  }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
