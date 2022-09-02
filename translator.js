// const input = document.querySelector(".input-box");
// const translatedBox = document.querySelector(".translated-box");
// const morseArray = [];

export const translateToMorse = (string) => {
    // const lastCharacter = string.charAt(string.length-1).toUpperCase();
    // console.log(lastCharacter);

    let result = ""
    const lastCharacter = string.length - 1;
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
    
    
    // console.log(result);
    
    return result;
}

// input.addEventListener("keyup", () => translateToMorse(input.value));


