import playGame from '../index.js';
import generateNumber from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) return 'no';

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default function primeGame() {
  return playGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    () => generateNumber(1, 100),
    isPrime,
  );
}
