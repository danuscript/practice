// approach: two pointers
// p2 moves along the array each time, checking the next value to see if it's new
// if new value is found, p1 moves forward and overwrites the next element with new value

// declare an array that accepts an array as a param
var removeDuplicates = function(arr) {
    // initialize first pointer
    let p1 = 0;
    // iterate second pointer through the array with for loop
    for (p2 = 0; p2 < arr.length; p2++) {
        // if next element is unique, move pointer one forward and overwrite it
        if (arr[p2 + 1] !== arr[p2]) arr[++p1] = arr[p2 + 1]
    // move pointer 2 forward
    }
    // return length of modified inputs
    return p1;
};
