function rentalCarCost(d) {
  let base = d * 40;
  if (d >= 7) return base - 50;
  if (d >= 3) return base - 20;
  return base;
}