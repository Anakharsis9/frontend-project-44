import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRound = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);

  const answer = findGCD(num1, num2);
  return [`${num1} ${num2}`, String(answer)];
};

const runGcd = () => runGame(description, generateRound);

export default runGcd;
