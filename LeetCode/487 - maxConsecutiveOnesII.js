// expected input: array
// expected output: number

// approach: iteration

// [1, 1, 0, 1, 1, 0, 1, 1, 1, 1]


// keeping track of maximum 1s, counting 0 up to one time
// when zero is counted, is reset it's validity, until we start new maximum subarray

// declare a function findMax that accepts an array
// declare variables: zeroValidity boolean (true), currentMax number, totalMax number
// use a for loop to iterate through array 
// if number is one, increase currentMax
// if number is zero && zero is currently valid
//   increase currentMax
//   set zeroValidity to false
// if number is zero && zero is currently invalid
//   assign totalMax Math.max(totalMax, currentMax)
//   assign currentMax = 0
//   go back to index after last zero
// after loop, assign totalMax Math.max(totalMax, currentMax)


var findMaxConsecutiveOnes0 = function(nums) {
    let zeroValid = true;
    let currentMax = 0;
    let totalMax = 0;
    let lastZero = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) currentMax++;
        if (nums[i] === 0 && zeroValid) {
            currentMax++;
            zeroValid = false;
            lastZero = i;
        } else if (nums[i] === 0 && !zeroValid) {
            totalMax = Math.max(totalMax, currentMax);
            currentMax = 0;
            zeroValid = true;
            i = lastZero;
            
        }
    }
    totalMax = Math.max(totalMax, currentMax);
    return totalMax;
};

// approach 2:

// [1,0,1,1,0,1,0,0,1,1,1]

// high level approach:
  // iterate through the array, counting ones
  // if one is encountered, add one to current count
  // if zero is encountered
    // stop the count and submit the number
    // start the count from the end of the previous zero, adding the current zero
        // current count = current index - index of last zero
        // "adding the current zero":
          // index = places counted - 1 (relationship between index and length property)
          // subtracting index = subtracting places counted but adding one

// declare a function findMax that accepts an array as a parameter
// keep track of three variables:
  // prevZero, the last index that we encountered a zero
  // currMax, the current maximum consecutive ones that we've encountered;
  // totMax, the biggest maximum we've seen so far
// iterate through array
  // if the current value is a 1
    // update the current max
  // otherwise, if the current value is 0
    // update the totalMax if the currMax is bigger
    // reset the currMax to the current index minus the previous zero's index
    // update prevZero with index of current zero
// update the totMax one final time
// return the totMax

function findMaxConsecutiveOnes(arr) {
    let curr = 0;
    let max = 0;
    let last = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            curr++;
        } else {
            max = Math.max(max, curr);
            curr = i - last;
            last = i;
        }
    }
    max = Math.max(max, curr)
    return max;
}
