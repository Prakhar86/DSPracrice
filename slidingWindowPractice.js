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
