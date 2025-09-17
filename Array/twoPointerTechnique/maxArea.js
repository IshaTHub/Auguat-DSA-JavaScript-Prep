function maxArea(height){
    let left  = 0;
    let right = height.length-1;
    let maxWater = 0;
    while(left < right){
        const width = right - left;
        const water = width * Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, water);

        if(height[left] < height[right] ){
            left++
        }
        else{
            right--;
        }

    }
    return maxWater;
}

let height = [2,3,4,5,8,6,4,5];




