//Find the 2nd max element from the given int array?

const array = [5, 8, 3, 2, 10];
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    secondMax = max;
    max = array[i];
  } else if (array[i] > secondMax && array[i] !== max) {
    secondMax = array[i];
  }
}

console.log("Second maximum element: " + secondMax);
