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


var shipWithinDays = function (weights, days) {
 
  let start = Math.max(...weights);
  let end = weights.reduce((accumulator, current) => accumulator + current, 0);
  let ans = 0;
  while (start <= end) {
     let sum = 0;
    let daysInloop = 1;
    let mid = Math.floor((start + end) / 2);
    for (let i = 0; i < weights.length; i++) {
      if (sum + weights[i] > mid) {
        daysInloop++;
        sum = 0;
      }
      sum = sum + weights[i];
    }

    if (daysInloop <= days) {
      ans = mid;
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  
  return ans;
};
