const getRandomNumber =  (a, b)  => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkLength = (str, maxLength) => str.length <= maxLength;
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, getRandomArrayElement, checkLength, isEscapeKey};