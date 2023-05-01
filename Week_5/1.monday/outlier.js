/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
*/

// for each  or for loop %2 and push array to odd/even array, return array length ===1
// long way

const uniqueInt = (arr) => {
  let odd = [];
  let even = [];
  for (num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  if (odd.length === 1) {
    console.log(odd[0]);
  } else {
    console.log(even[0]);
  }
};

//test
uniqueInt([2, 4, 0, 100, 4, 11, 2602, 36]);
uniqueInt([160, 3, 1719, 19, 11, 13, -21]);
