// Write your tests here!
const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", ()=>{

    describe("error handling", ()=> {
        it("should return false if alphabet length isn't 26", ()=>{
            let shortAlphabet = "ajfdc";
            let longAlphabet = "efghklmnabcdopqrstuvij90$2yz932"
            let encoded = substitution("Hello", shortAlphabet);
            expect(encoded).to.be.false;
            let encoded2 = substitution("Hello", longAlphabet);
            expect(encoded2).to.be.false;
        })

        it("should return false if alphabet doesn't have unique characters", ()=>{
            let alphabet = "rojakxzocdefghilmnpqstuvwy";
            let encoded = substitution("Hi there", alphabet)
            expect(encoded).to.be.false;
        })
    })

    describe("encoding and decoding", ()=>{
        it("should encode properly", ()=>{
            let expected = "jrufscpw"
            let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            expect(expected).to.equal(actual);
        })

        it("should maintain spaces", ()=>{
            let expected = "elp xhm xf mbymwwmfj dne";
            let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            expect(expected).to.equal(actual);
        })

        it("should ignore capitals", ()=>{
            let encoded1 = substitution("Hi there", "xoyqmcgrukswaflnthdjpzibev");
            let encoded2 = substitution("HI THERE", "xoyqmcgrukswaflnthdjpzibev");
            expect(encoded1).to.equal(encoded2);
        })

        it("should encode properly if alphabet contains special characters", ()=>{
            let encoded = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            let decoded = substitution(encoded, "$wae&zrdxtfcygvuhbijnokmpl", false);
            expect("message").to.equal(decoded);
        }) 

        it("should return false if the alphabet is not a string", ()=> {
            expect(substitution("hello")).to.be.false;
        })
        
    })


})
