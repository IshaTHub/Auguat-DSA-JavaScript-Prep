2561. Rearranging Fruits

var minCost = function(basket1, basket2) {
    const freq = new Map();
    const count1 = new Map();
    const count2 = new Map();
    
    for (let fruit of basket1) {
        freq.set(fruit, (freq.get(fruit) || 0) + 1);
        count1.set(fruit, (count1.get(fruit) || 0) + 1);
    }
    for (let fruit of basket2) {
        freq.set(fruit, (freq.get(fruit) || 0) + 1);
        count2.set(fruit, (count2.get(fruit) || 0) + 1);
    }

    // Check if making them equal is possible
    for (let [fruit, total] of freq.entries()) {
        if (total % 2 !== 0) return -1;
    }

    const toSwap = [];

    for (let [fruit, total] of freq.entries()) {
        let need = total / 2;
        let in1 = count1.get(fruit) || 0;
        let in2 = count2.get(fruit) || 0;

        if (in1 > need) {
            for (let i = 0; i < in1 - need; i++) {
                toSwap.push(fruit);
            }
        } else if (in2 > need) {
            for (let i = 0; i < in2 - need; i++) {
                toSwap.push(fruit);
            }
        }
    }

    toSwap.sort((a, b) => a - b);
    const minAll = Math.min(...basket1.concat(basket2));
    let cost = 0;

    for (let i = 0; i < toSwap.length / 2; i++) {
        cost += Math.min(toSwap[i], 2 * minAll);
    }

    return cost;
};



