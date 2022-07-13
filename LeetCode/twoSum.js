var twoSum = function(nums, target) {
    let localSum = 0;
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i + 1); j < nums.length; j++) {
            localSum = nums[i] + nums[j];
            if (localSum == target) {
                indices.push(i);
                indices.push(j);
                return indices;
            }
        }
    }
    
};


console.log(twoSum([2, 7, 9, 11], 9));