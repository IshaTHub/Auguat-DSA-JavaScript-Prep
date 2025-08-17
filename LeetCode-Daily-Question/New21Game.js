/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if (k === 0 || n >= k - 1 + maxPts) return 1.0;
    
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1.0;
    let windowSum = 1.0, result = 0.0;
    
    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;
        
        if (i < k) {
            windowSum += dp[i];  // still can draw
        } else {
            result += dp[i];     // game ends
        }
        
        if (i - maxPts >= 0) {
            windowSum -= dp[i - maxPts];
        }
    }
    
    return result;
};


Start with dp[0] = 1.

Maintain windowSum = dp[0].

For each i = 1..n:

dp[i] = windowSum / maxPts

If i < k, add dp[i] into windowSum (since Alice can still draw).

If i - maxPts >= 0, remove dp[i - maxPts] from windowSum.
