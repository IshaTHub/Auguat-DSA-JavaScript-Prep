/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    // Helper function to calculate the improvement in pass ratio
    // when adding one student to a class
    const calculateImprovement = (pass, total) => {
        return (pass + 1) / (total + 1) - pass / total;
    };
    
    // Create a max heap using array and manual heap operations
    // Each element is [improvement, pass, total]
    const heap = [];
    
    // Initialize heap with all classes
    for (let [pass, total] of classes) {
        const improvement = calculateImprovement(pass, total);
        heap.push([improvement, pass, total]);
    }
    
    // Build max heap
    const heapifyUp = (index) => {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (heap[index][0] <= heap[parentIndex][0]) break;
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
        }
    };
    
    const heapifyDown = (index) => {
        const length = heap.length;
        while (true) {
            let largest = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            
            if (leftChild < length && heap[leftChild][0] > heap[largest][0]) {
                largest = leftChild;
            }
            if (rightChild < length && heap[rightChild][0] > heap[largest][0]) {
                largest = rightChild;
            }
            
            if (largest === index) break;
            [heap[index], heap[largest]] = [heap[largest], heap[index]];
            index = largest;
        }
    };
    
    // Build initial heap
    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapifyDown(i);
    }
    
    
    for (let i = 0; i < extraStudents; i++) {
       
        const [currentImprovement, pass, total] = heap[0];
        
        
        const newPass = pass + 1;
        const newTotal = total + 1;
        const newImprovement = calculateImprovement(newPass, newTotal);
        
        
        heap[0] = [newImprovement, newPass, newTotal];
        
        
        heapifyDown(0);
    }
    
    
    let totalRatio = 0;
    for (let [improvement, pass, total] of heap) {
        totalRatio += pass / total;
    }
    
    return totalRatio / classes.length;
};
