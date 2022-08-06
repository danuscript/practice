// expected input: array of numbers, target
// expected output: boolean

// approach: iteration, math

var isMajorityElement = function(nums, target) {
    
    // declare a counter variable
    let counter = 0;
    
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        //  if current element === target, update a counter
        if (nums[i] === target) counter++;
    }
    
    // return whether or not counter > nums.length / 2
    return (counter > nums.length / 2) 
};
