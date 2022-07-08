function random(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

console.log(random(1, 5));
console.log(random(70, 80));
console.log(random(9, 10));