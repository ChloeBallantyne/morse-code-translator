import { toMorseCode } from "./toMorseCode.js";

describe("test cases for a function that translates english to morse code", () => {
  const noTextInput = new Error("Must include an input");

  it("should throw an error for no input", () => {
    expect(() => {
      toMorseCode();
    }).toThrow(noTextInput);
  });

  it("should translate english to morse code correctly", () => {
    expect(toMorseCode("nology")).toBe("-. --- .-.. --- --. -.--");
    expect(toMorseCode("Chloe")).toBe("-.-. .... .-.. --- .");
    expect(toMorseCode("Hello how are you")).toBe(
      ".... . .-.. .-.. ---/.... --- .--/.- .-. ./-.-- --- ..-"
    );
  });

  it("should show a # when a non alphabetical character is passed", () => {
    expect(toMorseCode("1")).toBe("#");
    expect(toMorseCode("hell0")).toBe(".... . .-.. .-.. #");
    expect(toMorseCode("Hell0 h0w are y0u")).toBe(
      ".... . .-.. .-.. #/.... # .--/.- .-. ./-.-- # ..-"
    );
  });
});
