//MAJORITY

//expected input: array, callbackFn
//expected output: boolean
//result: iterate through array, using each element as argument in callback
    //for each truthy result, update a true counter
    //for each falsy result, update a false counter
        //return either true or false based off the bigger counter

function majority(array, callbackFn) {
    let trueCount = 0
    let falseCount = 0

    array.forEach(element => {
        if (callbackFn(element)) {
            trueCount++;
        } else {
            falseCount++;
        }
    })

    return (trueCount > falseCount) ? true : false;
}

const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false