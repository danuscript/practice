const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

for (let i = 0; i < 6; i++) {
  if (timesTenIfOverFive[i] >= 5) {
    timesTenIfOverFive[i] *= 10
  }
}

console.log(timesTenIfOverFive);