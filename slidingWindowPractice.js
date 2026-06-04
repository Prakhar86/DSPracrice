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

var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    if (arraysEqual(count1, count2)) {
        return true;
    }

    for (let right = s1.length; right < s2.length; right++) {

        count2[s2.charCodeAt(right) - 97]++;

        count2[s2.charCodeAt(right - s1.length) - 97]--;

        if (arraysEqual(count1, count2)) {
            return true;
        }
    }

    return false;
};

function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
