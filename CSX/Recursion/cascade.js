// CASCADE 

// expected input: string
// expected output: console.log strings

// approach:
// track a counter starting with string.length
// base case: counter = 0



function cascade(str, counter = str.toString().length, arr = []) {
    if (counter == 0) {
        arr.reduce((a, b) => {
            a = a + b;
            console.log(a)
            return a;
        })
    } else {
        console.log(str.toString().slice(0, counter))
        arr.unshift(str.toString()[counter - 1])
        return cascade(str, counter - 1, arr);
    }
}

cascade(12345
        
//Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements  come second.

// expected input: array, cb
// expected output: new array

// approach: forEach
// forEach's callback will perform as follows
//   if passing in current element to cb yields truthy
		// unshift this into output array
//  if passing in current element to cb yields falsy
    // push this into output array

function prioritize(arr, cb) {
  let outArr = [];
  arr.forEach((el) => {
    if (cb(el)) outArr.unshift(el);
    if (!cb(el)) outArr.push(el);
  })
  return outArr;
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


//Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

//When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should resetall values in the cache object to zero and return the string 'tracker has been reset!'


// expected input (outer): array
// expected output (outer): function

// expected input (inner): string, number
// expected output (inner): cache property, or string

// approach: closures

// declare a cache object
// iterate through array and add each element to cache
// declare a new function "tracked" that accepts specified args
// return function

// set up a control flow 
// if arguments are passed in,
  // update totals in cache object
	// return cache
// if no arguments are passed in
 	// iterate through cache
		// replace all values with "0"
		// output string


function hobbyTracker(hobbies) {
  const cache = {};
  hobbies.forEach((el) => cache[el] = 0)
  function tracked(str, num) {
    if (str !== undefined) {
      cache[str] += num;
      return cache;
    } else {
      Object.keys(cache).forEach((el) => cache[el] = 0)
      return 'tracker has been reset!';
    }
  }
  return tracked;
}


// // Uncomment the code below to check your code:
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}


//Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation!

// cascade(12345) should print

// 12345
// 1234
// 123
// 12
// 1
// 12
// 123
// 1234
// 12345

// expected input: number
// expected output: console.logs

// approach: recursion

// base case: 
// input number has no more numbers to remove

// base case 2: 
// input number reaches it's original value

// recursive case: 
// console.log current value of the number
// "remove" a number from the end of input number
// "store" this removed number
// call self recursively, passing in truncated number as argument

// new base case: store reaches 0 && number > 10

function cascade(number, store = 0, remove = true) {
	// base case 1:
  if (number < 10 && remove === true) {
    // start adding numbers back in from store
    console.log(number)
    remove = false;
  }
  if (remove === false && store === 0) {
    return null;
  }
  if (remove === false && store > 0) {
    let last = store % 10
    number = number * 10 + last
    store = Math.floor(store / 10)
    console.log(number)
    cascade(number, store, remove)
  }
  
  if (number > 10 && remove) {
    console.log(number)
    let last = number % 10
    // add last to our store
    store = store * 10 + last
    // remove last from our output
    number = Math.floor(number / 10);
    // update counter
    cascade(number, store)
}
}

cascade(12345)


// // Uncomment to test your work!
// cascade(111)
// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */
