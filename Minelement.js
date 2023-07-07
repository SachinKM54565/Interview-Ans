const array = [5, 8, 3, 2, 10];
let min = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log("Minimum element: " + min);
