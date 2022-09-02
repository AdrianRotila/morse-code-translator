import { translateToMorse } from "./translator";

describe('Testing translateToMorse()', () => {
    it("Should convert lower case letters", () => {
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
    })

    it("Should convert upper case single words to morse", () => {
        // Arrange
        let string;
        // Act
        string = "GAME";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("--. .- -- .");
    })

    it("Should convert mixed case single words to morse", () => {
        // Arrange
        let string;
        // Act
        string = "AdriAN";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".- -.. .-. .. .- -.");
    })

    it("Should convert words with space a space between to morse", () => {
        // Arrange
        let string;
        // Act
        string = "Game Over";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("--. .- -- . / --- ...- . .-.");
    })

    it("Should convert words with multiple spaces between to morse", () => {
        // Arrange
        let string;
        // Act
        string = "Game          Over      Son";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("--. .- -- . / --- ...- . .-. / ... --- -.");
    })

    it("Should convert numbers to morse", () => {
        // Arrange
        let string;
        // Act
        string = "012345";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("----- .---- ..--- ...-- ....- .....");
    })

    it("Should convert numbers with spaces to morse", () => {
        // Arrange
        let string;
        // Act
        string = "012345 23";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("----- .---- ..--- ...-- ....- ..... / ..--- ...--");
    })

    
    it("Should convert signs to morse", () => {
        // Arrange
        let string;
        // Act
        string = "?!.";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe("..--.. -.-.-- .-.-.-");
    })

    it("Should convert full sentences to morse", () => {
        // Arrange
        let string;
        // Act
        string = "Hello, there! My name is... ?";
        let result = translateToMorse(string);
        // Assert
        expect(result).toBe(".... . .-.. .-.. --- --..-- / - .... . .-. . -.-.-- / -- -.-- / -. .- -- . / .. ... .-.-.- .-.-.- .-.-.- / ..--..");
    })
});