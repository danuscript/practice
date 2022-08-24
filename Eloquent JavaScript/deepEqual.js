// if typeof val1 !== object && typeof val2 !== object
	// return boolean indicating whether val1 === val2
// else,
  // for each key of val1's keys
    // invoke deepEqual(val1[key], val2[key])
function deepEqual(val1, val2) {
  if (typeof val1 !== "object" && typeof val2 !== "object") {
    return (val1 === val2);
  } else {
    for (let key of Object.keys(val1)) {
      return deepEqual(val1[key], val2[key]);
    }
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
