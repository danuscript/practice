let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function addKeys(object) {
  let sum = 0
  for (let key in object) {
    sum += object[key];
  }
  return sum;
}

console.log(addKeys(salaries));