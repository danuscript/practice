// ONCE

// expected input: callbackFn
// expected output: return a function
  // expected output: return evaluated result of callback function
    // if function is called again, return the first output value

// approach: if nested function has been called, update boolean in parent function. 
//    nested function:
//    if counter < 1
//      store evaluated result of callback in constant variable within parent function
//      return evaluated result of callback
//      assign boolean in parent function the value true
//    else if counter >= 1
//      return stored result from parent function


function once(cb) {
  let hasBeenCalled = false;
  let firstAnswer = null;

  function oncedCb(...input) {
    if (!hasBeenCalled) {
      firstAnswer = cb(...input);
      hasBeenCalled = true;
      return firstAnswer;
    } else if (hasBeenCalled) {
      return firstAnswer;
    }
  }
  return oncedCb;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

console.log(addByTwoOnce(5));
console.log(addByTwoOnce(10));
console.log(addByTwoOnce(9001));
