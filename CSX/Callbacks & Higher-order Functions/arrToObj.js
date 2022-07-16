//ARRTOOBJ

//expected input: array, callback
//expeccted output: object
//result: for each element in array, push a property into object with
    //element as the key: callback(element) as the value
    //return object

function arrToObj(array, callback) {
    let obj = {};
    array.forEach(el => {
        obj[el] = callback(el);
    })
        return obj;
}