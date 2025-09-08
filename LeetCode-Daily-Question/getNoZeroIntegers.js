/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    // Helper function to check if number has no zero
    function isNoZero(num) {
        return !num.toString().includes("0");
    }

    for (let a = 1; a < n; a++) {
        let b = n - a;
        if (isNoZero(a) && isNoZero(b)) {
            return [a, b];
        }
    }
};
