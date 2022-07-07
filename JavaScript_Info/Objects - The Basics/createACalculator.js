let calculator = {
  read() {
    this.a = +prompt("Insert number A:");
    this.b = +prompt("Insert number B:");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());