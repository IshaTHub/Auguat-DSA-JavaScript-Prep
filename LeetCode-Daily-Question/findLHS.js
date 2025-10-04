/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map();

    // Count frequency of each number
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let longest = 0;

    // Check for harmonious pairs
    for (let [num, count] of map) {
        if (map.has(num + 1)) {
            longest = Math.max(longest, count + map.get(num + 1));
        }
    }

    return longest;
};
