var maxArea = function(height) {
 let left = 0;
 let right = height.length -1
 let ans = 0;
 while(left!=right) {
    ans = Math.max(Math.min(height[left],height[right])*(right-left), ans)
    if(height[left] < height[right]){
        left++
    }else {
        right--
    }
 }
 return ans;
};
