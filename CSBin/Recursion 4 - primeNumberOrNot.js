function isPrime(num) {
    primeCheck = true;

    if (num == 0 || num == 1) {
        return false;
    }
    if (num == 2) {
        return true;
    }

    for (let i = 2; i < Math.ceil(num / 2); i++) {
        if (num % i == 0) {
            primeCheck = false;
        }
    }

    return primeCheck;
}

console.log(isPrime(998));
