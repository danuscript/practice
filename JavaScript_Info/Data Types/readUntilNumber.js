function readNumber() {
  let num;

  do {
    num = prompt("Input a number:");
  } while (!isFinite(num));

  if (num === null || num === "") return null;
  return +num;
}


alert(`Read: ${readNumber()}`);