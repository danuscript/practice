//SEQUENCE:
//3, 7, 11, 15, 19....

//INITIAL VALUE:
//3

//PATTERN:
//a + 4

//BASE CASE:
//n >= 1

//RECURSIVE CASE:
//function(n) == function(n - 1) + 4

function fourFormula(n) {
  if (n <= 1) {
    return 3;
  } else {
    return fourFormula(n - 1) + 4;
  }

}

// console.log(fourFormula(1)); // -> 3
// console.log(fourFormula(2)); // -> 7
// console.log(fourFormula(3)); // -> 11
// console.log(fourFormula(4)); // -> 15
// console.log(fourFormula(5)); // -> 19
// console.log(fourFormula(100)); // -> 399

//------------------------------------------------

//SEQUENCE:
//5, 10, 20, 40, 80...

//INITIAL VALUE:
//5

//PATERN:
//a * 2

//BASE CASE:
//n <= 1

//RECURSIVE CASE:
//function(n) = function(n - 1) * 2

function doubling(n) {
  if (n <= 1) {
    return 5;
  } else {
    return doubling(n - 1) * 2;
  }
}

// console.log(doubling(1)); // -> 5
// console.log(doubling(2)); // -> 10
// console.log(doubling(3)); // -> 20
// console.log(doubling(4)); // -> 40
// console.log(doubling(5)); // -> 80
// console.log(doubling(10)); // -> 2560

//------------------------------------------------

//SEQUENCE:
//10, 13, 16, 19, 22

//INITIAL VALUE:
//10

//PATTERN:
//a_n = 3 * n + 7

//BASE CASE:
//n <= 1

//RECURSIVE CASE:
//function(n) = function(n - 1) + 3

function expFormula(n) {
  if (n <= 1) {
    return 10;
  } else {
    return expFormula(n - 1) + 3;
  }
}

// console.log(expFormula(1)); // -> 10
// console.log(expFormula(2)); // -> 13
// console.log(expFormula(3)); // -> 16
// console.log(expFormula(4)); // -> 19
// console.log(expFormula(5)); // -> 22
// console.log(expFormula(100)); // -> 307

//------------------------------------------------

//SEQUENCE:
//50, 25, 12.5, 6.25, 3.125...

//INITIAL VALUE:
//50

//PATTERN;
//a_n = 50 * (1 / 2) ** (n - 1)

//BASE CASE:
//n <= 1; 

//RECURSIVE CASE:
//function(n) = function(n - 1) / 2

// function findSequence(n) {
//   return 50 * (1 / 2) ** (n - 1)
// }

function fracFormula(n) {
  if (n <= 1) {
    return 50;
  } else {
    return fracFormula(n - 1) / 2;
  }
}

// console.log(fracFormula(1)); // -> 50
// console.log(fracFormula(2)); // -> 25
// console.log(fracFormula(3)); // -> 12.5
// console.log(fracFormula(4)); // -> 6.25
// console.log(fracFormula(5)); // -> 3.125
// console.log(fracFormula(10)); // -> 0.09765625

//------------------------------------------------

//SEQUENCE:
//0, 1, 1, 2, 3, 5, 8, 13, 21...

//INITIAL VALUE:
//0

//PATTERN
//add number to previous number to produce next number

//BASE CASES:
//n == 0
//n == 1 

//RECURSIVE CASE:
//function(n) = function(n - 1) + function(n - 2)

function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

let fiboArr = []
for (let i = 0; i < 10; i++) {
  fiboArr.push(fibonacci(i))
}

// console.log(fiboArr) // - > [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]