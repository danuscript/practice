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
