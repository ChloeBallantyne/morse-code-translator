export function toMorseCode(inputText) {
  const morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  };

  if (inputText === undefined) {
    throw new Error("Must include an input");
  }
  // Convert input text to uppercase
  const uppercaseText = inputText.toUpperCase();

  // Split the input text into an array of words
  const wordsArray = uppercaseText.split(" ");

  // Iterate through each word in the array
  const morseCodeWords = wordsArray.map((word) => {
    // Split the word into an array of characters
    const charactersArray = word.split("");

    // Map each character to its Morse code representation
    const morseCodeCharacters = charactersArray.map((character) => {
      // Retrieve Morse code for the character from the map
      const morseCode = morseCodeMap[character];

      // If Morse code exists for the character return it, else return a hashtag symbol
      if (morseCode) {
        return morseCode;
      } else {
        return "#";
      }
    });

    // Join Morse code characters with spaces
    return morseCodeCharacters.join(" ");
  });

  // Join Morse code words with '/'
  return morseCodeWords.join("/");
}
