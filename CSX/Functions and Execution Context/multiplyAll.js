function multiplyAll(...args) {
  let total = 1;
  for (let arg of args) {
    total *= arg;
  }

  return total;
}

console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) 
console.log(multiplyAll(5, 5, 5, 3)) 