let count = 0;

//COUNTING CARDS

//expected input(s): number
//expected result: increment/decrement count variable
//expected output(s): return count, and a string based on value of count

function cc(card) {
  //increment 'count' if card is low:
  if (card <= 6 && card >= 2) count++;

  //decrement 'count' if card is high:
  switch (card) {
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  } 

  //return the string based on 'count':
  return (count > 0) ? `${count} Bet` : `${count} Hold`;

}

cc(2); cc(3); cc(7); cc('K'); cc('A');