function getMaxSubSum(arr) {
  let localMaxSubSum = +arr[0];
  let globalMaxSubSum = +arr[0];

  console.log(`at ${arr[0]}, localMaxSubSum = ${localMaxSubSum}`);

  for (let i = 1; i < arr.length; i++) {
    if (+arr[i] + localMaxSubSum > localMaxSubSum && +arr[i] + localMaxSubSum > +arr[i]) {
      localMaxSubSum = +arr[i] + localMaxSubSum;
    } else if (+arr[i] + localMaxSubSum > localMaxSubSum && +arr[i] + localMaxSubSum < +arr[i]) {
      localMaxSubSum = +arr[i];
    } else {
      localMaxSubSum = +arr[i];
    }

    console.log(`at ${arr[i]}, localMaxSubSum = ${localMaxSubSum}`)

    if (localMaxSubSum > globalMaxSubSum) {
      globalMaxSubSum = localMaxSubSum;
    }
  }
  if (globalMaxSubSum < 0) {
    return 0;
  } else {
    return globalMaxSubSum;
  }
}

console.log(`Sum of Maximal Subarray = ${getMaxSubSum([-2, -1, 1, 2])}`);