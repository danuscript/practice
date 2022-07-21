// RUNNING SUM OF 1D ARRAY

// expected input: array
// expected output: array

// approach 1: loop through each number in array and add it to a sum, then replace it with sum

function runningSum0(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        arr[i] = sum;
    }
    return arr;
}

// approach 2: each number in new array == sum of current number in original array and previous number in new array

// populate a new array with arr[i] + new[i - 1] at each index i

function runningSum(arr) {
    newArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + newArr[i - 1])
    }
    return newArr;
}
