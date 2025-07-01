// JavaScript Program to reverse an array using temporary array
//   Time: O(n)
// Space: O(n) (extra array)

  function reverseArrayNaive(arr){
    let n = arr.length;
   let temp = [];
    for(let i = n-1; i>=0; i--){
        temp.push(arr[i]);
    }
    for(let i = 0; i<n-1; i++){
        arr[i] = temp[i];
    }
    return temp;
  }

  console.log("With Naive Approach: "+reverseArrayNaive([2,3,5,6,7]))


  //2. Expected Approach 1 – Two Pointers

  function reverseArrayTwoPointers(arr) {
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
  }

  console.log("With Two pointer approach: "+reverseArrayTwoPointers([2,3,5,6,7]));

//3.Using Inbuilt Method
// Time: O(n)
// Space: O(1) (in-place for most engines)

function reverseArrayInbuilt(arr) {
    return arr.reverse();
}

// mutates the original array
 console.log("With Inbuilt Method: "+reverseArrayInbuilt([2,3,5,7,2]));



