//INTERSECTION

//expected inputs: array of indefinite arrays
//expected results: create an array containing only elements included in all arrays
//expected output: one single array

//strategy: use reduce to iterate through array of arrays, filtering each array through the previous commonArray

//declare a function "intersection" with a paramenter "arrays" being an array of arrays:
function intersection(arrays) {

  //implement reduce
  //commonArray == arrays[0] (the first one in the arrayOfArrays, for now)
  //currentArray == arrays[1] (the second arrayOfArrays, for now)
  return arrays.reduce((commonArray, currentArray) => {
    //create a local array within the scope of reduce's callback function
    let localArray = [];

    //iterate through each element of currentArray
    currentArray.forEach(element => {

      //if element is found in commonArray
      if (commonArray.includes(element)) {

        //push it into localArray
        localArray.push(element)
      }
    })
    //return localArray, assigning it's value to commonArray
    return localArray;
    
    //restart the loop
  })

  //commonArray, after being whittled down by each element in arrayOfArrays, is now returned
  //it is the intersection of all arrays
}

const arr1 = [5, 10, 15, 20, 3];
const arr2 = [15, 88, 3, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
