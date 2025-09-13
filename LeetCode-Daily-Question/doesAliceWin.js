/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let ch of s) {
        if (vowels.has(ch)) {
            return true; 
        }
    }
    return false; 
};
