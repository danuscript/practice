// expected input: numbers
// expected output: null, boolean

// approach: iteration 

// declare my constructor function "TwoSum"
var TwoSum = function() {
    // store variables within this function
    this.arr = [];
    this.obj = {};
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    // push the passed in argument into this.arr[]
    this.arr.push(number)
    // add the passed in argument to our object
    if (this.obj[number]) {
        this.obj[number]++;
    } else {
        this.obj[number] = 1;
    }
    
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {

    // iterate through this.arr
    searchloop:
    for (let i = 0; i < this.arr.length; i++) {
        
        // search set for complement (complement == target - currentElement)
        let comp = value - this.arr[i]
        
        // if target is 0 and the complement is zero
        if (this.arr[i] === comp) {
            
            // if there are multiple comps, return true, otherwise continue search
            if (this.obj[this.arr[i]] > 1) {
                return true;
            } else {
                continue searchloop;
            }
        }
        
        
        // if complement is found, return true
        if (this.obj[comp]) return true;
    }    
    // if no complements are found, return false
    return false;
    
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

// [3, 2, 1]
// target = 2
