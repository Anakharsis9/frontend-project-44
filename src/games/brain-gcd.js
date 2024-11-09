import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const generateRound = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);

  const answer = findGCD(num1, num2);
  return [`${num1} ${num2}`, String(answer)];
};

const runGcd = () => runGame(description, generateRound);

export default runGcd;
