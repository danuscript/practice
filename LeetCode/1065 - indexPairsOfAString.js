// expected input: sentence, array of words
// expected output: array of arrays (pairs of indices)

// approach: iteration

// let arr = []
// for each el in words
//  iterate through sentence
//    if sentence[i] === el[0]
//      let fin = i + el.length
//      if sentence.slice(i, fin) === el
//      arr.push([i, fin])
// arr.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0])


function indexPairs(sentence, words) {
    let arr = []
    words.forEach((el) => {
        for (let i = 0; i < sentence.length; i++) {
            if (sentence[i] === el[0]) {
                let fin = i + el.length;
                if (sentence.slice(i, fin) === el) {
                    arr.push([i, fin - 1])
                }
            }
        }
    })
    arr.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0]);
    return arr;
}
