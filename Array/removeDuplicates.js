function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let slow = 0; // Points to last unique element
    
    for (let fast = 1; fast < nums.length; fast++) {

        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}

const arr1 = [1, 1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(arr1));
console.log(arr1);