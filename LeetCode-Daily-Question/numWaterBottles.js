/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let totalDrunk = numBottles;
    
    let emptyBottles = numBottles;
    
    while (emptyBottles >= numExchange) {
      
        let newBottles = Math.floor(emptyBottles / numExchange);
        
        totalDrunk += newBottles;
      
        emptyBottles = emptyBottles % numExchange + newBottles;
    }
    
    return totalDrunk;
};