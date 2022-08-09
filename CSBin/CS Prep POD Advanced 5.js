// expected input: arr1, arr2
// expected output: newArr

// approach: array methods

// remove all elements from arr1 that aren't in arr2
// return the new arr1 without any duplicates

function commonElements(a1, a2){
  a1 = a1.filter(el => a2.includes(el));
  return [...new Set(a1)];
}

function commonElementsTests() {
  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
}

commonElementsTests() // uncomment to test

// BONUS:

// expected input: 

// approach: build a new array with reduce
// reduce loops as follows:
  // accumulator [a] starts off as first nested array 
  // new array is created with a.filter(), containing only elements that b.includes()
  // this new array is returned to be the new result of accumulator [a]
// return the final accumulator, containing only elements that have been in all arrays

function commonElementsBonus(arr) {
  return arr.reduce((a, b) => a.filter(el => b.includes(el)))
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(commonElementsBonus([arr1, arr2, arr3])); // should log: [5, 15]
