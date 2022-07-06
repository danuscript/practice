function pow(x, n) {
  let total = x
  for (let i = 1; i < n; i++) {
    total = (total * x)
  }
  return total;
}
let x = +prompt("Give the first number:");
let n = prompt("Give the second number:");
if (n < 1) {
  alert(`${n} isn't supported... please use a positive integer!`);
} else {
  alert(`The result is ${pow(x, n)}!`)
}