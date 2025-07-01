// JavaScript Program to reverse an array using temporary array

function reverseArrayNaive(arr) {
    let n = arr.length;
    let temp = [];
  
    // Fill temp array in reverse
    for (let i = n - 1; i >= 0; i--) {
      temp.push(arr[i]);
    }
  
    // Copy back to original array
    for (let i = 0; i < n; i++) {
      arr[i] = temp[i];
    }
  
    return arr;
  }
  

//   Time: O(n)
// Space: O(n) (extra array)