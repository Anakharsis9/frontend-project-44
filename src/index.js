import readlineSync from 'readline-sync';

const maxCorrectAnswers = 3;

const runGame = (description, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  let correctAnswersCount = 0;

  while (correctAnswersCount < maxCorrectAnswers) {
    const [question, correctAnswer] = generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
