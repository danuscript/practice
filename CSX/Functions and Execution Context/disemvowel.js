function disemvowel(string) {

    let str = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] != "a" && string[i] != "A" &&
            string[i] != "e" && string[i] != "E" &&
            string[i] != "i" && string[i] != "I" &&
            string[i] != "o" && string[i] != "O" &&
            string[i] != "U" && string[i] != "U") {

            str = str + string[i];
        }

    }
    return str;
}

console.log(disemvowel('CodeSmith'));
console.log(disemvowel('BANANA'));
console.log(disemvowel("hello world"));