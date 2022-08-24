// ARRAY TO LIST:
// declare an output object in parameters, {list}
// initialize array index (i) in parameters with a value of 0
// create a {list} property called "value" with a value of array at index i
  // if there are more array elements after the next, list's value =
	// a recursive invocation, passing in a new object literal as {list}
  // else, if there are no more array elements, list's value =
	// null
// return list

function arrayToList(arr, i = 0, list = {}) {
  list.value = arr[i]
   if (i < arr.length - 1) {
     list.rest = arrayToList(arr, i + 1, {});
   } else {
     list.rest = null;
   }
  return list;
}

// LIST TO ARRAY:
// if there's value within rest property
  // concatenate array with value of list's "value" property
  // recurse, passing in rest's value as {list} parameter
// else
  // return array concatenated with value of list's value property

function listToArray(list, arr = []) {
  return (!list.rest) 
    ? arr.concat(list.value) 
    : listToArray(list.rest, arr.concat(list.value))
}

// PREPEND:
// return new object: {value: el, rest: list} 

function prepend(el, list) {
  return ({value: el, rest: list})
}

// NTH:
// if list === null return undefined
// if pointer is less than target
  // recurse, incrementing target and passing in list.next
// else,
  // return list.value

function nth(list, n, i = 0) {
  if (!list) return;
  return (i < n) ? nth(list.rest, n, i + 1) : list.value;
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
