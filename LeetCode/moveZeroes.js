// expected input: array
// expected output: modified array (in-place)

// two pointers
// p2 iterates through the array searching for non-zeroes
// if non-zero is found, p1 overwrites current value and then moves forward
// once p2 reaches the end, p1 overwrites everything with zero

// declare a function that accepts an array as a param
var moveZeroes = function(arr) {
    // initialize our first pointer
    let p1 = 0;
    // iterate through array with second pointer
    for (let p2 = 0; p2 < arr.length; p2++) {
        // if pointer 2 is not on a zero, overwrite p1 and move forward
        if (arr[p2] !== 0) arr[p1++] = arr[p2]
    }
    // iterate through remaining elements with first pointer
    while (p1 < arr.length) {
        // overwite the current element with 0
        arr[p1] = 0;
        // move the pointer forward
        p1++;
    }
    // return input array
    return arr;
};
