// COUNTBY

// expected input: array, callbackFn
// expected output: object
// expected result: 

// declare object
// for each element (i) of array
    // if callbackFn(array[i]) does not exist in object
        // assign obj[callbackFn(array[i])] = 1
    // else if callbackFn(array[i]) exists in object
        // increment obj[callbackFn(array[i])]
// return object

function countBy(arr, cb) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(obj).includes(cb(arr[i]))) {
            obj[cb(arr[i])]++;
        } else if (!Object.keys(obj).includes(cb(arr[i]))) {
            obj[cb(arr[i])] = 1;
        }
    }
    return obj;
}

function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }