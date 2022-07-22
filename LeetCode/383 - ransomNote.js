// RANSOM NOTE

// expected input: string1, string2
// expected output: boolean

// approach: iterate through string

// string 1: "you may never need another glass cleaner!"
// string 2: "hand over money!"

// approach: create two hash maps with number of letters in each string
// create a test boolean and assume true
// iterate through string2's map keys
//   if string1[key] < string2[key] || string1[key] == undefined
//   fail test
// return test boolean

function canConstruct(str1, str2) {

  // declare maps for both strings
  map1 = {};
  map2 = {};

  // store data of string1 in map
  for (let i = 0; i < str1.length; i++) {

    // if character exists in map
    if (map1[str1[i]]) {

      // update count
      map1[str1[i]] += 1;

    // else if character does not exist in map
    } else {

      // add it with a starting value of 1
      map1[str1[i]] = 1;
    }
  }
  console.log({map1})

  // repeat this for string2
  for (let i = 0; i < str2.length; i++) {
    if (map2[str2[i]]) {
      map2[str2[i]] += 1;
    } else {
      map2[str2[i]] = 1;
    }
  }
  console.log({map2})

  // set up a boolean test and assume true
  let pass = true;

  // iterate through string2's map keys and check them against string1's map
  for (let char in map1) {

    // if the character isn't black
    if (char != " ") {
      
      // if the first string's map has fewer of that character
      if (map2[char] < map1[char] || !(map2[char])) {
        
        //fail the test
        pass = false;
      }
    }
  }
  // return the results of the test
  return pass;
}

console.log(canConstruct("aa", "aab"))
