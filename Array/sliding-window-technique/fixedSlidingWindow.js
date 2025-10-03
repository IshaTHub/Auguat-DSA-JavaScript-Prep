function fixedSlidingWindow(arr, k){
    let windowSum = 0;
    for(let i = 0; i< k; i++){
        windowSum += arr[i];
    }

    let result = windowSum;

    for(let right = k ; right < arr.length ; right++){
        windowSum = windowSum - arr[right -k] + arr[right];
        result = Math.max(result, windowSum);
    }
    return result;  
}

let arr = [1,2,3,4,5,6,7,8,9];
let k = 3;
console.log(fixedSlidingWindow(arr, k)); // 24 (7+8+9)