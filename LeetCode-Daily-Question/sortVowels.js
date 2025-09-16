/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    // Collect vowels
    let vowelChars = [];
    for (let ch of s) {
        if (vowels.has(ch)) {
            vowelChars.push(ch);
        }
    }
    
    // Sort vowels by ASCII
    vowelChars.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    
    // Replace vowels in original string
    let result = [];
    let j = 0; // pointer for sorted vowels
    for (let ch of s) {
        if (vowels.has(ch)) {
            result.push(vowelChars[j++]);
        } else {
            result.push(ch);
        }
    }
    
    return result.join('');
};
