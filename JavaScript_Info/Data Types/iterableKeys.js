let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys = Array.from(keys);

keys.push("more");

console.log(keys)