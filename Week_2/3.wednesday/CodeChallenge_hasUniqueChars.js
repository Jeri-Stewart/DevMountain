/*
Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true



// Write your code below
function hasUniqueChars(str){
    for(i=0; i< str.length; i++){
        let chars = []
        if ()
    }
}
let i = 0; i < str.length; i++


function hasUniqueChars(str) {
  let result = true;
  for (let i in str) {
    let chars = [];
    if (chars.includes(str[i])) {
      result = false;
    } else {
      chars.push(str[i]);
    }
  }
  return result;
}



function hasUniqueChars(str) {
    for (i = 0; i < str.length; i++) {
      let chars = [];{
        chars.push(str[i]);
      } else {
        return true
        break;
      }
    }
    return true;
    */

function hasUniqueChars(str) {
  let chars = [];
  for (i = 0; i < str.length; i++) {
    if (!chars.includes(str[i])) {
      chars.push(str[i]);
    }
  }
  if (str.length === chars.length) {
    return true;
  } else {
    return false;
  }
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
