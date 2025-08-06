class SegmentTree {
    constructor(nums) {
        this.nums = nums;
        this.n = nums.length;
        this.tr = new Array(this.n * 4).fill(0);
        this.build(1, 1, this.n);
    }

    build(u, l, r) {
        if (l === r) {
            this.tr[u] = this.nums[l - 1]; // 1-based segment tree
            return;
        }
        const mid = (l + r) >> 1;
        this.build(u * 2, l, mid);
        this.build(u * 2 + 1, mid + 1, r);
        this.pushup(u);
    }

    modify(u, l, r, i, v) {
        if (l === r) {
            this.tr[u] = v;
            return;
        }
        const mid = (l + r) >> 1;
        if (i <= mid) {
            this.modify(u * 2, l, mid, i, v);
        } else {
            this.modify(u * 2 + 1, mid + 1, r, i, v);
        }
        this.pushup(u);
    }

    query(u, l, r, v) {
        if (this.tr[u] < v) return -1;
        if (l === r) return l;

        const mid = (l + r) >> 1;
        if (this.tr[u * 2] >= v) {
            return this.query(u * 2, l, mid, v);
        }
        return this.query(u * 2 + 1, mid + 1, r, v);
    }

    pushup(u) {
        this.tr[u] = Math.max(this.tr[u * 2], this.tr[u * 2 + 1]);
    }
}

function numOfUnplacedFruits(fruits, baskets) {
    const n = baskets.length;
    const tree = new SegmentTree(baskets);
    let ans = 0;

    for (const fruit of fruits) {
        const i = tree.query(1, 1, n, fruit);
        if (i === -1) {
            ans++;
        } else {
            tree.modify(1, 1, n, i, 0); // Mark basket as used
        }
    }

    return ans;
}
