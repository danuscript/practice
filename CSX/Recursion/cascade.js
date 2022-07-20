// CASCADE 

// expected input: string
// expected output: console.log strings

// approach:
// track a counter starting with string.length
// base case: counter = 0



function cascade(str, counter = str.toString().length, arr = []) {
    if (counter == 0) {
        arr.reduce((a, b) => {
            a = a + b;
            console.log(a)
            return a;
        })
    } else {
        console.log(str.toString().slice(0, counter))
        arr.unshift(str.toString()[counter - 1])
        return cascade(str, counter - 1, arr);
    }
}

cascade(12345)