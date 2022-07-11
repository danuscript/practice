function sumInput() {
  
let userNumbers;
let arr = [];
let sum = 0;

do {
  userNumbers = prompt("Input a number:")
  arr.unshift(+userNumbers);
} while (isFinite(userNumbers) && userNumbers !== null && userNumbers !=="");

arr.shift();
console.log(arr);

for (let num of arr) {
  sum += +num;
}

alert(sum); 

}

sumInput();