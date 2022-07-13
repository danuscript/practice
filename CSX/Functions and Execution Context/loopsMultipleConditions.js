function addingAllTheWeirdStuff(array1, array2) {
    let oddSum = 0;
    let evenSum = 0;
    let twentyCounter = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] % 2 != 0) {
            oddSum += array2[i];
        }
    }
    console.log(`The sum of odd numbers: ${oddSum}`)

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] % 2 == 0) {
            evenSum += array2[i];
        }
    }
    console.log(`The sum of even numbers: ${evenSum}`)

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] > 20) {
            twentyCounter += 1;
        }
    }
    console.log(`Amount of 20s: ${twentyCounter}`)

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < 10) {
            array1[i] += oddSum;
        } else if (array1[i] > 10) {
            array1[i] += evenSum;
        }
    }

    if (twentyCounter > 0) {
        for (let i = 0; i < array1.length; i++) {
            array1[i] += 1;
        }
    }

    return array1;
}


console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5]));
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22]));
