// Challenge 1 

// (PAIR PROGRAMMED WITH MICHAEL ANGELO)

// expected input: string
// expected output: string

// approach: string and array methods

// .split to convert string to array
// .reverse to reverse elements in array
// .join to combine array elements into new string

// const reverseString = (str) => str.split("").reverse().join("")

// update: after researching solutions online, i've decided to refactor the code, replacing the .split method with the spread operator 

const reverseString = (str) => [...str].reverse().join("")

console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!");
