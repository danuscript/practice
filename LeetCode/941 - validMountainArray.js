// expected input: array
// expected output: boolean

// approach: iteration 

// iterate through the array left to right
// if the increase is not strict, then return false
// if the decrease is not strict, then return false
// return true

// [0, 2, 3, 4, 5, 2, 1, 0]

// entered increase (check for strict increase)
//   if next element is greater, continue increase
//   if next element is == current exit
//   if next element is smaller, enter decrease
// entered decrease (check for strict decrease)
//   if next element is lesser, continue decrease
//   if next element is == current exit
//   if next element is > current, exit 

// declare a function mountainArray that accepts [arr]
// declare a boolean [increase] = true;
// iterate through the array with a for loop [i]
//   if (increase)
//     if arr[i + 1] is equal to arr[i]
//       return false
//     else if arr[i + 1] < arr[i]
//       [increase] = false
//   else 
//     if arr[i + 1] === undefined
//       return true
//     else if arr[i + 1] == arr[i]
//       return false
//     else if arr[i + 1] > arr[i]
//       return false

function validMountainArray(arr) {
  let increase = true;
    
  // throw out arrays that are too short
  if (arr.length < 3) return false;
    
  // throw out arrays with no initial increase or ending decrease
  if (arr[0] > arr[1] || arr[arr.length - 1] > arr[arr.length - 2]) return false;
      
  for (let i = 0; i < arr.length; i++) {
    if (increase) {
      if (arr[i + 1] === arr[i]) {
        return false;
      } else if (arr[i + 1] < arr[i]) {
        increase = false;
      } else if (arr[i + 1] === undefined) return false
    } else {
      if (arr[i + 1] === undefined) {
        return true;
      } else if (arr[i + 1] === arr[i]) {
        return false;
      } else if (arr[i + 1] > arr[i]) {
        return false;
      }
    }
  }
}

