function droids(arr) {
  let result = '';

  result = "These are not the droids you're looking for."

  for (let word of arr) {
    if (word == "Droids") {
      result = "Found Droids!"
    }
  }

  return result;
}
 
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars))
console.log(droids(thrones))