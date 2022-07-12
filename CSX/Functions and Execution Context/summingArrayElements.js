function getTheSum(arr){
  let sum = 0;
  for (let number of arr) {
    sum += +number
  }
  return sum;
}

console.log(getTheSum([3, 6, 9]));
console.log(getTheSum([10, 11, 12]));