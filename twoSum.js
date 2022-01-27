// Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {}
    let result = []
    for(let i=0; i < nums.length; i++) {
        hashMap[nums[i]] = i
    }
    
    for(let i=0; i<nums.length; i++) {
        let element = target-nums[i]
        if(hashMap.hasOwnProperty(element) && i!=hashMap[element]) {
            result.push(i)
            result.push(hashMap[element])
            return result
        }
    }
    
};
