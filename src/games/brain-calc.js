import runGame from '../index.js';
import generateNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateOperator = () => operations[Math.floor(Math.random() * operations.length)];

const generateExpression = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const operator = generateOperator();
  return `${num1} ${operator} ${num2}`;
};

const calculateExpression = (expression) => {
  const [num1, operator, num2] = expression.split(' ');

  const number1 = parseInt(num1, 10);
  const number2 = parseInt(num2, 10);

  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      return '';
  }
};

const generateQuestion = () => {
  const expression = generateExpression();
  const answer = calculateExpression(expression);
  return [expression, answer];
};

const runCalc = () => runGame(description, generateQuestion);

export default runCalc;
