/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    //let sum = 0;
    //let arr = [];
    for(let i = 1; i < nums.length;i++){
        //sum = sum + nums[i];
        nums[i] = nums[i] + nums[i-1];
        //arr.push(sum);
    }
    return nums;
};
