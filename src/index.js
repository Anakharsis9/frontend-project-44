import { greeting, tryAgain, congratulations } from "./cli.js";
import readlineSync from "readline-sync";

// Функция для проведения одного раунда игры
const playRound = (generateQuestion, getCorrectAnswer) => {
  const question = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question("Your answer: ");

  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    return true; // Ответ правильный
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    tryAgain();
    return false; // Ответ неправильный
  }
};

// Основная функция игры
export const playGame = (description, generateQuestion, getCorrectAnswer) => {
  greeting();
  console.log(description);

  let correctAnswersCount = 0;
  const maxCorrectAnswers = 3;

  while (correctAnswersCount < maxCorrectAnswers) {
    const isCorrect = playRound(generateQuestion, getCorrectAnswer);
    if (!isCorrect) {
      return; // Завершаем игру при неправильном ответе
    }
    correctAnswersCount++;
  }

  congratulations();
};
