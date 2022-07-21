// NUMBER OF STEPS TO REDUCE A NUMBER TO ZERO

// expected input: number
// expected output: number

// approach: while number is greater or equal than zero;
//   if number is even, divide it by two and update counter
//   else if number is odd, subtract one and update counter
// reutrn counter

function numberOfSteps(num) {
    let steps = 0
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
            steps++;
        } else if (num % 2 !== 0) {
            num -= 1;
            steps++;
        }
    } 
    return steps;
}
