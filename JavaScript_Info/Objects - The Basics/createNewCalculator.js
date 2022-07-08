function Calculator(a, b) {
  this.read = function() {
    this.a = (+prompt("Number A:"));
    this.b = (+prompt("Number B:"));
  }

  this.sum = function() {
    let sumTotal = this.a + this.b;
    return sumTotal;
  }

  this.mul = function() {
    let mulTotal = this.a * this.b;
    return mulTotal;
  }
}

let calculator = new Calculator;
calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());