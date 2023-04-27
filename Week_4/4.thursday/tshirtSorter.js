/*
Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted 
by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.
*/
// Write your solution below:

// can split array and then sort into separate arrays and then combine later
// can split array, sort descending  then combine/join to string
// A, B, C, D, E, F, G, H, I, J, K, {{L}}, {{M}}, N, O, P, Q, R, {{S}}, T, U, V, W, X, Y, Z.

const tShirtSorter = (str) => {
  let s = [];
  let m = [];
  let l = [];
  str.split("").forEach((char) => {
    if (char === "s") {
      s.push(char);
    } else if (char === "m") {
      m.push(char);
    } else {
      l.push(char);
    }
  });
  let combined = s.concat(m, l);
  console.log(combined.join(""));
};

tShirtSorter("smllms");

const tshirtSorter = (str) => {
  console.log(str.split("").sort().reverse().join(""));
};

//Test
tshirtSorter("lms");
tshirtSorter("smllms");
