let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    if (salaries == {}) return null;
    let localTopSalary = 0;
    let HighestPaid = "";
    for (let person of Object.entries(salaries)) {
        if (person[1] > localTopSalary) {
            localTopSalary = person[1];
            HighestPaid = person[0];
        }
    }

    return HighestPaid;
}

console.log(topSalary(salaries));