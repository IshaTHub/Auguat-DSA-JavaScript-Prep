var numOfUnplacedFruits = function(fruits, baskets) {
    // Track which baskets are still available (not used)
    const available = new Array(baskets.length).fill(true);
    let unplacedCount = 0;
    
    // Process each fruit type from left to right
    for (let i = 0; i < fruits.length; i++) {
        const fruitQuantity = fruits[i];
        let placed = false;
        
        // Find the leftmost available basket with sufficient capacity
        for (let j = 0; j < baskets.length; j++) {
            if (available[j] && baskets[j] >= fruitQuantity) {
                // Place the fruit in this basket
                available[j] = false; // Mark basket as used
                placed = true;
                break;
            }
        }
        
        // If no suitable basket was found, increment unplaced count
        if (!placed) {
            unplacedCount++;
        }
    }
    
    return unplacedCount;
};
