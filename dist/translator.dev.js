"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToEnglish = void 0;

// const inputEnglish = document.querySelector(".english__input");
// const toMorseButton = document.querySelector(".english__button");
// const translatedBox = document.querySelector(".english__translation");
// Translate to Morse
// const translateToMorse = (string) => {
//     const lastCharacter = string.length - 1;
//     for (let index = 0; index < string.length; index++) {
//         if(index !== lastCharacter || index !== 0) {
//             translatedBox.innerHTML += " ";
//         } 
//         switch(string[index].toUpperCase()){
//             // Letters
//             case "A":
//                 translatedBox.innerHTML += ".-";
//                 break;
//             case "B":
//                 translatedBox.innerHTML += "-...";
//                 break;
//             case "C":
//                 translatedBox.innerHTML += "-.-.";
//                 break;  
//             case "D":
//                 translatedBox.innerHTML += "-..";
//                 break;
//             case "E":
//                 translatedBox.innerHTML += ".";
//                 break;
//             case "F":
//                 translatedBox.innerHTML += "..-.";
//                 break;
//             case "G":
//                 translatedBox.innerHTML += "--.";
//                 break;
//             case "H":
//                 translatedBox.innerHTML += "....";
//                 break;
//             case "I":
//                 translatedBox.innerHTML += "..";
//                 break;
//             case "J":
//                 translatedBox.innerHTML += ".---";
//                 break;
//             case "K":
//                 translatedBox.innerHTML += "-.-";
//                 break;
//             case "L":
//                 translatedBox.innerHTML += ".-..";
//                 break;
//             case "M":
//                 translatedBox.innerHTML += "--";
//                 break;
//             case "N":
//                 translatedBox.innerHTML += "-.";
//                 break;
//             case "O":
//                 translatedBox.innerHTML += "---";
//                 break;
//             case "P":
//                 translatedBox.innerHTML += ".--.";
//                 break;
//             case "Q":
//                 translatedBox.innerHTML += "--.-";
//                 break;
//             case "R":
//                 translatedBox.innerHTML += ".-.";
//                 break;
//             case "S":
//                 translatedBox.innerHTML += "...";
//                 break;
//             case "T":
//                 translatedBox.innerHTML += "-";
//                 break;
//             case "U":
//                 translatedBox.innerHTML += "..-";
//                 break;
//             case "V":
//                 translatedBox.innerHTML += "...-";
//                 break;
//             case "W":
//                 translatedBox.innerHTML += ".--";
//                 break;
//             case "X":
//                 translatedBox.innerHTML += "-..-";
//                 break;
//             case "Y":
//                 translatedBox.innerHTML += "-.--";
//                 break;
//             case "Z":
//                 translatedBox.innerHTML += "--..";
//                 break;
//             // Numbers
//             case "0":
//                 translatedBox.innerHTML += "-----";
//                 break;
//             case "1":
//                 translatedBox.innerHTML += ".----";
//                 break;
//             case "2":
//                 translatedBox.innerHTML += "..---";
//                 break;
//             case "3":
//                 translatedBox.innerHTML += "...--";
//                 break;
//             case "4":
//                 translatedBox.innerHTML += "....-";
//                 break;
//             case "5":
//                 translatedBox.innerHTML += ".....";
//                 break;
//             case "6":
//                 translatedBox.innerHTML += "-....";
//                 break;
//             case "7":
//                 translatedBox.innerHTML += "--...";
//                 break;
//             case "8":
//                 translatedBox.innerHTML += "---..";
//                 break;
//             case "9":
//                 translatedBox.innerHTML += "----.";
//                 break;
//             // Punctuation
//             case ".":
//                 translatedBox.innerHTML += ".-.-.-";
//                 break;
//             case ",":
//                 translatedBox.innerHTML += "--..--";
//                 break;
//             case "?":
//                 translatedBox.innerHTML += "..--..";
//                 break;
//             case "!":
//                 translatedBox.innerHTML += "-.-.--";
//                 break;
//             case "/":
//                 translatedBox.innerHTML += "-..-.";
//                 break;
//             case "(":
//                 translatedBox.innerHTML += "-.--.";
//                 break;
//             case ")":
//                 translatedBox.innerHTML += "-.--.-";
//                 break;
//             case ":":
//                 translatedBox.innerHTML += "---...";
//                 break;
//             case ";":
//                 translatedBox.innerHTML += "-.-.-.";
//                 break;
//             case "=":
//                 translatedBox.innerHTML += "-...-";
//                 break;
//             case "+":
//                 translatedBox.innerHTML += ".-.-.";
//                 break;
//             case "@":
//                 translatedBox.innerHTML += ".--.-.";
//                 break;
//             case " ":
//                 if(translatedBox.innerHTML.endsWith("/ ")){
//                    translatedBox.innerHTML = translatedBox.innerHTML.slice(0, -2) + "/";
//                 } else {
//                     translatedBox.innerHTML += "/";
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
// }
// toMorseButton.addEventListener("click", () => {
//     translatedBox.innerHTML = "";
//     translateToMorse(inputEnglish.value);
// })
// Translate to English
var translateToEnglish = function translateToEnglish(morse) {
  var morseLetters = morse.split(" ");
  var result = "";
  console.log(morseLetters);

  for (var index = 0; index < morseLetters.length; index++) {
    switch (morseLetters[index]) {
      case ".-":
        result += "A";
        break;

      case "-...":
        result += "B";
        break;

      case "-.-.":
        result += "C";
        break;

      case "-..":
        result += "D";
        break;

      case ".":
        result += "E";
        break;

      case "..-.":
        result += "F";
        break;

      case "--.":
        result += "G";
        break;

      case "....":
        result += "H";
        break;

      case "..":
        result += "I";
        break;

      case ".---":
        result += "J";
        break;

      case "-.-":
        result += "K";
        break;

      case ".-..":
        result += "L";
        break;

      case "--":
        result += "M";
        break;

      case "N":
        result += "-.";
        break;

      case "---":
        result += "O";
        break;

      case ".--.":
        result += "P";
        break;

      case "--.-":
        result += "Q";
        break;

      case ".-.":
        result += "R";
        break;

      case "...":
        result += "S";
        break;

      case "-":
        result += "T";
        break;

      case "..-":
        result += "U";
        break;

      case "...-":
        result += "V";
        break;

      case ".--":
        result += "W";
        break;

      case "-..-":
        result += "X";
        break;

      case "-.--":
        result += "Y";
        break;

      case "--..":
        result += "Z";
        break;
      // Numbers

      case "-----":
        result += "0";
        break;

      case ".----":
        result += "1";
        break;

      case "..---":
        result += "2";
        break;

      case "...--":
        result += "3";
        break;

      case "....-":
        result += "4";
        break;

      case ".....":
        result += "5";
        break;

      case "6-....":
        result += "6";
        break;

      case "--...":
        result += "7";
        break;

      case "---..":
        result += "8";
        break;

      case "----.":
        result += "9";
        break;
      // Punctuation

      case ".-.-.-":
        result += ".";
        break;

      case "--..--":
        result += ",";
        break;

      case "..--..":
        result += "?";
        break;

      case "-.-.--":
        result += "!";
        break;

      case "-..-.":
        result += "/";
        break;

      case "-.--.":
        result += "(";
        break;

      case "-.--.-":
        result += ")";
        break;

      case "---...":
        result += ":";
        break;

      case "-.-.-.":
        result += ";";
        break;

      case "-...-":
        result += "=";
        break;

      case ".-.-.":
        result += "+";
        break;

      case ".--.-.":
        result += "@";
        break;

      case "/":
        result += " ";
        break;

      default:
        break;
    }
  }

  return result;
};

exports.translateToEnglish = translateToEnglish;