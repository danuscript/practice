function addN(arr, n) {

  for (let i = 0; i < arr.length; i++)
    arr[i] += +n;
  return arr;
}
console.log(addN([1, 2, 3], 3));
console.log(addN([3, 4, 5], 2)); 