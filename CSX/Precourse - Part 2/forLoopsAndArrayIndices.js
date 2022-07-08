const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

for (let i = 0; i < 3; i++) {
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`)
}

console.log(bios);