function twoPointerSameDirection(arr, condition){
    let left = 0;
    let result = [];

    for(let right = 0; right< arr.length; right++){
         // Expand window by including arr[right]

         while (/* window violates condition */) {
            // Shrink window from left
            left++;
        }
        // Process valid window [left, right]
        result.push(/* current window result */);
    }
    
    return result;
}