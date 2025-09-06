/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function(queries) {
  
  function getOperations(n) {
    let res = 0;
    let ops = 0;
    for (let powerOfFour = 1; powerOfFour <= n; powerOfFour *= 4) {
      const l = powerOfFour;
      const r = Math.min(n, powerOfFour * 4 - 1);
      ops++;
      res += (r - l + 1) * ops;
    }
    return res;
  }

  let ans = 0;
  for (const [l, r] of queries) {
    const totalOpsInRange = getOperations(r) - getOperations(l - 1);
    ans += Math.floor((totalOpsInRange + 1) / 2);
  }
  return ans;
};
