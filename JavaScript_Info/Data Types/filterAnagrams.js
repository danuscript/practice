/* 

copy arr to arrCopy
for i < arrCopy.length
  lowercase arrCopy[i]
  sort arrCopy[i]
now we have a copy of arr that is lowercase, with duplicate words:
arrCopy = ["anp", "aceehrst", "aceehrst", "anp", "aer", "aer", "aceehrst"]
declare array: checkArray
declare array: finalArray

for i < arr.length
  if checkArray does not include arrCopy[i]
    push arrCopy[i] into checkArray
    push arr[i] into finalArray

  return finalArray

  */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

  function aclean(arr) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i++) {
      arrCopy.push(arr[i].toLowerCase());
      arrCopy[i] = arrCopy[i].split('').sort().join("");
    }

    let checkArray = [];
    let finalArray = [];

    for (let i = 0; i < arrCopy.length; i++) {
      if (!checkArray.includes(arrCopy[i])) {
        checkArray.push(arrCopy[i]);
        finalArray.push(arr[i]);
      }
    }

    return finalArray;
  }

console.log(aclean(arr));