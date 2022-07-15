//EITHERCALLBACK 

//expected input: callback1, callback2
//expected result: return a function that evaluates whether either callback is true
//expected output: callback

function eitherCallback(callback1, callback2) {
  function callbackCheck(n) {
    return (callback1(n) || callback2(n))
  }
  return callbackCheck;
}

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]