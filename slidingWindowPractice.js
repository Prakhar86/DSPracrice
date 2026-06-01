var findMaxAverage = function(nums, k) {
    let windowSum = 0;
    for(let i=0; i<k; i++){
        windowSum = windowSum + nums[i]
    }
    let maxSum = windowSum;
    for(let right = k; right< nums.length; right++) {
        windowSum = windowSum + nums[k];
        windowSum = windowSum - nums[right - k];
        maxSum = Math.max(windowSum, maxSum)
    }
    return maxSum/k;
};

 console.log(findMaxAverage([1,12,-5,-6,50,3], 4));


var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let ans = Number.MAX_VALUE;
    let left = 0;
    for(let i = left; i<nums.length; i++) {
        sum =  sum + nums[i];
        while(sum>=target) {
            ans = Math.min(ans, i-left+1);
            sum = sum - nums[left];
            left++;
        }
    }
    return ans === Number.MAX_VALUE? 0: ans;
    
    
};
