var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const result = [];
    
    for (const spell of spells) {
        const minPotion = Math.ceil(success / spell);
        
        
        let left = 0, right = m;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] >= minPotion) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        result.push(m - left);
    }
    
    return result;
};
