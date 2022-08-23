// SUM DIGITS IN A NATURAL NUMBER

// I/O: number/number
// example input: 18117

// move backwards across the number, breaking off last digits until we reach the first digit (1)
  // this is our base case: when there is nothing to the left of n (1 < 10)
// once base case is reached, move forward, adding each number to the previous last digit
  // this is our recursive case:
    // initialize last to the last digit
    // initialize prev to the "rest" of the number
    // return function(prev) + last

// base case: there are no digits left to split (n < 10)
  // return n
  // n gets returned to previous calls, which are waiting for it
// recursive case: there are digits left
  // get the last digit, [last]
  // get the previous numbers, [prev]
  // n becomes [prev], and sumDigits(n) gets added to last
    // this won't be able to evaluate fully until sumDigits(n) reaches base case

function sumDigits(n) {
  if (n < 10) {
    return n;
  } else {
    let prev = Math.floor(n / 10);
    let last = n % 10;
    return sumDigits(prev) + last;
  }
}

// console.log(sumDigits(18117))

// base case: what to do when we reach our simplest input
// recursive case: how to simplify input to bring it closer to base case

// FACTORIAL: MULTIPLY DIGITS IN A NATURAL NUMBER

// I/O: number/number

// base case: number is 1, and factorial is one
// recursive case: take number and multiply it by factorial of preceeding number

// iterate down until we reach 1, which is our base case and has a factorial of one
// return this to be mulitplied by the previous number, creating the factorial by that number, etc

function factorial(n) {
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// factorial of 1: 1
// factorial of 2: 2
// factorial of 3: 6
// facotrial of 4: 24
// factorial of 5: 120

// console.log(factorial(5))

// EVEN/ODD FUNCTIONS

// define an even function in terms of an odd function:
  // number [n] is even when number [n - 1] is odd
  // base case: 0 is not odd

// define an odd function in terms of an even function:
  // number [n] is even whwen number [n - 1] is even
  // base case: 0 is even

// "jump down one at a time until you hit 0. if you're in odd, it's odd. else, it's even."

function isOdd(n) {
  if (n === 0) {
    return false;
  } else {
    return isEven(n - 1)
  }
}

function isEven(n) {
  if (n === 0) {
    return true;
  } else {
    return isOdd(n - 1)
  }
}

// console.log(isOdd(4))

// purpose: testing
// combine these functions into one
// if [n === 0], [n] is even
// if [n === 1], [n] is odd
// jump down two numbers at a time until base case is reached

function even(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  return even(n - 2); 
}

// console.log(even(13))

// CASCADE
// the code under our recursive call can't execute until the recursive call is done
  // those frames will pile up and then execute backwards once the recursive call is resolved

// function cascade(n) {
//   if (n < 10) {
//     console.log(n)
//     return;
//   } else {
//     console.log(n)
//     cascade(Math.floor(n / 10))
//     console.log(n)
//   }
// }

// base case: n is less than 10
  // action: don't execute anything
// recursive case: n is greater than or equal to 10
  // recursively call the function again, shaving the last number off
  // console.log this number
    // ^^^ this code won't execute until the recursive function above it reaches it's base case 

function cascade(n) {
  console.log(n)
  if (n >= 10) {
    cascade(Math.floor(n / 10))
    console.log(n)
  }
}
// cascade(12345)

// alice removes 1 pebble
// bob removes:
  // 2 if there's an even number of pebbles
  // 1 if there's an odd number of pebbles
// whoever removes the last pebble wins

// if there's 1 pebble, alice wins
// if there's 2 pebbles, bob wins

// 7 pebbles

// alice subtracts 1

// 6 pebbles

// bob subtracts 2

// 4 pebbles

// alice subtracts 1

// 3 pebbles

// bob subtracts 1

// 2 pebbles

// alice subracts 1

// 1 pebble

// bob subtracts 1

// base case: n is 0

function alice(n) {
  n--;
  return (n === 0) ? "alice wins" : bob(n)
}

function bob(n) {
  (n % 2 === 0) ? n -= 2 : n--;
  return (n === 0) ? "bob wins" : alice(n)
}

// console.log(bob(7))

/* 1 -> (1) [one way]
2 -> (1, 1) (2) [two ways]
3 -> (1, 1, 1) (2, 1) (1, 2) [three ways]
4 -> (1, 1, 1, 1) (2, 1, 1) (1, 2, 1) (1, 1, 2) (2, 2) [five ways] 

looking at only the first three steps:
there are only two ways to reach step 3 directly: either from step 2, or from step 1
to reach it from step, you must take 1 step
  therefore, step 3 combinations === each step 2 combination, with 1 added to the end
  (1, 1) becomes (1, 1, 1), and (2) becomes (2, 1)
to reach it from step 1, you must take 2 steps
  therefore, step 3 combinations === each step 1 combination, with 2 added to the end
  (1) becomes (1, 2)
therefore, combo(3) = combo(1) (with each concat 2)  + combo(2) (with each concat 1)

- base case: there's one way to reach step 1 (1)
- base case: there's two ways to reach step 2 (1, 1) (2)
- recursive case: for all other steps, there are ways(n - 1) + ways(n - 2) ways to reach step n
- add (1) to each combo in ways(n - 1), and add (2) to each combo in ways(n - 2)

bonus: the staircase answers are the fibonacci sequence
  notice that the answer to 4 steps is "five ways"
  this is the answer to 3 steps ("three ways") plus the answer to 2 steps ("two ways")
  the same is true for all numbers in this sequence after 2: steps(n) = steps(n - 1) + steps(n - 2)
*/

// recursive approach to get number of combos: 
const getSteps = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return getSteps(n - 1) + getSteps(n - 2);
};

// recursive approach to display combos:
function steps(n) {
  if (n === 1) return [[1]];
  if (n === 2) return [[1, 1], [2]];
  return steps(n - 1).map((el) => el.concat(1))
  .concat(steps(n - 2).map((el) => el.concat(2)))
}

// console.log(getSteps(4), steps(4))
/*
objects | permutations
   1           1
   2           2
   3           6
   4          24
   5         120
   6         720
   7        5040
   8       40320        
*/    

// for each number, the number of permutations it has is equal to
  // the number itself
    // times
  // the permutations of the previous number

// base case: numberOfPerms(1) === 1
// recursive case: numberOfPerms(n) = n * nuumberOfPerms(n - 1)

// function to find number of permutations
// note: have to use BigInts, because results often exceed max Number size
function numberOfPerms(n) {
  // edge case
  if (n === 0) return 0;
  // base case
  if (BigInt(n) === 1n) return 1n;
  // recursive case
  else return BigInt(n) * numberOfPerms(BigInt(n) - 1n)
}

// return the length of the digit that numberOfPerms generates
function noPermsDigits(n) {
  return numberOfPerms(n).toString().length
}

// console.log(noPermsDigits(0))


// example array: [1, 2, 3]

// take first element of array (1)
// add remaining elements both ways
//   (1, 2, 3) (1, 3, 2)
// take second element of array (2)
// add remaining elements both ways
//   (2, 1, 3) (2, 3, 1)
// take final element of array (3)
// add remaining elements both ways
//   (3, 1, 2) (3, 2, 1)

/// these are all the permutations

// simplification:
// the permutations of an element are
  // the current element concatenated with
  // each permutation of the remaining elements
  

// approach:
  // for each number 

// base cases: 
  // if arr.length === 0 return [] (the permutation of [] is [])
  // if arr.length === 1 return arr (the permutatin of [el] is [el])

// recursive case:
  // 

// declare a function "permutations" that accepts an array as an parameter
function permutations(arr) {
  // declare an output array
  const result = [];
  // BASE CASES:
  // the permutation of no element is no element
  if (arr.length === 0) return [];
  // the permutation of an one element is that element
  if (arr.length === 1) return arr;
  // OUTER LOOP:
  // perform this operation for each element in array
  // recursion takes place within this loop
  for (let i = 0; i < arr.length; i++) {
    // define the current element
    const curr = arr[i]
    // define the rest of the elements (the array without the current element)
    const rest = arr.slice(0, i).concat(arr.slice(i + 1))
    // define the permutations of rest of the elements
    // recursively call the program, passing in the array without the current element
    // generate array of arrays containing all permutations of remaining elements
    const restPerm = permutations(rest)
    // for each sub-permutation in array of sub-permutations
    for (let j = 0; j < restPerm.length; j++) {
      // concatenate the current elemnent with that sub-permutation
      const permed = [curr].concat(restPerm[j])
      // push this concatenated result into the results array
      result.push(permed)
    }
  }
  // after loop is concluded, return the results array
  return result;
}

// console.log(permutations([1, 2, 3]))


// base case: if the current number === target, return "found"
// base case: if the current number > target, return null

// recursive case: 
	// see if adding five to the current number produces target, else
    // see if mulitplying current number by three produces target

    function findSolution(tar, curr = 1, hist = "1") {
      if (curr === tar) return "path found: " + hist;
      else if (curr > tar) return null;
      else return findSolution(tar, curr + 5, `(${hist} + 5)`) ||
        findSolution(tar, curr * 3, `(${hist} * 3)`)
    }
    
    console.log(findSolution(24));
    // → (((1 * 3) + 5) * 3)
