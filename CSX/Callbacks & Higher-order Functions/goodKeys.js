// GOODKEYS

// expected input: object, callbackFn
// expected output: array

// create output array
// for each element (i) in object.values
//     if (callbackFn(object.values[i]))
//         push (object.values[i]) into output array
// return output array

function goodKeys(obj, cb) {
    let arr = [];

    for (let i = 0; i < Object.values(obj).length; i++) {
        if (cb(Object.values(obj)[i])) {
            arr.push(Object.keys(obj)[i]);
        }
    }
    return arr;
}