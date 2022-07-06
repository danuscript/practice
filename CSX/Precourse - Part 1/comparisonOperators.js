const small = 2;
const large = 5342;

let isSmaller = small < large

const num = 45;
const string = "45";

let isLooselyEqual = (num == string)
let isStrictlyEqual = (num === string)

const isTrue = true;
const isFalse = false;

let isTrueNotFalse = (isTrue != isFalse)

console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);
