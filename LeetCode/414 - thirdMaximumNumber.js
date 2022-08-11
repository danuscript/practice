// approach 1: sub-optimal sort and set (unacceptable)

// expected input: array
// expected output: number

// sort array, then return either index 2, or index 0
var thirdMax0 = function(nums) {
    let sortArr = [...new Set(nums.sort((a, b) => b - a))];
    console.log(sortArr)
    return (sortArr[2] !== undefined) ? sortArr[2] : sortArr[0]
};

// approach 2: use a set and delete maximums

// if array is has fewer than 3 unique elements, iterate through it and return the maximum

// create set from input, getting rid of duplicates
// iterate through the set and find the highest number, then delete it
// iterate through the set and find the highest number, then delete it
// iterate through the set and find the highest number, then return it

// valid approach, but doesn't scale well as set deletion and iteration is repeated 3 times in the case of finding the third largest, and k times in the case of finding kth largest

function thirdMax1(arr) {
    let currMax = -Infinity;
    
    let set = new Set(arr);
    
    if (set.size < 3) {
        arr.forEach((el) => currMax = Math.max(currMax, el))
        return currMax;
    }

    for (let i = 1; i <= 3; i++) {
        currMax = -Infinity;
        [...set].forEach((el) => currMax = Math.max(currMax, el))
        if (i < 3) {
            set.delete(currMax)
        } else {
            return currMax;
        }
    }
}

// approach 3: seen-maximums set

// keep edge case to handle arrays with fewer than 3 unique elements
// iterate through the array, keeping track of maximum value that's not in a set
// if a maximum value is found, add it to the set
// repeat this three times
// if there is a third element in the set, return that. otherwise, return the first

function thirdMax2(arr) {
    let set = new Set();
    for (let i = 1; i <= 3; i++) {
        let currMax = -Infinity;
        arr.forEach((el) => {
            if (!set.has(el)) currMax = Math.max(currMax, el)
        })
        if (currMax > -Infinity) set.add(currMax);
    }
    return ([...set][2] !== undefined) ? [...set][2] : [...set][0];
}

// approach 3: set and one pass

// iterate through array
//   add each number to set
//   if set has more than 3 elements, delete the minimum
// if there is a third element in the set, return the min. otherwise, return the max

function thirdMax(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
        if (set.size > 3) set.delete(Math.min(...set));
    } 
    return (set.size === 3) ? Math.min(...set) : Math.max(...set)
}
