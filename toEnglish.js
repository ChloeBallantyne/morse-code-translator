export function toEnglish(inputText) {
  const englishMap = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
  };

  if (inputText === undefined) {
    throw new Error("Must include an input");
  }

  const wordsArray = inputText.split("/");
  const wordsArrayTrimmed = wordsArray.map((word) => {
    return word.trim();
  });

  const englishWords = wordsArrayTrimmed.map((word) => {
    const charactersArray = word.split(" ");
    const englishCharacters = charactersArray.map((character) => {
      const english = englishMap[character];
      if (english) {
        return english;
      } else {
        return "#";
      }
    });
    return englishCharacters.join("");
  });
  return englishWords.join(" ");
}
