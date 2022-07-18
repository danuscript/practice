// AFTER
// expected input: number, callbackFn
// expected ouptut: evaluated result of callbackFn(...args)

// approach: store counter in outer function. if counter is met, return inner function.

function after(num, cb) {
  let counter = 0;

  function afteredCb(...args) {
    counter++;
    if (counter >= num) return cb(...args);
  }

  return afteredCb;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

console.log(afterCalled('world'));
console.log(afterCalled('world'));
console.log(afterCalled('world'));