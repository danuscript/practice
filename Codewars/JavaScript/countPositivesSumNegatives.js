function countPositivesSumNegatives(input) {
  let positives = 0;
  let negatives = 0;
  
  if (input == null) return [];
  if (input == []) return [];
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) positives += 1;
    if (input[i] < 0) negatives += input[i];
  }
  
  if (positives == 0 && negatives == 0) return [];
  return [positives, negatives]
}