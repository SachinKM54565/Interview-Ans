const array = [5, 8, 3, 2, 10];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("Maximum element: " + max);
