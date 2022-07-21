// ROMAN TO INTEGER

// expected input: string
// expected output: integer

// CMXCVII

// approach 1: left-to-right pass with hash table

// iterate through each character and determine whether we should:
//   add the numerical value and move to the next character
//   add the difference of the next two characters and move forward two spots

// if current value < next value
//   add next value - current value to total
//   move forward two spaces
// else if current value >= next value
//   add current value to total
//   move forward one spot
// else if next value is undefined
//   add current value to total

let rom = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

function romanToInt0(str) {

  // initialize a total
  let total = 0;

  // for each character in the string
  for (let i = 0; i < str.length; i++) {

    // define the current value and next value
    let curr = str[i];
    let next = str[i + 1];

    // begin the control flow
    if (rom[next] == undefined || rom[curr] >= rom[next]) {
      total += rom[curr];
    } else if (rom[curr] < rom[next]) {
      total += (rom[next] - rom[curr])
      i++
    }
  }
  // return total
  return total;
}

// --------------------------------------

// approach 2: right-to-left pass with hash table

// initialize the value at the last value, iterate backwards through string and:
//   add the current value to the total if following number is lower
//   subtract the current value from the total if following number is higher

// return total

function romanToInt(str) {

  // base case: last value is added to total
  let total = rom[str[str.length - 1]]

  // iterate backwards through rest of array
  for (let i = str.length - 2; i >= 0; i--) {

    
    // define the current value and the next value
    let curr = str[i];
    let next = str[i + 1];

    // begin the control flow:
    if (rom[curr] < rom[next]) {
      total -= rom[curr]
    } else {
      total += rom[curr]
    }
  }
  return total;
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

// --------------------------------------

// bonus... my very first approach....... it's terrible 

// var romanToInt = function(s) {
   
//   let sum  = 0;
//   if (s.includes("CM")) {
//       sum += 900;
//       s = s.replace("CM", "");
//   }
//   if (s.includes("CD")) {
//       sum += 400;
//       s = s.replace("CD", "");
//   }
//   if (s.includes("XC")) {
//       sum += 90;
//       s = s.replace("XC", "");
//   }
//   if (s.includes("XL")) {
//       sum += 40;
//       s = s.replace("XL", "");
//   }
//   if (s.includes("IX")) {
//       sum += 9;
//       s = s.replace("IX", "");
//   }
//   if (s.includes("IV")) {
//       sum += 4;
//       s = s.replace("IV", "");
//   }
//   if (s.includes("MMM")) {
//       sum += 3000;
//       s = s.replace("MMM", "")
//   }
//   if (s.includes("MM")) {
//       sum += 2000;
//       s = s.replace("MM", "");
//   }
//   if (s.includes("M")) {
//       sum += 1000;
//       s = s.replace("M");
//   }
//   if (s.includes("CCC")) {
//       sum += 300;
//       s = s.replace("CCC", "")
//   }
//   if (s.includes("CC")) {
//       sum += 200;
//       s = s.replace("CC", "");
//   }
//   if (s.includes("C")) {
//       sum += 100;
//       s = s.replace("C");
//   }
//   if (s.includes("XXX")) {
//       sum += 30;
//       s = s.replace("XXX", "");
//   }
//   if (s.includes("XX")) {
//       sum += 20;
//       s = s.replace("XX", "");
//   }
//   if (s.includes("X")) {
//       sum += 10;
//       s = s.replace("X", "");
//   }
//   if (s.includes("III")) {
//       sum += 3;
//       s = s.replace("III", "");
//   }
//   if (s.includes("II")) {
//       sum += 2;
//       s = s.replace("II", "");
//   }
//   if (s.includes("I")) {
//       sum += 1;
//       s = s.replace("I", "");
//   }
//   if (s.includes("D")) {
//       sum += 500;
//       s = s.replace("D", "");
//   }
//   if (s.includes("L")) {
//       sum += 50;
//       s = s.replace("L", "");
//   }
//   if (s.includes("V")) {
//       sum += 5;
//       s = s.replace("V", "");
//   }
//   return sum;
  
// };
