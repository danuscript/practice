function camelize(str) {
  let arr = str.split("-");
  console.log(arr);

  let uppercaseArr = arr.map(item => item[0].toUpperCase() + item.slice(1));
  console.log(uppercaseArr);

  let joinedArr = uppercaseArr.join("");
  console.log(joinedArr);

  return joinedArr;
}



console.log(camelize("border-left-width"));
