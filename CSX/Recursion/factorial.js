// FACTORIAL

// expected input: number
// expected output: number

// approach:

// base case: n == 1
// initial value: n
// recursive case: fac(n) = fac(n - 1) * n

function factorial(n) {
    if (n == 1) {
        return n;
    } else {
        return factorial(n - 1) * n
    }
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720