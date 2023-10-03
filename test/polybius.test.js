// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js")

describe("polybius", ()=> {

    describe("encoding", ()=>{
        it("should return a string",()=>{
            expect(polybius("thinkful")).to.be.a("string");
        })

        it("should properly encode", ()=> {
            let expected = "4432423352125413";
            let actual = polybius("thinkful")
            expect(actual).to.equal(expected);
        })

        it("should transform i/j to 42", ()=>{
            let input = "Hi there"
            let actual = polybius(input);
            expect(actual).to.include("42");
        })

        it("should encode the same value whether caps or not", ()=> {
            let lowerCaseResult = polybius("thinkful");
            let upperCaseResult = polybius("THINKFUL");
            expect(lowerCaseResult).to.equal(upperCaseResult);
        })

        it("should maintain spaces after encoding and then decoding", ()=> {
            let encoded = polybius(" hi th ere ");
            let decoded = polybius(encoded, false);
            expect(" h(i/j) th ere ").to.equal(decoded);
            expect(encoded).to.include(" ");
        })

    })

    describe("decoding", ()=>{
        it("should properly decode", ()=>{
            let expected = "thinkful";
            let actual = polybius("4432423352125413",false)
            expect(actual).to.equal(expected.replace("i", "(i/j)"));
        })

        it("should return false if the string length without spaces in uneven", ()=>{
            let actual = polybius("3251131343 25432413411", false)
            expect(actual).to.be.false;
        })

        it("should show both i and j after decoding", ()=> {
            let input = "I love to ski";
            let encoded = polybius(input);
            let decoded = polybius(encoded, false)
            expect(decoded).to.include("(i/j)");
        })
        
    })

    





})