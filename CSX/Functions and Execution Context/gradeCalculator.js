function gradeCalculator(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80 && grade < 90) {
    return "B";
  } else if (grade >= 70 && grade < 80) {
    return "C";
  } else if (grade >= 60 && grade < 70) {
    return "D";
  } else if (grade < 60) {
    return "F";
  }
}

console.log(gradeCalculator(92));
console.log(gradeCalculator(84));
console.log(gradeCalculator(70)); 
console.log(gradeCalculator(61)); 
console.log(gradeCalculator(43)); 