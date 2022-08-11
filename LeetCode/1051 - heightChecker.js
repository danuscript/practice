// sort the input array
// iterate through both arrays and track mismatching values
// return total mismatches

var heightChecker = function(heights) {
    let sortArr = heights.slice().sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortArr[i]) count++;
    }
    return count;
};
