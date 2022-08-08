// expected input: array of numbers
// expected output: number

// approach: iteration
// iterate through array and if the index matches the value
  // return the index
// return -1

// declare a new function fixedPoint
function fixedPoint(array) {
    // iterate through array with for loop
    for (let i = 0; i < array.length; i++) {
        // if the index matches the value
        if (i === array[i]) return i;
    }
    return -1.
}
