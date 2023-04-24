// Write your code below this line

/*
In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:
*/

const decoder = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  strArr = str.split("");
  let num = undefined;
  let decodedArr = [];

  for (char of strArr) {
    if (!alphabet.includes(char)) {
      // convert number string to a number
      num = Number(char);
    } else {
      let x = alphabet.indexOf(char); // find the index of the letter in the alphabet array
      index = num + x; // create a new index to find the coded letter
      if (index > 24) {
        // last index of array is 25
        index -= 26; // makes sure it starts back at 'a'; 26 because the index starts at 0 and not 1
      }
      decodedArr.push(alphabet[index]); // push the coded letter to an array
    }
  }
  let decodedStr = decodedArr.join(""); // convert the coded array to a string
  console.log(decodedStr);
};

decoder("0h2xce5ngbrdy");
decoder("2fcjjm");
