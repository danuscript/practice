function unique(arr) {
  let set = new Set();
  for (let value of arr) {
    set.add(value);
  }
  let uniquearr = [];

  set.forEach((value, valueAgain, set) => {
    uniquearr.push(value);
  })

  return uniquearr;

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));