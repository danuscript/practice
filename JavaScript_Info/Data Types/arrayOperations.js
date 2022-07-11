let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

function middleIndex(arr) {
  middleValue = (arr.length - 1) / 2;
  return middleValue;
}

styles[middleIndex(styles)] = "Classics";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);