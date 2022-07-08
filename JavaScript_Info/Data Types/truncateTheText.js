function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "..."
  }
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hey there!", 20));