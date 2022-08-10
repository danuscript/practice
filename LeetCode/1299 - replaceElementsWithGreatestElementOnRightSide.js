// expected input: array
// expected output: modified array

// declare a function that accepts an array as input
var replaceElements = function(arr) {
    // keep track of greatest element seen so far
    let lar = -1;
    //iterate backwards through the array with a for loop
    for (i = arr.length - 1; i >= 0; i--) {
        // store the current element
        let curr = arr[i]
        // replace the current element with the largest 
        arr[i] = lar;
        // if the current element was larger than largest, update largest 
        lar = Math.max(lar, curr)
    }
    // return final array
    return arr;
};
