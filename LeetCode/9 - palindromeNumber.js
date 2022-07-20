// PALINDROME NUMBER

// expected input: number
// expected output: boolean

// approach 1: string manipulation

// declare a boolean test for number to pass
// convert number to a string
// for each character at index [i] in string up until the halfway point
//   if character[i] does not equal character on opposite side (string[string.length + ~i])
//     fail the test
// return the test boolean 

var isPalindrome0 = function(x) {
  palindromeCheck = true
  let xString = x.toString();
  for (let i = 0; i < (xString.length) / 2; i++) {
      if (xString[i] != xString[xString.length + ~i]) palindromeCheck = false;
  }
  return palindromeCheck;    
};

// -------------------------------------------------

// approach 1.5: fun one liner with string manipulation

const isPal = (x) => x.toString() == x.toString().split("").reverse().join("");

// ----------------------------------------------


// approach 2: mathematically reverse the second half of the number, and compare it with the first half
// 1. get a digit from the end of the original number 
// 2. append it to a new, reversed number
// 3. remove it from the original number
// 3. repeat until the reversed number becomes bigger than the original
// 4. compare numbers!

// in detail:

// declare variables (number = x, lastDigit = 0, reversedNumber = 0)

// 1. take the last digit of any number:
//   lastDigit = number % 10

// 2. append the last digit to the reversed number
//   reversedNumber = (reversedNumber * 10) + lastDigit
//   this moves the existing number over one column, replacing the resulting 0 with the last digit

// 3. remove the last digit from the original number
//   number == Math.trunc(number / 10)
//   we don't this to result in a decimal, so we use Math.trunc

// 4. repeat until the reversed number becomes biggert than the original
//   encase 1. and 2. within a while loop
//   while (num > rev)   

// 5. compare numbers
// some palindrome numbers have a middle digit, so num should either equal
//   the reversed number
//   the reversed number with the last digit removed
//     same process from step 3: rev = Math.trunc(rev / 10)


// edge cases:
// negative numbers should return false, since -12321 reversed is 12321-
// numbers ending in 0 that are not zero should return false 
//   otherwise this method will produce false positives
//     since the last digit is zero, it won't alter and properly build the reversed number 


function isPalindrome(num) {
  
  // base cases:
  // if the number is less than zero, or if it ends in zero (and isn't zero), return false
  if (num < 0 || (num % 10 == 0 && num !== 0)) return false;

  // declare our variables
  let rev = 0;
  let last = 0;

  // repeat this operation until the reversed number is bigger than the input
  while (num > rev) {
    
    // 1. get the last number
    last = num % 10;

    // 2. append it to the end of the reversed number
    rev = rev * 10 + last;

    // 3. remove it from the end of the original number
    num = Math.trunc(num / 10);
  }

  // compare the numbers!
    // if final number == reversed number or final number == reversed number without last digit, return true
    // else return false
  return (num == rev || num == Math.trunc(rev / 10));
}



// console.log(isPalindrome(12321));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(12345654321));

// console.log(isPalindrome(1234321))
