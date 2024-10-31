import runGame from '../index.js';
import generateNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const progression = [];
  const a = generateNumber();
  const d = generateNumber(1, 10);
  const progressionLength = generateNumber(5, 10);

  const hiddenIndex = generateNumber(1, progressionLength);
  let correctAnswer = 0;

  for (let i = 1; i < progressionLength + 1; i += 1) {
    if (i === hiddenIndex) {
      correctAnswer = a + (i - 1) * d;
      progression.push('..');
    } else {
      progression.push(a + (i - 1) * d);
    }
  }

  return [progression.join(' '), String(correctAnswer)];
};

const runProgression = () => runGame(description, generateProgression);

export default runProgression;
