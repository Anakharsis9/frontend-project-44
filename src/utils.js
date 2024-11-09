// eslint-disable-next-line max-len
export const getRandomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndex = (collection) => Math.floor(Math.random() * collection.length);
