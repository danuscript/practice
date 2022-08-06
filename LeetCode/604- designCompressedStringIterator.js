// expected input: array of of arguments, output array
// output: output array

// approach: iteration

// iterate through array of arguments, passing in each element as an argument into string iterator

// push the evaluated result of invoking the callback methods into the output array

/**
 * @param {string} compressedString
 */
// declare a new function "StringIterator"
var StringIterator = function(compressedString) {
    // instantiate a while loop
    // declare a counter variable, [i]
    this.i = -1;
    
    this.compressedString = compressedString;
    
    // declare a compression counter
    this.comp = 0;
    
    // declare a substring
    this.substr = ""
    
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
    const nums = /\d/gm
    // get the decompression level
    let local = ""
    
    // if there is no more compression here, but there are more characters
    if (this.comp == 0 && this.i < this.compressedString.length) {
        
    // move i forward the number of spaces equalling the previous substring
        
        
        this.i += this.substr.length + 1;
        
        // reset substr
        this.substr = ""
    
    // begin iterating through the string
    compCheck:
    for (let j = this.i + 1; j < this.compressedString.length; j++) {
        
        // if the next character is a number, 
        if (this.compressedString[j].match(nums)) {
            
            // concatenate it with local
            local = local.concat(this.compressedString[j])
        
        // if the next character is not a number
        } else {
            
            
            
            // break thedecompression check
            break compCheck;
        }
        // assign the local substring to be the new value of comp
            this.comp = +local;
            
            // assign the local substring to be the new value of subStr
            this.substr = local;
    }
    }
    
    // if there are more characters
    if (this.i < this.compressedString.length) {
        
        // decrement the comp
        this.comp--;
            
        // return the current character
        return this.compressedString[this.i]
        
        
    // else if there are no more characters
    } else {
        
        // return a white space
        return " "
    }
};


/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
    
    // define numbers
    const nums = /\d/gm
    const nonNums = /[^\d]/gm
    
    // if there are non-number characters remaining in the string or we haven't started
    console.log(this.compressedString.slice(this.i + 1))
    if (this.compressedString.slice(this.i + 1).match(nonNums) || this.i < 0) {
        
        // return true
        return true
        
    // otherwise if there are no characters after i
    } else if (!this.compressedString.slice(this.i + 1).match(nonNums)) {
        
        // if comp is zero
        if (this.comp == 0) {
            // return false
        return false
        } else {
            // return true
            return true
        }
        
    }

};

/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
