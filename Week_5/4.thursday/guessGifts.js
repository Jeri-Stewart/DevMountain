/*
It’s your birthday! You wrote a wishlist and now you’re trying to guess which gift is which before you open it.

You will be given a wishlist (array), containing all possible items. Each item is in the format:
*/

// initial thoughts
// nested for loop mathc each gift with every object componenet

var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

const guessGifts = (wishlist, presents) => {
  let myGifts = [];
  const matches = (obj, source) => {
    return Object.keys(source).every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    );
  };
  for (let i = 0; i < presents.length; i++) {
    let present = presents[i];
    for (gift of wishlist) {
      if (matches(gift, present)) {
        let { name } = gift;
        myGifts.push(name);
      }
    }
  }
  console.log(myGifts);
};

guessGifts(wishlist, presents);
