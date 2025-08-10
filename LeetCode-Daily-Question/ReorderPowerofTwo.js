/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const sorted = s => s.split('').sort().join('');
    
    const target = sorted(String(n));
    const set = new Set();
    
    // generate powers of two up to 2^30
    for (let i = 0; i <= 30; i++) {
        set.add(sorted(String(1 << i))); // 1<<i is 2^i for i<=30
    }
    
    return set.has(target);
};
