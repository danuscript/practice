function filterRange(arr, a, b) {
  let results = arr.filter(item => +item >= a && +item <= b);
  return results;

}

filtered = filterRange([5, 3, 8, 1], 1, 4);

console.log(filtered);