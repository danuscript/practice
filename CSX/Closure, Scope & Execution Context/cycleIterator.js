// CYCLEITERATOR

// expected input: array
// expected output: function

// approach:

// function(arr):
// store counter in outer function
// inner function():
//  increment the counter
//  if counter <= arr.length
//    return arr[counter - 1]
//  else if counter > arr.length
//    counter = 1
//    return arr[counter - 1]
// return inner function

function cycleIterator(arr) {
  let counter = 0;
  function cycled() {
    counter++;
    if (counter <= arr.length) {
      return arr[counter - 1];
    } else if (counter > arr.length) {
      counter = 1;
      return arr[counter - 1]
    }
  }
  return cycled;
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'