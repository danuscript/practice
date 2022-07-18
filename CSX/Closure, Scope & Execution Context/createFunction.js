const myFunction = createFunction();

function createFunction() {
    let sayHi = () => "hello world";
    return sayHi;
}

console.log(myFunction());
