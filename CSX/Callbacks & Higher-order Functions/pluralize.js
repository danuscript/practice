//expected inputs: array of strings
//expected outputs: new modified array of strings

function pluralize(arr) {
    let pluralized = [];

    for (let i = 0; i < arr.length; i++) {
        //go through each element (array[i]) and concat it with "s"
        pluralized.push(arr[i] + "s");
    }
    return pluralized;
}

const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals));
console.log(animals);