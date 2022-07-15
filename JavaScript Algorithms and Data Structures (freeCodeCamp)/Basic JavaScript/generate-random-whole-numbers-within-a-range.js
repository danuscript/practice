function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(25, 30));

//(myMax - myMin + 1) == (30 - 25 + 1) = 5 + 1:

//How many possible numbers are between the minimum and maximum?
  //5 values (26, 27, 28, 29, 30)
  //now add 1, because we'll round back down later
  //6

//Math.random() generates a random number from 0 to 0.999999...
//Math.random() * 6 generates a random number from 0 - 5.99,
//Math.floor() rounds this number down to a whole number from 0 - 5
//add this random number from 0 to 5 to the minimum value (25)
//and now you have a random number from 25 to 30!
