/*
Write a function that turns a string of 24-hour time into words.
You can trust that you’ll be given a valid string 
(it will always have a two-digit hour 00-23, 
and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm. 
*/

const timeWord = (time) => {
  let mStr = {
    0: "o'clock",
    1: "oh one",
    2: "oh two",
    3: "oh three",
    4: "oh four",
    5: "oh five",
    6: "oh six",
    7: "oh seven",
    8: "oh eight",
    9: "oh nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty-one",
    22: "twenty-two",
    23: "twenty-three",
    24: "twenty-four",
    25: "twenty-five",
    26: "twenty-six",
    27: "twenty-seven",
    28: "twenty-eight",
    29: "twenty-nine",
    30: "thirty",
    31: "thirty-one",
    32: "thirty-two",
    33: "thirty-three",
    34: "thirty-four",
    35: "thirty-five",
    36: "thirty-six",
    37: "thirty-seven",
    38: "thirty-eight",
    39: "thirty-nine",
    40: "forty",
    41: "forty-one",
    42: "forty-two",
    43: "forty-three",
    44: "forty-four",
    45: "forty-five",
    46: "forty-six",
    47: "forty-seven",
    48: "forty-eight",
    49: "forty-nine",
    50: "fifty",
    51: "fifty-one",
    52: "fifty-two",
    53: "fifty-three",
    54: "fifty-four",
    55: "fifty-five",
    56: "fifty-six",
    57: "fifty-seven",
    58: "fifty-eight",
    59: "fifty-nine",
  };

  let hStr = {
    0: "midnight",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
  };
  let resH = undefined;
  let resM = undefined;
  let type = undefined;
  let timeArr = time.split(":");
  let h = timeArr[0];
  let m = timeArr[1];
  // detemine hour
  if (Number(h) === 0) {
    resH = mStr[Number(12)];
  } else if (Number(h) > 12) {
    altH = Number(h) - 12;
    resH = hStr[Number(altH)];
  } else {
    resH = hStr[Number(h)];
  }
  // determine minutes
  resM = mStr[Number(m)];

  // determine if am or pm
  if (Number(h) === 0) {
    type = "am";
  } else if (Number(h) > 11) {
    type = "pm";
  } else {
    type = "am";
  }

  console.log(`${resH} ${resM} ${type}`);
};
timeWord("12:00");
timeWord("01:00");
// "one o'clock am"

timeWord("06:01");
// 'six oh one am'

timeWord("06:10");
// 'six ten am'

timeWord("06:18");
// 'six eighteen am'

timeWord("06:30");
// 'six thirty am'

timeWord("10:34");
// 'ten thirty four am'

timeWord("00:12");

timeWord("12:09");
// 'twelve oh nine pm'

timeWord("23:23");
// 'eleven twenty three pm'
