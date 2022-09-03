"use strict";

var _translator = require("./translator");

describe('Testing translateToMorse()', function () {
  it("Should convert lower case letters to morse", function () {
    // Arrange
    var string; // Act

    string = "a";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".-");
  });
  it("Should convert upper case letter to morse", function () {
    // Arrange
    var string; // Act

    string = "C";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("-.-.");
  });
  it("Should convert lower case single words to morse", function () {
    // Arrange
    var string; // Act

    string = "food";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("..-. --- --- -..");
  });
  it("Should convert upper case single words to morse", function () {
    // Arrange
    var string; // Act

    string = "GAME";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("--. .- -- .");
  });
  it("Should convert mixed case single words to morse", function () {
    // Arrange
    var string; // Act

    string = "AdriAN";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".- -.. .-. .. .- -.");
  });
  it("Should convert words with space a space between to morse", function () {
    // Arrange
    var string; // Act

    string = "Game Over";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("--. .- -- . / --- ...- . .-.");
  });
  it("Should convert words with multiple spaces between to morse", function () {
    // Arrange
    var string; // Act

    string = "Game          Over      Son";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("--. .- -- . / --- ...- . .-. / ... --- -.");
  });
  it("Should convert numbers to morse", function () {
    // Arrange
    var string; // Act

    string = "012345";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("----- .---- ..--- ...-- ....- .....");
  });
  it("Should convert numbers with spaces to morse", function () {
    // Arrange
    var string; // Act

    string = "012345 23";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("----- .---- ..--- ...-- ....- ..... / ..--- ...--");
  });
  it("Should convert signs to morse", function () {
    // Arrange
    var string; // Act

    string = "?!.";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe("..--.. -.-.-- .-.-.-");
  });
  it("Should convert full sentences to morse", function () {
    // Arrange
    var string; // Act

    string = "Hello, there! My name is... ?";
    var result = (0, _translator.translateToMorse)(string); // Assert

    expect(result).toBe(".... . .-.. .-.. --- --..-- / - .... . .-. . -.-.-- / -- -.-- / -. .- -- . / .. ... .-.-.- .-.-.- .-.-.- / ..--..");
  });
});
describe('Testing translateToEnglish()', function () {
  it('Should convert a letter morse code to english', function () {
    // Arrange
    var morse; // Act

    morse = "--.";
    var result = (0, _translator.translateToEnglish)(morse); // Assert

    expect(result).toBe("G");
  });
  it('Should convert space in morse to in space', function () {
    // Arrange
    var morse; // Act

    morse = "/";
    var result = (0, _translator.translateToEnglish)(morse); // Assert

    expect(result).toBe(" ");
  });
  it('Should convert a single morse word in a english word', function () {
    // Arrange
    var morse; // Act

    morse = "-... . .- ..- - .. ..-. ..- .-.."; // Assert

    var result = (0, _translator.translateToEnglish)(morse);
    expect(result).toBe("BEAUTIFUL");
  });
  it('Should convert morse sentences in english', function () {
    // Arrange
    var morse; // Act

    morse = ".. / .-.. --- ...- . / - --- / .-- .-. .. - . / -.-. --- -.. ."; // Assert

    var result = (0, _translator.translateToEnglish)(morse);
    expect(result).toBe("I LOVE TO WRITE CODE");
  });
  it('Should convert morse sentences with signs and numbers in english', function () {
    // Arrange
    var morse; // Act

    morse = "---.. / -.-.-- / .... .- ...- . / .---- ----- ..--.. -.-.-."; // Assert

    var result = (0, _translator.translateToEnglish)(morse);
    expect(result).toBe("8 ! HAVE 10?;");
  });
});