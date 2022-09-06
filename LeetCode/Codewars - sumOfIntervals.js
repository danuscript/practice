/*
high-level approach: combine ranges, sum ranges

1. sort ranges by lower number's value
2. combine ranges 
  a. if range[lower] or range[upper] is within the range of nextRange, combine them
3. return sum of ranges
*/

function sumIntervals(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const out = [ranges.shift()];
  ranges.forEach((range) => {
    const next = out[out.length - 1];
    if ((range[0] >= next[0] && range[0] <= next[1])
      || (range[1] >= next[0] && range[1] <= next[1])) {
			next[0] = Math.min(range[0], next[0]);
      next[1] = Math.max(range[1], next[1]);
    } else {
      out.push(range);
    }
  });
  return out.reduce((a, b) => a + b[1] - b[0], 0);
}

console.log(sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] )) // => 9

console.log(sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
])) // => 19

console.log(sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] )) // => 7

console.log(sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] )) // => 100000030
