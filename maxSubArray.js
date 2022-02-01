// https://leetcode.com/problems/maximum-subarray/

//Kadanes Algorithm

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxEnd = 0
    let maxSoFar = Math.min(...nums)
    for(let i = 0; i < nums.length; i++) {
        maxEnd = maxEnd + nums[i]
        maxSoFar = Math.max(maxEnd,maxSoFar)
        if(maxEnd < 0) {
            maxEnd = 0
        }

    }
    return maxSoFar
    
};
