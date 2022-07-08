function Accumulator(startingValue) {
  
  this.value = startingValue; 

  this.read = function() {
    this.number = +prompt("Input a number:");
    this.value += this.number;
    return this.value;
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);