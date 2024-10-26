import { playGame } from "./game.js";

function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function isEven(number) {
  return number % 2 === 0;
}

function getCorrectAnswer(number) {
  return isEven(number) ? "yes" : "no";
}

export const evenGame = () =>
  playGame(
    "Answer 'yes' if the number is even, otherwise answer 'no'.",
    generateNumber,
    getCorrectAnswer
  );
