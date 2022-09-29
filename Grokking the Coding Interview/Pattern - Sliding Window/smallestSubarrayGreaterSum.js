const smallestSubarrayGreaterSum = (arr, s) => {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return (minLength === Infinity) ? 0 : minLength;
};

console.log(smallestSubarrayGreaterSum([2, 1, 5, 2, 3, 2], 7)); // -> 2
console.log(smallestSubarrayGreaterSum([2, 1, 5, 2, 8, 2], 7)); // -> 1
console.log(smallestSubarrayGreaterSum([3, 4, 1, 1, 6], 8)); // -> 3
console.log(smallestSubarrayGreaterSum([1, 2, 3], 10)); // -> 0
