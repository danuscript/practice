// expected input: integer
// expected output: array of arrays

// APPROACH 1:
// construct a function "generate" with the parameter "numRows"
//   declare a new array
//   set up a function to pascalize number
//   iterate from 1 to numRows with a for loop
//     pascalize(i)


// first term == 1
// second term == row - 1

// even number rows give the middle number twice

// arr0:           [1]
// arr1:         [1,  1]
// arr2:       [1,  2,  1]
// arr3:     [1,  3,  3,  1]
// arr4:   [1,  4,  6,  4,  1]      1, i, prv1 + prv2
// arr5:[1,  5,  10, 10,  5,  1]    1, i, prv1 + prv2

// arr0: [1]
// arr1: [1, thisArr[0]]
// arr2: [1, (prvArr[0] + prvArr[1]), thisArr[0]]
// arr3: [1, (prvArr[0] + prvArr[1]), thisArr[1], thisArr[0]]
// arr4: [1, (prvArr[0] + prvArr[1]), (prvArr[1] + prvArr[2]), thisArr[1], thisArr[0]]
// arr5: [1, (prvArr[0] + prvArr[1]), (prvArr[1] + prvArr[2]), thisArr[2], thisArr[1], thisArr[0]]


//mirrored array elements
// arr0:
// arr1: 0
// arr2: 0
// arr3: 1, 0
// arr4: 1, 0
// arr5: 2, 1, 0
// arr6: 2, 1, 0
// arr7: 3, 2, 1, 0
// arr8: 3, 2, 1, 0
// arr9: 4, 3, 2, 1, 0
// arr10: 5, 4, 3, 2, 1, 0

// time complexity: O(n^3)

function generate0(numRows) {
    

  // base cases:
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];

  // define our starting array that gets returned at the end
  let pascalArrs = [[1], [1, 1]];

  // loop the following operation until we have the desired amount of row arrays
  for (let i = 2; i < numRows; i++) {
      
    // define the new array we're going to add every time we loop
    let newArr = [1, i];

      // add the next elements into this new array
      // if the current row number is 4 or higher, then
      if (i >= 4) {

          // if the row number is even, then:
          if (i % 2 == 0) {

              // divide the row number by half
              // repeat this operation from one until half the row number:
              for (let j = 1; j < (i/2); j++) {

                  // push the sum of the two elements at index j in the array at the last index of the starting array
                  newArr.push(pascalArrs[pascalArrs.length -1][j] + pascalArrs[pascalArrs.length - 1][j + 1])
              }

          // else if the row number is odd, then:  
          } else if (i % 2 != 0) {

              // subtract one from the row number, then divide it by half
              // repeat this operation from one until half the row number:
              for (let j = 1; j < ((i - 1)/2); j++) {

                  // push the sum of the two elements at index j in the array at the last index of the starting array
                  newArr.push(pascalArrs[pascalArrs.length -1][j] + pascalArrs[pascalArrs.length - 1][j + 1])
              }
          }
      }
      
      // next, mirror the array based off of its odd/evenness:
      // if the row number is odd:
      if (i % 2 == 0) {

          // divide the row number by half, then subtract one
          // repeat this operation from 0 until that divided row number
          for (let j = ((i/2) - 1); j >= 0; j--) {

              //push the element at index j in the new array back into itself at the end
              newArr.push(newArr[j])
          }

      // else if the row number is even:
      } else if (i % 2 != 0) {

          // divide the row number by half
          for (let j = (((i + 1)/2) - 1); j >= 0; j--) {

              //push the element at index j in the new array back into itself at the end
              newArr.push(newArr[j])
          }
      }

      // next, push this entire new array into final array of arrays
      pascalArrs.push(newArr);

      // repeat this for next row number in the loop on line 19
  }

  // return final array of arrays
  return pascalArrs;
}

console.log(generate0(6))

// time to write: 1 hour and 41 minutes

// ------------------------------------------------------------------

// PASCAL'S TRIANGLE

// expected input: number
// expected output: array of arrays

// row 0: 1
// row 1: 1  1
// row 2: 1  2  1
// row 3: 1  3  3  1
// row 4: 1  4  6  4  1

// approach: dynamic programming

// optimal substructure: information from previous rows feeds into current rows

// overlapping subproblems: each number feeds into multiple other numbers

// base cases: 
// starting row of triangle equals [1]
// starting number of each row == 1
// ending number of each row == 1

// recurrence relation: 
// every element (triangle[row][col]) is equal to the sum of 
// the above element (triangle[row - 1][col])
// and the element to the left of that (triangle [row - 1][col - 1])

// time complexity: O(n^2)

function generate(numRows) {
  
  // base case:
  let triangle = [[1]];

  // loop this operation from row 1 until desired row number
  for (let row = 1; row < numRows; row++) {
    
    // initialize current row as an empty array
    let currRow = [];

    // define the previous row as the previous array in triangle
    let prevRow = triangle[row - 1];

    // base case: push 1 into the beginning of current row
    currRow.push(1);

    // for middle elements:
    for (let col = 1; col < prevRow.length; col++) {

      //recursive case:
      currRow.push(prevRow[col] + prevRow[col - 1])
    }

    // base case: push 1 into the end of the current row
    currRow.push(1);

    // now that we're done building it, push current row into triangle
    triangle.push(currRow)
  }

  // return the completed triangle
  return triangle;
}

console.log(generate(6));
