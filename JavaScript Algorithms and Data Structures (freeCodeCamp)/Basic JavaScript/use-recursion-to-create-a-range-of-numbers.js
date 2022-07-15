//RANGE OF NUMBERS

//expected input(s): startNum, endNum
//expected result(s): push every number from startNum to endNum into an array
//expected output(s): array

function rangeOfNumbers(startNum, endNum) {
  //define our base case and initial value:
  if (endNum <= startNum) return [startNum];


  let outputArr = rangeOfNumbers(startNum, endNum - 1);
  outputArr.push(endNum);
  return outputArr;
}

console.log(rangeOfNumbers(5, 17));