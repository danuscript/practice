let end = +prompt("Give a number");

checkPrime:
for (let i = 2; i <= end; i++) {

  for (let j = 2; j < i; j++) {

    if (i % j == 0) continue checkPrime;

  } console.log(i);

}