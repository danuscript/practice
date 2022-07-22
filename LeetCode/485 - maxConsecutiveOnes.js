// MAX CONSECUTIVE ONES

// input: array
// output: number

// approach: iterate through array
//   if current element is 1, increment a counter
//   if current element is not 1
//     store current value of counter in a new array
//     reset the counter
// after the loop, push the final count into the array
// sort the array by largest first
// return the first value


var findMaxConsecutiveOnes0 = function(nums) {
  let highs = [];
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          counter++;
      } else {
          highs.push(counter)
          counter = 0;
      }
  } 
  highs.push(counter)
  highs.sort((a, b) => b - a)
  return highs[0];
};

// approach 2: track current highest and total highest number of 1s consecutively
// iterate through array
// if current element is 1
//   increment currentHigh
//   if currentHigh is higher than totalHigh, assign current to total
// else if current element is not 1
//   reset counter
// return totalHigh

function findMaxConsecutiveOnes(arr) {
  let currentHigh = 0;
  let totalHigh = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
          currentHigh++;
          if (currentHigh > totalHigh) totalHigh = currentHigh;
      } else {
          currentHigh = 0;
      }
  }
  return totalHigh;
}
