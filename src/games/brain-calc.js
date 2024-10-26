import playGame from '../index.js';
import generateNumber from '../utils.js';

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

export default function calcGame() {
  return playGame('What is the result of the expression?', generateExpression, calculateExpression);
}
