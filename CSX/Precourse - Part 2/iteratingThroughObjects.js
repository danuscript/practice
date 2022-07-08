const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;

const objToArray = Object.values(checkObj);

for (let key in objToArray) {
  if (key % 6 == 0) {
    divBy6 = true;
  }
}

console.log(divBy6);