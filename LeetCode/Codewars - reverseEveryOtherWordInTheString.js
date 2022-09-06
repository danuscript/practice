// function reverse(str){
//   const arr = reverse.split(" ");
//   const rev = arr.map((el, index) => {
//     return (index % 2 === 0) ? el.reverse() : el;
//   })
//   return split.join(" ").trim()
// }

function reverse(str) {
  const arr = [];
  let word = "";
  for (const char of str) {
    if (char !== " ") word += char; 
    else {
      if (word !== "") arr.push(word);
      word = "";
    }
  }
  if (word !== "") arr.push(word);
  console.log(arr)
  let out = ""
  let count = 0;
  for (let el of arr) {
    if (out !== "") out += " ";
    if (count % 2 !== 0) {
      for (let i = el.length - 1; i >= 0; i -= 1) {
        out += el[i];
      }
    } else {
      for (let i = 0; i < el.length; i += 1) {
        out += el[i]
      }
    }
    count += 1;
  }
  return out;
}
