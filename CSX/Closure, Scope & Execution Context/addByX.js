function addByX(addend) {
  let add = (num) => num += addend;
  return add;
}

const addByTwo = addByX(2);
console.log(addByTwo(1));
console.log(addByTwo(2));

const addByThree = addByX(3);
console.log(addByThree(1));
console.log(addByThree(2));