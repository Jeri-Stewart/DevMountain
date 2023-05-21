/* Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

The number passed in tells you how many floors the tower should have.

The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

Each block is represented by a *. */

const buildTower = (n) => {
  const tower = [];
  let towerStr = "*";
  for (let i = 0; i < n; i++) {
    tower.push(towerStr);
    towerStr += "**";
    for (let j = 0; j < i; j++) {
      tower[j] = " " + tower[j] + " ";
    }
  }
  console.log(tower);
};

buildTower(6);
