import { playGame } from "../index.js";
import { generateNumber } from "../utils.js";

const operations = ["+", "-", "*"];

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
