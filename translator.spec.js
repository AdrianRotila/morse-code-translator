import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
    it("a should translate to be .-", () => {
        // Arrange
        let string;

        // Act
        string = "a";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".-");
    })
})

describe('Testing translateToMorse', () => {
    it("should translate to be .-", () => {
        // Arrange
        let string;
    
        // Act
        string = "a";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".-");
    })
})

// - Receive letters and translate those letters into morse code
// - Take into consideration capital letters- These also need to translate to morse code
// - Take into consideration spaces between words and translate these accordingly
// - Numbers!!!
// - Symbols??
// - Extension - Other languages available other than English

// Should we have a translate to english translator?












})