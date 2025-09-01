var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const present = new Set(nums);
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (!present.has(i)) {
            result.push(i);
        }
    }
    
    return result;
};
