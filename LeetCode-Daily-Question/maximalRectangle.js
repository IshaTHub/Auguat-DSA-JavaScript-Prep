const maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  const m = matrix.length, n = matrix[0].length;
  const arr = Array(n).fill(0);
  let max = 0;
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      arr[j] = matrix[i][j] == "1" ? arr[j] + 1 : 0;
    }
    max = Math.max(max, findMax(arr));
  }
  return max;
};

function findMax(heights) {
  const stk = [];
  let ans = 0, i = 0;
  heights.push(0);
  while (i < heights.length) {
    if (!stk.length || heights[i] >= heights[stk[stk.length - 1]]) {
      stk.push(i);
      i += 1;
    } else {
      const t = stk.pop();
      const width = !stk.length ? i : (i - stk[stk.length - 1] - 1);
      ans = Math.max(ans, heights[t] * width);
    }
  }
  return ans;
}
