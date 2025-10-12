var avoidFlood = function(rains) {
    const n = rains.length;
    const ans = Array(n).fill(1);
    const fullLakes = new Map(); // lake -> day it became full
    const dryDays = []; // indices where rains[i] == 0
    
    for (let i = 0; i < n; i++) {
        if (rains[i] > 0) {
            const lake = rains[i];
            ans[i] = -1;
            
            
            if (fullLakes.has(lake)) {
                const prevDay = fullLakes.get(lake);
                
                
                let foundDryDay = false;
                for (let j = 0; j < dryDays.length; j++) {
                    if (dryDays[j] > prevDay && dryDays[j] < i) {
                        ans[dryDays[j]] = lake;
                        dryDays.splice(j, 1); // Remove used dry day
                        foundDryDay = true;
                        break;
                    }
                }
                
                if (!foundDryDay) {
                    return []; // Flood is inevitable
                }
            }
            
            fullLakes.set(lake, i);
        } else {
            // Dry day - save it for later use
            dryDays.push(i);
        }
    }
    
    return ans;
};
