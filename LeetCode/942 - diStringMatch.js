/**
 * @param {string} s
 * @return {number[]}
 */

// expected input: string
// expected output: array

/* Input: s = "IDID"
Output:  */

// approach: 
// get the length of the array
// length = 4; (length property of string + 1)
// array elements = range of numbers from 0 to 4



// iterating from left to right


// [0, 4, 1, 3, 2]
// [ , , , , ]
// [ , , , , ]

 
// declare a function diStringMatch that accepts a string
var diStringMatch = function(s) {
    
    // declare an output array
    let arr = [];
    
    // assign lowest number to variable, smallest = 0
    let smallest = 0;
    
    // assign largest number to largest = str.length
    let largest = s.length;
    
    // use a for loop to iterate through string characters
    for (let i = 0; i < s.length; i++) {
        
        // if the character is an I
        if (s[i] === "I") {
            // place the next smallest number
            arr.push(smallest)
            // when smallest is placed, increment it
            smallest++;
        }
        
        // if the character is a D
        if (s[i] === "D") {
            
            // place the next biggest number
            arr.push(largest)
            
            // when biggest is placed, decrement it
            largest--;
        }
    
        // if this is the final character
        if (i == s.length - 1) {
            
            // if character is D, place the smaller number
            if (s[i] === "D") {
                arr.push(smallest)
                
                // return array
                return arr;
                
            // if character is I, place the bigger number
            } else if (s[i] === "I") {
                arr.push(largest)
                
                // return array
                return arr;
            }            
        }
    
    }
    
};
