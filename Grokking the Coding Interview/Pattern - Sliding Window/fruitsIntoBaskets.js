// longest contiguous subarray with two unique characters

const fruitsIntoBaskets = (arr) => {
  let freq = {};
  let maxLength = -Infinity;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    if (!freq[arr[windowEnd]]) freq[arr[windowEnd]] = 1;
    else freq[arr[windowEnd]] += 1;
    while (Object.keys(freq).length > 2) {
      freq[arr[windowStart]] -= 1;
      if (freq[arr[windowStart]] === 0) delete freq[arr[windowStart]];
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return (maxLength === -Infinity) ? 0 : maxLength;
};

console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])); // -> 3
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C'])); // -> 3
