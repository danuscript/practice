// GROUPBY

// expected input: array, callbackFn
// expected output: object

// APPROACH:
// declare a new object
// for each element (i) of array
//      if obj[callbackFn(array[i])] exists
//          obj[callbackFn(array[i])].push(array(i))
//      else if obj[callbackFn(array[i])] does not exist
//          obj[callbackFn(array[i])] = [array(i)]
// return object

function groupBy(arr, cb) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(cb(arr[i]))) {
            obj[cb(arr[i])].push((arr[i]));
        } else {
            obj[cb(arr[i])] = [arr[i]];
        } 
    }
    return obj;
}

const decimals = [1.3, 2.1, 2.4, 1.2, 1.7, 2.5];
const floored = function (num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
