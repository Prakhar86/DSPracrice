var dailyTemperatures = function(temperatures) {
    let stack = [];
    let ansArr = [];
    for(let i=temperatures.length-1; i>=0;i--){

        while(stack.length && temperatures[i]>=temperatures[stack[stack.length-1]]) {
            stack.pop();
        }
        ansArr.push(stack.length == 0? 0: stack[stack.length-1]-i);
        stack.push(i)
    }
    return ansArr.reverse()
    
};
