import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const generateRound = () => {
  const number = getRandomNumber();
  const answer = getCorrectAnswer(number);

  return [number, answer];
};

const runEven = () => runGame(description, generateRound);

export default runEven;
