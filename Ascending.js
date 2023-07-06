//Print ascending order of 3 given numbers?

const number1 = 5;
const number2 = 8;
const number3 = 2;

const numbers = [number1, number2, number3];

numbers.sort((a, b) => a - b);

console.log(`Numbers in ascending order` + numbers.join(", "));
