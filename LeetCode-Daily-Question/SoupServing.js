/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    // Large n -> probability approaches 1 (optimization)
    if (n >= 4800) return 1.0;

    // Scale down to units of 25 mL
    const scale = Math.ceil(n / 25);

    // memo[a][b] = probability for state (a,b); -1 means not computed
    const memo = Array.from({ length: scale + 1 }, () => new Array(scale + 1).fill(-1));

    function dfs(a, b) {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1.0;
        if (b <= 0) return 0.0;
        if (memo[a][b] !== -1) return memo[a][b];

        const res =
            0.25 * (
                dfs(Math.max(0, a - 4), b) +
                dfs(Math.max(0, a - 3), Math.max(0, b - 1)) +
                dfs(Math.max(0, a - 2), Math.max(0, b - 2)) +
                dfs(Math.max(0, a - 1), Math.max(0, b - 3))
            );

        memo[a][b] = res;
        return res;
    }

    return dfs(scale, scale);
};
