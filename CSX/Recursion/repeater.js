// REPEATER

// expected input: string
// expected output: string

// initial value: char.length == 1
// base case: char.length == 5
// recursive case: return repeater(char)

function repeater(char) {
    if (char.length == 5) {
        return char;
    } else {
        return (repeater(char + char[0]));
    }
}

console.log(repeater('g'));
console.log(repeater('j'));