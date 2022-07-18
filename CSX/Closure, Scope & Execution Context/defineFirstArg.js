// DEFINEFIRSTARG

// expected input: callbackFn, arg
// expected output: function

// approach:

// function defineFirstArg(callbackFn, arg)
//  nested function(arg, ...args)
//    return callbackFn(arg, ...args)
//  return nested function

function defineFirstArg(cb, arg) {
  function definedArg(...args) {
    return cb(arg, ...args);
  }
  return definedArg;
}

const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15