// approach: two pointers (on the spot)

// expected input: array
// expected output: array (modified in place)
// approach: two pointers

// [3,1,2,7,4]

// swap 3 with 2

// [2,1,3,7,4]

// swap 1 with 4

// [2,4,3,7,1]

// done

// iterate through array first time and stop p1 on first even number
// iterate through array with p2
  // if the p2 is odd
  // swap it's value with p1
  // move p2 to the next even number

// declare a function that accepts an array as a param
var sortArrayByParity0 = function(arr) {
    // declare first pointer pointers
    let p1 = arr.length - 1;
    // iterate backwards through array
    while (p1 >= 0) {
        // stop pointer 1 on first even number
        if (arr[p1] % 2 === 0) break;
        // otherwise, move pointer back
        p1--;
    }
    // iterate forwards through array
    for (let p2 = 0; p2 < arr.length; p2++) {
        // if the second pointer passes the first, then we're done
        if (p2 >= p1) break;
        
        // if current element at pointer 2 is odd and there are even numbers left
        if (arr[p2] % 2 !== 0 && p1 >= 0) {
            // swap its value with pointer 1
            let odd = arr[p1];
            let even = arr[p2];
            arr[p1] = even;
            arr[p2] = odd;
            // move pointer 1 to the next odd element
            while (p1 >= 0) {
                if (arr[p1] % 2 === 0) break;
                p1--
            } 
        }
    }
    // return the input array
    return arr;
};


// approach 2: quicksort
// if integer [n] is even, then [n % 2 === 0]
// if integer [n] is odd, then [n % 2 === 1]
// therefore, [oddN % 1] > [evenN % 2]

// we want even (lower) numbers on the left, and odd (higher) numbers on the right
// left pointer [l] starts at 0, right pointer [r] starts at [arr.length - 1]
// loop invariant: everythinig before [r] has parity 0, everything after [r] has parity 1
// cases for (arr[l] % 2, arr[r] % 2):
//   if (0, 1), then both are correct, so move both pointers
//   if (1, 0), then both are wrong, so swap them
//   if (0, 0), only [l] is correct, so move it
//   if (1, 1), only [r] is correct, so move it
// when pointers meet, loop is finished!

function sortArrayByParity(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        // if both pointers are wrong
        if (arr[l] % 2 > arr[r] % 2) {
            // swap the elements
            let prv = arr[l];
            arr[l] = arr[r];
            arr[r] = prv;
        }
        // if left pointer is correct, move it forward
        if (arr[l] % 2 === 0) l++;
        // if right pointer is correct, move it back
        if (arr[r] % 2 === 1) r--;
    }
    return arr;
}
