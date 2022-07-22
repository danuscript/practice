// FIND NUMBERS WITH AN EVEN NUMBER OF DIGITS

// expected input: array
// expected output: number

// approach 1: string manipulation
// iterate through array
//   if the length of the element.toString is even
//     update a counter
// return counter

const findNumbers0 = function(nums) {
    let counter = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) counter++;
    }
    
    return counter;
    
};

// approach 2: using math instead of string manipulation
// the base 10 logarithm of a number rounded down and added to one = its number of digits 
// iterate through array
//   if Math.floor(Math.log10(num)) + 1 % 2 == 0 
//     update a counter
// return counter

const findNumbers = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((Math.floor(Math.log10(nums[i])) + 1) % 2 === 0) counter++;
    }
    return counter;
}
