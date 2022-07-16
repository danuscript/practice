// OBJOFMATCHES

// expected input: arr1, arr2, callbackFn
// expected result: compare arr1[i] to arr2[1]
//     if they match, add the property arr1[i]: arr[2] to object
// expected output: object

// call callbackFn on each element of arr1
// if returned result of callbackFn == arr2[i]
    // push property arr1[i]: arr2[i] into outputObj


function objOfMatches(arr1, arr2, cb) {    
    let obj = {}
    arr1.forEach(elem => {
        if (cb(elem) == arr2[arr1.indexOf(elem)]) {
            obj[elem] = arr2[arr1.indexOf(elem)]
        }
    })
    return obj;
}

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
    