const longestDistinctSubstring = (str) => {
  const indexMap = {};
  let maxLength = -Infinity;
  let windowStart = 0;
  for (let windowsEnd = 0; windowsEnd < str.length; windowsEnd += 1) {
    if (str[windowsEnd] in indexMap) {
      windowStart = indexMap[str[windowsEnd]] + 1;
      delete indexMap[str[windowsEnd]];
    }
    indexMap[str[windowsEnd]] = windowsEnd;
    maxLength = Math.max(maxLength, windowsEnd - windowStart + 1)
  }
  return (maxLength === -Infinity) ? 0 : maxLength;
};

console.log(longestDistinctSubstring('aabccbb')); // -> 3
console.log(longestDistinctSubstring('abbbb')); // -> 2
console.log(longestDistinctSubstring('abccde')); // -> 3
