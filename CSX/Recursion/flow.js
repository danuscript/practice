// FLOW

// expected input: num, array of functions
// expected output: number

// approach: 
// base case: (arr[0] == undefined)
    // return num
// iterate through the array with recursion
// return function(arr[0](num), arr.slice(1))

function flow(num, arr) {
    if (arr[0] == undefined) {
        return num;
    } else {
        return flow(arr[0](num), arr.slice(1))
    }
}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7