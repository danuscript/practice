// SHUFFLECARDS

// expected input: arr1, arr2
// expected output: array

// approach
// track a third array in the arguments, passing it from function call to function call
// when either of the arrays is empty
//   if arr1 has elements, append it to the third array
//   else if arr2 has elements, append it to the third array
// return third array

// base case: arr1[0] or arr2[0] == undefined
// recursive case: 
//   arr3.push(arr1.pop())
//   arr3.push(arr2.pop())
//   return shuffleCards(arr1, arr2, arr3)

function shuffleCards(arr1, arr2, arr3 = [], counter = 0) {
    if (arr1[counter] == undefined || arr2[counter] == undefined) {
        if (arr1[0] != undefined) arr3 = arr3.concat(arr1.slice(counter));
        if (arr2[0] != undefined) arr3 = arr3.concat(arr2.slice(counter));
        return arr3;
    } else {
        arr3.push(...arr1.slice(counter, counter + 1));
        arr3.push(...arr2.slice(counter, counter + 1));
        return shuffleCards(arr1, arr2, arr3, counter + 1)
    }
}

const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */