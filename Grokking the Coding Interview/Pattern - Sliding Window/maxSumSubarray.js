const maxSumSubarray = (arr, k) => {
  let max = -Infinity;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      max = Math.max(windowSum, max);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return max;
};

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // -> 9
console.log(maxSumSubarray([2, 3, 4, 1, 5], 2)); // -> 7
