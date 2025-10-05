/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    function dfs(r, c, visited, prevHeight) {
        // Out of bounds or cannot flow
        if (
            r < 0 || c < 0 || r >= m || c >= n ||
            visited[r][c] ||
            heights[r][c] < prevHeight
        ) return;

        visited[r][c] = true;

        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc, visited, heights[r][c]);
        }
    }

    // Pacific borders
    for (let i = 0; i < m; i++) dfs(i, 0, pacific, heights[i][0]);
    for (let j = 0; j < n; j++) dfs(0, j, pacific, heights[0][j]);

    // Atlantic borders
    for (let i = 0; i < m; i++) dfs(i, n - 1, atlantic, heights[i][n - 1]);
    for (let j = 0; j < n; j++) dfs(m - 1, j, atlantic, heights[m - 1][j]);

    // Collect result
    const result = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
};
