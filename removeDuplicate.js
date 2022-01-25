// Remove Duplicates from Sorted Array

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = 1
    for(let i=1; i< nums.length; i++) {
        if(nums[i] != nums[i-1]) {
            nums[result] = nums[i]
            result++
        }
    }
    return result
    
};
