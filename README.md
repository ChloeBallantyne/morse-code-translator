# Morse Code Translator

## Overview
The Morse Code Translator is a web application that allows users to translate text between English and Morse code. Users can input either English text or Morse code, select the translation mode, and view the translated result.

## Technologies Used
- HTML
- CSS (SCSS)
- JavaScript
- Jest (for testing)

## Project Structure

### 1. `index.html`
- The HTML file contains the structure of the web page, including the translation form and result display area.

### 2. `style.css`
- The CSS (SCSS) file contains the styling rules for the web page, ensuring a visually appealing layout and design.

### 3. `script.js`
- The JavaScript file contains the logic for translating text between English and Morse code based on user input and selected translation mode.

### 4. `toEnglish.js`
- The `toEnglish.js` file exports a function that translates Morse code to English.

### 5. `toMorseCode.js`
- The `toMorseCode.js` file exports a function that translates English text to Morse code.

### 6. `test.js`
- The `test.js` file contains test cases for both translation functions using Jest.

## Functionality
- Users can select the translation mode (English to Morse code or Morse code to English).
- Users can input text in either English or Morse code.
- Upon submitting the form, the application translates the input text to the selected mode and displays the result.

## Styling
The project uses SCSS for styling, providing a structured and maintainable approach to CSS development. The styling ensures a user-friendly and visually appealing interface.

## Testing
The project includes unit tests for the translation functions using Jest. The tests verify the correctness of the translation logic and handle edge cases such as invalid input.

## Getting Started
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Select the translation mode, enter your message, and press 'Translate' to view the result.
