// SQUARES OF A SORTED ARRAY

// expected input: array
// expected output: array

// approach: map then sort
// map values to a new array with a function that squares the numbers, then sort them

const sortedSquares0 = (nums) => nums.map(x => x **= 2).sort((a, b) => a - b)

// approach 2: two pointers

// example array: [-10, -5, 1, 2, 4, 7]
// squared array: [100, 25, 1, 4, 16, 49]
// sorted output: [1, 4, 16, 25, 49, 100]

// instead of sorting the array after the fact, we can examine it.
// all numbers wind up positive
//   numbers on negative side decrease
//   numbers on non-negative side incrase
//   the biggest number is on either the left side or the right side
//   this can be predicted before squaring
//     by looking at each number's absoluet value with two pointers

// [-10, -5, 1, 2, 4, 7]
//   L                R

// compare the left pointer to the right pointer
// in this case, 10 has the biggest absolute value, so it's square goes last in our array
// [100]

// since our left pointer satisfied the search, we update it:

// [-10, -5, 1, 2, 4, 7]
//        L           R

// compare the left pointer to the right pointer
// this time, the right one has the bigger absolute value, so it's square goes before last biggest

// [49, 100]

// since our right pointer satisfied the search, we update it:

// [-10, -5, 1, 2, 4, 7]
//        L        R

// compare the two pointers
// now, the left pointer has a bigger absolute value, so it's square goes before the previous ones

// [25, 49, 100]

// this process is repeated:

// [-10, -5, 1, 2, 4, 7]
//           L     R

// [16, 25, 49, 100]

// -----------

// [-10, -5, 1, 2, 4, 7]
//           L  R

// [4, 16, 25, 49, 100]

// -----------

// [-10, -5, 1, 2, 4, 7]
//           LR

// [1, 4, 16, 25, 49, 100]

// -----------

// now, our breaking condition has been met: the pointers have reached each other

// translating this approach to code:

// declare our output array
// let the left pointer = 0, the first index of the array
// let the right pointer = (arr.length - 1), the last index of the array
// move the pointers and compare their elements until they reach each other: 

// loop the following operation until all array elements have been evaluated
//   if arr[left] has a bigger or equal absolute value than arr[right]
//     unshift the square of arr[left] into the front of output array
//     move the left pointer over (left++)
//   else if arr[right] has a bigger absolute vlaue than arr[left]
//     unshift the square of arr[right] into the front of output array
//     move the right pointer over (right++)
// now, this loop will repeat, using the next highest absolute values
//   this will build our array from the end (biggest) to the beginning (smallest)
// return the output arrray

// time complexity: O(n)

function sortedSquares(arr) {
    let outArr = [];
    let left = 0;
    let right = arr.length - 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (Math.abs(arr[left]) >= Math.abs(arr[right])) {
            outArr[i] = (arr[left] ** 2)
            left++;
        } else {
            outArr[i] = (arr[right] ** 2)
            right--;
        }
    }
    return outArr;
}

console.log(sortedSquares([-10, -5, 1, 2, 4, 7]))
