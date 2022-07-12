function unique(arr) {
  let uniqueStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueStrings.includes(arr[i]) == false) {
      uniqueStrings.push(arr[i]);
    } 
  }

  return uniqueStrings;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); 