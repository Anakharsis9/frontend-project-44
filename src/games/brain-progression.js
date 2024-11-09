import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = generateProgression(start, step, length);

  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), String(answer)];
};
const runProgression = () => runGame(description, generateRound);

export default runProgression;
