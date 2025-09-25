
//two pointer technique
// Opposite direction and Sorted Array
// two sum, pair with target, palindrome, reverse
// O(n)

function twoPointerOpposite(arr, target){
    let start = 0;
    let end  = arr.length-1;
    while(start < end){
        const sum  = arr[start] + arr[end]
        if(sum === target){
            return [start,end];
        }
        else if(sum < target){
            start++;
        }
        else{
            end--;
        }
    }
}

