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

// [1, 1, 0, 1, 1, 0, 1, 1, 1, 1]

function findMaxConsecutiveOnes(arr) {
    let prevSum, currSum, maxOnes;
    prevSum = currSum = maxOnes = 0;
    arr.forEach((el) => {
        console.log(prevSum, currSum, maxOnes)
        if (el === 1) {
            currSum++;
        }
        else {
            maxOnes = Math.max(maxOnes, prevSum + currSum)
            prevSum = currSum + 1;
            currSum = 0;
        }
    })
    return Math.max(maxOnes, prevSum + currSum)
}
