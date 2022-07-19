// POW

// expected input: base, exp
// expected output: num

// base case: exp = 1 
// recursive case: pow(n, x - 1)

function pow(n, x, base = n) {
    if (x == 1) {
        return n;
    } else {
        return pow((n * base), x - 1, base)
    }
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243