let languages = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let copy = arr.slice();
  let sortedArr = copy.sort();
  return sortedArr;
}

let sorted = copySorted(languages);

console.log(sorted);
console.log(languages);