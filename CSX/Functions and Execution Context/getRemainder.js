function getRemainder(num1, num2) {
  if (num1 > num2) {
    return num1 % num2;
  } else if (num2 > num1) {
    return num2 % num1;
  }
}

console.log(getRemainder(17, 5));
console.log(getRemainder(20, 5));
console.log(getRemainder(8, 22));
console.log(getRemainder(7, 42));