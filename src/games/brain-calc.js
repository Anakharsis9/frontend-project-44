import runGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = operators[getRandomIndex(operators)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = calc(num1, num2, operator);

  return [question, String(answer)];
};

const runCalc = () => runGame(description, generateRound);

export default runCalc;
