const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

for (let i = 0; i <= 2; i++) {
  let pushSyn = synonyms[i];
  greetings.push(`Have a ${pushSyn} day!`)
} 

for (let j = 0; j <=2; j++) {
  console.log(greetings[j])
}