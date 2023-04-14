/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
let backpack = [];
let belt = [];

backpack.push("sword");
backpack.push("torch");
backpack.push("kleenex");
backpack.push("sheild");
backpack.push("clorox");
backpack.push("sweater");

console.log(backpack);

// Jamie's backpack is too heavy. Remove his sword.

let sword = backpack.splice(0, 1);
belt.push(sword[0]);

// Display whis items in is backpack and belt
console.log("Backpack: ", backpack);
console.log("Belt: ", belt);

let itemCount = backpack.length;

console.log("Backpack Items: ", itemCount);
