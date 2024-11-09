import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomNumber();
  const answer = isEven(num) ? 'yes' : 'no';

  return [num, answer];
};

const runEven = () => runGame(description, generateRound);

export default runEven;
