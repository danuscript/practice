// MERGE SORTED ARRAY

// expected input: two arrays
// expected output: first array

// approach: pointers

// while i > n1
// iterate backwards through the first array with a pointer [i]
//   if the element at index n2 in nums2 array >= n1 in nums1
//     overwrite nums1[i] with value of n2 at nums2 array
//     decrement pointer [n2]
// else if the element at index n1 in nums1 array > n2 in nums2
//     overwrite nums1[i] with value of n1 in nums1 array
//     decrement pointer n1
// if one runs out, add the elements from the other


function merge(arr1, m, arr2, n) {
  // initialize our output array and pointers
  let p1 = m - 1
  let p2 = n - 1
  // build up the array until one of the pointers runs out of elements
  for (let i = arr1.length - 1; i >= 0; i--) {
    // if both arrays have elements left
    if (p1 >= 0 && p2 >= 0) {
        // pick the biggest
        arr1[i] = (arr1[p1] >= arr2[p2]) ? (arr1[p1--]) : (arr2[p2--]);
    // if only first has elements left 
    } else if (p1 >= 0) {
        arr1[i] = arr1[p1--];
    // if only the second has elements left
    } else {
        arr1[i] = arr2[p2--];
    }
  }
    return arr1;
}
  
