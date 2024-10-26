import playGame from '../index.js';
import generateNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

export default function evenGame() {
  return playGame('Answer "yes" if the number is even, otherwise answer "no".', generateNumber, getCorrectAnswer);
}
