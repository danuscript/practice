// RICHEST CUSTOMER WEALTH
// expected input: array of arrays
// expected result: number

// approach: reduce arrays all arrays, sort them, then return the first one

function maximumWealth(arrs) {
    
    // map elements to new array in which
    let outArr = arrs.map(
        
        //each array has been reduced
        arr => arr.reduce(
            
            // to the sum of all elements
            (a, b) => a + b)).sort(
        
                // then sort array from highest to lowest
                (x, y) => y - x)
    
    // return the first value of the array, the highest nmber
    return outArr[0]
}


// fun one liner:
maxWel = (arrs) => arrs.map(arr => arr.reduce((a, b) => a + b)).sort((x, y) => y - x)[0];
