//INTERSECTION

//expected input: array of arrays [[], [], []]
//expected result: return a new array containing only elements found in every array
//expected output: new array

//declare a new function "intersection" with the parameter "arrayTray":
function intersection(arrayTray) {

  //declare an output array
  let outputArr = [];

  //declare a boolean to test if one element is present in another array:
  let presenceCheck = true;

  //assume it's true, and try to prove it wrong:

  //iterate through each element of the first array:
  for (let i = 0; i < arrayTray[0].length; i++) {

    //reset presence check:
    presenceCheck = true;
    
    //iterate through each of the other arrays:
    for (let j = 1; j < arrayTray.length; j++) {

      console.log( `Checking ${arrayTray[0][i]} against ${arrayTray[j]}`)

      //if the first array's element is not found in an array:
      if (!(arrayTray[j].includes(arrayTray[0][i]))) {

        //presence check failed:
        presenceCheck = false;
      } 
    }

    //if this element has survived the presence check:
    if (presenceCheck == true) {

      //push the element into the final input array:
      outputArr.push(arrayTray[0][i])
    }

    //otherwise, move on to the next element:
    console.log(`Finished checking for ${arrayTray[0][i]}. Present in all other arrays: ${presenceCheck}\n`)
  }

  //finally, return the output array:
  return outputArr;

}

const arr1 = [5, 3, 15, 20];
const arr2 = [15, 88, 1, 10, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]