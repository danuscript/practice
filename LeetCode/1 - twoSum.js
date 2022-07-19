// TWOSUM

// expected input: array, target
// expected output: array

// APPROACH #1 (off the cuff):
// create output array
// iterate through input array indexes (i)
//   iterate through remaining indexes (j)
//     if array(i) + array(j) = target
//       arr.push(i, j)
// return arr

// data structure: array
// algorithm: brute force
// time complexity: O(n^2) (nested for loops)
// space complexity: O(1)

function twoSum1(arr, tar) {
    outArr = [];
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] == tar) outArr.push(i, j)
    return outArr;
}

//console.log(twoSum1([3, 3], 6))

// APPROACH #2 (two-pass hash table)

// example array: [3, 5, 1, 4, -8];
// example target: 5
// example answer: [2, 3]

// example array b: [3, 4, 9, 6, 4]
// example target b: 8
// example answer: [1, 4]

// instead of iterating through each element and then iterating through each remaining element to see if they add up:
// for (let i = 0; i < array.length; i++)
//   for (let j = i + 1; j < array.length; j++)
//     if array[i] + array[j] = target
//       push i and j into output array

// This method is O(n^2) time complexity but it can be optimized to linear time.

// starting at the beginning of this array [3, 4, 9, 6, 4]
// target = 8, current value = 3, and x = the value needed to get to target
//   currentValue + x = target
//     x = target - currentValue
//     x = 8 - 3, or 5
// so, on the currentValue of 3, if 5 exists in this array then we've found an answer
// moving on to the next value of this array [3, 4, 9, 6, 4]
// target = 8, current value = 4, and x = 4
// if 4 exists in this array then we've found our solution
//   4 exists (at the end of the array), so return indices of currentValue and x

// for each value in array, store its value and index in a map

// starting at beginning of new example array: [4, -2, 5, 0, 6, 3, 2, 7]
// target = 1
// currentValue = 4, target = 1, x = -3
//   store currentValue and its index in map
//   4 (key): 0 (value)
//   check map for key -3 (x):
//     (map contains key -3) is false, so iterate to the next array index
//   map at this stage: {4: 0}

// moving to next number of array: [4, -2, 5, 0, 6, 3, 2, 7]
// currentValue = -2, target = 1, x = 3
//   store currentValue and its index in map
//   -2 (key): 1 (value)
//   check map for key 3 (x):
//     (map contains key 3) is false, so iterate to the next array index
//   map at this stage: {4: 0, -2: 1}

// moving to next number of array: [4, -2, 5, 0, 6, 3, 2, 7]
// currentValue = 5, target = 1, x = -4
//   store currentValue and its index in map
//   5 (key): 2 (value)
//   check map for key -4 (x):
//     (map contains key -4) is false, so iterate to the next array index
//   map at this stage: {4: 0, -2: 1, 5: 2}

// moving to next number of array: [4, -2, 5, 0, 6, 3, 2, 7]
// currentValue = 0, target = 1, x = 1
//   store currentValue and its index in map
//   0 (key): 3 (value)
//   check map for key 1 (x):
//     (map contains key 1) is false, so iterate to the next array index
//   map at this stage: {4: 0, -2: 1, 5: 2, 0: 3}

// moving to next number of array: [4, -2, 5, 0, 6, 3, 2, 7]
// currentValue = 6, target = 1, x = -5
//   store currentValue and its index in map
//   6 (key): 4 (value)
//   check map for key -5 (x):
//     (map contains key -5) is false, so iterate to the next array index
//   map at this stage: {4: 0, -2: 1, 5: 2, 0: 3, 6: 4}

// moving to next number of array: [4, -2, 5, 0, 6, 3, 2, 7]
// currentValue = 3, target = 1, x = -2
//   store currentValue and its index in map
//   3 (key): 1 (value)
//   check map for key -2 (x):
//     (map contains key -2) is TRUE!
//       return index of currentValue and value of key -2
//       return [5, 1]   
//   map at this stage: {4: 0, -2: 1, 5: 2, 0: 3, 6: 4, 3: 5}

// data structure: array, hash table
// time complexity: O(n) because we've only iterated through the array once!
// space complexity: O(n)

function twoSum(arr, tar) {

    // declare a new hash map
    let obj = {}

    //iterate through array
    for (let i = 0; i < arr.length; i++) {

        //check map for correct answer: (target - current value)
        if (obj.hasOwnProperty([tar - arr[i]])) {

            //if it exists, return an array with the indices of current value and correct answer:
            return [i, obj[tar - arr[i]]];

        // if it doesn't exist
        } else {

            // push current value and its index into hash map
            obj[arr[i]] = i;
        }
    }

    // if no solution is found, return null
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9))
