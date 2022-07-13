function getTheRange(arr){
    let localHigh = -Infinity;
    let localLow = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < localLow) {
            localLow = arr[i];
        }
        if (arr[i] > localHigh) {
            localHigh = arr[i];
        }
    }
    let range = localHigh - localLow;
        let rangeArr = [localLow, localHigh, range];
        return rangeArr;
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10]));