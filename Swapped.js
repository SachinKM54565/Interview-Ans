const number = 123456;
const numberString = number.toString();

let swappedNumberString = "";

for (let i = 0; i < numberString.length; i += 2) {
  swappedNumberString += numberString[i + 1] + numberString[i];
}

const swappedNumber = parseInt(swappedNumberString);

console.log(swappedNumber);
