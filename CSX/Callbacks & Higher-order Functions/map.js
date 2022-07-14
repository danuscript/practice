let subtractTwo = (number) => number - 2;

//expected inputs: array of numbers, callback  function 
//expected outputs: new array

function map(arr, callback) {
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        //push a value into final array
        finalArr.push(callback(arr[i]));
    }
    return finalArr;
}

console.log(typeof subtractTwo); 
console.log(typeof map);
console.log(map([3, 4, 5], subtractTwo));