function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let slow = 0; // Points to last unique element
    
    for (let fast = 1; fast < nums.length; fast++) {
        // If current element is different from last unique
        if (nums[fast] !== nums[slow]) {
            slow++; // Move to next position
            nums[slow] = nums[fast]; // Place unique element
        }
    }
    
    return slow + 1; // Length of unique elements
}