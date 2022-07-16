//const intersection = ([...xss]) => xss.reduce((xs, ys) => xs.filter(x => ys.includes(x))); 

//expected input: array of indefinite arrays
//expected result: 
//expected output: single array

//declare a function with an single argument - an array of indefinite arrays:
function intersectionLogic(arrays) {
  
  //accumulator = starting as first array
  let accumulator = arrays.pop();

  //loop through array of arrays
  while (arrays.length) {
    
    //pop another array off of arrays and set it as the currentArray 
    const currentArr = arrays.pop()

    //declare an empty, new array
    const newArr = [];

    //compare currentArray with accumulator
    //for each element in currentArray
    currentArr.forEach((element) => {

      //if that element exists in accumulator
      if(accumulator.includes(element)) {
      
      //push that element into newArray
      newArr.push(element);

      }
    })
    
    //reassign accumulator to newArray
    accumulator = newArr;

    //repeat while loop for next available array in arrays
  }      
  //return accumulator
  return accumulator
}

const arr1 = [5, 10, 15, 20, 3];
const arr2 = [15, 88, 3, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersectionLogic([arr1, arr2, arr3])); // should log: [5, 15]


//USING REDUCE

//reduce(anonymousfunction(previousValue, currentValue), initialValue => { callbackFn })
//initialValue is optional
//previousValue == array[0], unless intialValue is specified (then it's initialValue)
//previousValue becomes the result of previous call to callbackFn
//PREVIOUSVALUE IS ALSO CALLED ACCUUMULATOR
//currentValue == array[1], unless initialValue is specified (then it's array[0])
//currentValue moves to the next array index after completing one loop
//at the end, reduce returns currentValue

//STRATEGY:

// implement reduce on array of arrays
// return arrayOfArrays.reduce(accumulator, currentArray) => {callbackFn}
// accumulator will start off as arrayOfArrays[0], which is an array
// currentArray will start off as arrayOfArrays[1], which is an array
// callbackFn will return a new array containing only common elements of the accumulator and currentArray
// callbackFn will create this new array from scratch
// callbackFn will use .forEach and .includes() to compare elements of arrayOfArrays[0] and arrayOfArrays[1], pushing common ones into newArray:
// => {currentArr.forEach((element) => { if (accumulator.includes(element)) newArray.push(element)}}) return newArray;
// at the end, callbackFn has returned newArray
// returning newArray will set the value of accumulator to this newArray, which contains only elements common in the first two arrayOfArrays arrays
// now, reduce iterates to the next index in arrayOfArrays
// accumulator is the returned result newArray
// currentArray is now arrayOfArrays[2] instead of arrayOfArrays[1]
// reduce will invoke the callbackFn again
// callbackFn creates a new array
// callbackFn uses forEach and inlcudes() to evaluate each element of current array to see if accumulator includes it
// callbackFn will then once again push included values into newArray, and return this array to be the new value of accumulator
// reduce continues this until all elements of arrayOfArrarys have been iterated through
// finally, reduce returns accumulator



//declare a function with an single argument - an array of indefinite arrays:
function intersection(arrays) {
  
  //accumulator = starting as first array
  //loop through array of arrays
  //pop another array off of arrays and set it as the currentArray 
  return arrays.reduce((accumulator, currentArr) => {
    
    //declare an empty, new array
    let newArray = [];

    //compare currentArray with accumulator
    //for each element in currentArray
    currentArr.forEach((element) => {

      //if that element exists in accumulator
      if (accumulator.includes(element)) {

        //push that element into newArray
        newArray.push(element);
      }
    })a

    //reassign accumulator to newArray
    return newArray;

    //repeat while loop for next available array in arrays
  })

  //return accumulator
}
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
