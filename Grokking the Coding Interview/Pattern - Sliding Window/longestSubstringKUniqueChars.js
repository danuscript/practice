const longestSubstringKUniqueChars = (str, k) => {
  const charFreq = {};
  let uniqueChars = 0;
  let windowStart = 0;
  let maxLength = -Infinity;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
    // 1. build the frequency map and udpdate its length
    if (!charFreq[str[windowEnd]]) {
      charFreq[str[windowEnd]] = 1;
      uniqueChars += 1;
    } else charFreq[str[windowEnd]] += 1;
    // 2. if substring has more than k unique characters, shorten it from the left
    while (uniqueChars > k) {
      charFreq[str[windowStart]] -= 1;
      if (charFreq[str[windowStart]] === 0) {
        delete charFreq[str[windowStart]];
        uniqueChars -= 1;
      }
      windowStart += 1;
    }
    // 3. update max length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return (maxLength === -Infinity) ? 0 : maxLength;
};

console.log(longestSubstringKUniqueChars('araaci', 2)); // -> 4
console.log(longestSubstringKUniqueChars('araaci', 1)); // -> 2
console.log(longestSubstringKUniqueChars('cbbebi', 3)); // -> 5
