//print a middle number from 3 given numbers?

const num1 = 5;
const num2 = 8;
const num3 = 3;

if (num1 > num2) {
  if (num1 < num3) {
    console.log(`the middle number is:` + num1);
  } else if (num2 > num3) {
    console.log(`the middle number is:` + num2);
  } else {
    console.log(`the middle number is:` + num3);
  }
} else {
  if (num1 > num3) {
    console.log(`the middle number is:` + num1);
  } else if (num2 < num3) {
    console.log(`the middle number is:` + num2);
  } else {
    console.log(`the middle number is:` + num3);
  }
}
