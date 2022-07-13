var isPalindrome = function(x) {
    palindromeCheck = true
    let j = 1;
    let xString = x.toString();
    for (let i = 0; i < (xString.length) / 2; i++) {
        if (xString[i] != xString[xString.length - j]) palindromeCheck = false;
        j++;
    }
    return palindromeCheck;    
};

console.log(isPalindrome(42243))