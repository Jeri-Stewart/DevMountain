/*
There’s a game, “takeaway”, that is played by two players, using a number of stones.

The first player goes first. She can take 2, 3, or 5 stones from the pool. The second player goes next; she can also remove 2, 3, or 5 stones. The first player then goes, and so on.

If a player is unable to move (there are fewer than 2 stones), they lose.

*/

function canWin(nStones) {
  let result = true;
  let turn = 0;
  let draws = [5, 3, 2];
  let drawRev = [2, 3, 5];
  if (nStones === 1) {
    result = false;
  } else {
    let i = 0;
    while (nStones > 2 && i < 2) {
      if (nStones > draws[i]) {
        nStones - draws[i];
        turn++;
      } else {
        i++ && nStones - draws[i];
        turn++;
      }
    }
    if (turn % 2 !== 0) {
      let result = true;
    }
  }
  return result;
}

// console.log(canWin(1))
// false

// console.log(canWin(2))
// true

// console.log(canWin(3))
// true

console.log(canWin(4));
// true

console.log(canWin(5));
// true

/*
canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true

*/
