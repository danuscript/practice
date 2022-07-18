function createFunctionWithInput(strInput) {
    const printFunc = () => strInput;
    return printFunc;
}

const sampleFunc = createFunctionWithInput('sample');
const helloFunc = createFunctionWithInput('hello');

console.log(sampleFunc());
console.log(helloFunc());