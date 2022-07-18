// CENSOR

// expected input: N/A
//   expected input: str1, str2
//   expected output: string
// expected output: function

// approach:
// function censor()
//   store paired arguments in an object
//   nested function(str1, str2)
//     if str2 exists
//       add property to object (str1 (key): str2 (value))
//     else if str2 is undefined
//       for each entry of object
//          str1 = str1 with all obj[key] replaced with obj[value]
//       return str1
//   return nested function

function censor() {
    let obj = {};
    function censored(str1, str2) {
        if (str2) {
            obj[str1] = [str2];
        } else if (!str2) {
            Object.entries(obj).forEach(el => {
                str1 = str1.replace(el[0], el[1]);
            })
            return str1;
        }
    }
    return censored;
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'