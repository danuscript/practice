function isPalindrome(str) {
    if (str.toLowerCase() == str.toLowerCase().split("").reverse().join("")) return true;
    return false;
}

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Racecar"))
