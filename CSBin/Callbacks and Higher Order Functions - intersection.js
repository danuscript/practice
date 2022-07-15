//INTERSECTION

//expected input(s): array of arrays: [[], []]
//expected result(s): filter array 1 based off of each element's presence in other arrays
//expected output(s): array

function intersection(arrayTray) {
  //declare a new output array
  let outputArr = [];

  //filter array 1 based off of elements' presence in other arrays
  for (let i = 1; i < arrayTray.length; i++) {
    outputArr = arrayTray[0].filter(element => arrayTray[i].includes(element))
  }

  //return output array
  return outputArr;
}

let array1 = [2, 5, 7, 4, 3];
let array2 = [4, 9, 8, 2, 5, 6];
let array3 = [2, 5, 12];

let bigArray = [array1, array2, array3];

console.log(intersection(bigArray));