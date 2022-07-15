//for loop version of multiply function:
function multiply(arr, n) {
  //declare a total product:
  let product = 1;

  //iterate through each array index:
  for (let i = 0; i < n; i++) {
    
    //multiply product by array index:
    product *= arr[i];
  }

  //return the final product:
  return product;
}

//sample values for n and arr:
let n = 4;
let arr = [1, 2, 3, 4, 5];


console.log(multiply(arr, n)); // -> multiply(arr, n) == 24

console.log(multiply(arr, n - 1)); // -> multiply(arr, n - 1) == 6

console.log(arr[n - 1]); // -> arr[n - 1] == 4

//multiply(arr, n) == mutiply(arr, n - 1) * arr[n - 1]
//multiply(arr, n) can just return multiply(arr, n - 1) * arr[n - 1];

function multiplyRecursive(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiplyRecursive(arr, n - 1) * arr[n - 1];
  }
}

console.log(multiplyRecursive(arr, n));