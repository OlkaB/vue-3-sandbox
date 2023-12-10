export const getRandomNumberInRange = (min, max) => typeof min === 'number' && typeof max === 'number'
? Math.floor(Math.random() * (max - min + 1) + min)
: 0;