// declare a function that takes an array as a paramenter and stores a counter in the default parameters
function flattenRecursively(arr, counter = 0) {
    
    // base case:
    // if there is no array element at index [counter], return the array
    // this will only trigger when counter reaches the end of the array
    if (arr[counter] === undefined) return arr


    // recursive case 1: 
    // if the element at index [counter] is not an array,
    // this will skip over all the elements that are not nested
    if (!Array.isArray(arr[counter])) {

        // recursively call the function, checking the next element
        return flattenRecursively(arr, counter + 1)
    }

    // recursive case 2:
    // if the element at index counter IS an array

    // concatenate the flat portion of the array
    let firstHalf = arr.slice(0, counter);

    // with the elements of the new array
    let arrNew = firstHalf.concat(arr[counter]);

    // recursively call the function, WITHOUT moving forward
    // this will check this new array at the current element for nested arrays
    // the counter will only move on after it unpacks all nested arrays
    return flattenRecursively(arrNew, counter)

}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
