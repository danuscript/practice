let calls = "";

function jerry(str) {
str = str + "Jerry";
console.log(str);
return kramer(str);
}

function george(str) {
str = str + "George";
console.log(str);
return elaine(str);
}

function elaine(str) {
str = str + "Elaine";
console.log(str);
return str;
}

function kramer(str) {
str = str + "Kramer";
console.log(str);
return george(str);
}

console.log(calls);
calls = jerry(calls);
console.log(calls);