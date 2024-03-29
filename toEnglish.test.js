import { toEnglish } from "./toEnglish.js";

describe("test cases for a function that translates morse code to english", () => {
  const noTextInput = new Error("Must include an input");

  it("should throw an error for no input", () => {
    expect(() => {
      toEnglish();
    }).toThrow(noTextInput);
  });

  it("should translate morse code to english correctly", () => {
    expect(toEnglish("-. --- .-.. --- --. -.--")).toBe("NOLOGY");
    expect(toEnglish("-.-. .... .-.. --- .")).toBe("CHLOE");
    expect(
      toEnglish(".... . .-.. .-.. ---/.... --- .--/.- .-. ./-.-- --- ..-")
    ).toBe("HELLO HOW ARE YOU");
  });

  it("should show a # when an invalid morse code character is passed", () => {
    expect(toEnglish("1")).toBe("#");
    expect(toEnglish(".... . .-.. .-.. ..--")).toBe("HELL#");
    expect(
      toEnglish(".... . .-.. .-.. ..--/.... ..-- .--/.- .-. ./-.-- ..-- ..-")
    ).toBe("HELL# H#W ARE Y#U");
  });
});
