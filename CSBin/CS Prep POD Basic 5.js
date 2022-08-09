// REVERSE INTEGER MATHEMATICALLY

// expected input: number
// expected output: number

// approach: math

// high level approach:
// there are three steps to reverse an integer mathematically:
// 1. look at the last number
// 2. append it to a new number
// 3. remove the last number from original
// this process is repeated in a loop until the first number is empty

// technical approach:
// declare a function reverseInt that accepts a [num] as a param
  // initialize our reverse number, [rev] = 0
  // loop the following while input [num] > 0:
  // 1. look at the last number
    // store [num % 10] in variable [last]
  // 2. append it to a new number
    // shift the [rev] over to the left with [10 * rev], then add [last]
  // 3. remove the last number from original
    // divide the original by 10, and floor the result
  // return the new number, [rev]


function reverseInt(int) {
  // edge case: if input number ends in zero, the reverse can't be represented 
  // example: (200 reversed is 002, but JS displays 002 as "2")
  // throw error if number ends in zero
  if (int % 10 === 0) return console.log("input number ends in zero, the reverse can't be represented")
  // otherwise
  let rev = 0;
  let last = 0;
  while (int > 0) {
    last = int % 10
    rev = (10 * rev) + last;
    int = Math.floor(int / 10)
  }
  return rev;
}

function reverseIntTests() {
  console.log(reverseInt(1234), ' -> ', 4321);
  console.log(reverseInt(1), ' -> ', 1);
  console.log(reverseInt(870654), ' -> ', 456078);
  console.log(reverseInt(13542), ' -> ', 24531);
}

reverseIntTests() // uncomment to test
