let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    let numberCheck = typeof obj[key]
    if (numberCheck != "number") {
      continue;
    }
    obj[key] *= 2;
  }
};

multiplyNumeric(menu);
console.log(menu)