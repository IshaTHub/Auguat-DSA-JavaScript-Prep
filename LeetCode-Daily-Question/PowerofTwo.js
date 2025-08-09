var isPowerOfTwo = function(n) {
    if (n <= 0) return false; // must be positive
    return (n & (n - 1)) === 0;
};


console.log(isPowerOfTwo(1));  // true  (2^0)
console.log(isPowerOfTwo(16)); // true  (2^4)
console.log(isPowerOfTwo(3));  // false
