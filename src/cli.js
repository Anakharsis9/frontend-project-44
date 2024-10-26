import readlineSync from 'readline-sync';

let name = '';

export function greeting() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export function getUserName() {
  return name;
}

export function congratulations() {
  console.log(`Congratulations, ${name}!`);
}
export function tryAgain() {
  console.log(`Let's try again, ${name}!`);
}
