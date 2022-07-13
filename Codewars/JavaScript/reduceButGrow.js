function grow(x){
  let total = 1;
  for (let num of x) {
    total *= num;
  }
  return total;
}