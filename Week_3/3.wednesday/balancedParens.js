/*
Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

*/

// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:

const has_balanced_parens = (str) => {
  let filteredArr = str
    .split("")
    .filter((char) => char === "(" || char === ")");
  let a = filteredArr.filter((x) => x === "(");
  let b = filteredArr.filter((y) => y === ")");
  if (a.length === b.length) {
    console.log(true);
  } else {
    console.log(false);
  }
};

has_balanced_parens(sample1);
has_balanced_parens(sample2);
has_balanced_parens(sample3);
has_balanced_parens(sample4);

const has_balaanced_parens_two = (str) => {
  let result = false;
  let filteredArr = str
    .split("")
    .filter((char) => char === "(" || char === ")");
  if (filteredArr.length % 2 === 0) {
    console.log((result = true));
  } else {
    console.log(result);
  }
};

has_balaanced_parens_two(sample1);
has_balaanced_parens_two(sample2);
has_balaanced_parens_two(sample3);
has_balaanced_parens_two(sample4);
