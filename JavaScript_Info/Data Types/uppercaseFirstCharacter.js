function ucFirst(str) {
  let firstLetter = str[0]
  firstLetter = firstLetter.toUpperCase();
  str = firstLetter + str.slice(1);
  return str;

}

console.log(ucFirst("345"));