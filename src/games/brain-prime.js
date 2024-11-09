import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return 'no';

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number);
  return [number, answer];
};

const runPrime = () => runGame(description, generateRound);

export default runPrime;
