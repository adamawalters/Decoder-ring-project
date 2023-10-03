// Write your tests here!
let {caesar} = require("../src/caesar.js");
const polybius = require("../src/polybius.js");
let expect = require("chai").expect;

describe("caesar", () => {

    it("should encode properly when shifted by 3", ()=>{
        let input = "hello";
        let expected = "khoor";
        let actual = caesar(input, 3);
        expect(expected).to.equal(actual);
    })

    it("should decode properly when shifted by 3", ()=> {
        let input = "khoor";
        let expected = "hello"; 
        let actual = caesar(input, 3, false)
        expect(expected).to.equal(actual);
    })

  
    it("should return false if shift value is greater than 25", ()=> {
            let input = "hello";
            let expected = false;
            let actual = caesar(input, 26)
            expect(expected).to.equal(actual);
    })

    it("should return false if shift value is less than -25", ()=> {
        let input = "hello";
        let expected = false;
        let actual = caesar(input, -26)
        expect(expected).to.equal(actual);
    })

    it("should return false if shift value is not present", ()=> {
        let input = "hello";
        let expected = false;
        let actual = caesar(input)
        expect(expected).to.equal(actual);
    })
    
    
    it("should encode and decode the same value if letters are caps or not", ()=> {
        let capsEncoded = caesar("hello", 14);
        let normEncoded = caesar("HELLO", 14);
        expect(capsEncoded).to.equal(normEncoded);
        let capsDecoded = caesar(capsEncoded.toUpperCase(), 14, false);
        let normDecoded = caesar(capsEncoded.toLowerCase(), 14, false);
        expect(capsDecoded).to.equal(normDecoded);
    })

    it("should encode properly when shift goes over alphabet", ()=> {
        let expected = "zbd"
        let actual = caesar("ace", 25)
        expect(expected).to.equal(actual);
    })

    it("should maintain spaces when encoding/decoding", ()=> {
        let input = "Zebra Magazine";
        let encoded = caesar(input, 3);
        let decoded = caesar(encoded, 3, false)
        expect(input.toLowerCase()).to.equal(decoded);
    })


})
