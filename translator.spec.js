import {translateToMorse, translateToEnglish } from "./translator";

describe('Testing translateToMorse()', () => {
    it("Should convert lower case letters to morse", () => {
        // Arrange
        let string;
        // Act
        string = "a";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".-");
    });

    it("Should convert upper case letter to morse", () => {
        // Arrange
        let string;
        // Act
        string = "C";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("-.-.");
    });

    it("Should convert lower case single words to morse", () => {
        // Arrange
        let string;

        // Act
        string = "food";
        let result = translateToMorse(string);

        // Assert
        expect(result).toBe("..-. --- --- -..");
    });

    it("Should convert upper case single words to morse", () => {
        // Arrange
        let string;
        // Act
        string = "GAME";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("--. .- -- .");
    });

    it("Should convert mixed case single words to morse", () => {
        // Arrange
        let string;
        // Act
        string = "AdriAN";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".- -.. .-. .. .- -.");
    });

    it("Should convert words with space a space between to morse", () => {
        // Arrange
        let string;
        // Act
        string = "Game Over";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("--. .- -- . / --- ...- . .-.");
    });

    it("Should convert words with multiple spaces between to morse", () => {
        // Arrange
        let string;
        // Act
        string = "Game          Over      Son";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("--. .- -- . / --- ...- . .-. / ... --- -.");
    });

    it("Should convert numbers to morse", () => {
        // Arrange
        let string;
        // Act
        string = "012345";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("----- .---- ..--- ...-- ....- .....");
    });

    it("Should convert numbers with spaces to morse", () => {
        // Arrange
        let string;
        // Act
        string = "012345 23";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("----- .---- ..--- ...-- ....- ..... / ..--- ...--");
    });

    
    it("Should convert signs to morse", () => {
        // Arrange
        let string;
        // Act
        string = "?!.";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("..--.. -.-.-- .-.-.-");
    });

    it("Should convert full sentences to morse", () => {
        // Arrange
        let string;
        // Act
        string = "Hello, there! My name is... ?";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".... . .-.. .-.. --- --..-- / - .... . .-. . -.-.-- / -- -.-- / -. .- -- . / .. ... .-.-.- .-.-.- .-.-.- / ..--..");
    });
});

describe('Testing translateToEnglish()', () => {
    it('Should convert a letter morse code to english', () => {
        // Arrange
        let morse;
        // Act
        morse = "--.";
        let result = translateToEnglish(morse);
        // Assert
        expect(result).toBe("G");
    });

    it('Should convert space in morse to in space', () => {
        // Arrange
        let morse;
        // Act
        morse = "/";
        let result = translateToEnglish(morse);
        // Assert
        expect(result).toBe(" ");
    });
    it('Should convert a single morse word in a english word', () => {
        // Arrange
        let morse;
        // Act
        morse = "-... . .- ..- - .. ..-. ..- .-..";
        // Assert
        let result = translateToEnglish(morse);
        expect(result).toBe("BEAUTIFUL");
    });
    it('Should convert morse sentences in english', () => {
        // Arrange
        let morse;
        // Act
        morse = ".. / .-.. --- ...- . / - --- / .-- .-. .. - . / -.-. --- -.. .";
        // Assert
        let result = translateToEnglish(morse);
        expect(result).toBe("I LOVE TO WRITE CODE");
    });
    it('Should convert morse sentences with signs and numbers in english', () => {
        // Arrange
        let morse;
        // Act
        morse = "---.. / -.-.-- / .... .- ...- . / .---- ----- ..--.. -.-.-.";
        // Assert
        let result = translateToEnglish(morse);
        expect(result).toBe("8 ! HAVE 10?;");
    });
});

