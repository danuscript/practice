// INTERSECTION

// expected input: array of indefinite arrays
// expected result: return array containing only common elements in every array
// expected output: single array

// approach:
// construct a function "intersection" that returns the result of arrays.reduce()
    //reduce returns accumulator, which is compared against each currentArray using a.filter()
        //filter returns array to accumulator, containing only elements that satisfy currentValue.includes()
            //reduce starts over using filtered array as new accumulator

const intersection = (arrs) => arrs.reduce((a, b) => a.filter((x) => b.includes(x)));

// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]