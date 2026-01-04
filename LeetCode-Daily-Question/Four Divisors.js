var sumFourDivisors = function(nums) {
    let ans = 0;

    const isPrime = (n) => {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    for (let n of nums) {
        let count = 0;
        let sum = 0;

        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                let j = n / i;

                count++;
                sum += i;

                if (i !== j) {
                    count++;
                    sum += j;
                }

                if (count > 4) break;
            }
        }

        if (count === 4) {
            ans += sum;
        }
    }

    return ans;
};
