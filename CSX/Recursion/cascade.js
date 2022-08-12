// expected input: number
// expected output: console.logs

// approach: recursion

// default parameters:
//   [a] === number to output
//   [b] === number to hold digits that get added to/removed from [a]
//   [remove] === boolean to track whether we're adding/removing digits from [a]

// recursive case 1: we're removing digits [remove === true] and there are digits left [a >= 10]
//   console.log the number [a]
//   tranfer digit from [a] to [b]: [transfer(a, b)]

// base case 1: we're removing digits [remove === true] but there are no digits left [a < 10]
//   console.log the current number [a]
//   switch to recursive case 2 and start adding digits [remove = false]

// recursive case 2: we're adding digits [remove === false] and there are digits left [b > 0]
//   transfer digit from [b] to [a]: [transfer(b, a)] 
//   console.log the new number [a]

// base case 2: we're removing digits [remove === false] and there are no digits left [b === 0]
//   edge case: original number ends in zero [number % 10 === 0]
//     add a zero and log one final number to the console [a * 10]
//   end program [return null]

// helper function: [transfer(num1, num2)]
//   capture the [last] digit of the first number [num1 % 10]
//   add it to the end of the second number [num2 = num * 10 + last]
//   remove the last digit of first number [num2 = Math.floor(num2 / 10)]

function transfer(num1, num2) {
  let last = num1 % 10;
  num2 = num2 * 10 + last;
  num1 = Math.floor(num1 / 10)
  return [num1, num2]
}

function cascade(number, a = number, b = 0, remove = true) {
  // base case 1:
  if (a < 10 && remove === true) {
    console.log(a)
    remove = false;
  }
  // base case 2:
  if (!remove && b === 0) {
    // edge case:
    if (number % 10 === 0)
    console.log(a * 10)
    return null;
  }
  // recursive case 1:
  if (a >= 10 && remove) {
    console.log(a)
    let [a1, b1] = transfer(a, b)
    cascade(number, a1, b1, remove)
  }
  // recursive case 2:
  if (!remove && b > 0) {
    let [b1, a1] = transfer(b, a)
    console.log(a1)
    cascade(number, a1, b1, remove)
  }
}

cascade(12345)
