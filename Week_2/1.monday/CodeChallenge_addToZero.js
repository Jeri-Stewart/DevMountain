// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
let result = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    // Prevents incorrect answer with zero case
    if (array[i] !== array[j]) {
      if (array[i] + array[j] === 0) {
        result = true;
      }
    }
  }
}
console.log(result);
