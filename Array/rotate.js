var rotate = function(nums, k) {
    // Approach 1: Reverse Algorithm (Optimal - O(1) space, O(n) time)
    const n = nums.length;
    k = k % n; // Handle k > n
    
    if (k === 0) return; // No rotation needed
    
    // Helper function to reverse array between indices
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };
    
    // Step 1: Reverse entire array
    reverse(0, n - 1);
    
    // Step 2: Reverse first k elements
    reverse(0, k - 1);
    
    // Step 3: Reverse remaining elements
    reverse(k, n - 1);
};
