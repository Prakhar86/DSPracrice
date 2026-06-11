var minEatingSpeed = function (piles, h) {
  let start = 1;
  let end = Math.max(...piles);
    let ans = 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      
        let hour = 0;
        for (let i = 0; i < piles.length; i++) {
            hour = hour + Math.ceil(piles[i] / mid);
        }
        if(hour<=h) {
          ans=mid
          end = mid-1
        }
        if(hour>h){
          start = mid+1
        }
        
    }
    return ans;
};
