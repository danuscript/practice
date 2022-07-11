function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < a || +arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let numbers = [5, 3, 8, 1];

filterRangeInPlace(numbers, 1, 4);

console.log(numbers);