import { playGame } from "./game.js";

const operations = ["+", "-", "*"];

const generateNumber = () => Math.floor(Math.random() * 10) + 1;
const generateOperator = () =>
  operations[Math.floor(Math.random() * operations.length)];

const generateExpression = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
  const operator = generateOperator();
  return `${num1} ${operator} ${num2}`;
};

const calculateExpression = expression => String(eval(expression));

export const calcGame = () =>
  playGame(
    "What is the result of the expression?",
    generateExpression,
    calculateExpression
  );
