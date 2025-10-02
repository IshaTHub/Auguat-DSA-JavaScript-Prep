var maxBottlesDrunk = function(numBottles, numExchange) {
    let drunk = 0;
    let empty = 0;
    
    while (numBottles > 0) {
        
        drunk += numBottles;
        empty += numBottles;
        numBottles = 0;

       
        if (empty >= numExchange) {
            empty -= numExchange;
            numBottles += 1;  
            numExchange += 1; 
        } else {
            break; 
        }
    }
    
    return drunk;
};
