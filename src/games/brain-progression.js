import playGame from '../index.js';
import generateNumber from '../utils.js';

let correctAnswer = 0;

const generateProgression = () => {
  const progression = [];
  const a = generateNumber();
  const d = generateNumber(1, 10);
  const progressionLength = generateNumber(5, 10);

  const n = generateNumber(1, progressionLength);

  for (let i = 1; i < progressionLength + 1; i += 1) {
    if (i === n) {
      correctAnswer = a + (i - 1) * d;
      progression.push('..');
    } else {
      progression.push(a + (i - 1) * d);
    }
  }

  return progression.join(' ');
};

function getCorrectAnswer() {
  return String(correctAnswer);
}

export default function progressionGame() {
  return playGame('What number is missing in the progression?', generateProgression, getCorrectAnswer);
}
