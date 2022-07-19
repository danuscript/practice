var checkIfExist = function(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        comp = (arr[i] * 2)
        comp2 = (arr[i] / 2)
        if (obj.hasOwnProperty(comp) || obj.hasOwnProperty(comp2)) {
            return true; 
        } else {
            obj[arr[i]] = i;
        }
    
    }
    return false;
};
