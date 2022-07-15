//PART 1
//expected inputs: array, callback function
//expected output: N/A

//for each element in array, use as argument in callback function
function forEach(array, callback) {
    //loop through each element of array
    for (let i = 0; i < array.length; i++) {
        //run the callback function on each element of the array
        callback(array[i]);
    }
}

// PART 2
// expected input(s): array of numbers, callback function
// expected output(s): new array

function map(array, callback) {
    //declare a new array 
    let finalArray = [];

    //declare a function that pushes result of callback into the new array
    function pusher(element) {
        //push result of running callback on element
        finalArray.push(callback(element))
    }

    //loop through each element of array and run pusher
    forEach(array, pusher);

    return finalArray;

}


console.log(typeof forEach);
forEach(['a', 'b', 'c'], i => console.log(i)); 
console.log(typeof map);
console.log(map([3, 4, 5], n => n - 2));