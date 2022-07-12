function greetings(hour) {
  if (hour >= 15) {
    return "Good Night!";
  } else if (hour < 15 && hour >= 12) {
    return "Good Afternoon!";
  } else if (hour < 12) {
    return "Good Morning!";
  }
} 

console.log(greetings(8)); 
console.log(greetings(12));
console.log(greetings(14));
console.log(greetings(15)); 
console.log(greetings(18));
