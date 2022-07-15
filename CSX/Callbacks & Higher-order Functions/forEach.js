//PART 1
//expected input(s): array, callback function
//expected output(s): N/A
//expected result(s): use each element of array as argument of callback function

function forEach(array, callback) {

    //loop through each element of array:
    for (let i = 0; i < array.length; i++) {

        //use element as argument of callback function:
        callback(array[i])
    }
}

//PART 2
//expected input(s): array, callback function
//expected output(s): new array
/*expected result(s): for each element of input array, push the result of using the callback
function on the element into the new output array */

function map(array, callback) {
    //declare a new array:
    let finalArray = [];

    //declare a function to push the result of callback function into the new array:
    function pusher(argument) {
        finalArray.push(callback(argument));
    }

    //use each argument of input array as the argument of pusher array:
    forEach(array, pusher);
    
    //return the new array:
    return finalArray;

}

//forEach([array], callback function)
//for each element in array, use element as argument of the callback function: console.log()
forEach(['a', 'b', 'c'], i => console.log(i)); 

//map([array], callback function)
/*for each element in array, push the result of using that element as the argument of the
callback function (n - 2) into the a new array, then return it*/
console.log(map([3, 4, 5], n => n - 2));
