// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// Write your code below

const isPalindrome = (str) => {
  let arr = "";
  for (let j = str.length - 1; j >= 0; j--) {
    arr += str[j];
  }
  return str === arr;
};
console.log(isPalindrome("a"));
console.log(isPalindrome("Racecar"));

const monstersInYourPocket = [
  { monster: "Bulbabunny", CP: 156 },
  { monster: "Bulbabunny", CP: 135 },
  { monster: "Bulbabunny", CP: 250 },
  { monster: "Ponylopse", CP: 277 },
  { monster: "Ponylopse", CP: 184 },
  { monster: "Pikadoughnet", CP: 207 },
  { monster: "Bulbabunny", CP: 139 },
  { monster: "Pikadoughnet", CP: 47 },
  { monster: "Pikadoughnet", CP: 175 },
  { monster: "WaterHorsia", CP: 26 },
  { monster: "Ponylopse", CP: 19 },
  { monster: "Pikadoughnet", CP: 218 },
  { monster: "Charaflier", CP: 101 },
  { monster: "WaterHorsia", CP: 96 },
  { monster: "Pikadoughnet", CP: 253 },
  { monster: "Sandmush", CP: 146 },
  { monster: "Bulbabunny", CP: 247 },
  { monster: "Charaflier", CP: 55 },
  { monster: "Bulbabunny", CP: 72 },
  { monster: "Pikadoughnet", CP: 300 },
  { monster: "Sandmush", CP: 262 },
  { monster: "Sandmush", CP: 25 },
  { monster: "Charaflier", CP: 215 },
  { monster: "Ponylopse", CP: 125 },
  { monster: "Bulbabunny", CP: 178 },
];
// Do not edit the code above.

/*
  Now we're going to ramp these up a little bit.
  Instead of just arrays of numbers, we are going to 
  have an array of objects that we want to use map, filter, and reduce with.
  Use the filter method to return only the monsters that have a CP of over 200.
*/

// CODE HERE
const findMonster = (arr) => {
  for (let i = 0; i, arr.length; i++) {
    let creature = arr[i];
  }
};
const myStrongest = monstersInYourPocket.filter(
  (findMonster) => creature.cp > 200
);
