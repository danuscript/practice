// DELAY

// expected input: callbackFn, num
// expected output: evaluated result of callbackFn(...args), after waiting 'num' milliseconds

// approach:
// pass num and cb arguments to nested function that invokes "setTimeout"
// return nested function

function delay(cb, num) {
  function delayed() {
    setTimeout(cb, num);
  }
  return delayed;
}

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 
setTimeout(() => console.log(count), 1000);