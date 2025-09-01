var containsDuplicate = function(nums) {
    const count = new Map();
    
    for (let num of nums) {
        if (count.has(num)) {
            return true;
        }
        count.set(num, 1);
    }
    
    return false;
};
