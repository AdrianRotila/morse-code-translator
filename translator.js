
// Translate to Morse
export const translateToMorse = (string) => {
    const lastCharacter = string.length - 1;
    let result = ""
    for (let index = 0; index < string.length; index++) {
        switch(string[index].toUpperCase()){
            // Letters
            case "A":
                result += ".-";
                break;
            case "B":
                result += "-...";
                break;
            case "C":
                result += "-.-.";
                break;  
            case "D":
                result += "-..";
                break;
            case "E":
                result += ".";
                break;
            case "F":
                result += "..-.";
                break;
            case "G":
                result += "--.";
                break;
            case "H":
                result += "....";
                break;
            case "I":
                result += "..";
                break;
            case "J":
                result += ".---";
                break;
            case "K":
                result += "-.-";
                break;
            case "L":
                result += ".-..";
                break;
            case "M":
                result += "--";
                break;
            case "N":
                result += "-.";
                break;
            case "O":
                result += "---";
                break;
            case "P":
                result += ".--.";
                break;
            case "Q":
                result += "--.-";
                break;
            case "R":
                result += ".-.";
                break;
            case "S":
                result += "...";
                break;
            case "T":
                result += "-";
                break;
            case "U":
                result += "..-";
                break;
            case "V":
                result += "...-";
                break;
            case "W":
                result += ".--";
                break;
            case "X":
                result += "-..-";
                break;
            case "Y":
                result += "-.--";
                break;
            case "Z":
                result += "--..";
                break;
    
            // Numbers
            case "0":
                result += "-----";
                break;
            case "1":
                result += ".----";
                break;
            case "2":
                result += "..---";
                break;
            case "3":
                result += "...--";
                break;
            case "4":
                result += "....-";
                break;
            case "5":
                result += ".....";
                break;
            case "6":
                result += "-....";
                break;
            case "7":
                result += "--...";
                break;
            case "8":
                result += "---..";
                break;
            case "9":
                result += "----.";
                break;
    
            // Punctuation
            case ".":
                result += ".-.-.-";
                break;
            case ",":
                result += "--..--";
                break;
            case "?":
                result += "..--..";
                break;
            case "!":
                result += "-.-.--";
                break;
            case "/":
                result += "-..-.";
                break;
            case "(":
                result += "-.--.";
                break;
            case ")":
                result += "-.--.-";
                break;
            case ":":
                result += "---...";
                break;
            case ";":
                result += "-.-.-.";
                break;
            case "=":
                result += "-...-";
                break;
            case "+":
                result += ".-.-.";
                break;
            case "-":
                result += "-....-";
                break;
            case "@":
                result += ".--.-.";
                break;
            case " ":
                if(result.endsWith("/ ")){
                   result = result.slice(0, -2) + "/";
                } else {
                    result += "/";
                }
                break;
            default:
                break;
        }
        if(index !== lastCharacter) {
            result += " ";
        }
    }
    return result;
}

// Translate to English
export const translateToEnglish = (morse) => {
    const morseLetters = morse.split(" ");
    let result = ""
    for(let index = 0; index < morseLetters.length; index ++) {
        switch(morseLetters[index]) {
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
            case "-.":
                result += "N";
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
            case "-....-":
                result += "-";
                break
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
}

