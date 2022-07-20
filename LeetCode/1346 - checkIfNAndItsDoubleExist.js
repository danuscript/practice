// CHECK IF N AND ITS DOUBLE EXIST

// expected input: array
// expected output: boolean

// approach: hash table

// 1. iterate through each number
// 2. check if its two complements exist in hash table: number * 2 or number / 2
//   2A. if so, return true
//   2B. if not, store number in hash table
// 3. if we reach the end, return false



var checkIfExist = function (arr) {

  // use set to define new hash table
  let hash = new Set;

  // iterate through array of numbers
  for (let i = 0; i < arr.length; i++) {

    // define complements
    comp = (arr[i] * 2)
    comp2 = (arr[i] / 2)

    // if either complement has been seen before
    if (hash.has(comp) || hash.has(comp2)) {
      
      // return true
      return true;

    } else {

      // otherwise, store this number in hash table
      hash.add(arr[i]);
    }
  }

  // if the loop ends without any complements, return false
  return false;
};
