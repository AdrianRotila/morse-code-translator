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

export const translateToEnglish = (morse) => {
    
}