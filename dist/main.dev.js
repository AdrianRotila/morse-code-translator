"use strict";

var _translator = require("./translator.js");

// To Morse translation elements
var inputEnglish = document.querySelector(".english__input");
var toMorseButton = document.querySelector(".english__button"); // To English translation elements

var inputMorse = document.querySelector(".morse__input");
var toEnglishButton = document.querySelector(".morse__button");
toMorseButton.addEventListener("click", function () {
  inputMorse.value = (0, _translator.translateToMorse)(inputEnglish.value);
});
toEnglishButton.addEventListener("click", function () {
  inputEnglish.value = (0, _translator.translateToEnglish)(inputMorse.value);
});