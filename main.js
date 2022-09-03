import {translateToMorse, translateToEnglish} from "./translator.js";

// To Morse translation elements
const inputEnglish = document.querySelector(".english__input");
const toMorseButton = document.querySelector(".english__button");

// To English translation elements
const inputMorse = document.querySelector(".morse__input");
const toEnglishButton = document.querySelector(".morse__button");

toMorseButton.addEventListener("click", () => {
    inputMorse.value = translateToMorse(inputEnglish.value);
})

toEnglishButton.addEventListener("click", () => {
    inputEnglish.value = translateToEnglish(inputMorse.value);
})