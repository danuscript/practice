// expected input: array, num
// expected output: array, length
// expample input: nums = [0,1,2,2,3,0,4,2], val = 2

// insertion: o
// deletion: x

// example input: nums = [0,1,2,_,3,0,4,2], val = 2
//                            L-R 

// example input: nums = [0,1,3,_,_,0,4,2], val = 2
//                            o-x 
//                            L---R

// example input: nums = [0,1,3,0,_,_,4,2], val = 2
//                            o-x | |
//                            o---x |
//                              L---R

// example input: nums = [0,1,3,0,4,_,_,2], val = 2
//                            o-x | | |
//                            o---x | |
//                              o---x |
//                                L---R

// example input: nums = [0,1,3,0,4,2,_,_], val = 2
//                            o-x | | | |
//                            o---x | | |
//                              o---x | |
//                                o---x |
//                                  L---R

// example input: nums = [0,1,3,0,4,2,_,_], val = 2
//                            o-x | | | | |
//                            o---x | | | |
//                              o---x | | |
//                                o---x | |
//                                  o---x |
//                                    L   R <- R is undefined

// replace all remaining values with [null]


// loop 1: place [R] marker and count matches
//   if arr[i] is [val]
//     move marker [R] to the right of arr[i]
//     update matches counter

// if no matches are found
//   return the array as is

// loop 2: overwriting process
// while l < arr.length:
// if arr[L] is not [val] or ["_"]
//   move [L] to the right
//   increase [len] counter
// if arr[L] is [val] or ["_"]
//   if arr[R] points to a number
//     overwrite arr[L] with arr[R]
//     overwrite arr[R] with ["_"]
//     move [R] to the right
//   else if arr[R] is undefined
//     replace arr[L] with [null]
//     move [L] to the right

// declare a function "removeElement" that accepts the specified params
var removeElement = function(nums, val) {
    // declare pointers and length prop
    let l = 0; 
    let r = nums.length - 1;
    let len = 0
    let matches = 0;
    
    // loop 1: count matches and place [R] marker
    loop1:    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            r = i + 1;
            matches++
        }
    }    
    
    // if no matches are found, return the array as is:
    if (matches === 0) return nums, nums.length;
    
    // loop 2: overwriting process
    loop2:
    while (l < nums.length) {
        if (nums[l] !== val && nums[l] !== "_") {
            l++;
            len++;
        } else {
            if (nums[r] !== undefined) {
            nums[l] = nums[r];
            nums[r] = "_";
            r++;
            } else {
            nums[l] = null
            l++;
            } 
        }
    }
    return nums, len;
};
