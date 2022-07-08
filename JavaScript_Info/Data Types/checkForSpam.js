function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  if (lowerStr.indexOf("viagra") != -1 || lowerStr.indexOf("XXX") != -1) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("hello"))