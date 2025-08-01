/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            // First and last element of each row is 1
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                // Inner elements are sum of two values above
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }

    return result;
};
