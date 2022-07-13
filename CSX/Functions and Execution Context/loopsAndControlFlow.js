function mergingTripletsAndQuints(array1, array2) {
    let finalArray = [];
    
    for (let i = 0; i < array1.length; i++) {
        if ((array1[i] % 3 == 0) || (array1[i] % 5 == 0)) {
            finalArray.push(array1[i] + array2[i]);
        } else {
            finalArray.push(array1[i]);
        }
    }
    return finalArray;
}

console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9]));
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6]));