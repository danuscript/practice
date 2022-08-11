// approach 1: hash set

// expected input: array
// expected output: new array

// approach: multiple iterations + set

// use a for loop to push every value from 1 to input array.length into a set
// iterate through input array, and if set has value, delete it
// return set as an array

var findDisappearedNumbers0 = function(nums) {
    let set = new Set();
    for (let i = 1; i <= nums.length; i++) {
        set.add(i)
    }
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) set.delete(nums[i])
    }
    return [...set]
};

// approach 2: negation - less space used, still O(N))

// example input:
// [3, 3, 2, 1, 4, 5, 6, 4]

// for every value in array, a sorted version would contain that value at the index [valu1e - 1]
// iterate through array and "mark" each index by negating the value at that index (only negate an index once!)
// iterate through array again and push positive numbers into new array

function findDisappearedNumbers(arr) {
    // declare our input variable
    let out = [];
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // if the element at index Math.abs([currentValue] - 1) is positive
            // make it negative
        if (arr[Math.abs(arr[i]) - 1] > 0) arr[Math.abs(arr[i]) - 1] *= -1;
    }
    // now array contains only positive values at indices with numbers that aren't in our array
    //iterate through array again
    for (let i = 0; i < arr.length; i++) {
        // if the current element is positive
            // push number that would be at that index in a sorted array into our output array
        if (arr[i] > 0) out.push(i + 1)
    }
    // return the output array
    return out;
}
