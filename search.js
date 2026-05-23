var search = function(nums, target) {
    // while start===end
    // if mid is less than start than mid is end and check for target is mid
    // else mid =start
    let start = 0;
    let end = nums.length - 1;
    while(start !== end){
      console.log(start, end);
      
        let mid = Math.floor((start + end)/ 2);
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[mid] < nums[start]) {
            end = mid;
        } else {
            start = mid;
        }
    }
    
};
