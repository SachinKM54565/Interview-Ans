const num1 = 6;
const num2 = 9;
const num3 = 3;

if (num1 <= num2 && num1 <= num3) {
    console.log(`The smallest is:` + num1);
}else if (num2 <= num3 && num2 <= num1) {
    console.log(`The smallest is:` + num2)
}else {
    console.log(`The smallest is:` + num3)
}