"use strict";

// To Morse translation elements
var inputEnglish = document.querySelector(".english__input");
var toMorseButton = document.querySelector(".english__button"); // To English translation elements

var inputMorse = document.querySelector(".morse__input");
var toEnglishButton = document.querySelector(".morse__button"); // Translate to Morse

var translateToMorse = function translateToMorse(string) {
  var lastCharacter = string.length - 1;

  for (var index = 0; index < string.length; index++) {
    if (index !== lastCharacter || index !== 0) {
      inputMorse.value += " ";
    }

    switch (string[index].toUpperCase()) {
      // Letters
      case "A":
        inputMorse.value += ".-";
        break;

      case "B":
        inputMorse.value += "-...";
        break;

      case "C":
        inputMorse.value += "-.-.";
        break;

      case "D":
        inputMorse.value += "-..";
        break;

      case "E":
        inputMorse.value += ".";
        break;

      case "F":
        inputMorse.value += "..-.";
        break;

      case "G":
        inputMorse.value += "--.";
        break;

      case "H":
        inputMorse.value += "....";
        break;

      case "I":
        inputMorse.value += "..";
        break;

      case "J":
        inputMorse.value += ".---";
        break;

      case "K":
        inputMorse.value += "-.-";
        break;

      case "L":
        inputMorse.value += ".-..";
        break;

      case "M":
        inputMorse.value += "--";
        break;

      case "N":
        inputMorse.value += "-.";
        break;

      case "O":
        inputMorse.value += "---";
        break;

      case "P":
        inputMorse.value += ".--.";
        break;

      case "Q":
        inputMorse.value += "--.-";
        break;

      case "R":
        inputMorse.value += ".-.";
        break;

      case "S":
        inputMorse.value += "...";
        break;

      case "T":
        inputMorse.value += "-";
        break;

      case "U":
        inputMorse.value += "..-";
        break;

      case "V":
        inputMorse.value += "...-";
        break;

      case "W":
        inputMorse.value += ".--";
        break;

      case "X":
        inputMorse.value += "-..-";
        break;

      case "Y":
        inputMorse.value += "-.--";
        break;

      case "Z":
        inputMorse.value += "--..";
        break;
      // Numbers

      case "0":
        inputMorse.value += "-----";
        break;

      case "1":
        inputMorse.value += ".----";
        break;

      case "2":
        inputMorse.value += "..---";
        break;

      case "3":
        inputMorse.value += "...--";
        break;

      case "4":
        inputMorse.value += "....-";
        break;

      case "5":
        inputMorse.value += ".....";
        break;

      case "6":
        inputMorse.value += "-....";
        break;

      case "7":
        inputMorse.value += "--...";
        break;

      case "8":
        inputMorse.value += "---..";
        break;

      case "9":
        inputMorse.value += "----.";
        break;
      // Punctuation

      case ".":
        inputMorse.value += ".-.-.-";
        break;

      case ",":
        inputMorse.value += "--..--";
        break;

      case "?":
        inputMorse.value += "..--..";
        break;

      case "!":
        inputMorse.value += "-.-.--";
        break;

      case "/":
        inputMorse.value += "-..-.";
        break;

      case "(":
        inputMorse.value += "-.--.";
        break;

      case ")":
        inputMorse.value += "-.--.-";
        break;

      case ":":
        inputMorse.value += "---...";
        break;

      case ";":
        inputMorse.value += "-.-.-.";
        break;

      case "=":
        inputMorse.value += "-...-";
        break;

      case "+":
        inputMorse.value += ".-.-.";
        break;

      case "-":
        inputMorse.value += "-....-";
        break;

      case "@":
        inputMorse.value += ".--.-.";
        break;

      case " ":
        if (inputMorse.value.endsWith("/ ")) {
          inputMorse.value = inputMorse.value.slice(0, -2) + "/";
        } else {
          inputMorse.value += "/";
        }

        break;

      default:
        break;
    }
  }
};

toMorseButton.addEventListener("click", function () {
  inputMorse.value = "";
  translateToMorse(inputEnglish.value);
}); // Translate to English

var translateToEnglish = function translateToEnglish(morse) {
  var morseLetters = morse.split(" ");

  for (var index = 0; index < morseLetters.length; index++) {
    switch (morseLetters[index]) {
      case ".-":
        inputEnglish.value += "A";
        break;

      case "-...":
        inputEnglish.value += "B";
        break;

      case "-.-.":
        inputEnglish.value += "C";
        break;

      case "-..":
        inputEnglish.value += "D";
        break;

      case ".":
        inputEnglish.value += "E";
        break;

      case "..-.":
        inputEnglish.value += "F";
        break;

      case "--.":
        inputEnglish.value += "G";
        break;

      case "....":
        inputEnglish.value += "H";
        break;

      case "..":
        inputEnglish.value += "I";
        break;

      case ".---":
        inputEnglish.value += "J";
        break;

      case "-.-":
        inputEnglish.value += "K";
        break;

      case ".-..":
        inputEnglish.value += "L";
        break;

      case "--":
        inputEnglish.value += "M";
        break;

      case "N":
        inputEnglish.value += "-.";
        break;

      case "---":
        inputEnglish.value += "O";
        break;

      case ".--.":
        inputEnglish.value += "P";
        break;

      case "--.-":
        inputEnglish.value += "Q";
        break;

      case ".-.":
        inputEnglish.value += "R";
        break;

      case "...":
        inputEnglish.value += "S";
        break;

      case "-":
        inputEnglish.value += "T";
        break;

      case "..-":
        inputEnglish.value += "U";
        break;

      case "...-":
        inputEnglish.value += "V";
        break;

      case ".--":
        inputEnglish.value += "W";
        break;

      case "-..-":
        inputEnglish.value += "X";
        break;

      case "-.--":
        inputEnglish.value += "Y";
        break;

      case "--..":
        inputEnglish.value += "Z";
        break;
      // Numbers

      case "-----":
        inputEnglish.value += "0";
        break;

      case ".----":
        inputEnglish.value += "1";
        break;

      case "..---":
        inputEnglish.value += "2";
        break;

      case "...--":
        inputEnglish.value += "3";
        break;

      case "....-":
        inputEnglish.value += "4";
        break;

      case ".....":
        inputEnglish.value += "5";
        break;

      case "6-....":
        inputEnglish.value += "6";
        break;

      case "--...":
        inputEnglish.value += "7";
        break;

      case "---..":
        inputEnglish.value += "8";
        break;

      case "----.":
        inputEnglish.value += "9";
        break;
      // Punctuation

      case ".-.-.-":
        inputEnglish.value += ".";
        break;

      case "--..--":
        inputEnglish.value += ",";
        break;

      case "-....-":
        inputEnglish.value += "-";
        break;

      case "..--..":
        inputEnglish.value += "?";
        break;

      case "-.-.--":
        inputEnglish.value += "!";
        break;

      case "-..-.":
        inputEnglish.value += "/";
        break;

      case "-.--.":
        inputEnglish.value += "(";
        break;

      case "-.--.-":
        inputEnglish.value += ")";
        break;

      case "---...":
        inputEnglish.value += ":";
        break;

      case "-.-.-.":
        inputEnglish.value += ";";
        break;

      case "-...-":
        inputEnglish.value += "=";
        break;

      case ".-.-.":
        inputEnglish.value += "+";
        break;

      case ".--.-.":
        inputEnglish.value += "@";
        break;

      case "/":
        inputEnglish.value += " ";
        break;

      default:
        break;
    }
  }
};

toEnglishButton.addEventListener("click", function () {
  inputEnglish.value = "";
  translateToEnglish(inputMorse.value);
});