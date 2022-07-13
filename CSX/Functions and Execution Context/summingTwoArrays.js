function mergingElements(array1, array2){
    let summedArrays = [];
    for (let i = 0; i < array1.length; i++) {
        summedArrays.push(array1[i] + array2[i]);
    }
    return summedArrays
  }
  
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81]));