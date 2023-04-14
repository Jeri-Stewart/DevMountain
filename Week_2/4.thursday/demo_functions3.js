////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = [
  "biLbO BaGGINs",
  "leGOlAs",
  "Frodo bAGGINS",
  "sAMwiSe GamGEe",
  "gAndALF tHe GREY",
];

const copyArrToCamelCase = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]; // 'biLbo BaGGINs'
    const splitStr = str.split(" "); // ['biLbo',' BaGGINs']
    let camelCaseStr = "";

    for (let x = 0; x < splitStr.length; x++) {
      let word = splitStr[x]; // 'biLbo' -> 'bAGGins'

      word = word.toLowerCase(); // 'bilbo' -> 'baggins'

      if (x !== 0) {
        // false -> true
        //'b' -> 'B'                         + 'aggins'  = 'Baggins
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }

      camelCaseStr += word; // camelCaseStr = 'bilbo' - 'bilboBaggins'
    }

    newArr.push(camelCaseStr); // ['bilbo']
  }

  return newArr;
};

const copyArrToSnakeCase = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i]; // 'biLbo BaGGINs'
    str = str.toLowerCase(); // 'bilbo baggins'
    const splitStr = str.split(" "); // ['bilbo', 'baggins' ]
    const snakeCaseStr = splitStr.join("_"); // 'bilbo_baggins'
    newArr.push(snakeCaseStr); // ['bilbo_baggins']
  }

  return newArr;
};

// CODE HERE

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ["red", "blue", "yellow", "green", "orange"];

const mappedColors = colors.map((color) => (color = "pink"));
console.log(mappedColors);

// OR //

const turnToPink = () => "pink";
const mappedColors2 = colors.map(turnToPink);
console.log(mappedColors2);

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ["Bernard", "Elizabeth", "Conrad", "Mary Margaret"];

const formalGreeting = (names) => {
  // CODE HERE
  return names.map((name) => `Hello, ${name}`);
};
console.log(formalGreeting(formalNames));

// Call formalGreeting passing in the formalNames array

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = [
  "Binghampton",
  "Albany",
  "New York",
  "Ithaca",
  "Auburn",
  "Rochester",
  "Buffalo",
];

const placesThatStartWithA = places.filter((city) => city.charAt(0) === "A");

console.log(placesThatStartWithA);

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
  { receptionist: "James" },
  { programmer: "Steve" },
  { designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

const identifier = (arr) => {
  const filtered = arr.filter((el) => el.programmer);
  // will equal true or false
  return filtered[0];
};

console.log(identifier(jobs));

// call the function passing in the jobs array

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290];

const productOfArray = (numbers) => {
  // Code here
  const reduced = arr.reduce(num);
};

// CODE HERE

// call productOfArray passing in numsToReduce

/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/
/*
const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining // = expenses.reduce(//callback, //initial value)
*/
