// high level approach:
// iterate through string once with recursion
// declare a function goodString(str, i = 0)
//  base case: str[i + 1] === undefined
//  recursive case 1A:
//    if (character is uppercase)
//      if (adjacent character is lowercase version)
//        return goodString(str.sliced(0, i) + str.sliced(i + 2), i)
//    if (character is lowercase)
//      if (adjacent character is uppercase version)
//        return goodString(str.sliced(0, i) + str.sliced(i + 2), i)
//    return goodString(str, i + 1)

function makeGood(str, i = 0) {
  if (i >= str.length) {
    return str;
  }
  if (str[i] === str[i].toUpperCase()) {
    if (str[i + 1] === str[i].toLowerCase()) {
       return makeGood(str.slice(0, i) + str.slice(i + 2), i); 
    } else if (str[i - 1] === str[i].toLowerCase()) {
        let low = i - 1
        if (low < 0) low = 0;
        return makeGood(str.slice(0, low) + str.slice(i + 1))
    } 
  } else if (str[i] === str[i].toLowerCase()) {
    if (str[i + 1] === str[i].toUpperCase()) {
       return makeGood(str.slice(0, i) + str.slice(i + 2), i); 
    } else if (str[i - 1] === str[i].toUpperCase()) {
        let low = i - 1
        if (low < 0) low = 0;
        return makeGood(str.slice(0, low) + str.slice(i + 1))
    }
  }
  return makeGood(str, i + 1);
}
