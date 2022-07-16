//REDUCE

//expected input: array, callback, number
//expected result: loop through each array element, adding the result of callback to the number
//expected output: number

function reduce(array, callback, number) {
  for (let i = 0; i < array.length; i++) {
    number = callback(number, array[i])
  }
  return number;
}

const nums = [4, 1, 3, 10];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8