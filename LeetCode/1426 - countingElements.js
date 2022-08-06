// declare a function "countElements"
var countElements = function(arr) {
    
    // initialize counter variable to 0
    let counter = 0;
    
    // initialize object as table
    let nums = new Set();    
    
    // iterate through input array
    for (let i = 0; i < arr.length; i++) {
    
        // if element isn't in set, add it
        if (!nums.has(arr[i])) {
            nums.add(arr[i])
        } 
    }
    
    // iterate through array again and search for complement
    for (let i = 0; i < arr.length; i++) {
        if (nums.has(arr[i] + 1)) counter++;
    }
    
    // return counter
    return counter
    
};
