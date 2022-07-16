// UNION

// expected input: array of indefinite arrays
// expected result: return an array containing one of each unique element in all arrays
// expected output: single array

// approach 1:
// create a function "union" that returns the result of arrays.reduce()
    // return accumulator array that is updated with callbackFn
        //  merge accumulator and currentValue with spread operator and return new set from that array

const union = (arrs) => arrs.reduce((a, b) => [...new Set([...a, ...b])]);

//approach 2:
//create a function "union" that returns an array
    //array is comprised of new set from flattened input array
        //new set is converted to array with spread operator
        //array is flattened with .flat()

const union2 = (arrs) => [...new Set(arrs.flat())];
        
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
console.log(union2([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
