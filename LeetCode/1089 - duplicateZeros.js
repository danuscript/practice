// iterate left to right, count zeros and vacancies

// arr = [1,5,2,0,6,8,0,6,0]
//              o     o x x
// zeros: 2, vacancies: 2
// duplicate last zero

// arr = [1,5,2,0,6,0,0,6,0]
//              o   o o x x 
// zeros: 3, vacancies: 2
// don't duplicate last zero

// iterate right to left,


// declare a function "duplicateZeroes" that takes one parameter, an array
function duplicateZeros(arr) {

    // store "first" as a boolean variable, [true]
    let first = true;
    
    // store pointers as variable [l] that starts off as array's last element
    let l = arr.length - 1;
    
    // keep track of zeros in array
    let zeros = 0;
    
    // use for loop to iterate through array, counting zeros and creating vacancies
    for (let i = 0; i <= l; i++) {
        
        // if current element is zero
        if (arr[i] === 0) {
            // increment zero counter
            zeros++;
            
            // if i < l
            if (i < l) {
                // move l
                l--;
            }     
        }
    }
    // use while loop to iterate right to left through array and overwrite values
    // while [r > l]
    let r = arr.length - 1;
    while (r > l && l >= 0) {
        // if (first) 
        if (first) { 
            
            // if the element is zero
            if (arr[l] === 0) {
            
                // if there are enough vacancies
                let vacancies = (arr.length - 1) - l
                if (vacancies >= zeros) {
                    
                    //duplicate the last zero
                    arr[r] = arr[l];
                    r--;
                }
            
            // arr[r] = arr[l]
             arr[r] = arr[l];
            
            // decrement l and r (move both pointers left)
            l--;
            r--;
            }
            
            // set [first] variable to false
            first = false;
        }
        // if arr[l] !== 0
        if (arr[l] !== 0) {
            
            // arr[r] = arr[l]
             arr[r] = arr[l];
            
            // decrement l and r (move both pointers left)
            l--;
            r--;
        // else, if arr[l] === 0
        } else {
            // arr[r] = arr[l]
            arr[r] = arr[l]
            
            // decrement r
            r--;
            
            // arr[r] = arr[l]
             arr[r] = arr[l];
            
            // decrement l and r (move both pointers left)
            l--;
            r--;
        } 
    }
    return arr;
} 
