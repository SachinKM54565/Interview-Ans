//Find the 2nd min element from the given int array?

const array = [5, 8, 3, 2, 10];
let min = array[0];
let secondMin = Infinity;

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    secondMin = min;
    min = array[i];
  } else if (array[i] < secondMin && array[i] !== min) {
    secondMin = array[i];
  }
}

console.log("Second minimum element: " + secondMin);
