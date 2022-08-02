//Challenge 2
// (PAIR PROGRAMMED WITH MICHAEL ANGELO)

// expected input: number
// expected output: console log strings

// approach 1: nested "for" loops

// high-level strategy: 

// create an initial string of "*"
// Use iteration to add spaces before an initial string of "*"
// once this string reaches a length of [number] "____*"
//   log it to the console "____*"
//   add another asterisk "____**"
//   cut off all the spaces "**"
// we now have new initial string: "**"
// repeat the above process [number] times

// code stategy:

// declare a function "drawStairs" that takes a parameter "n"
//   initialize the output string: "*"
//   repeat the following operations [n] times:
//     initialize a variable [counter] with a value of 0
//     repeat the following operations until [j] reaches [n]
//       prefix a space string " " to our output string
//       increment [counter]
//     log the output string to the console
//     append another "*" to the output string
//     cut off [counter] characters with the slice method

function drawStairsLoops(n) {
  let str = "*"
  for (let i = 1; i <= n; i++) {
    let counter = 0;
    for (let j = i; j < n; j++) {
      str = " ".concat(str)
      counter++;
    }
    console.log(str)
    str = str.concat("*")
    str = str.slice(counter)
  }
}

// update: we started a recursive approach during our pair programming, but were unable to implement it fully at the time. after revisiting it with more time, here is the completed algorithm:

// approach 2: recursion

// high-level stategy:

// store a counter (0) and a string "" in default parameters 

// recursive case 1:
// if [string]'s length is less than [number - 1]
//   recursively call the function, adding a space before [string]

// recursive case 2:
// if [string]'s length is equal to [number - 1]
//   add an asterisk to the end of the string
//   log [string]
//   recursively call the function, with
//     [string] sliced at [string.length - 1 - counter]
//     counter incremented by 1

// base case:
//   if [string]'s length is greater than [number - 1]
//     return null

function drawStairs(n, counter = 0, str = "") {
  if (str.length < n - 1) {
    return drawStairs(n, counter, " ".concat(str))
  }
  if (str.length === n - 1) {
    str = str.concat("*");
    console.log(str)
    return drawStairs(n, counter + 1, str.slice(n + ~counter))
  }
  return null;
}

drawStairs(5)

// note: this approach is VERY prone to "Maximum call stack size exceeded", however it works with arguments up to the max constraint specified in the problem (N = 100)
