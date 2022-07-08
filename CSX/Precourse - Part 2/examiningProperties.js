const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let found = 0;
  
  for (let key in checkObj) {
    if (key = "foundNum") {
      found = 1
    }
  }