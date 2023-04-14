let fruits = [
  {
    name: "banana",
    color: "yellow",
    price: 5,
  },
  {
    name: "orange",
    color: "orange",
    price: 4,
  },
  {
    name: "grape",
    color: "green",
    price: 5,
  },
  {
    name: "apple",
    color: "red",
    price: 3,
  },
];
// ***** Do not edit the code above *****

/* 
      Using forEach method, identify each element of the 'fruits' array above 
      if it's an apple or orange by its color. If the color is red, print "The fruit with index [THE ELEMENT'S INDEX] is an apple." 
      If the color is orange, print "The fruit with index [THE ELEMENT INDEX] is an orange." If the color is not red or apple, 
      print "The fruit with index [THE ELEMENT'S INDEX] is neither apple or orange."
  
      Note: do a google search on how to find an element's index of an array in Javascript.
       There is a built-in Javascript method that would help you find an index of an element in an array.
  */

// CODE HERE

fruits.forEach((fruit) => {
  let index = fruits.indexOf(fruit);
  if (fruit.color === "red") {
    console.log(`The fruit with index ${index} is an apple.`);
  } else if (fruit.color === "orange") {
    console.log(`The fruit with index ${index} is an orange.`);
  } else {
    console.log(`The fruit with index ${index} is neither apple or orange.`);
  }
});
