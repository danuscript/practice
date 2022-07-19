// GETLENGTH

// expected input: array 
// expected output: length

// approach:
// store a counter variable within the function arguments to pass to subsequent calls
// call the function recursively, shortening the input array each time and increasing the counter
// when array contains no elements (arr[0] == undefined), return counter

// base case: arr is undefined
// recursive case: getLength(arr) = getLength(arr.slice(1))

function getLength(arr, length = 0) {
    if (arr[0] == undefined) {
        return length;
    } else {
        return (getLength(arr.slice(1), length + 1)) 
    }
}


console.log(getLength([1]));
console.log(getLength([1, 2]));
console.log(getLength([1, 2, 3, 4, 5])); 
console.log(getLength([]));