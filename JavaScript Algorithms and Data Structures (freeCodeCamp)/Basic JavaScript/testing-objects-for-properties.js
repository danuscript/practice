function checkObj(obj, checkProp) {
  return (obj.hasOwnProperty(checkProp)) ? obj[checkProp] : "Not Found";
}

