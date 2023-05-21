/* */

function perfectSquare(num) {
  let sq = Math.sqrt(num);
  if (sq % 1 != 0) {
    console.log(-1);
  } else {
    sq++;
    let res = sq * sq;
    console.log(res);
  }
}
perfectSquare(9);

