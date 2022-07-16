// PRIORITIZE

// expected input: array, callback
// expected output: new array

// APPROACH:
// declare an output array
// for each element of array
//  if callback(element) is true, push it to output array
// for each element of array
//  if callback(element) is false, push it to output array

function prioritize(arr, cb) {
    let arrOut = [];
    arr.forEach(x => {if (cb(x)) arrOut.push(x)})
    arr.forEach(x => {if (!(cb(x))) arrOut.push(x)})
    return arrOut;
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']