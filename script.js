import { toEnglish } from "./toEnglish.js";
import { toMorseCode } from "./toMorseCode.js";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("input").value;
  const translator = document.querySelector(
    'input[name="language_selector"]:checked'
  ).value;
  const resultArea = document.getElementById("result");
  let result = "";
  if (translator === "english") {
    result = toMorseCode(inputText);
  } else if (translator === "morse") {
    result = toEnglish(inputText);
  } else {
    result = "An error occured";
  }
  resultArea.innerHTML = result;
});
