//EITHERFILTER

//expected input(s): array, callback function 1, callback function 2
//expected output(s): new array
/*expected result(s): pass each element from array as argument for both callback functions;
if element satisfies either function, push it to a new array, then return the array.
*/

function eitherFilter(array, callback1, callback2) {
  //declare the output array:
  let outputArray = [];

  //declare a function to push truthy input array elements into the output array:
  function pusher(element) {
    if (callback1(element) || callback2(element)) outputArray.push(element);
  }

  //run the pusher function using each element of input array as argument:
  array.forEach(pusher);

  //return the new array:
  return outputArray;


}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;

//eitherFilter(array, callback function 1, callback function 2)
/*"For each element in the array [10, 35, 105, 9], pass it as an argument to both callback functions.
If either one of the functions returns 'true', then push that element to a new array.
Return that array." */
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100));