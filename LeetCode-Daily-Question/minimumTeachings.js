/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    
    const userLang = new Map();
    for (let i = 0; i < languages.length; i++) {
        userLang.set(i + 1, new Set(languages[i])); 
    }

    
    const problematic = new Set();
    for (const [u, v] of friendships) {
        const langsU = userLang.get(u);
        const langsV = userLang.get(v);
        let canCommunicate = false;
        for (let lang of langsU) {
            if (langsV.has(lang)) {
                canCommunicate = true;
                break;
            }
        }
        if (!canCommunicate) {
            problematic.add(u);
            problematic.add(v);
        }
    }

    
    if (problematic.size === 0) return 0;

    
    const counts = new Array(n + 1).fill(0);
    for (let user of problematic) {
        for (let lang of userLang.get(user)) {
            counts[lang]++;
        }
    }

   
    let maxKnown = 0;
    for (let lang = 1; lang <= n; lang++) {
        maxKnown = Math.max(maxKnown, counts[lang]);
    }

    return problematic.size - maxKnown;
};
