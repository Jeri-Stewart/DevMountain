/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don’t forget the space after the closing parentheses!*/

// could format number array, split array? manually in string, format with ${num},
// replace?  will it repalce all or just one sequentially?  .replace -  MDN string methond that will reaplce first occurence

const createPhoneNumber = (arr) => {
  let phoneNumber = "(###) ###-####";
  for (num of arr) {
    // loop thorugh each num in arr
    phoneNumber = phoneNumber.replace("#", num);
  }
  console.log(phoneNumber); // console log outside loop
};

// Test

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
createPhoneNumber([4, 0, 4, 1, 2, 3, 7, 8, 9, 0]);
