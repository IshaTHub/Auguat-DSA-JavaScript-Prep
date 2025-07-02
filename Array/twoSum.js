// ==================
// PROBLEM 1: TWO SUM
// ==================

/*
Problem: Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

Example: nums = [2,7,11,15], target = 9
Output: [0,1] because nums[0] + nums[1] = 2 + 7 = 9
*/

// Solution 1: Brute Force - O(n²) time, O(1) space
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // No solution found
}

// Solution 2: Hash Map - O(n) time, O(n) space
function twoSum(nums, target) {
    let map = new Map(); // or use object: let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        // Check if complement exists in map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Store current number and its index
        map.set(nums[i], i);
    }
    
    return []; // No solution found
}

// Test Two Sum
console.log("\n=== TWO SUM TESTS ===");
console.log(twoSum([2, 7, 11, 15], 9));     // [0, 1]
console.log(twoSum([3, 2, 4], 6));          // [1, 2]
console.log(twoSum([3, 3], 6));             // [0, 1]