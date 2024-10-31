import runGame from '../index.js';
import generateNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateNumbersPair = () => {
  const num1 = generateNumber(0, 100);
  const num2 = generateNumber(0, 100);

  return `${num1} ${num2}`;
};

const findGCD = (numbers) => {
  let [a, b] = numbers.split(' ').map((num) => Number(num));

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return String(a);
};

const generateQuestion = () => {
  const numbers = generateNumbersPair();
  const answer = findGCD(numbers);
  return [numbers, answer];
};

const runGcd = () => runGame(description, generateQuestion);

export default runGcd;
