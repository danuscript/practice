// EXCLUSIVE SUM, TWO PASSES, NO NESTED LOOPS

// expected input: array of numbers
// expected output: new array 

// approach: two iterations, array methods

// get and store the total sum of the array (use reduce)
// create new array where each element is [sum - number] (use map)

function exclusiveSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return arr.map((num) => sum - num);
}

function exclusiveSumTests() {
  console.log(exclusiveSum([1, 3, 4, 2, 0]), ' -> ', [9, 7, 6, 8, 10]);
  console.log(exclusiveSum([-1, -2, -5]), ' -> ', [-7, -6, -3]);
  console.log(exclusiveSum([1, 2, 5, -7]), ' -> ', [0, -1, -4, 8]);
  console.log(exclusiveSum([3]), ' -> ', [0]);
}

exclusiveSumTests()

// bonus: EXCLUSIVE PRODUCT, TWO PASSES, NO NESTED LOOPS

// approach: two iterations, array methods, edge case handling

// edge case extravaganza:
// 1.  if an array contains one 0 and other elements:
//       the zero becomes all the other elements multiplied together
//       all other elements will become zero
// 2.  if an array contains multiple zeroes:
//       all elements will become zero
// 3.  if an array contains one element and no other numbers:
//       the number will become a zero
// else, in all other cases with no zeroes,
//       each number becomes the [total multiplication / number]

// use method from previous challenge, but with handling of zeroes:
//   (RETURN statements that end the program are capitalized)
//   (return statements for callback functions are lowercase)

// EDGE CASE 3: 
// if input === [0], RETURN [0]

// FIRST PASS:
// store counter for zeroes in a variable [zeroes]
// iterate through the array with reduce with this callback function:
//   start accumulator [a] at 1
//   if the current value [b] is 0
//     increment [zeroes]
//     reassign the number to 1 (so we don't drop accumulator to 0)
//   return [accumulator * current value] to be new accumulator
// store the final accumulator in a variable [total]


// SECOND PASS
// EDGE CASE 2:
// if array contains multiple zeroes
//   RETURN an array with only zeroes

// else, return a new mapped array with this callback function:

//   EDGE CASE 3:
//   if current number is zero, return total to be new array element

//   ELSE, return zero to be new array element
// RETURN the resulting mapped array


function exclusiveProduct(arr) {
  // EDGE CASE 3:
  if (arr.length === 1) return [0];

  // FIRST PASS:
  let zeroes = 0;
  let total = arr.reduce((a, b) => {
    if (b === 0) {
      zeroes++;
      b = 1;
    }
    return a * b;
  }, 1);

  // SECOND PASS
  // EDGE CASE 2
  if (zeroes > 1) {
    return arr.map(() => 0)
  // EDGE CASE 1
  } else if (zeroes === 1) {
    return arr.map((el) => (el === 0) ? total : 0)
  // ELSE
  } else {
    return arr.map((el) => total / el)
  }
}

function exclusiveProductTests() {
  console.log(exclusiveProduct([1, 3, 4, 2]), '->', [24, 8, 6, 12])
  console.log(exclusiveProduct([0, 3, 4, 2]), '->', [24, 0, 0, 0])
  console.log(exclusiveProduct([1, 0, 4, 0]), '->', [0, 0, 0, 0])
  console.log(exclusiveProduct([3]), ' -> ', [0])
}
exclusiveProductTests();
