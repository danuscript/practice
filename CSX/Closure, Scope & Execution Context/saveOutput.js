// SAVEOUTPUT

// expected input: callbackFn, password
// expected output: return a function

// approach:
// store object in outer function
// nested function (string)
//   nested function has an if statement:
//   if string != password
//     obj[string] = callbackFn(string)
//     return callbackFn(string)
//   else if password == string
//     return obj
// return nested function

function saveOutput(cb, pass) {
  let obj = {};
  function saveThis(str) {
    if (str != pass) {
      obj[str] = cb(str);
      return cb(str);
    } else if (str == pass) {
      return obj
    }
  } return saveThis;
}

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); 
console.log(multBy2AndLog(9)); 
console.log(multBy2AndLog('boo')); 