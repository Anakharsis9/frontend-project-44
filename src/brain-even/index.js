import { greeting, tryAgain, congratulations } from "../cli.js";
import readlineSync from "readline-sync";

function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function isEven(number) {
  return number % 2 === 0;
}

function getCorrectAnswer(number) {
  return isEven(number) ? "yes" : "no";
}

export default function game() {
  greeting();
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = generateNumber();
    const correctAnswer = getCorrectAnswer(number);

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      tryAgain();
      return;
    }

    correctAnswersCount++;
    console.log("Correct!");
  }

  congratulations();
}
