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


// declare a function merge that accepts aforementioned params
var merge = function(nums1, m, nums2, n) {
    
    // set a pointer [n2] at the end of the nums 2 array (n - 1)
    let n2 = n - 1
    
    // set a pointer [n1] at the end of the nums 1 array (m - 1)  
    let n1 = m - 1
    
    // set a pointer at end of total nums1 array
    let i = nums1.length - 1   
    
    // iterate backwards through the first array with a pointer [i]
    // while there are still unsorted elements in both arrays
    
    // if our first array (nums1) is empty
    if (n1 < 0) {
        
        // push all elements from nums2 into nums1
        for (let i = 0; i < n; i++) {
            
            // overwrite the value in nums1 with the corresponding value in nums2
            nums1[i] = nums2[i]
        }
        
    } else {
    
    
    while (i >= 0) {
        
        // if we've reached the end of either array
        if (n1 < 0 || n2 < 0) {
            // overwrite the element at nums[1] with the corresponding pointer's element
            if (n1 < 0) {
                nums1[i] = nums2[n2]
                n2--;
                i--;
            } else if (n2 < 0) {
                nums1[i] = nums1[n1]
                n1--;
                i--;
            }
                 
        } else {
        // if the element at index n2 in nums2 array >= n1 in nums1
        if (nums2[n2] >= nums1[n1]) {
            // overwrite nums1[i] with value of n2 at nums2 array
            nums1[i] = nums2[n2]
            
            // decrement pointer [n2]
            n2--;
            
            // decrement pointer [i]
            i--;
        
        // else if the element at index n1 in nums1 array > n2 in nums2
        } else {
            // overwrite nums1[i] with value of n1 in nums1 array
            nums1[i] = nums1[n1]
            
            // decrement pointer [n1]
            n1--;
            
            // decrement pointer [i]
            i--;
        }
           
    }
    }
    }
    
};
