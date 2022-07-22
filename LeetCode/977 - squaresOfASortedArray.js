// SQUARES OF A SORTED ARRAY

// expected input: array
// expected output: array

// approach: map values to a new array with a function that squares the numbers

const sortedSquares = (nums) => nums.map(x => x **= 2).sort((a, b) => a - b)
