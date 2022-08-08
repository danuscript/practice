// TWO-SUM, ONE-PASS, NO NESTED LOOPS

// expected input: array, targetNum
// expected output: boolean

// approach: hash map

// initialize a new map variable
// iterate through our array and update/search the map:
//   search map for each number's complement:
//     complement = target - number***
//     if complement is found, return true
//   update the map:
//   if number is not in map, add it with an inital value of 1
//   if number is in map, increase it's value
// if iteration finishes and no matches are found, return false

// ***a number's complement is the addend that gets it to the target
//   target: 5, number: 2, complement: 3
//   target: 10, number: 15, complement: -5


// declare a function "twoSum" that accepts the specified args
function twoSum(arr, target) {
  // initialize our hashmap variable
  const map = new Map;
  // instantiate a for loop to iterate through our input array
  for (let i = 0; i < arr.length; i++) {
    // define the current number
    let curr = arr[i]
    // define the current number's complement
    let comp = target - curr
    // if the complement is found in the map, return true
    if (map.has(comp)) return true;
    // if complement is not found, update the map with current num:
    // if the map already has the number
    if (map.has(curr)) {
      // increase it's value
      map.set(curr, map.get(curr) + 1) 
    // otherwise, if the map doesn't have the number
    } else {
      // add it, with an initial value of 1
      map.set(curr, 1)
    }
  }
  // if no matches are found, return false
  return false;  
}

function twoSumTests() {
  console.log(twoSum([1,2,5,7], 3), ' -> ', true);
  console.log(twoSum([1,2,5,7], 5), ' -> ', false);
  console.log(twoSum([1], 5), ' -> ', false);
  console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true)
  console.log(twoSum([3], 6), '->', false);
}

twoSumTests()
