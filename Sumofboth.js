//print true, if sum of any 2 numbers is a 3rd given number?

const number1 = 5;
const number2 = 8;
const number3 = 13;

if (number1 + number2 === number3) {
    console.log(true);
}else if (number1 + number3 === number2){
    console.log(true);
}else if (number2 + number3 === number1) {
    console.log(true);
}else {
    console.log(false);
}