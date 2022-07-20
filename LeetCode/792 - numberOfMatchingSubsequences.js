//NUMBER OF MATCHING SUBSEQUENCES

// expected input: string, array of strings
// expected output: number

// declare counter
// approach: iterate through array of strings
// declare boolean to track successful strings
// declare variable remaining letters = s
// iterate through each character
// if character is found in remaining characters
//   slice reamining characters at first instance of character
//   move on to the next character
// else if character is not found in remaining characters
//   update boolean to false
// if boolean = true, update counter
// return counter

// data structure: N/A
// algorithm: brue force
// time complexity: O(n^2) (nested for loops)

function numMatchingSubseq(s, arr) {
  let counter = 0;

  // iterate through our array of strings
  for (let i = 0; i < arr.length; i++) {

    // declare variable for remaining letters
    let rem = s;

    // declare boolean for whether string passed:
    let passed = true;

    // iterate through character in string
    checkcharacters:
    for (let j = 0; j < arr[i].length; j++) {

      // if character is included in remaining letters
      if (rem.includes(arr[i][j])) {

        // slice remaining characters
        rem = rem.slice(rem.indexOf(arr[i][j]) + 1)

        // continue chcking characters:
        continue checkcharacters;

      // if character is not included in remaining letters  
      } else {

        // fail the satisfaction test
        passed = false;

        // break the for loop
        break checkcharacters;
      }

    }
    // if the loop survives, update counter
    if (passed == true) {
      counter++;
    }
  }
  return counter;
}

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace", "xyz", "yuzde", "ayz"]))

// 