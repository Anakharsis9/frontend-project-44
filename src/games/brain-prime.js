import { playGame } from "../index.js";
import { generateNumber } from "../utils.js";

const isPrime = number => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "no";
    }
  }

  return "yes";
};

export const primeGame = () =>
  playGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    () => generateNumber(1, 100),
    isPrime
  );
