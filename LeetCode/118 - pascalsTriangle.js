// expected input: integer
// expected output: array of arrays

// approach:
// construct a function "generate" with the parameter "numRows"
//   declare a new array
//   set up a function to pascalize number
//   iterate from 1 to numRows with a for loop
//     pascalize(i)


// first term == 1
// second term == row - 1

// even number rows give the middle number twice

// arr0:           [1]
// arr1:         [1,  1]
// arr2:       [1,  2,  1]
// arr3:     [1,  3,  3,  1]
// arr4:   [1,  4,  6,  4,  1]      1, i, prv1 + prv2
// arr5:[1,  5,  10, 10,  5,  1]    1, i, prv1 + prv2

// arr0: [1]
// arr1: [1, thisArr[0]]
// arr2: [1, (prvArr[0] + prvArr[1]), thisArr[0]]
// arr3: [1, (prvArr[0] + prvArr[1]), thisArr[1], thisArr[0]]
// arr4: [1, (prvArr[0] + prvArr[1]), (prvArr[1] + prvArr[2]), thisArr[1], thisArr[0]]
// arr5: [1, (prvArr[0] + prvArr[1]), (prvArr[1] + prvArr[2]), thisArr[2], thisArr[1], thisArr[0]]


//mirrored array elements
// arr0:
// arr1: 0
// arr2: 0
// arr3: 1, 0
// arr4: 1, 0
// arr5: 2, 1, 0
// arr6: 2, 1, 0
// arr7: 3, 2, 1, 0
// arr8: 3, 2, 1, 0
// arr9: 4, 3, 2, 1, 0
// arr10: 5, 4, 3, 2, 1, 0

function generate(numRows) {
    

    // base cases:
    if (numRows == 1) return [[1]];
    if (numRows == 2) return [[1], [1, 1]];

    // starting array
    let pascalArrs = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {
        let newArr = [1, i];

        // add the next elements of array
        if (i >= 4) {
            if (i % 2 == 0) {
                for (let j = 1; j < (i/2); j++) {
                    newArr.push(pascalArrs[pascalArrs.length -1][j] + pascalArrs[pascalArrs.length - 1][j + 1])
                }
            } else if (i % 2 != 0) {
                for (let j = 1; j < ((i - 1)/2); j++) {
                    newArr.push(pascalArrs[pascalArrs.length -1][j] + pascalArrs[pascalArrs.length - 1][j + 1])
                }
            }
        }
        
        // mirror the array based off of its odd/evenness
        if (i % 2 == 0) {
            for (let j = ((i/2) - 1); j >= 0; j--) {
                newArr.push(newArr[j])
            }
        } else if (i % 2 != 0) {
            for (let j = (((i + 1)/2) - 1); j >= 0; j--) {
                newArr.push(newArr[j])
            }
        }

        // push this new array into pascalized arrays
        pascalArrs.push(newArr);
    }

    // return pascalized arrays
    return pascalArrs;
}

console.log(generate(5))

// time to write: 1 hour and 41 minutes
