// COUNT OF SIMILAR NUMBERS AFTER SELF

// expected input: array
// expected output: new array

// example input: [5, 2, 6, 1]
// example output: [2, 1, 1, 0]

// appraoch: brute force (UNSUCESSFUL: TIME LIMIT EXCEEDED)
// iteratre through input array
//   comparing element to each subsequent number
//     every time smaller number is incountered, update counter
//     push counter into output array

var countSmaller = function(nums) {
    
    // declare an output array
    let outArr = [];
    
    // iterate through the input array
    for (let i = 0; i < nums.length; i++) {
        
        // reset a counter variable
        let counter = 0;
        
        // iterate through remaining numbers
        for (let j = i + 1; j < nums.length; j++) {
            
            // if the nums[j] is smaller than nums[i]
            if (nums[j] < nums[i]) {
                
                // update the counter
                counter++;
            }
        }
        
        // push counter into output array
        outArr[i] = counter;
    }
    // return output array
    return outArr;
};

// FAILED: TIME LIMIT EXCEEDED
