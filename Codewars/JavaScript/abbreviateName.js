function abbrevName(name){
  let arr = name.split(" ");
  return arr[0].slice(0, 1).toUpperCase() + "." + arr[1].slice(0, 1).toUpperCase();
}