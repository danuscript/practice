// HOBBYTRACKER

// expected input: array
// expected output: function

// approach:
// function hobbyTracker(array)
//   convert array to object
//   nested function(hobby, hours)
//     if hobby = undefined
//       reset object by repopulating it with array
//     else
//       object[hobby] += hours

function hobbyTracker(arr) {
  let obj = {}; 
  arr.forEach((elem) => obj[elem] = 0)
  function trackThis(hobby, hours) {
    if (hobby == undefined) {
      arr.forEach((elem) => obj[elem] = 0)
      return "tracker has been reset!"
    } else {
      obj[hobby] += hours;
      return obj;
    }
  }
  return trackThis;
}

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}