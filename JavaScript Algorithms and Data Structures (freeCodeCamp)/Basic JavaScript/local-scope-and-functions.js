function myLocalScope() {
  let myVar = "Hello";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);