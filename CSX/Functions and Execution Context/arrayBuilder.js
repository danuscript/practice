function arrayBuilder(obj) {
    let arr = [];
    for (let entry of Object.entries(obj)) {
        for (let i = 0; i < entry[1]; i++) {
            arr.push(entry[0]);
        }
    }
    return arr;
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); 
console.log(arrayBuilder({}));