var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;  
    
    let share = 0;
    
    for (let day = 2; day <= n; day++) {
        // People start sharing after 'delay' days
        if (day - delay >= 1) {
            share = (share + dp[day - delay]) % MOD;
        }
       
        if (day - forget >= 1) {
            share = (share - dp[day - forget] + MOD) % MOD;
        }
       
        dp[day] = share;
    }
    
    
    let ans = 0;
    for (let day = n - forget + 1; day <= n; day++) {
        if (day >= 1) {
            ans = (ans + dp[day]) % MOD;
        }
    }
    return ans;
};
