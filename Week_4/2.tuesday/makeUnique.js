/*
Write a function to remove all duplciate letters from a provided string. 
The string will only contail lowercase letters between a - z. The string will not contain spaces.
*/

// Write your solution below:

const makeUnique = (str) => {
  let strArr = str.split("");
  let uniqueSet = new Set(strArr[0]);
  strArr.forEach((char) => uniqueSet.add(char));
  let uniqueArr = [...uniqueSet];
  console.log(uniqueArr.join(""));
};

// Test 1
makeUnique("hello");
// Test 2
makeUnique("iwanttoclimbamountain");


// Shorter version 
const makeUniqueToo = str => {
  let newWord = [...new Set(str)].join("")
  console.log(newWord)
}


makeUniqueToo('hello')