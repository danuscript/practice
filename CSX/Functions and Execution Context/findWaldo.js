function findWaldo(obj) {
    for (let entry of Object.entries(obj)) {
        if (entry[0] == 'Waldo') return entry[1];
    }
    return "Where's Waldo?"
}

const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC))
console.log(findWaldo(supernatural))