function countdown(n) {
  if (n < 1) return [];
  let countdownArr = countdown(n - 1);
  countdownArr.unshift(n);
  return countdownArr;
}

console.log(countdown(10));