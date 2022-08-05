// expected input: array
// expected output: number

// approach 1: nested "for" loops (TIME LIMIT EXCEEDED)

// initialize a variable [total] with a value of 0
// use a pointer [i = 0], our current number 
// use a pointer [j = i + 1], our next number 
// iterate through array [nums]
// if [nums][i] is zero
//   increment [total]
//   subArrayCheck
//   for each number after zero
//     if num[j] is zero
//       increment [total]
//     else
//       break subArrayCheck
// return total

const zeroFilledSubarray0 = function(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            total++;
            subarrayCheck:
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === 0) {
                    total++
                } else {
                    break subarrayCheck;
                }
            }
        }
    }
    return total;
}

// approach 2:

// store previous zeroes in a variable, [prev = 0]
// store total in a variable [total = 0]
// iterate through array
//   if current elment is zero
//     increment [prev]
//     add [prev] to [total]
//   else 
//     reset [prev] to zero

const zeroFilledSubarray = function(nums) {
    let prev = 0;
    let total = 0;
    nums.forEach((el) => {
        if (el === 0) {
            prev++;
            total += prev;
        } else {
            prev = 0;
        }
    })
    return total;
}

const nums = [0,0,0,2,0,0]
console.log(zeroFilledSubarray(nums));
